/**
 * Created by Administrator on 2016/5/15 0015.
 */
/**
 * Created by Administrator on 2016/4/22.
 */
/**
 * Created by huapengpeng on 2016/4/22.
 */

var express = require('express');
var router = express.Router();
var async = require('async');

var log4node = require('../log4node');
var logger = log4node.configlog4node.useLog4js(log4node.configlog4node.log4jsConfig);
var result_types = require('../lib/thrift/gen_code/result_types');
var Template = require('../lib/models/template');


//添加运费模板
router.post('/addPostageTemplate', function (request, response, next) {


    logger.info("进入添加运费模板流程");
    var result = {code:200};

    try{
        var params = request.body;

        if(params.sellerId == null || params.sellerId == "" ||params.sellerId <= 0){

            result.code = 500;
            result.desc = "请求参数错误";
            response.json(result);
            return;
        }

        if(params.name == null || params.name == ""){

            result.code = 500;
            result.desc = "请求参数错误";
            response.json(result);
            return;
        }
        if(params.type == null || params.type == ""){

            result.code = 500;
            result.desc = "请求参数错误";
            response.json(result);
            return;
        }
        if(params.templateGroup == null || params.templateGroup == ""){

            result.code = 500;
            result.desc = "请求参数错误";
            response.json(result);
            return;
        }

        if(params.postageList == null || params.postageList == "" ){

            result.code = 500;
            result.desc = "请求参数错误";
            response.json(result);
            return;
        }


        logger.info("add freight params:" + JSON.stringify(params));

        Template.addPostageTemplate(params,function(error,data){
            if (error) {
                response.json(error);
            } else {
                logger.info("add freight info response:" + JSON.stringify(data));
                response.json(result);
                return;
            }
        });
    } catch (ex) {
        logger.error("添加运费模板失败:" + ex);
        result.code = 500;
        result.desc = "添加运费模板失败";

        response.json(result);
    }
});
//更新运费模板
router.post('/updatePostageTemplate', function (request, response, next) {
    logger.info("进入更新运费模板流程");
    var result = {code: 200};

    try {
        var params = request.body;

        if(params.id == null || params.id == "" ||params.id <= 0){

            result.code = 500;
            result.desc = "请求参数错误";
            response.json(result);
            return;
        }

        if(params.sellerId == null || params.sellerId == "" ||params.sellerId <= 0){

            result.code = 500;
            result.desc = "请求参数错误";
            response.json(result);
            return;
        }

        if(params.name == null || params.name == ""){

            result.code = 500;
            result.desc = "请求参数错误";
            response.json(result);
            return;
        }
        if(params.type == null || params.type == ""){

            result.code = 500;
            result.desc = "请求参数错误";
            response.json(result);
            return;
        }
        if(params.templateGroup == null || params.templateGroup == ""){

            result.code = 500;
            result.desc = "请求参数错误";
            response.json(result);
            return;
        }

        if(params.postageList == null || params.postageList == "" ){

            result.code = 500;
            result.desc = "请求参数错误";
            response.json(result);
            return;
        }
        logger.info("update freight params:" + JSON.stringify(params));

        Template.updatePostageTemplate(params, function (error, data) {
            if (error) {
                response.json(error);
            } else {
                response.json(result);
                logger.info("update freight info response:" + JSON.stringify(result));
            }
        });
    } catch (ex) {


        logger.error("更新运费模板失败:" + ex);
        result.code = 500;
        result.desc = "更新运费模板失败";

        response.json(result);
    }
});
//删除运费模板
router.post('/delPostageTemplate', function (request, response, next) {

    logger.info("进入删除运费模板流程");
    var result = {code: 200};

    try {
        //var params = request.query;
        var params = request.body;
        //参数校验
        if (params.sellerId == null || params.sellerId == "" || params.sellerId <= 0) {

            result.code = 500;
            result.desc = "请求参数错误";
            response.json(result);
            return;
        }

        if (params.id == null || params.id == "" || params.sellerId <= 0) {
            result.code = 500;
            result.desc = "请求参数错误";
            response.json(result);
            return;
        }


        logger.info("del freight params:" + JSON.stringify(params));

        Template.delPostageTemplate(params, function (error, data) {
            if (error) {
                response.json(error);
            } else {
                logger.info("delete freight info response:" + JSON.stringify(data));
                response.json(result);

            }
        });
    } catch (ex) {
        logger.error("删除仓库失败:" + ex);
        result.code = 500;
        result.desc = "删除仓库失败";

        response.json(result);
    }
});
//运费模板列表
router.post('/listPostageTemplate', function (request, response, next) {
    logger.info("进入查询运费模板流程");
    var result = {code: 200};

    try {
        // var params = request.query;
        var params = request.body;
        //参数校验

        if (params.sellerId == null || params.sellerId == "" || params.sellerId <= 0) {

            result.code = 500;
            result.desc = "请求参数错误";
            response.json(result);
            return;
        }
        if (params.templateGroup == null || params.templateGroup == "" || params.templateGroup <= 0) {

            result.code = 500;
            result.desc = "请求参数错误";
            response.json(result);
            return;
        }
        logger.info("list freight params:" + JSON.stringify(params));


        Template.listPostageTemplate(params,function(error,data){
            if (error) {
                response.json(error);
                return;
            } else {
                logger.info("list freight info response:" + JSON.stringify(result));
                if(data[0].postageTemplateList!=null){
                    result.postageTemplateList = data[0].postageTemplateList;
                    response.json(result);
                    return;
                }

            }
        });
    } catch (ex) {
        logger.error("查询运费列表失败:" + ex);
        result.code = 500;
        result.desc = "查询运费列表失败";

        response.json(result);
    }
});
//get运费模板
router.post('/getPostageTemplate', function (request, response, next) {

    logger.info("进入更新运费模板流程");
    var result = {code: 200};
    result.postageTemplateList = [];
    try {
        //var params = request.query;
        var params = request.body;
        //参数校验

        if (params.sellerId == null || params.sellerId == "" || params.sellerId <= 0) {

            result.code = 500;
            result.desc = "请求参数错误";
            response.json(result);
            return;
        }

        if (params.id == null || params.id == "" || params.id <= 0) {

            result.code = 500;
            result.desc = "请求参数错误";
            response.json(result);
            return;
        }
        logger.info("get freight params:" + JSON.stringify(params));

        Template.getPostageTemplate(params, function (error, data) {
            if (error) {
                return response.json(error);
            } else {
                if(data[0].postageTemplateList!=null){
                    logger.info("get freight info response:" + JSON.stringify(data));
                    result.postageTemplateList = data[0].postageTemplateList;
                    return response.json(result);
                }
            }
        });
    } catch (ex) {
        logger.error("获取运费模板失败:" + ex);
        result.code = 500;
        result.desc = "获取运费模板失败";

        response.json(result);
    }
});



