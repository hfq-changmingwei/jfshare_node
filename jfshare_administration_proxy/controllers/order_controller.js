/**
 * Created by zhaoshenghai on 16/3/21.
 */

var express = require('express');
var router = express.Router();
var async = require('async');

var log4node = require('../log4node');
var logger = log4node.configlog4node.useLog4js(log4node.configlog4node.log4jsConfig);

var Product = require('../lib/models/product');
var Util = require('../lib/models/util');
var afterSale = require('../lib/models/afterSale');

// 查询订单列表
router.post('/list', function (request, response, next) {

    //var result = {
    //    "code": 200,
    //    "orderList": [
    //
    //        {
    //            "orderId": "5660005",
    //            "orderPrice": "1.00",
    //            "orderState": 51,
    //            "sellerId": 3,
    //            "sellerName": "聚分享旗舰店3",
    //            "createTime": "2016-01-04 18:43:46",
    //            "deliverTime": "",
    //            "successTime": "",
    //            "type": 3,
    //            "productList": [
    //                {
    //                    "productId": "ze160216170722000745",
    //                    "productName": "博纳2D通兑票",
    //                    "skuNum": "1-16",
    //                    "skuName": "节假日通用",
    //                    "count": 2,
    //                    "curPrice": "100",
    //                    "imgUrl": "BBBC6302C54E93780C23DBCECB4F651B.jpg"
    //                }
    //            ]
    //        },
    //        {
    //            "orderId": "5660005",
    //            "orderPrice": "1.00",
    //            "orderState": 40,
    //            "sellerId": 3,
    //            "sellerName": "聚分享旗舰店3",
    //            "createTime": "2016-01-04 18:43:46",
    //            "deliverTime": "",
    //            "successTime": "",
    //            "type": 3,
    //            "productList": [
    //                {
    //                    "productId": "ze160216170722000745",
    //                    "productName": "高压锅",
    //                    "skuNum": "1-16",
    //                    "skuName": "节假日通用",
    //                    "count": 2,
    //                    "curPrice": "100",
    //                    "imgUrl": "BBBC6302C54E93780C23DBCECB4F651B.jpg"
    //                }
    //            ]
    //        },
    //        {
    //            "orderId": "5640002",
    //            "orderPrice": "0.01",
    //            "postage": null,
    //            "orderState": 10,
    //            "sellerId": 1,
    //            "sellerName": "聚分享旗舰店",
    //            "createTime": "2016-01-04 00:15:59",
    //            "deliverTime": "",
    //            "successTime": "",
    //            "type": 2,
    //            "productList": [
    //                {
    //                    "productId": "ze151228152841000732",
    //                    "productName": "现代 空气净化器 HDJH-5501",
    //                    "skuNum": "1-7:100-104",
    //                    "skuName": "颜色-贝立安:尺码-S",
    //                    "curPrice": "0.01",
    //                    "imgUrl": "9258E4A9FC083140D36383B2A5426A5C.jpg",
    //                    "count": 1
    //                }
    //            ]
    //        },
    //        {
    //            "orderId": "5660004",
    //            "orderPrice": "1.00",
    //            "orderState": 10,
    //            "sellerId": 1,
    //            "sellerName": "聚分享旗舰店1",
    //            "createTime": "2016-01-04 18:43:46",
    //            "deliverTime": "",
    //            "successTime": "",
    //            "type": 3,
    //            "productList": [
    //                {
    //                    "productId": "ze160216170722000745",
    //                    "productName": "博纳2D通兑票",
    //                    "skuNum": "1-16",
    //                    "skuName": "节假日通用",
    //                    "count": 2,
    //                    "curPrice": "100",
    //                    "imgUrl": "BBBC6302C54E93780C23DBCECB4F651B.jpg"
    //                }
    //            ]
    //        },
    //        {
    //            "orderId": "5660004",
    //            "orderPrice": "1.00",
    //            "orderState": 61,
    //            "sellerId": 2,
    //            "sellerName": "聚分享旗舰店2",
    //            "createTime": "2016-01-04 18:43:46",
    //            "deliverTime": "",
    //            "successTime": "",
    //            "type": 3,
    //            "productList": [
    //                {
    //                    "productId": "ze160216170722000745",
    //                    "productName": "博纳2D通兑票",
    //                    "skuNum": "1-16",
    //                    "skuName": "节假日通用",
    //                    "count": 2,
    //                    "curPrice": "100",
    //                    "imgUrl": "BBBC6302C54E93780C23DBCECB4F651B.jpg"
    //                }
    //            ]
    //        },
    //        {
    //            "orderId": "5660005",
    //            "orderPrice": "1.00",
    //            "orderState": 51,
    //            "sellerId": 3,
    //            "sellerName": "聚分享旗舰店3",
    //            "createTime": "2016-01-04 18:43:46",
    //            "deliverTime": "",
    //            "successTime": "",
    //            "type": 3,
    //            "productList": [
    //                {
    //                    "productId": "ze160216170722000745",
    //                    "productName": "博纳2D通兑票",
    //                    "skuNum": "1-16",
    //                    "skuName": "节假日通用",
    //                    "count": 2,
    //                    "curPrice": "100",
    //                    "imgUrl": "BBBC6302C54E93780C23DBCECB4F651B.jpg"
    //                }
    //            ]
    //        },
    //        {
    //            "orderId": "5660005",
    //            "orderPrice": "1.00",
    //            "orderState": 40,
    //            "sellerId": 3,
    //            "sellerName": "聚分享旗舰店3",
    //            "createTime": "2016-01-04 18:43:46",
    //            "deliverTime": "",
    //            "successTime": "",
    //            "type": 3,
    //            "productList": [
    //                {
    //                    "productId": "ze160216170722000745",
    //                    "productName": "高压锅",
    //                    "skuNum": "1-16",
    //                    "skuName": "节假日通用",
    //                    "count": 2,
    //                    "curPrice": "100",
    //                    "imgUrl": "BBBC6302C54E93780C23DBCECB4F651B.jpg"
    //                }
    //            ]
    //        },
    //        {
    //            "orderId": "5610002",
    //            "orderPrice": "0.02",
    //            "postage": null,
    //            "orderState": 10,
    //            "sellerId": 1,
    //            "sellerName": "聚分享旗舰店",
    //            "createTime": "2015-12-31 15:06:06",
    //            "deliverTime": "",
    //            "successTime": "",
    //            "type": 2,
    //            "productList": [
    //                {
    //                    "productId": "ze151228152841000732",
    //                    "productName": "现代 空气净化器 HDJH-5501",
    //                    "skuNum": "1-7:100-105",
    //                    "skuName": "颜色-贝立安:尺码-M",
    //                    "curPrice": "0.02",
    //                    "imgUrl": "9258E4A9FC083140D36383B2A5426A5C.jpg",
    //                    "count": 1
    //                }
    //            ]
    //        },
    //
    //
    //    ],
    //    "curTime": 1462604929959,
    //    "page": {
    //        "total": 56,
    //        "pageCount": 3
    //    }
    //};
    //response.json(result);

    var result = {code: 200};


    var params = request.body;
    logger.info("查询订单列表请求参数：" + JSON.stringify(params));


    if (params.userId == null || params.userId == "" || params.userId <= 0) {
        result.code = 400;
        result.desc = "参数错误";
        response.json(result);
        return;
    }

    if (params.percount == null || params.percount == "" || params.percount <= 0) {
        result.code = 400;
        result.desc = "参数错误";
        response.json(result);
        return;
    }

    if (params.curpage == null || params.curpage == "" || params.curpage <= 0) {
        result.code = 400;
        result.desc = "参数错误";
        response.json(result);
        return;
    }

    var afterSaleList = [];
    async.series([
            function (callback) {
                try {
                    Product.orderProfileQuery(params, function (err, orderInfo) {
                        if (err) {
                            logger.error("订单服务异常");
                            return callback(1, null);
                        }
                        var page = {total: orderInfo.total, pageCount: orderInfo.pageCount};
                        var orderList = [];
                        if (orderInfo.orderProfileList !== null) {
                            orderInfo.orderProfileList.forEach(function (order) {
                                var orderItem = {
                                    orderId: order.orderId,
                                    orderPrice: order.closingPrice,
                                    //添加了应答的数据
                                    postage: order.postage,
                                    username: order.username,
                                    cancelName: order.cancelName,
                                    sellerName: order.sellerName,
                                    createTime: order.createTime,
                                    expressNo: order.expressNo,
                                    expressName: order.expressName,
                                    receiverAddress: order.receiverAddress,
                                    receiverName: order.receiverName,
                                    receiverMobile: order.receiverMobile,
                                    receiverTele: order.receiverTele,
                                    orderState: order.orderState,
                                    sellerComment: order.sellerComment,
                                    buyerComment: order.buyerComment,
                                    deliverTime: order.deliverTime,
                                    successTime: order.successTime,
                                    exchangeCash: order.exchangeCash,
                                    exchangeScore: order.exchangeScore,
                                    activeState: order.activeState,
                                    curTime: order.curTime
                                };
                                var productList = [];
                                if (order.productList !== null && order.productList.length > 0) {
                                    for (var i = 0; i < order.productList.length; i++) {
                                        var productItem = {
                                            productId: order.productList[i].productId,
                                            productName: order.productList[i].productName,
                                            skunum: order.productList[i].skuNum,
                                            curPrice: order.productList[i].curPrice,
                                            imgUrl: order.productList[i].imagesUrl.split(',')[0],
                                            count: order.productList[i].count
                                        };
                                        productList.push(productItem);
                                    }
                                    orderItem.productList = productList;
                                    orderList.push(orderItem);
                                }
                            });
                            result.orderList = orderList;
                            result.page = page;
                        }
                        logger.info("get order list response:" + JSON.stringify(result));
                        return callback(null, result);
                    });

                } catch (ex) {
                    logger.info("订单服务异常:" + ex);
                    return callback(1, null);
                }
            },
            function (callback) {
                try {
                    if (params.orderState == null || params.orderState == 1) {
                        afterSale.queryAfterSale(params, function (err, data) {
                            if (err) {
                                return callback(2, null);
                            }
                            logger.info("get order list response:" + JSON.stringify(result));
                            afterSaleList = data;
                            return callback(null, afterSaleList);
                        });
                    } else {
                        return callback(3, null);
                    }
                } catch (ex) {
                    logger.info("售后服务异常:" + ex);
                    return callback(2, null);
                }

            }
        ],
        function (err, results) {
            if (err == 1) {
                logger.error("查询订单列表失败---订单服务异常：" + err);
                result.code = 500;
                result.desc = "查询订单失败";
                response.json(result);
                return;
            }
            if (err == 2) {
                logger.error("查询售后失败--售后服务异常：" + err);
                response.json(results[0]);
                return;
            }

            if (err == null && err != 3) {
                logger.info("shuju------------->" + JSON.stringify(results));
                result = results[0];
                result.afterSaleList = results[1];
                response.json(result);
                return;
            } else {
                logger.info("shuju------------->" + JSON.stringify(results));
                result = results[0];

                response.json(result);
                return;
            }
        });
});
// 查询订单详情
router.get('/info', function (req, res, next) {
    var result = {code: 200};
    try {
        var arg = req.query;

        //var arg = req.body;

        logger.info("查询订单祥情请求参数：" + JSON.stringify(arg));

        var params = {};
        params.userId = arg.sellerId || null;
        params.orderId = arg.orderId || null;
        params.userType = 2; // 1:买家 2：卖家 3：系统

        Product.queryOrderDetail(params, function (err, orderInfo) {
            if (err) {
                res.json(err);
                return;
            }
            if (orderInfo == null) {
                result.code = 404;
                result.desc = "未找到订单";
                res.json(result);
                return;
            }
            result.orderid = orderInfo.orderId;
            result.orderstatus = Product.getOrderStateBuyerEnum(orderInfo.orderState);
            if (orderInfo.deliverInfo !== null) {
                result.deliverInfo = orderInfo.deliverInfo;

            }
            result.createTime = orderInfo.deliverTime;
            result.comment = orderInfo.buyerComment;
            var productList = [];
            if (orderInfo.productList !== null && orderInfo.productList.length > 0) {
                for (var i = 0; i < orderInfo.productList.length; i++) {
                    productList.push({
                        productId: orderInfo.productList[i].productId,
                        productName: orderInfo.productList[i].productName,
                        skunum: {skuNum: orderInfo.productList[i].skuNum, skuDesc: orderInfo.productList[i].skuDesc},
                        curPrice: orderInfo.productList[i].curPrice,
                        orgPrice: orderInfo.productList[i].orgPrice,
                        imgUrl: orderInfo.productList[i].imagesUrl,
                        count: orderInfo.productList[i].count,
                        postage: orderInfo.postage,
                        exchangeScore: orderInfo.exchangeScore,
                        closingPrice: orderInfo.closingPrice
                    });
                }
                result.productList = productList;
            }
            res.json(result);
            logger.info("get order info response:" + JSON.stringify(result));
        });
    } catch (ex) {
        logger.error("查询订单详情失败：" + ex);
        result.code = 500;
        result.desc = "查询订单详情失败";
        res.json(result);
    }
});

