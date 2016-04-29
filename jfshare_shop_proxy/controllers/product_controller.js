/**
 * Created by zhaoshenghai on 16/3/21.
 */

var express = require('express');
var router = express.Router();
var async = require('async');

var log4node = require('../log4node');
var logger = log4node.configlog4node.useLog4js( log4node.configlog4node.log4jsConfig);

var Product = require('../lib/models/product');
var detailStock = require('../lib/models/detail_stock');

//查询商品列表
router.post('/list', function(req, res, next) {
    logger.info("进入获取商品列表接口");
    var resContent = {code:200};

    try{
        var arg = req.body;
        //var arg = req.query;
        logger.info("get product list args:" + JSON.stringify(arg));

        var percount = arg.percount || 20;
        var curpage = arg.curpage || 1;

        //增加两个查询条件
        var subjectId = arg.subjectId;
        var sellerId = arg.sellerId;
/*
        Product.queryProductList({percount:percount, curpage:curpage, subjectId:subjectId, sellerId:sellerId}, function(err,data){
            var dataArr = [];

            var code = data[0].result.code;
            if(err||code == 1){
                //resContent.code = 500;
                //resContent.desc = "失败";
                logger.info("调用productServ-queryProductList result:" + JSON.stringify(data[0]));
                res.json(err);
            } else {
                logger.info("调用productServ-queryProductList result:" + JSON.stringify(data[0]));
                var productSurveyList = data[0].productSurveyList;
                productSurveyList.forEach(function(a){
                    var imgUri = a.imgUrl.split(",")[0];
                    dataArr.push({productId: a.productId, productName: a.productName,viceName: a.viceName, curPrice: a.curPrice / 100,orgPrice: a.orgPrice/100, imgUrl: imgUri});
                });

                var pagination = data[0].pagination;
                resContent.page = {total: pagination.totalCount, pageCount:pagination.pageNumCount};
                resContent.productList = dataArr;
                res.json(resContent);
                logger.info("get product list response:" + JSON.stringify(resContent));
            }
        });



*/

        var result = {"code":200,"page":{"total":17,"pageCount":4},"productList":[{"productId":"ze160216170722000745","productName":"测试sku","viceName":"实用耐看","curPrice":0.01,"orgPrice":1200,"imgUrl":"6A413EEF9691774A9EED5E84D98A4A29.jpg"},{"productId":"ze160205135801000704","productName":"测试商品01","viceName":"优惠大促","curPrice":0.01,"orgPrice":140,"imgUrl":"3CC771625CC299789C2366F5B38AADE7.jpg"},{"productId":"ze160204115048000051","productName":"测试商品","viceName":"价格实惠","curPrice":0.01,"orgPrice":100,"imgUrl":"CA17833C754C0AC2A26488B741084DAA.jpg"},{"productId":"ze160121135417000693","productName":"变形金刚(THE TRANSFORMERS) 拉杆箱20寸 TF01【全国专柜联保】银海绿","viceName":"材质轻便 富有韧性 使用寿命更长 标配海关锁 无钥匙 让您出行无忧　","curPrice":435,"orgPrice":1058,"imgUrl":"9F3DF0E2C575A4E7318D47111C6C6496.jpg"},{"productId":"ze160122104236000322","productName":"慕云（MUYUN）羽绒床垫 斜纹防羽布 秋冬加厚 可折叠 保暖垫子床褥","viceName":"选用鸭绒作填充料，抗菌，防霉，除臭。","curPrice":369,"orgPrice":599,"imgUrl":"75B1957695653501779C08D47F8FF3E5.jpg"}]};
        res.json(result);
    } catch (ex) {

        logger.error("获取商品列表失败:" + ex);
        resContent.code = 500;
        resContent.desc = "获取商品列表失败";
        res.json(resContent);
    }
});

//查询商品属性信息
router.get('/productAttribute', function(req, res, next) {

    logger.info("进入获取商品详情接口");
    var result = {code: 200};

    try{
        var productInfo = {};

        var arg = req.query;
        logger.info("get product list args:" + JSON.stringify(arg));
        var productId = arg.productId;

        Product.queryProduct(productId, 1, 1, 0, 0, function (err, data) {
            if (err) {
                res.json(err);
            } else {
                var product = data[0].product;

                productInfo.productAttribute = product.attribute;   //属性单独一个接口
                result.productInfo = productInfo;
                res.json(result);
                logger.info("get product info response:" + JSON.stringify(result));
            }
        });
    }catch(ex) {
        logger.error("get product info error:" + ex);
        result.code = 500;
        result.desc = "获取商品详情失败";
        res.json(result);
    }
});

//查询商品
router.get('/productinfo', function(req, res, next) {

    logger.info("进入获取商品详情接口");
    var result = {code: 200};

    try{
        var productInfo = {};

        var arg = req.query;
        logger.info("get product list args:" + JSON.stringify(arg));
        var productId = arg.productId || "ze160407160404000554";

        Product.queryProduct(productId, 1, 1, 0, 0, function (err, data) {
            if (err) {
                res.json(err);
            } else {
                var product = data[0].product;
                productInfo.productId = product.productId;
                productInfo.productName = product.productName;
                productInfo.viceName = product.viceName;
                productInfo.imgKey = product.imgKey;
                productInfo.productDesc = product.detailContent;
                /**
                 * productInfo.productAttribute = product.attribute;   属性单独一个接口
                 */
                productInfo.skuTemplate = JSON.parse(product.skuTemplate);
                productInfo.sellerId = product.sellerId;
                productInfo.sellerName = "测试商家1";
                //添加最高价和最低价
                var minCurPrice = 0.01;
                var maxCurPrice = 10000000;
                var minOrgPrice = 0.02;
                var maxOrgPrice = 20000000;
                result.productInfo = productInfo;
                result.minCurPrice = minCurPrice;
                result.maxCurPrice = maxCurPrice;
                result.minOrgPrice = minOrgPrice;
                result.maxOrgPrice = maxOrgPrice;
                res.json(result);
                logger.info("get product info response:" + JSON.stringify(result));
            }
        });
    }catch(ex) {
        logger.error("get product info error:" + ex);
        result.code = 500;
        result.desc = "获取商品详情失败";
        res.json(result);
    }
});