//添加仓库
router.post('/addStorehouse', function (request, response, next) {


    logger.info("进入添加仓库流程");
    var result = {code:200};

    try{
        var params = request.body;

        if(params.sellerId == null || params.sellerId == "" ||params.sellerId <= 0){

            result.code = 500;
            result.desc = "请求参数错误";
            response.json(result);
            return;
        }

        if(params.name == null || params.name == ""){

            result.code = 500;
            result.desc = "请求参数错误";
            response.json(result);
            return;
        }
        if(params.supportProvince == null || params.supportProvince == ""){
            result.code = 500;
            result.desc = "请求参数错误";
            response.json(result);
            return;
        }



        logger.info("add freight params:" + JSON.stringify(params));

        Template.addStorehouse(params,function(error,data){
            if (error) {
                response.json(error);
            } else {
                logger.info("add addStorehouse  response:" + JSON.stringify(data));
                response.json(result);
                return;
            }
        });
    } catch (ex) {
        logger.error("添加仓库失败:" + ex);
        result.code = 500;
        result.desc = "添加仓库失败";

        response.json(result);
    }
});
//更新仓库
router.post('/updateStorehouse', function (request, response, next) {
    logger.info("进入更新仓库模板流程");
    var result = {code: 200};

    try {
        //var params = request.query;
        var params = request.body;
        //参数校验

        if (params.sellerId == null || params.sellerId == "" || params.sellerId <= 0) {

            result.code = 500;
            result.desc = "请求参数错误";
            response.json(result);
            return;
        }

        if (params.id == null || params.id == "" || params.id <= 0) {

            result.code = 500;
            result.desc = "请求参数错误";
            response.json(result);
            return;
        }

        if (params.name == null || params.name == "") {
            result.code = 500;
            result.desc = "请求参数错误";
            response.json(result);
            return;
        }

        if (params.supportProvince == null || params.supportProvince == "") {
            result.code = 500;
            result.desc = "请求参数错误";
            response.json(result);
            return;
        }

        logger.info("update storehouse params:" + JSON.stringify(params));

        Template.updateStorehouse(params, function (error, data) {
            if (error) {
                response.json(error);
            } else {
                logger.info("update storehouse info response:" + JSON.stringify(data));
                response.json(result);

            }
        });
    } catch (ex) {
        logger.error("更新仓库失败:" + ex);
        result.code = 500;
        result.desc = "更新仓库失败";

        response.json(result);
    }
});
router.post('/delStorehouse', function (request, response, next) {

    logger.info("进入删除运费模板流程");
    var result = {code: 200};

    try {
        //var params = request.query;
        var params = request.body;
        //参数校验
        if (params.sellerId == null || params.sellerId == "" || params.sellerId <= 0) {

            result.code = 500;
            result.desc = "请求参数错误";
            response.json(result);
            return;
        }

        if (params.id == null || params.id == "" || params.sellerId <= 0) {
            result.code = 500;
            result.desc = "请求参数错误";
            response.json(result);
            return;
        }


        logger.info("delStorehouse params:" + JSON.stringify(params));

        Template.delStorehouse(params, function (error, data) {
            if (error) {
                response.json(error);
            } else {
                logger.info("delStorehouse info response:" + JSON.stringify(data));
                response.json(result);

            }
        });
    } catch (ex) {
        logger.error("删除仓库失败:" + ex);
        result.code = 500;
        result.desc = "删除仓库失败";

        response.json(result);
    }
});
//listStorehouse
router.post('/listStorehouse', function (request, response, next) {
    logger.info("进入查询运费模板流程");
    var result = {code: 200};
    result.storehouseList = [];
    try {
        // var params = request.query;
        var params = request.body;
        //参数校验

        if (params.sellerId == null || params.sellerId == "" || params.sellerId <= 0) {

            result.code = 500;
            result.desc = "请求参数错误";
            response.json(result);
            return;
        }

        logger.info("list storelist params:" + JSON.stringify(params));


        Template.listStorehouse(params,function(error,data){
            if (error) {
                response.json(error);
                return;
            } else {
                logger.info("list freight info response:" + JSON.stringify(result));
                if(data[0].storehouseList!=null){
                    result.storehouseList = data[0].storehouseList;
                    response.json(result);
                    return;
                }

            }
        });
    } catch (ex) {
        logger.error("查询仓库列表失败:" + ex);
        result.code = 500;
        result.desc = "查询仓库列表失败";

        response.json(result);
    }
});
//获取仓库
router.post('/getStorehouse', function (request, response, next) {

    logger.info("进入获取仓库流程");
    var result = {code: 200};
    result.storehouseList  = [];
    try {
        //var params = request.query;
        var params = request.body;
        //参数校验

        if (params.sellerId == null || params.sellerId == "" || params.sellerId <= 0) {

            result.code = 500;
            result.desc = "请求参数错误";
            response.json(result);
            return;
        }

        if (params.id == null || params.id == "" || params.id <= 0) {

            result.code = 500;
            result.desc = "请求参数错误";
            response.json(result);
            return;
        }
        logger.info("get freight params:" + JSON.stringify(params));

        Template.getStorehouse(params, function (error, data) {
            if (error) {
                return response.json(error);
            } else {
                if(data[0].storehouseList !=null){
                    result.storehouseList = data[0].storehouseList;
                    response.json(result);
                    return;
                }

            }
        });
    } catch (ex) {
        logger.error("获取仓库失败:" + ex);
        result.code = 500;
        result.desc = "获取仓库失败";
        response.json(result);
    }
});