// 查询订单状态个数
router.post('/queryOrder', function (req, res, next) {
    var result = {code: 200};
    try {
        //var arg = req.query;

        var arg = req.body;

        logger.info("查询订单祥情请求参数：" + JSON.stringify(arg));

        var params = {};

        var OrderCount = {orderState: 30, count: 20};

        var OrderCount1 = {orderState: 20, count: 6};

        var orderCountList = [];
        orderCountList.push(OrderCount1);
        orderCountList.push(OrderCount);
        result.orderCountList = orderCountList;
        res.json(result);

    } catch (ex) {
        logger.error("查询订单详情失败：" + ex);
        result.code = 500;
        result.desc = "查询订单详情失败";
        res.json(result);
    }
});

//获取物流信息
router.post('/queryexpress', function (request, response, next) {
    logger.info("进入获取物流信息流程");
    var result = {code: 200};

    try {
        //var params = request.query;
        var params = request.body;

        if (params.orderId == null || params.orderId == "") {

            result.code = 500;
            result.desc = "参数错误";
            response.json(result);
            return;
        }

        var expressInfo = [{
            "time": "2016-02-22 13:37:26",
            "ftime": "2016-02-22 13:37:26",
            "context": "快件已签收,签收人是草签，签收网点是北京市朝阳安华桥"
        }, {
            "time": "2016-02-22 07:51:50",
            "ftime": "2016-02-22 07:51:50",
            "context": "北京市朝阳安华桥的牛鹏超18518350628正在派件"
        }, {
            "time": "2016-02-22 07:02:10",
            "ftime": "2016-02-22 07:02:10",
            "context": "快件到达北京市朝阳安华桥，上一站是北京集散，扫描员是张彪18519292322"
        }, {
            "time": "2016-02-22 01:40:35",
            "ftime": "2016-02-22 01:40:35",
            "context": "快件由北京集散发往北京市朝阳安华桥"
        }, {
            "time": "2016-02-20 22:42:14",
            "ftime": "2016-02-20 22:42:14",
            "context": "快件由温州分拨中心发往北京集散"
        }, {
            "time": "2016-02-20 19:56:29",
            "ftime": "2016-02-20 19:56:29",
            "context": "快件由苍南(0577-59905999)发往温州分拨中心"
        }, {
            "time": "2016-02-20 19:50:09",
            "ftime": "2016-02-20 19:50:09",
            "context": "快件由苍南(0577-59905999)发往北京(010-53703166转8039或8010)"
        }, {
            "time": "2016-02-20 19:50:08",
            "ftime": "2016-02-20 19:50:08",
            "context": "苍南(0577-59905999)已进行装袋扫描"
        }, {
            "time": "2016-02-20 19:46:22",
            "ftime": "2016-02-20 19:46:22",
            "context": "苍南(0577-59905999)的龙港公司已收件，扫描员是龙港公司"
        }];

        result.id = 100001;
        result.name = "顺丰";
        result.traceJson = expressInfo;
        result.remark = "";

        logger.info("query expressOrder params:" + JSON.stringify(params));

        response.json(result);

    } catch (ex) {


        response.json(result);
    }
});
//取消订单
router.get('/cancelOrder', function (request, response, next) {
    logger.info("进入取消订单流程");
    var result = {code: 200};

    try {
        var params = request.query;
        //var params = request.body;

        if (params.orderId == null || params.orderId == "") {

            result.code = 500;
            result.desc = "参数错误";
            response.json(result);
            return;
        }

        if (params.account == null || params.account == "") {
            result.code = 500;
            result.desc = "参数错误";
            response.json(result);
            return;
        }

        response.json(result);

    } catch (ex) {


        response.json(result);
    }
});

