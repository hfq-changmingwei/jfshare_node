/**
 * Created by zhaoshenghai on 16/3/22.
 */
var express = require('express');
var router = express.Router();

var log4node = require('../log4node');
var logger = log4node.configlog4node.useLog4js( log4node.configlog4node.log4jsConfig);
//var Address = require('../lib/models/address');
var  Scoretool = require('../lib/models/score_tool');
//
router.post('/sendnote', function(req, res, next) {
    var result = {code: 200};

    try{
        var arg = req.body;
        logger.info("移动验证码， arg:" + JSON.stringify(arg));
        if(arg == null) {
            result.code = 400;
            result.desc = "请求参数错误";
            res.json(result);
            return;
        }

        if(arg.loginName == null) {
            result.code = 400;
            result.desc = "请求参数错误";
            res.json(result);
            return;
        }
        Scoretool.sendNote(arg, function(err, data) {
            if(err){
                res.json(err);
                return;
            }
            result.data = data;
            res.json(result);
            logger.info("add address response:" + JSON.stringify(result));
        });
    } catch (ex) {
        logger.error("add address error:" + ex);
        result.code = 500;
        result.desc = "验证码失败";
        res.json(result);
    }
});

router.post('/querymobilephone', function(req, res, next) {
    var result = {code: 200};

    try{
        var arg = req.body;
        logger.info("移动验证码， arg:" + JSON.stringify(arg));
        if(arg == null) {
            result.code = 400;
            result.desc = "请求参数错误";
            res.json(result);
            return;
        }
        if(arg.loginName == null||arg.code==null) {
            result.code = 400;
            result.desc = "请求参数错误";
            res.json(result);
            return;
        }

        Scoretool.queryMobilePhone(arg, function(err, data) {
            if(err){
                res.json(err);
                return;
            }

            result.score = data.score;
            result.state = data.state;
            res.json(result);
            logger.info("add address response:" + JSON.stringify(result));
        });
    } catch (ex) {
        logger.error("add address error:" + ex);
        result.code = 500;
        result.desc = "移动积分获取失败";
        res.json(result);
    }
});

router.get('/sendhaihangImages', function(req, res, next) {
    var result = {code: 200};

    try{
        Scoretool.sendHaiHangImages(function(err, data) {
            if(err){
                res.json(err);
                return;
            }

            result.images = data.images;
            result.cookei = data.cookei;
            result.state = data.state;
            result.timestamp = data.date;
            res.json(result);
            logger.info("add address response:" + JSON.stringify(result));
        });
    } catch (ex) {
        logger.error("add address error:" + ex);
        result.code = 500;
        result.desc = "海航验证码失败";
        res.json(result);
    }
});

router.post('/queryhainan', function(req, res, next) {
    var result = {code: 200};

    try{
        var arg = req.body;
        logger.info("移动验证码， arg:" + JSON.stringify(arg));
        if(arg == null) {
            result.code = 400;
            result.desc = "请求参数错误";
            res.json(result);
            return;
        }
        if(arg.loginName == null||arg.passWord==null||arg.method==null||arg.cookei==null||arg.code==null||agr.timestamp==null) {
            result.code = 400;
            result.desc = "请求参数错误";
            res.json(result);
            return;
        }

        Scoretool.queryHaiNan(arg, function(err, data) {
            if(err){
                res.json(err);
                return;
            }
            result.data = data;
            res.json(result);
            logger.info("response:" + JSON.stringify(result));
        });
    } catch (ex) {
        logger.error("error:" + ex);
        result.code = 500;
        result.desc = "海航积分获取失败";
        res.json(result);
    }
});

router.post('/querynanfang', function(req, res, next) {
    var result = {code: 200};

    try{
        var arg = req.body;
        logger.info("南航里程， arg:" + JSON.stringify(arg));
        if(arg == null) {
            result.code = 400;
            result.desc = "请求参数错误";
            res.json(result);
            return;
        }
        if(arg.loginName == null||arg.passWord==null) {
            result.code = 400;
            result.desc = "请求参数错误";
            res.json(result);
            return;
        }

        Scoretool.queryNanFang(arg, function(err, data) {
            if(err){
                res.json(err);
                return;
            }
            result.data = data;
            res.json(result);
            logger.info("response:" + JSON.stringify(result));
        });
    } catch (ex) {
        logger.error("error:" + ex);
        result.code = 500;
        result.desc = "南航里程获取失败";
        res.json(result);
    }
});
module.exports = router;