/******
 *
 *
 *{
sellerList:[{
    sellerId: int  	//商家id
    provinceId: int //省份id
    storehouseIds:int //
    skulist:[{
			skuNum: string  //sku_编码 格式为1-1:100-102
            productId: string //产品id
        }]
    }]
}
 *
 *
 */
router.post('/queryStockAndPrice', function(request, response, next) {
    var result = {code: 200};
    try{

        var params = request.body;
        async.series([
                function (callback) {
                    try {
                        logger.info("getDeliverStorehousea--params：" + JSON.stringify(params));

                        Template.getDeliverStorehouse(params, function (err, data) {
                            if(err){
                                response.json(err);
                                return;
                            }
                            response.json(data);
                            logger.info("get order list response:" + JSON.stringify(result));
                        });

                    } catch (ex) {
                        logger.info("获取订单列表异常:" + ex);
                        return callback(1, null);
                    }
                },
                function (callback) {
                    try {
                        Subject.getBatchSuperTree(productIdList, function (error, data) {
                            //logger.info("get product list response:" + JSON.stringify(data));
                            if (error) {
                                callback(2, null);
                            } else {
                                //组装list
                                var partsNames = [];
                                var subjectNodeTrees = data[0].subjectNodeTrees;

                                subjectNodeTrees.forEach(function (subjectList) {
                                    //logger.info("get subjectList list response-----:" + JSON.stringify(subjectList));
                                    if (subjectList != null) {
                                        var subjectpath = "";
                                        for (var i = 0; i < subjectList.length; i++) {
                                            if (i == subjectList.length - 1) {
                                                subjectpath += subjectList[i].name;
                                            } else {
                                                subjectpath += subjectList[i].name + "-";

                                            }
                                        }
                                        subjectName.push(subjectpath);
                                    } else {
                                        subjectName.push("");
                                    }


                                });
                                callback(null, subjectName);
                                // logger.info("------------get subjectName list response-----:" + JSON.stringify(subjectName));
                            }
                        });

                    } catch (ex) {
                        logger.info("获取批量类目异常:" + ex);
                        return callback(2, null);
                    }
                }
            ],
            function (err, results) {

                logger.info("result[0]:" + JSON.stringify(results[0]));
                logger.info("result[1]:" + JSON.stringify(results[1]));

                if (err == 1) {
                    logger.error("查询商品列表失败---商品服务异常：" + err);
                    result.code = 500;
                    result.desc = "查询商品列表失败";
                    response.json(result);
                    return;
                }
                if (err == 2) {
                    logger.error("获取批量类目异常--类目服务异常：" + err);
                    response.json(results[0]);
                    return;
                }

                if (err == null) {
                    logger.info("shuju------------->" + JSON.stringify(results));
                    for (var i = 0; i < results[0].length; i++) {
                        results[0][i].subjectName = results[1][i];
                        logger.info("get product list response:" + JSON.stringify(dataArr));
                        logger.info("get product list response:" + JSON.stringify(subjectName));
                    }
                    result.productList = results[0];
                    response.json(result);
                    return;
                } else {
                    logger.info("shuju------------->" + JSON.stringify(results));
                    result = results[0];
                    response.json(result);
                    return;
                }
            });

    } catch (ex) {
        logger.error("get product stock error:" + ex);
        result.code = 500;
        result.desc = "获取商品库存失败";
        response.json(result);
    }
});

module.exports = router;