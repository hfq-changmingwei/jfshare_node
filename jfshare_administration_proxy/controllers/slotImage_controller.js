/**
 *  积分卡  管理
 *  chiwenheng
 *  0815
 */

var express = require('express');
var router = express.Router();
var async = require('async');

var log4node = require('../log4node');
var logger = log4node.configlog4node.useLog4js(log4node.configlog4node.log4jsConfig);
var SlotImage = require('../lib/models/slot_image');// 积分卡功能
/* 保存广告位图片 */
router.post('/saveAdvertSlotImage', function (request, response, next) {
    logger.info("保存广告位图片");
    var result = {code: 200};
    try {
        var params = request.body;
        //参数校验
        logger.info("saveAdvertSlotImage params:" + JSON.stringify(params));
        if (params.imgKey == null || params.imgKey == "") {
            result.code = 500;
            result.desc = "imgKey参数错误";
            response.json(result);
            return;
        }

        if (params.advertId == null || params.advertId == "") {
            result.code = 500;
            result.desc = "advertId参数错误";
            response.json(result);
            return;
        }

        if (params.slotName == null || params.slotName == "") {
            result.code = 500;
            result.desc = "slotName参数错误";
            response.json(result);
            return;
        }

        if (params.remark == null || params.remark == "") {
            result.code = 500;
            result.desc = "remark参数错误";
            response.json(result);
            return;
        }


        if (params.jump == null || params.jump == "") {
            result.code = 500;
            result.desc = "参数错误";
            response.json(result);
            return;
        }

        if (params.isOnline == null || params.isOnline == "") {
            result.code = 500;
            result.desc = "isOnline参数错误";
            response.json(result);
            return;
        }
        if (params.sort == null || params.sort == "") {
            result.code = 500;
            result.desc = "sort参数错误";
            response.json(result);
            return;
        }
        if (params.startTime == null || params.startTime == "") {
            result.code = 500;
            result.desc = "startTime参数错误";
            response.json(result);
            return;
        }
        if (params.endTime == null || params.endTime == "") {
            result.code = 500;
            result.desc = "endTime参数错误";
            response.json(result);
            return;
        }

        SlotImage.saveAdvertSlotImage(params, function (err, data) {
            if (err) {
                response.json(err);
                return;
            }
            // result.scoreList = data[0].scoreUsers;
            // var pagination = data[0].pageination;
            // if(pagination!=null){
            //     result.page = {total: pagination.totalCount, pageCount: pagination.pageNumCount};
            // }
            logger.info("saveAdvertSlotImage result:" + JSON.stringify(data));
            response.json(result);
            return;
        });
    } catch (ex) {
        logger.error("保存广告位图片错误:" + ex);
        result.code = 500;
        result.desc = "保存广告位图片错误";
        response.json(result);
    }
});

/* 修改广告位图片 */
router.post('/updateAdvertSlotImage', function (request, response, next) {
    logger.info("创建导出卡片excel的流程");
    var result = {code: 200};
    try {
        var params = request.body;
        //参数校验
        logger.info("updateAdvertSlotImage params:" + JSON.stringify(params));
        if (params.id == null || params.id == "") {
            result.code = 500;
            result.desc = "id参数错误";
            response.json(result);
            return;
        }
        if (params.imgKey == null || params.imgKey == "") {
            result.code = 500;
            result.desc = "imgKey参数错误";
            response.json(result);
            return;
        }

        if (params.advertId == null || params.advertId == "") {
            result.code = 500;
            result.desc = "advertId参数错误";
            response.json(result);
            return;
        }

        if (params.slotName == null || params.slotName == "") {
            result.code = 500;
            result.desc = "slotName参数错误";
            response.json(result);
            return;
        }

        if (params.remark == null || params.remark == "") {
            result.code = 500;
            result.desc = "remark参数错误";
            response.json(result);
            return;
        }


        if (params.jump == null || params.jump == "") {
            result.code = 500;
            result.desc = "参数错误";
            response.json(result);
            return;
        }

        if (params.isOnline == null || params.isOnline == "") {
            result.code = 500;
            result.desc = "isOnline参数错误";
            response.json(result);
            return;
        }
        if (params.sort == null || params.sort == "") {
            result.code = 500;
            result.desc = "sort参数错误";
            response.json(result);
            return;
        }
        if (params.startTime == null || params.startTime == "") {
            result.code = 500;
            result.desc = "startTime参数错误";
            response.json(result);
            return;
        }
        if (params.endTime == null || params.endTime == "") {
            result.code = 500;
            result.desc = "endTime参数错误";
            response.json(result);
            return;
        }


        SlotImage.updateAdvertSlotImage(params, function (err, data) {
            if (err) {
                response.json(err);
                return;
            }
            // result.scoreList = data[0].scoreUsers;
            // var pagination = data[0].pageination;
            // if(pagination!=null){
            //     result.page = {total: pagination.totalCount, pageCount: pagination.pageNumCount};
            // }
            logger.info("updateAdvertSlotImage result:" + JSON.stringify(data));
            result.path = data[0].path;
            response.json(result);
            return;
        });
    } catch (ex) {
        logger.error("修改广告位图片错误:" + ex);
        result.code = 500;
        result.desc = "修改广告位图片错误";
        response.json(result);
    }
});