//获取审核信息
router.post('/toReview', function (request, response, next) {
    logger.info("进入获取审核信息");
    var result = {code: 200};

    try {
        // var params = request.query;
        var params = request.body;

        if (params.orderId == null || params.orderId == "") {

            result.code = 500;
            result.desc = "参数错误";
            response.json(result);
            return;
        }

        if (params.productId == null || params.productId == "") {
            result.code = 500;
            result.desc = "参数错误";
            response.json(result);
            return;
        }
        if (params.skuId == null || params.skuId == "") {
            result.code = 500;
            result.desc = "参数错误";
            response.json(result);
            return;
        }

        result.createTime = "2015-06-07 17:20:22"; //退货申请的时间
        result.account = "我不想买了"; //订单取消原因
        result.remark = "买错型号了,取消了吧";


        response.json(result);

    } catch (ex) {


        response.json(result);
    }
});

//获取审核信息
router.get('/review', function (request, response, next) {
    logger.info("进入获取审核信息");
    var result = {code: 200};

    try {
        //var params = request.query;
        var params = request.body;

        if (params.orderId == null || params.orderId == "") {

            result.code = 500;
            result.desc = "参数错误";
            response.json(result);
            return;
        }

        if (params.productId == null || params.productId == "") {
            result.code = 500;
            result.desc = "参数错误";
            response.json(result);
            return;
        }
        if (params.skuId == null || params.skuId == "") {
            result.code = 500;
            result.desc = "参数错误";
            response.json(result);
            return;
        }
        if (params.reviewResult == null || params.reviewResult == "") {
            result.code = 500;
            result.desc = "参数错误";
            response.json(result);
            return;
        }


        response.json(result);

    } catch (ex) {


        response.json(result);
    }
});

module.exports = router;