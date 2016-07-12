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
StockItem = module.exports.StockItem = function(args) {
  this.skuNum = null;
  this.count = null;
  this.lockCount = null;
  this.storehouseId = null;
  if (args) {
    if (args.skuNum !== undefined && args.skuNum !== null) {
      this.skuNum = args.skuNum;
    }
    if (args.count !== undefined && args.count !== null) {
      this.count = args.count;
    }
    if (args.lockCount !== undefined && args.lockCount !== null) {
      this.lockCount = args.lockCount;
    }
    if (args.storehouseId !== undefined && args.storehouseId !== null) {
      this.storehouseId = args.storehouseId;
    }
  }
};
StockItem.prototype = {};
StockItem.prototype.read = function(input) {
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
        this.skuNum = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.count = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.lockCount = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.storehouseId = input.readI32();
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

StockItem.prototype.write = function(output) {
  output.writeStructBegin('StockItem');
  if (this.skuNum !== null && this.skuNum !== undefined) {
    output.writeFieldBegin('skuNum', Thrift.Type.STRING, 1);
    output.writeString(this.skuNum);
    output.writeFieldEnd();
  }
  if (this.count !== null && this.count !== undefined) {
    output.writeFieldBegin('count', Thrift.Type.I32, 2);
    output.writeI32(this.count);
    output.writeFieldEnd();
  }
  if (this.lockCount !== null && this.lockCount !== undefined) {
    output.writeFieldBegin('lockCount', Thrift.Type.I32, 3);
    output.writeI32(this.lockCount);
    output.writeFieldEnd();
  }
  if (this.storehouseId !== null && this.storehouseId !== undefined) {
    output.writeFieldBegin('storehouseId', Thrift.Type.I32, 4);
    output.writeI32(this.storehouseId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

StockInfo = module.exports.StockInfo = function(args) {
  this.total = null;
  this.lockTotal = null;
  this.productId = null;
  this.stockItems = null;
  if (args) {
    if (args.total !== undefined && args.total !== null) {
      this.total = args.total;
    }
    if (args.lockTotal !== undefined && args.lockTotal !== null) {
      this.lockTotal = args.lockTotal;
    }
    if (args.productId !== undefined && args.productId !== null) {
      this.productId = args.productId;
    }
    if (args.stockItems !== undefined && args.stockItems !== null) {
      this.stockItems = Thrift.copyList(args.stockItems, [ttypes.StockItem]);
    }
  }
};
StockInfo.prototype = {};
StockInfo.prototype.read = function(input) {
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
        this.total = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.lockTotal = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.productId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.stockItems = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new ttypes.StockItem();
          elem6.read(input);
          this.stockItems.push(elem6);
        }
        input.readListEnd();
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

StockInfo.prototype.write = function(output) {
  output.writeStructBegin('StockInfo');
  if (this.total !== null && this.total !== undefined) {
    output.writeFieldBegin('total', Thrift.Type.I32, 1);
    output.writeI32(this.total);
    output.writeFieldEnd();
  }
  if (this.lockTotal !== null && this.lockTotal !== undefined) {
    output.writeFieldBegin('lockTotal', Thrift.Type.I32, 2);
    output.writeI32(this.lockTotal);
    output.writeFieldEnd();
  }
  if (this.productId !== null && this.productId !== undefined) {
    output.writeFieldBegin('productId', Thrift.Type.STRING, 3);
    output.writeString(this.productId);
    output.writeFieldEnd();
  }
  if (this.stockItems !== null && this.stockItems !== undefined) {
    output.writeFieldBegin('stockItems', Thrift.Type.LIST, 4);
    output.writeListBegin(Thrift.Type.STRUCT, this.stockItems.length);
    for (var iter7 in this.stockItems)
    {
      if (this.stockItems.hasOwnProperty(iter7))
      {
        iter7 = this.stockItems[iter7];
        iter7.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

StockResult = module.exports.StockResult = function(args) {
  this.result = null;
  this.stockInfo = null;
  if (args) {
    if (args.result !== undefined && args.result !== null) {
      this.result = new result_ttypes.Result(args.result);
    }
    if (args.stockInfo !== undefined && args.stockInfo !== null) {
      this.stockInfo = new ttypes.StockInfo(args.stockInfo);
    }
  }
};
StockResult.prototype = {};
StockResult.prototype.read = function(input) {
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
        this.stockInfo = new ttypes.StockInfo();
        this.stockInfo.read(input);
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

StockResult.prototype.write = function(output) {
  output.writeStructBegin('StockResult');
  if (this.result !== null && this.result !== undefined) {
    output.writeFieldBegin('result', Thrift.Type.STRUCT, 1);
    this.result.write(output);
    output.writeFieldEnd();
  }
  if (this.stockInfo !== null && this.stockInfo !== undefined) {
    output.writeFieldBegin('stockInfo', Thrift.Type.STRUCT, 2);
    this.stockInfo.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BatchStockResult = module.exports.BatchStockResult = function(args) {
  this.result = null;
  this.stockInfos = null;
  if (args) {
    if (args.result !== undefined && args.result !== null) {
      this.result = new result_ttypes.Result(args.result);
    }
    if (args.stockInfos !== undefined && args.stockInfos !== null) {
      this.stockInfos = Thrift.copyList(args.stockInfos, [ttypes.StockInfo]);
    }
  }
};
BatchStockResult.prototype = {};
BatchStockResult.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.LIST) {
        var _size8 = 0;
        var _rtmp312;
        this.stockInfos = [];
        var _etype11 = 0;
        _rtmp312 = input.readListBegin();
        _etype11 = _rtmp312.etype;
        _size8 = _rtmp312.size;
        for (var _i13 = 0; _i13 < _size8; ++_i13)
        {
          var elem14 = null;
          elem14 = new ttypes.StockInfo();
          elem14.read(input);
          this.stockInfos.push(elem14);
        }
        input.readListEnd();
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

BatchStockResult.prototype.write = function(output) {
  output.writeStructBegin('BatchStockResult');
  if (this.result !== null && this.result !== undefined) {
    output.writeFieldBegin('result', Thrift.Type.STRUCT, 1);
    this.result.write(output);
    output.writeFieldEnd();
  }
  if (this.stockInfos !== null && this.stockInfos !== undefined) {
    output.writeFieldBegin('stockInfos', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRUCT, this.stockInfos.length);
    for (var iter15 in this.stockInfos)
    {
      if (this.stockInfos.hasOwnProperty(iter15))
      {
        iter15 = this.stockInfos[iter15];
        iter15.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

LockInfo = module.exports.LockInfo = function(args) {
  this.productId = null;
  this.skuNum = null;
  this.applyCount = null;
  this.lockCount = null;
  this.storehouseId = null;
  if (args) {
    if (args.productId !== undefined && args.productId !== null) {
      this.productId = args.productId;
    }
    if (args.skuNum !== undefined && args.skuNum !== null) {
      this.skuNum = args.skuNum;
    }
    if (args.applyCount !== undefined && args.applyCount !== null) {
      this.applyCount = args.applyCount;
    }
    if (args.lockCount !== undefined && args.lockCount !== null) {
      this.lockCount = args.lockCount;
    }
    if (args.storehouseId !== undefined && args.storehouseId !== null) {
      this.storehouseId = args.storehouseId;
    }
  }
};
LockInfo.prototype = {};
LockInfo.prototype.read = function(input) {
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
        this.productId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.skuNum = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.applyCount = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.lockCount = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I32) {
        this.storehouseId = input.readI32();
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

LockInfo.prototype.write = function(output) {
  output.writeStructBegin('LockInfo');
  if (this.productId !== null && this.productId !== undefined) {
    output.writeFieldBegin('productId', Thrift.Type.STRING, 1);
    output.writeString(this.productId);
    output.writeFieldEnd();
  }
  if (this.skuNum !== null && this.skuNum !== undefined) {
    output.writeFieldBegin('skuNum', Thrift.Type.STRING, 2);
    output.writeString(this.skuNum);
    output.writeFieldEnd();
  }
  if (this.applyCount !== null && this.applyCount !== undefined) {
    output.writeFieldBegin('applyCount', Thrift.Type.I32, 3);
    output.writeI32(this.applyCount);
    output.writeFieldEnd();
  }
  if (this.lockCount !== null && this.lockCount !== undefined) {
    output.writeFieldBegin('lockCount', Thrift.Type.I32, 4);
    output.writeI32(this.lockCount);
    output.writeFieldEnd();
  }
  if (this.storehouseId !== null && this.storehouseId !== undefined) {
    output.writeFieldBegin('storehouseId', Thrift.Type.I32, 5);
    output.writeI32(this.storehouseId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

LockStockResult = module.exports.LockStockResult = function(args) {
  this.result = null;
  this.lockInfoList = null;
  if (args) {
    if (args.result !== undefined && args.result !== null) {
      this.result = new result_ttypes.Result(args.result);
    }
    if (args.lockInfoList !== undefined && args.lockInfoList !== null) {
      this.lockInfoList = Thrift.copyList(args.lockInfoList, [ttypes.LockInfo]);
    }
  }
};
LockStockResult.prototype = {};
LockStockResult.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.LIST) {
        var _size16 = 0;
        var _rtmp320;
        this.lockInfoList = [];
        var _etype19 = 0;
        _rtmp320 = input.readListBegin();
        _etype19 = _rtmp320.etype;
        _size16 = _rtmp320.size;
        for (var _i21 = 0; _i21 < _size16; ++_i21)
        {
          var elem22 = null;
          elem22 = new ttypes.LockInfo();
          elem22.read(input);
          this.lockInfoList.push(elem22);
        }
        input.readListEnd();
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

LockStockResult.prototype.write = function(output) {
  output.writeStructBegin('LockStockResult');
  if (this.result !== null && this.result !== undefined) {
    output.writeFieldBegin('result', Thrift.Type.STRUCT, 1);
    this.result.write(output);
    output.writeFieldEnd();
  }
  if (this.lockInfoList !== null && this.lockInfoList !== undefined) {
    output.writeFieldBegin('lockInfoList', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRUCT, this.lockInfoList.length);
    for (var iter23 in this.lockInfoList)
    {
      if (this.lockInfoList.hasOwnProperty(iter23))
      {
        iter23 = this.lockInfoList[iter23];
        iter23.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BatchQueryParam = module.exports.BatchQueryParam = function(args) {
  this.queryContents = null;
  this.queryType = null;
  if (args) {
    if (args.queryContents !== undefined && args.queryContents !== null) {
      this.queryContents = Thrift.copyList(args.queryContents, [null]);
    }
    if (args.queryType !== undefined && args.queryType !== null) {
      this.queryType = args.queryType;
    }
  }
};
BatchQueryParam.prototype = {};
BatchQueryParam.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.LIST) {
        var _size24 = 0;
        var _rtmp328;
        this.queryContents = [];
        var _etype27 = 0;
        _rtmp328 = input.readListBegin();
        _etype27 = _rtmp328.etype;
        _size24 = _rtmp328.size;
        for (var _i29 = 0; _i29 < _size24; ++_i29)
        {
          var elem30 = null;
          elem30 = input.readString();
          this.queryContents.push(elem30);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.queryType = input.readString();
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

BatchQueryParam.prototype.write = function(output) {
  output.writeStructBegin('BatchQueryParam');
  if (this.queryContents !== null && this.queryContents !== undefined) {
    output.writeFieldBegin('queryContents', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRING, this.queryContents.length);
    for (var iter31 in this.queryContents)
    {
      if (this.queryContents.hasOwnProperty(iter31))
      {
        iter31 = this.queryContents[iter31];
        output.writeString(iter31);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.queryType !== null && this.queryType !== undefined) {
    output.writeFieldBegin('queryType', Thrift.Type.STRING, 2);
    output.writeString(this.queryType);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

QueryParam = module.exports.QueryParam = function(args) {
  this.productId = null;
  this.storehouseId = null;
  this.skuNum = null;
  if (args) {
    if (args.productId !== undefined && args.productId !== null) {
      this.productId = args.productId;
    }
    if (args.storehouseId !== undefined && args.storehouseId !== null) {
      this.storehouseId = args.storehouseId;
    }
    if (args.skuNum !== undefined && args.skuNum !== null) {
      this.skuNum = args.skuNum;
    }
  }
};
QueryParam.prototype = {};
QueryParam.prototype.read = function(input) {
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
        this.productId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.storehouseId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.skuNum = input.readString();
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

QueryParam.prototype.write = function(output) {
  output.writeStructBegin('QueryParam');
  if (this.productId !== null && this.productId !== undefined) {
    output.writeFieldBegin('productId', Thrift.Type.STRING, 1);
    output.writeString(this.productId);
    output.writeFieldEnd();
  }
  if (this.storehouseId !== null && this.storehouseId !== undefined) {
    output.writeFieldBegin('storehouseId', Thrift.Type.I32, 2);
    output.writeI32(this.storehouseId);
    output.writeFieldEnd();
  }
  if (this.skuNum !== null && this.skuNum !== undefined) {
    output.writeFieldBegin('skuNum', Thrift.Type.STRING, 3);
    output.writeString(this.skuNum);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};