/* 查询广告位图片列表 -- 前端/管理中心 */
router.post('/queryAdvertSlotImageList', function (request, response, next) {
    logger.info("查询广告位图片");
    var result = {code: 200};
    try {
        var params = request.body;
        //参数校验
        logger.info("queryAdvertSlotImageList params:" + JSON.stringify(params));
        if (params.advertId == null || params.advertId == "") {
            result.code = 500;
            result.desc = "advertId参数错误";
            response.json(result);
            return;
        }
        SlotImage.queryAdvertSlotImageList(params, function (err, data) {
            if (err) {
                response.json(err);
                return;
            }
            logger.info("queryAdvertSlotImageList result:" + JSON.stringify(data));
            response.json(result);
            return;
        });
    } catch (ex) {
        logger.error("查询广告位图片异常:" + ex);
        result.code = 500;
        result.desc = "查询广告位图片错误";
        response.json(result);
    }
});



/* 查询广告位图片 */
router.post('/queryAdvertSlotImage', function (request, response, next) {
    logger.info("查询广告位图片流程");
    var result = {code: 200};
    try {
        var params = request.body;
        //参数校验
        logger.info("queryAdvertSlotImage params:" + JSON.stringify(params));
        if (params.advertId == null || params.advertId == "") {
            result.code = 500;
            result.desc = "advertId参数错误";
            response.json(result);
            return;
        }
        
        SlotImage.queryAdvertSlotImage(params, function (err, data) {
            if (err) {
                response.json(err);
                return;
            }
            result.sucessNum=data[0].sucessNum;
            result.failedNum=data[0].failedNum;

            logger.info("queryAdvertSlotImage result:" + JSON.stringify(data));
            response.json(result);
            return;
        });
    } catch (ex) {
        logger.error("查询广告位图片异常:" + ex);
        result.code = 500;
        result.desc = "查询广告位图片错误";
        response.json(result);
    }
});

/*删除广告位图片*/
router.post('/deleteAdvertSlotImage', function (request, response, next) {
    logger.info("删除广告位图片");
    //设置默认值
    var result = {code: 200};
    try {
        var params = request.body;
        if (params.id == null || params.id == "") {
            result.code = 500;
            result.desc = "id参数错误";
            response.json(result);
            return;
        }
        if (params.advertId == null || params.advertId == "") {
            result.code = 500;
            result.desc = "advertId参数错误";
            response.json(result);
            return;
        }

        SlotImage.deleteAdvertSlotImage(params, function (err, data) {
            if (err) {
                response.json(err);
                return;
            }

            logger.info("deleteAdvertSlotImage result:" + JSON.stringify(data));
            response.json(result);
            return;
        });
    } catch (ex) {
        logger.error("删除广告位图片失败:" + ex);
        result.code = 500;
        result.desc = "删除广告位图片失败";
        response.json(result);
    }
});

/*统一发布图片*/
router.post('/publishAdvertSlot', function (request, response, next) {
    logger.info("作废批次活动流程");
    var result = {code: 200};
    try {
        var params = request.body;
        //参数校验
        logger.info("publishAdvertSlot params:" + JSON.stringify(params));
        if (params.advertId == null || params.advertId == "") {
            result.code = 500;
            result.desc = "advertId参数错误";
            response.json(result);
            return;
        }

        if (params.slotImageList == null || params.slotImageList == "") {
            result.code = 500;
            result.desc = "slotImageList参数错误";
            response.json(result);
            return;
        }


        SlotImage.publishAdvertSlot(params, function (err, data) {
            if (err) {
                response.json(err);
                return;
            }
            logger.info("publishAdvertSlot result:" + JSON.stringify(data));
            response.json(result);
            return;
        });
    } catch (ex) {
        logger.error("统一发布图片错误:" + ex);
        result.code = 500;
        result.desc = "统一发布图片错误";
        response.json(result);
    }
});






module.exports = router;