//查询商品详情queryProductDetail
router.get('/productDetail', function(req, res, next) {

    logger.info("进入查询商品详情接口");
    var result = {code: 200};

    try{

        var arg = req.query;
        arg.detailKey = "56a1915a0cf2bb85eb5701a7";
        arg.productId = "ze160122101802000570";
        logger.info("查询商品详情的条件:" + JSON.stringify(arg));

        /*Product.queryProductDetail(arg, function (err, data) {

            if (err) {
                res.json(err);
            } else {

                result.value = data.value;
                res.json(result);

                logger.info("查询到的商品详情为:" + JSON.stringify(result));
            }
        });*/

        var productDetail = {"code":200,"value":"<p><img src=\"http://www.jfshare.com/img/2015/7/26/2450713.jpg\" alt=\"\" data-cke-saved-src=\"/img/2015/7/26/2450713.jpg\" /></p>"};
        res.json(productDetail);
    }catch(ex) {
        logger.error("查询失败，原因是:" + ex);
        result.code = 500;
        result.desc = "查询商品详情失败";
        res.json(result);
    }
});

//查询商品库存和sku
router.post('/querystore', function(req, res, next) {
    logger.info("进入获取商品SKU接口");
    var result = {code:200};

    try{
        var arg = req.body;
        logger.info("get product list args:" + JSON.stringify(arg));
        var productId = arg.productId;
        var provinceId = arg.provinceId;
        var skuNum = arg.skuNum;
        var baseTag = 1;
        var skuTemplateTag = 0;
        var skuTag = 1;
        var attributeTag = 0;

        var params = {};
        params.productId = productId;
        params.provinceId = provinceId;
        params.skuNum = skuNum;
        params.baseTag = baseTag;
        params.skuTemplateTag = skuTemplateTag;
        params.skuTag = skuTag;
        params.attributeTag = attributeTag;

        Product.queryHotSKU(params, function (err, data) {
            if(err){
                res.json(err);
            }else{
                var product = data[0].product;
                /********************测试数据*******************/
                //仓库id
                var storehouseId = 1;
                //库存量
                var value = 100;
                //销售价和原价
                var curPrice = 100;
                var orgPrice= 150;
                result.storehourseId = storehourseId;
                result.value = value;
                result.curPrice = curPrice;
                result.orgPrice = orgPrice;
                res.json(result);
                logger.info("查询到的详情为:" + JSON.stringify(result));
            }
        });
/*
        var detailStockIns = new detailStock();

        async.waterfall([
                function(callback){
                    Product.queryProductSku(productId, function (err, data) {
                        if (err) {
                            callback('error', err);
                        } else {
                            var productSku = data[0].productSku;

                            detailStockIns.parseProductSku(data[0].productSku);
                            callback(null, detailStockIns);
                        }
                    });
                },
                function(productSkuMap, callback){
                    logger.info("skumap:" + productSkuMap);
                    Product.getStock(productId, function(err, data) {
                        if(err){
                            callback('error', err);
                        } else {
                            var stockInfo = data[0].stockInfo;
                            logger.info("stock info:" + stockInfo);
                            detailStockIns.fillStockSku(data[0].stockInfo);
                            detailStockIns.initSKU();
                            result.dimstocks = detailStockIns.dimstocks;
                            callback(null, result);
                        }
                    });
                }
            ],
            function(err, data){
                if (err) {
                    logger.error("get product info fail err:" + err);
                } else {
                    res.json(data);
                    logger.info("get skuitem response:" + JSON.stringify(result));
                }
            });
        */
    } catch(ex) {
        logger.error("get skuitem error:" + ex);
        result.code = 500;
        result.desc = "获取商品ＳＫＵ失败";
        res.json(result);
    }
});

//获取类目列表
router.post('/subjectList', function(req, res, next) {

    logger.info("进入获取子分类接口");
    var result = {code: 200};

    try {
        var arg = req.body;
        logger.info("get child class arg:" + arg);

        var subjectId =  arg.subjectId || 0;

        Product.getSubTree(subjectId, function (err, data) {
            if(err) {
                res.json(err);
            } else {
                var subjectNodes = data[0].subjectNodes;
                var classList = [];
                if(subjectNodes !== null && subjectNodes.length >0 ){
                    subjectNodes.forEach(function(node) {
                        classList.push({
                            subjectId:node.id,
                            subjectName:node.name,
                            pid:node.pid,
                            isLeaf:node.isLeaf,
                            img_key:node.img_key
                        });
                    });
                }
                result.classList = classList;
                res.json(result);
                logger.info("get child class response:" + JSON.stringify(result));
            }
        });
    } catch (ex) {
        logger.error("get subject child error:" + ex);
        result.code = 500;
        result.desc = "获取子类目失败";
        res.json(result);
    }
});



module.exports = router;