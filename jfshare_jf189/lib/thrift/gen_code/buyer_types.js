//
// Autogenerated by Thrift Compiler (0.9.3)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;

var result_ttypes = require('./result_types')


var ttypes = module.exports = {};
AuthInfo = module.exports.AuthInfo = function(args) {
  this.token = null;
  this.ppInfo = null;
  if (args) {
    if (args.token !== undefined && args.token !== null) {
      this.token = args.token;
    }
    if (args.ppInfo !== undefined && args.ppInfo !== null) {
      this.ppInfo = args.ppInfo;
    }
  }
};
AuthInfo.prototype = {};
AuthInfo.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.token = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.ppInfo = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AuthInfo.prototype.write = function(output) {
  output.writeStructBegin('AuthInfo');
  if (this.token !== null && this.token !== undefined) {
    output.writeFieldBegin('token', Thrift.Type.STRING, 1);
    output.writeString(this.token);
    output.writeFieldEnd();
  }
  if (this.ppInfo !== null && this.ppInfo !== undefined) {
    output.writeFieldBegin('ppInfo', Thrift.Type.STRING, 2);
    output.writeString(this.ppInfo);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

AuthInfoResult = module.exports.AuthInfoResult = function(args) {
  this.result = null;
  this.authInfo = null;
  if (args) {
    if (args.result !== undefined && args.result !== null) {
      this.result = new result_ttypes.Result(args.result);
    }
    if (args.authInfo !== undefined && args.authInfo !== null) {
      this.authInfo = new ttypes.AuthInfo(args.authInfo);
    }
  }
};
AuthInfoResult.prototype = {};
AuthInfoResult.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.result = new result_ttypes.Result();
        this.result.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.authInfo = new ttypes.AuthInfo();
        this.authInfo.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AuthInfoResult.prototype.write = function(output) {
  output.writeStructBegin('AuthInfoResult');
  if (this.result !== null && this.result !== undefined) {
    output.writeFieldBegin('result', Thrift.Type.STRUCT, 1);
    this.result.write(output);
    output.writeFieldEnd();
  }
  if (this.authInfo !== null && this.authInfo !== undefined) {
    output.writeFieldBegin('authInfo', Thrift.Type.STRUCT, 2);
    this.authInfo.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ThirdpartyUser = module.exports.ThirdpartyUser = function(args) {
  this.signinName = null;
  this.userName = null;
  this.thirdType = null;
  this.custId = null;
  this.accountNo = null;
  this.extInfo = null;
  if (args) {
    if (args.signinName !== undefined && args.signinName !== null) {
      this.signinName = args.signinName;
    }
    if (args.userName !== undefined && args.userName !== null) {
      this.userName = args.userName;
    }
    if (args.thirdType !== undefined && args.thirdType !== null) {
      this.thirdType = args.thirdType;
    }
    if (args.custId !== undefined && args.custId !== null) {
      this.custId = args.custId;
    }
    if (args.accountNo !== undefined && args.accountNo !== null) {
      this.accountNo = args.accountNo;
    }
    if (args.extInfo !== undefined && args.extInfo !== null) {
      this.extInfo = args.extInfo;
    }
  }
};
ThirdpartyUser.prototype = {};
ThirdpartyUser.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.signinName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.userName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.thirdType = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.custId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.accountNo = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.extInfo = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ThirdpartyUser.prototype.write = function(output) {
  output.writeStructBegin('ThirdpartyUser');
  if (this.signinName !== null && this.signinName !== undefined) {
    output.writeFieldBegin('signinName', Thrift.Type.STRING, 1);
    output.writeString(this.signinName);
    output.writeFieldEnd();
  }
  if (this.userName !== null && this.userName !== undefined) {
    output.writeFieldBegin('userName', Thrift.Type.STRING, 2);
    output.writeString(this.userName);
    output.writeFieldEnd();
  }
  if (this.thirdType !== null && this.thirdType !== undefined) {
    output.writeFieldBegin('thirdType', Thrift.Type.STRING, 3);
    output.writeString(this.thirdType);
    output.writeFieldEnd();
  }
  if (this.custId !== null && this.custId !== undefined) {
    output.writeFieldBegin('custId', Thrift.Type.STRING, 4);
    output.writeString(this.custId);
    output.writeFieldEnd();
  }
  if (this.accountNo !== null && this.accountNo !== undefined) {
    output.writeFieldBegin('accountNo', Thrift.Type.STRING, 5);
    output.writeString(this.accountNo);
    output.writeFieldEnd();
  }
  if (this.extInfo !== null && this.extInfo !== undefined) {
    output.writeFieldBegin('extInfo', Thrift.Type.STRING, 6);
    output.writeString(this.extInfo);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Buyer = module.exports.Buyer = function(args) {
  this.userId = null;
  this.loginName = null;
  this.userName = null;
  this.pwdEnc = null;
  this.favImg = null;
  this.birthday = null;
  this.sex = null;
  this.idCard = null;
  this.mobile = null;
  this.tel = null;
  this.email = null;
  this.provinceId = null;
  this.cityId = null;
  this.countyId = null;
  this.provinceName = null;
  this.cityName = null;
  this.countyName = null;
  this.address = null;
  this.postCode = null;
  this.degree = null;
  this.salary = null;
  this.remark = null;
  this.serial = null;
  this.createTime = null;
  this.lastUpdateTime = null;
  if (args) {
    if (args.userId !== undefined && args.userId !== null) {
      this.userId = args.userId;
    }
    if (args.loginName !== undefined && args.loginName !== null) {
      this.loginName = args.loginName;
    }
    if (args.userName !== undefined && args.userName !== null) {
      this.userName = args.userName;
    }
    if (args.pwdEnc !== undefined && args.pwdEnc !== null) {
      this.pwdEnc = args.pwdEnc;
    }
    if (args.favImg !== undefined && args.favImg !== null) {
      this.favImg = args.favImg;
    }
    if (args.birthday !== undefined && args.birthday !== null) {
      this.birthday = args.birthday;
    }
    if (args.sex !== undefined && args.sex !== null) {
      this.sex = args.sex;
    }
    if (args.idCard !== undefined && args.idCard !== null) {
      this.idCard = args.idCard;
    }
    if (args.mobile !== undefined && args.mobile !== null) {
      this.mobile = args.mobile;
    }
    if (args.tel !== undefined && args.tel !== null) {
      this.tel = args.tel;
    }
    if (args.email !== undefined && args.email !== null) {
      this.email = args.email;
    }
    if (args.provinceId !== undefined && args.provinceId !== null) {
      this.provinceId = args.provinceId;
    }
    if (args.cityId !== undefined && args.cityId !== null) {
      this.cityId = args.cityId;
    }
    if (args.countyId !== undefined && args.countyId !== null) {
      this.countyId = args.countyId;
    }
    if (args.provinceName !== undefined && args.provinceName !== null) {
      this.provinceName = args.provinceName;
    }
    if (args.cityName !== undefined && args.cityName !== null) {
      this.cityName = args.cityName;
    }
    if (args.countyName !== undefined && args.countyName !== null) {
      this.countyName = args.countyName;
    }
    if (args.address !== undefined && args.address !== null) {
      this.address = args.address;
    }
    if (args.postCode !== undefined && args.postCode !== null) {
      this.postCode = args.postCode;
    }
    if (args.degree !== undefined && args.degree !== null) {
      this.degree = args.degree;
    }
    if (args.salary !== undefined && args.salary !== null) {
      this.salary = args.salary;
    }
    if (args.remark !== undefined && args.remark !== null) {
      this.remark = args.remark;
    }
    if (args.serial !== undefined && args.serial !== null) {
      this.serial = args.serial;
    }
    if (args.createTime !== undefined && args.createTime !== null) {
      this.createTime = args.createTime;
    }
    if (args.lastUpdateTime !== undefined && args.lastUpdateTime !== null) {
      this.lastUpdateTime = args.lastUpdateTime;
    }
  }
};
Buyer.prototype = {};
Buyer.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.userId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.loginName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.userName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.pwdEnc = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.favImg = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.birthday = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I32) {
        this.sex = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.STRING) {
        this.idCard = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.STRING) {
        this.mobile = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.STRING) {
        this.tel = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.STRING) {
        this.email = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.I32) {
        this.provinceId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 13:
      if (ftype == Thrift.Type.I32) {
        this.cityId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 14:
      if (ftype == Thrift.Type.I32) {
        this.countyId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 15:
      if (ftype == Thrift.Type.STRING) {
        this.provinceName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 16:
      if (ftype == Thrift.Type.STRING) {
        this.cityName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 17:
      if (ftype == Thrift.Type.STRING) {
        this.countyName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 18:
      if (ftype == Thrift.Type.STRING) {
        this.address = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 19:
      if (ftype == Thrift.Type.STRING) {
        this.postCode = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 20:
      if (ftype == Thrift.Type.I32) {
        this.degree = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 21:
      if (ftype == Thrift.Type.I32) {
        this.salary = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 22:
      if (ftype == Thrift.Type.STRING) {
        this.remark = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 23:
      if (ftype == Thrift.Type.I32) {
        this.serial = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 24:
      if (ftype == Thrift.Type.STRING) {
        this.createTime = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 25:
      if (ftype == Thrift.Type.STRING) {
        this.lastUpdateTime = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Buyer.prototype.write = function(output) {
  output.writeStructBegin('Buyer');
  if (this.userId !== null && this.userId !== undefined) {
    output.writeFieldBegin('userId', Thrift.Type.I32, 1);
    output.writeI32(this.userId);
    output.writeFieldEnd();
  }
  if (this.loginName !== null && this.loginName !== undefined) {
    output.writeFieldBegin('loginName', Thrift.Type.STRING, 2);
    output.writeString(this.loginName);
    output.writeFieldEnd();
  }
  if (this.userName !== null && this.userName !== undefined) {
    output.writeFieldBegin('userName', Thrift.Type.STRING, 3);
    output.writeString(this.userName);
    output.writeFieldEnd();
  }
  if (this.pwdEnc !== null && this.pwdEnc !== undefined) {
    output.writeFieldBegin('pwdEnc', Thrift.Type.STRING, 4);
    output.writeString(this.pwdEnc);
    output.writeFieldEnd();
  }
  if (this.favImg !== null && this.favImg !== undefined) {
    output.writeFieldBegin('favImg', Thrift.Type.STRING, 5);
    output.writeString(this.favImg);
    output.writeFieldEnd();
  }
  if (this.birthday !== null && this.birthday !== undefined) {
    output.writeFieldBegin('birthday', Thrift.Type.STRING, 6);
    output.writeString(this.birthday);
    output.writeFieldEnd();
  }
  if (this.sex !== null && this.sex !== undefined) {
    output.writeFieldBegin('sex', Thrift.Type.I32, 7);
    output.writeI32(this.sex);
    output.writeFieldEnd();
  }
  if (this.idCard !== null && this.idCard !== undefined) {
    output.writeFieldBegin('idCard', Thrift.Type.STRING, 8);
    output.writeString(this.idCard);
    output.writeFieldEnd();
  }
  if (this.mobile !== null && this.mobile !== undefined) {
    output.writeFieldBegin('mobile', Thrift.Type.STRING, 9);
    output.writeString(this.mobile);
    output.writeFieldEnd();
  }
  if (this.tel !== null && this.tel !== undefined) {
    output.writeFieldBegin('tel', Thrift.Type.STRING, 10);
    output.writeString(this.tel);
    output.writeFieldEnd();
  }
  if (this.email !== null && this.email !== undefined) {
    output.writeFieldBegin('email', Thrift.Type.STRING, 11);
    output.writeString(this.email);
    output.writeFieldEnd();
  }
  if (this.provinceId !== null && this.provinceId !== undefined) {
    output.writeFieldBegin('provinceId', Thrift.Type.I32, 12);
    output.writeI32(this.provinceId);
    output.writeFieldEnd();
  }
  if (this.cityId !== null && this.cityId !== undefined) {
    output.writeFieldBegin('cityId', Thrift.Type.I32, 13);
    output.writeI32(this.cityId);
    output.writeFieldEnd();
  }
  if (this.countyId !== null && this.countyId !== undefined) {
    output.writeFieldBegin('countyId', Thrift.Type.I32, 14);
    output.writeI32(this.countyId);
    output.writeFieldEnd();
  }
  if (this.provinceName !== null && this.provinceName !== undefined) {
    output.writeFieldBegin('provinceName', Thrift.Type.STRING, 15);
    output.writeString(this.provinceName);
    output.writeFieldEnd();
  }
  if (this.cityName !== null && this.cityName !== undefined) {
    output.writeFieldBegin('cityName', Thrift.Type.STRING, 16);
    output.writeString(this.cityName);
    output.writeFieldEnd();
  }
  if (this.countyName !== null && this.countyName !== undefined) {
    output.writeFieldBegin('countyName', Thrift.Type.STRING, 17);
    output.writeString(this.countyName);
    output.writeFieldEnd();
  }
  if (this.address !== null && this.address !== undefined) {
    output.writeFieldBegin('address', Thrift.Type.STRING, 18);
    output.writeString(this.address);
    output.writeFieldEnd();
  }
  if (this.postCode !== null && this.postCode !== undefined) {
    output.writeFieldBegin('postCode', Thrift.Type.STRING, 19);
    output.writeString(this.postCode);
    output.writeFieldEnd();
  }
  if (this.degree !== null && this.degree !== undefined) {
    output.writeFieldBegin('degree', Thrift.Type.I32, 20);
    output.writeI32(this.degree);
    output.writeFieldEnd();
  }
  if (this.salary !== null && this.salary !== undefined) {
    output.writeFieldBegin('salary', Thrift.Type.I32, 21);
    output.writeI32(this.salary);
    output.writeFieldEnd();
  }
  if (this.remark !== null && this.remark !== undefined) {
    output.writeFieldBegin('remark', Thrift.Type.STRING, 22);
    output.writeString(this.remark);
    output.writeFieldEnd();
  }
  if (this.serial !== null && this.serial !== undefined) {
    output.writeFieldBegin('serial', Thrift.Type.I32, 23);
    output.writeI32(this.serial);
    output.writeFieldEnd();
  }
  if (this.createTime !== null && this.createTime !== undefined) {
    output.writeFieldBegin('createTime', Thrift.Type.STRING, 24);
    output.writeString(this.createTime);
    output.writeFieldEnd();
  }
  if (this.lastUpdateTime !== null && this.lastUpdateTime !== undefined) {
    output.writeFieldBegin('lastUpdateTime', Thrift.Type.STRING, 25);
    output.writeString(this.lastUpdateTime);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

LoginLog = module.exports.LoginLog = function(args) {
  this.userId = null;
  this.tokenId = null;
  this.ip = null;
  this.browser = null;
  this.fromSource = null;
  this.loginAuto = null;
  this.loginTime = null;
  this.logoutTime = null;
  if (args) {
    if (args.userId !== undefined && args.userId !== null) {
      this.userId = args.userId;
    }
    if (args.tokenId !== undefined && args.tokenId !== null) {
      this.tokenId = args.tokenId;
    }
    if (args.ip !== undefined && args.ip !== null) {
      this.ip = args.ip;
    }
    if (args.browser !== undefined && args.browser !== null) {
      this.browser = args.browser;
    }
    if (args.fromSource !== undefined && args.fromSource !== null) {
      this.fromSource = args.fromSource;
    }
    if (args.loginAuto !== undefined && args.loginAuto !== null) {
      this.loginAuto = args.loginAuto;
    }
    if (args.loginTime !== undefined && args.loginTime !== null) {
      this.loginTime = args.loginTime;
    }
    if (args.logoutTime !== undefined && args.logoutTime !== null) {
      this.logoutTime = args.logoutTime;
    }
  }
};
LoginLog.prototype = {};
LoginLog.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.userId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.tokenId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.ip = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.browser = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I32) {
        this.fromSource = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I32) {
        this.loginAuto = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.STRING) {
        this.loginTime = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.STRING) {
        this.logoutTime = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

LoginLog.prototype.write = function(output) {
  output.writeStructBegin('LoginLog');
  if (this.userId !== null && this.userId !== undefined) {
    output.writeFieldBegin('userId', Thrift.Type.I32, 1);
    output.writeI32(this.userId);
    output.writeFieldEnd();
  }
  if (this.tokenId !== null && this.tokenId !== undefined) {
    output.writeFieldBegin('tokenId', Thrift.Type.STRING, 2);
    output.writeString(this.tokenId);
    output.writeFieldEnd();
  }
  if (this.ip !== null && this.ip !== undefined) {
    output.writeFieldBegin('ip', Thrift.Type.STRING, 3);
    output.writeString(this.ip);
    output.writeFieldEnd();
  }
  if (this.browser !== null && this.browser !== undefined) {
    output.writeFieldBegin('browser', Thrift.Type.STRING, 4);
    output.writeString(this.browser);
    output.writeFieldEnd();
  }
  if (this.fromSource !== null && this.fromSource !== undefined) {
    output.writeFieldBegin('fromSource', Thrift.Type.I32, 5);
    output.writeI32(this.fromSource);
    output.writeFieldEnd();
  }
  if (this.loginAuto !== null && this.loginAuto !== undefined) {
    output.writeFieldBegin('loginAuto', Thrift.Type.I32, 6);
    output.writeI32(this.loginAuto);
    output.writeFieldEnd();
  }
  if (this.loginTime !== null && this.loginTime !== undefined) {
    output.writeFieldBegin('loginTime', Thrift.Type.STRING, 7);
    output.writeString(this.loginTime);
    output.writeFieldEnd();
  }
  if (this.logoutTime !== null && this.logoutTime !== undefined) {
    output.writeFieldBegin('logoutTime', Thrift.Type.STRING, 8);
    output.writeString(this.logoutTime);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BuyerResult = module.exports.BuyerResult = function(args) {
  this.result = null;
  this.buyer = null;
  this.loginLog = null;
  this.value = null;
  this.thirdUser = null;
  this.authInfo = null;
  if (args) {
    if (args.result !== undefined && args.result !== null) {
      this.result = new result_ttypes.Result(args.result);
    }
    if (args.buyer !== undefined && args.buyer !== null) {
      this.buyer = new ttypes.Buyer(args.buyer);
    }
    if (args.loginLog !== undefined && args.loginLog !== null) {
      this.loginLog = new ttypes.LoginLog(args.loginLog);
    }
    if (args.value !== undefined && args.value !== null) {
      this.value = args.value;
    }
    if (args.thirdUser !== undefined && args.thirdUser !== null) {
      this.thirdUser = new ttypes.ThirdpartyUser(args.thirdUser);
    }
    if (args.authInfo !== undefined && args.authInfo !== null) {
      this.authInfo = new ttypes.AuthInfo(args.authInfo);
    }
  }
};
BuyerResult.prototype = {};
BuyerResult.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.result = new result_ttypes.Result();
        this.result.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.buyer = new ttypes.Buyer();
        this.buyer.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRUCT) {
        this.loginLog = new ttypes.LoginLog();
        this.loginLog.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.BOOL) {
        this.value = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRUCT) {
        this.thirdUser = new ttypes.ThirdpartyUser();
        this.thirdUser.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRUCT) {
        this.authInfo = new ttypes.AuthInfo();
        this.authInfo.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BuyerResult.prototype.write = function(output) {
  output.writeStructBegin('BuyerResult');
  if (this.result !== null && this.result !== undefined) {
    output.writeFieldBegin('result', Thrift.Type.STRUCT, 1);
    this.result.write(output);
    output.writeFieldEnd();
  }
  if (this.buyer !== null && this.buyer !== undefined) {
    output.writeFieldBegin('buyer', Thrift.Type.STRUCT, 2);
    this.buyer.write(output);
    output.writeFieldEnd();
  }
  if (this.loginLog !== null && this.loginLog !== undefined) {
    output.writeFieldBegin('loginLog', Thrift.Type.STRUCT, 3);
    this.loginLog.write(output);
    output.writeFieldEnd();
  }
  if (this.value !== null && this.value !== undefined) {
    output.writeFieldBegin('value', Thrift.Type.BOOL, 4);
    output.writeBool(this.value);
    output.writeFieldEnd();
  }
  if (this.thirdUser !== null && this.thirdUser !== undefined) {
    output.writeFieldBegin('thirdUser', Thrift.Type.STRUCT, 5);
    this.thirdUser.write(output);
    output.writeFieldEnd();
  }
  if (this.authInfo !== null && this.authInfo !== undefined) {
    output.writeFieldBegin('authInfo', Thrift.Type.STRUCT, 6);
    this.authInfo.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

