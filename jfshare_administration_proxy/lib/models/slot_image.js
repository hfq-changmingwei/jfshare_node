/**
 * @auther chiwenheng  0909
 * 轮播图片
 *
 */
var log4node = require('../../log4node');
var logger = log4node.configlog4node.useLog4js(log4node.configlog4node.log4jsConfig);

var Lich = require('../thrift/Lich.js');
var thrift = require('thrift');
var pagination_types = require('../thrift/gen_code/pagination_types');
var manager_types = require("../thrift/gen_code/manager_types");

function SlotImage() {
}

/* 保存广告位图片 */
SlotImage.prototype.saveAdvertSlotImage = function (params, callback) {
    var slotBean = new manager_types.AdvertSlotImage({
        // id: params.id,
        imgKey: params.imgKey,
        advertId: params.advertId,
        slotName: params.slotName,
        remark: params.remark,
        jump: params.jump,
        isOnline: params.isOnline,
        sort: params.sort,
        startTime: params.startTime,
        endTime: params.endTime,
        // createTime: params.createTime

    });

    //获取客户端
    var slotServ = new Lich.InvokeBag(Lich.ServiceKey.ManagerServer, 'saveAdvertSlotImage', [slotBean]);
    Lich.wicca.invokeClient(slotServ, function (err, data) {
        logger.info("saveAdvertSlotImage result:" + JSON.stringify(data));
        var res = {};
        if (err || data[0].result.code == 1) {
            logger.error("slotServ.saveAdvertSlotImage because: ======" + err);
            res.code = 500;
            res.desc = "创建广告位图片失败";
            callback(res, null);
        } else {
            callback(null, data);
        }
    });
};
/* 修改广告位图片 */
SlotImage.prototype.updateAdvertSlotImage = function (params, callback) {
    var slotBean = new manager_types.AdvertSlotImage({
        id: params.id,
        imgKey: params.imgKey,
        advertId: params.advertId,
        slotName: params.slotName,
        remark: params.remark,
        jump: params.jump,
        isOnline: params.isOnline,
        sort: params.sort,
        startTime: params.startTime,
        endTime: params.endTime,
        createTime: params.createTime

    });

    //获取客户端
    var slotServ = new Lich.InvokeBag(Lich.ServiceKey.ManagerServer, 'updateAdvertSlotImage', [slotBean]);
    Lich.wicca.invokeClient(slotServ, function (err, data) {
        logger.info("updateAdvertSlotImage result:" + JSON.stringify(data));
        var res = {};
        if (err || data[0].result.code == 1) {
            logger.error("slotServ.updateAdvertSlotImage because: ======" + err);
            res.code = 500;
            res.desc = "修改广告位图片"+"失败";
            callback(res, null);
        } else {
            callback(null, data);
        }
    });
};

/* 查询广告位图片列表 -- 前端/管理中心 */
SlotImage.prototype.queryAdvertSlotImageList = function (params, callback) {
    var slotBean = new manager_types.AdvertSlotImageParam({
        advertId: params.advertId

    });

    //获取客户端
    var slotServ = new Lich.InvokeBag(Lich.ServiceKey.ManagerServer, 'queryAdvertSlotImageList', [slotBean]);
    Lich.wicca.invokeClient(slotServ, function (err, data) {
        logger.info("queryAdvertSlotImageList result:" + JSON.stringify(data));
        var res = {};
        if (err || data[0].result.code == 1) {
            logger.error("slotServ.queryAdvertSlotImageList because: ======" + err);
            res.code = 500;
            res.desc = "查询广告位图片"+"失败";
            callback(res, null);
        } else {
            callback(null, data);
        }
    });
};

/* 查询广告位图片 */
SlotImage.prototype.queryAdvertSlotImage = function (params, callback) {
    var slotBean = new manager_types.AdvertSlotImage({
        id: params.id,
        imgKey: params.imgKey,
        advertId: params.advertId,
        slotName: params.slotName,
        remark: params.remark,
        jump: params.jump,
        isOnline: params.isOnline,
        sort: params.sort,
        startTime: params.startTime,
        endTime: params.endTime,
        createTime: params.createTime

    });

    //获取客户端
    var slotServ = new Lich.InvokeBag(Lich.ServiceKey.ManagerServer, 'queryAdvertSlotImage', [slotBean]);
    Lich.wicca.invokeClient(slotServ, function (err, data) {
        logger.info("queryAdvertSlotImage result:" + JSON.stringify(data));
        var res = {};
        if (err || data[0].result.code == 1) {
            logger.error("slotServ.queryAdvertSlotImage because: ======" + err);
            res.code = 500;
            res.desc = "查询广告位图片"+"失败";
            callback(res, null);
        } else {
            callback(null, data);
        }
    });
};

/*删除广告位图片*/
SlotImage.prototype.deleteAdvertSlotImage = function (params, callback) {
    var slotBean = new manager_types.AdvertSlotImage({
        id: params.id,
        // imgKey: params.imgKey,
        advertId: params.advertId,
        // slotName: params.slotName,
        // remark: params.remark,
        // jump: params.jump,
        // isOnline: params.isOnline,
        // sort: params.sort,
        // startTime: params.startTime,
        // endTime: params.endTime,
        // createTime: params.createTime

    });

    //获取客户端
    var slotServ = new Lich.InvokeBag(Lich.ServiceKey.ManagerServer, 'deleteAdvertSlotImage', [slotBean]);
    Lich.wicca.invokeClient(slotServ, function (err, data) {
        logger.info("deleteAdvertSlotImage result:" + JSON.stringify(data));
        var res = {};
        if (err || data[0].result.code == 1) {
            logger.error("slotServ.deleteAdvertSlotImage because: ======" + err);
            res.code = 500;
            res.desc = "删除广告位图片"+"失败";
            callback(res, null);
        } else {
            callback(null, data);
        }
    });
};
/*统一发布图片*/
SlotImage.prototype.publishAdvertSlot = function (params, callback) {
    var slotBean = new manager_types.AdvertSlotImageListParam({
        advertId: params.advertId,
        slotImageList: params.slotImageList
    });

    //获取客户端
    var slotServ = new Lich.InvokeBag(Lich.ServiceKey.ManagerServer, 'publishAdvertSlot', [slotBean]);
    Lich.wicca.invokeClient(slotServ, function (err, data) {
        logger.info("publishAdvertSlot result:" + JSON.stringify(data));
        var res = {};
        if (err || data[0].result.code == 1) {
            logger.error("slotServ.publishAdvertSlot because: ======" + err);
            res.code = 500;
            res.desc = "统一发布图片"+"失败";
            callback(res, null);
        } else {
            callback(null, data);
        }
    });
};




module.exports = new SlotImage();