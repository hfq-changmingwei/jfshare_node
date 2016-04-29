//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;

var result_ttypes = require('./result_types')


var ttypes = require('./brand_types');
//HELPER FUNCTIONS AND STRUCTURES

BrandServ_addBrand_args = function(args) {
  this.brand = null;
  if (args) {
    if (args.brand !== undefined) {
      this.brand = args.brand;
    }
  }
};
BrandServ_addBrand_args.prototype = {};
BrandServ_addBrand_args.prototype.read = function(input) {
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
        this.brand = new ttypes.BrandInfo();
        this.brand.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BrandServ_addBrand_args.prototype.write = function(output) {
  output.writeStructBegin('BrandServ_addBrand_args');
  if (this.brand !== null && this.brand !== undefined) {
    output.writeFieldBegin('brand', Thrift.Type.STRUCT, 1);
    this.brand.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BrandServ_addBrand_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
BrandServ_addBrand_result.prototype = {};
BrandServ_addBrand_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new result_ttypes.Result();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BrandServ_addBrand_result.prototype.write = function(output) {
  output.writeStructBegin('BrandServ_addBrand_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BrandServ_updateBrand_args = function(args) {
  this.brand = null;
  if (args) {
    if (args.brand !== undefined) {
      this.brand = args.brand;
    }
  }
};
BrandServ_updateBrand_args.prototype = {};
BrandServ_updateBrand_args.prototype.read = function(input) {
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
        this.brand = new ttypes.BrandInfo();
        this.brand.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BrandServ_updateBrand_args.prototype.write = function(output) {
  output.writeStructBegin('BrandServ_updateBrand_args');
  if (this.brand !== null && this.brand !== undefined) {
    output.writeFieldBegin('brand', Thrift.Type.STRUCT, 1);
    this.brand.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BrandServ_updateBrand_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
BrandServ_updateBrand_result.prototype = {};
BrandServ_updateBrand_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new result_ttypes.Result();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BrandServ_updateBrand_result.prototype.write = function(output) {
  output.writeStructBegin('BrandServ_updateBrand_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BrandServ_deleteBrand_args = function(args) {
  this.id = null;
  if (args) {
    if (args.id !== undefined) {
      this.id = args.id;
    }
  }
};
BrandServ_deleteBrand_args.prototype = {};
BrandServ_deleteBrand_args.prototype.read = function(input) {
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
        this.id = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BrandServ_deleteBrand_args.prototype.write = function(output) {
  output.writeStructBegin('BrandServ_deleteBrand_args');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I32, 1);
    output.writeI32(this.id);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BrandServ_deleteBrand_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
BrandServ_deleteBrand_result.prototype = {};
BrandServ_deleteBrand_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new result_ttypes.Result();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BrandServ_deleteBrand_result.prototype.write = function(output) {
  output.writeStructBegin('BrandServ_deleteBrand_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BrandServ_deleteBrandBatch_args = function(args) {
  this.brands = null;
  if (args) {
    if (args.brands !== undefined) {
      this.brands = args.brands;
    }
  }
};
BrandServ_deleteBrandBatch_args.prototype = {};
BrandServ_deleteBrandBatch_args.prototype.read = function(input) {
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
        var _size16 = 0;
        var _rtmp320;
        this.brands = [];
        var _etype19 = 0;
        _rtmp320 = input.readListBegin();
        _etype19 = _rtmp320.etype;
        _size16 = _rtmp320.size;
        for (var _i21 = 0; _i21 < _size16; ++_i21)
        {
          var elem22 = null;
          elem22 = new ttypes.BrandInfo();
          elem22.read(input);
          this.brands.push(elem22);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BrandServ_deleteBrandBatch_args.prototype.write = function(output) {
  output.writeStructBegin('BrandServ_deleteBrandBatch_args');
  if (this.brands !== null && this.brands !== undefined) {
    output.writeFieldBegin('brands', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.brands.length);
    for (var iter23 in this.brands)
    {
      if (this.brands.hasOwnProperty(iter23))
      {
        iter23 = this.brands[iter23];
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

BrandServ_deleteBrandBatch_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
BrandServ_deleteBrandBatch_result.prototype = {};
BrandServ_deleteBrandBatch_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new result_ttypes.Result();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BrandServ_deleteBrandBatch_result.prototype.write = function(output) {
  output.writeStructBegin('BrandServ_deleteBrandBatch_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BrandServ_query_args = function(args) {
};
BrandServ_query_args.prototype = {};
BrandServ_query_args.prototype.read = function(input) {
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
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BrandServ_query_args.prototype.write = function(output) {
  output.writeStructBegin('BrandServ_query_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BrandServ_query_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
BrandServ_query_result.prototype = {};
BrandServ_query_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.BrandResult();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BrandServ_query_result.prototype.write = function(output) {
  output.writeStructBegin('BrandServ_query_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BrandServ_queryByPage_args = function(args) {
  this.param = null;
  if (args) {
    if (args.param !== undefined) {
      this.param = args.param;
    }
  }
};
BrandServ_queryByPage_args.prototype = {};
BrandServ_queryByPage_args.prototype.read = function(input) {
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
        this.param = new ttypes.QueryParam();
        this.param.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BrandServ_queryByPage_args.prototype.write = function(output) {
  output.writeStructBegin('BrandServ_queryByPage_args');
  if (this.param !== null && this.param !== undefined) {
    output.writeFieldBegin('param', Thrift.Type.STRUCT, 1);
    this.param.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BrandServ_queryByPage_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
BrandServ_queryByPage_result.prototype = {};
BrandServ_queryByPage_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.BrandResult();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BrandServ_queryByPage_result.prototype.write = function(output) {
  output.writeStructBegin('BrandServ_queryByPage_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BrandServ_queryBatch_args = function(args) {
  this.idList = null;
  if (args) {
    if (args.idList !== undefined) {
      this.idList = args.idList;
    }
  }
};
BrandServ_queryBatch_args.prototype = {};
BrandServ_queryBatch_args.prototype.read = function(input) {
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
        this.idList = [];
        var _etype27 = 0;
        _rtmp328 = input.readListBegin();
        _etype27 = _rtmp328.etype;
        _size24 = _rtmp328.size;
        for (var _i29 = 0; _i29 < _size24; ++_i29)
        {
          var elem30 = null;
          elem30 = input.readI32();
          this.idList.push(elem30);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BrandServ_queryBatch_args.prototype.write = function(output) {
  output.writeStructBegin('BrandServ_queryBatch_args');
  if (this.idList !== null && this.idList !== undefined) {
    output.writeFieldBegin('idList', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.I32, this.idList.length);
    for (var iter31 in this.idList)
    {
      if (this.idList.hasOwnProperty(iter31))
      {
        iter31 = this.idList[iter31];
        output.writeI32(iter31);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BrandServ_queryBatch_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
BrandServ_queryBatch_result.prototype = {};
BrandServ_queryBatch_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.BrandResult();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BrandServ_queryBatch_result.prototype.write = function(output) {
  output.writeStructBegin('BrandServ_queryBatch_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BrandServClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
BrandServClient.prototype = {};
BrandServClient.prototype.seqid = function() { return this._seqid; }
BrandServClient.prototype.new_seqid = function() { return this._seqid += 1; }
BrandServClient.prototype.addBrand = function(brand, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_addBrand(brand);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_addBrand(brand);
  }
};

BrandServClient.prototype.send_addBrand = function(brand) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('addBrand', Thrift.MessageType.CALL, this.seqid());
  var args = new BrandServ_addBrand_args();
  args.brand = brand;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BrandServClient.prototype.recv_addBrand = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BrandServ_addBrand_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('addBrand failed: unknown result');
};
BrandServClient.prototype.updateBrand = function(brand, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_updateBrand(brand);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_updateBrand(brand);
  }
};

BrandServClient.prototype.send_updateBrand = function(brand) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('updateBrand', Thrift.MessageType.CALL, this.seqid());
  var args = new BrandServ_updateBrand_args();
  args.brand = brand;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BrandServClient.prototype.recv_updateBrand = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BrandServ_updateBrand_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('updateBrand failed: unknown result');
};
BrandServClient.prototype.deleteBrand = function(id, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_deleteBrand(id);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_deleteBrand(id);
  }
};

BrandServClient.prototype.send_deleteBrand = function(id) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('deleteBrand', Thrift.MessageType.CALL, this.seqid());
  var args = new BrandServ_deleteBrand_args();
  args.id = id;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BrandServClient.prototype.recv_deleteBrand = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BrandServ_deleteBrand_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('deleteBrand failed: unknown result');
};
BrandServClient.prototype.deleteBrandBatch = function(brands, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_deleteBrandBatch(brands);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_deleteBrandBatch(brands);
  }
};

BrandServClient.prototype.send_deleteBrandBatch = function(brands) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('deleteBrandBatch', Thrift.MessageType.CALL, this.seqid());
  var args = new BrandServ_deleteBrandBatch_args();
  args.brands = brands;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BrandServClient.prototype.recv_deleteBrandBatch = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BrandServ_deleteBrandBatch_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('deleteBrandBatch failed: unknown result');
};
BrandServClient.prototype.query = function(callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_query();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_query();
  }
};

BrandServClient.prototype.send_query = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('query', Thrift.MessageType.CALL, this.seqid());
  var args = new BrandServ_query_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BrandServClient.prototype.recv_query = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BrandServ_query_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('query failed: unknown result');
};
BrandServClient.prototype.queryByPage = function(param, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_queryByPage(param);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_queryByPage(param);
  }
};

BrandServClient.prototype.send_queryByPage = function(param) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('queryByPage', Thrift.MessageType.CALL, this.seqid());
  var args = new BrandServ_queryByPage_args();
  args.param = param;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BrandServClient.prototype.recv_queryByPage = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BrandServ_queryByPage_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('queryByPage failed: unknown result');
};
BrandServClient.prototype.queryBatch = function(idList, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_queryBatch(idList);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_queryBatch(idList);
  }
};

BrandServClient.prototype.send_queryBatch = function(idList) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('queryBatch', Thrift.MessageType.CALL, this.seqid());
  var args = new BrandServ_queryBatch_args();
  args.idList = idList;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BrandServClient.prototype.recv_queryBatch = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BrandServ_queryBatch_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('queryBatch failed: unknown result');
};
BrandServProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
BrandServProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}

BrandServProcessor.prototype.process_addBrand = function(seqid, input, output) {
  var args = new BrandServ_addBrand_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.addBrand.length === 1) {
    Q.fcall(this._handler.addBrand, args.brand)
      .then(function(result) {
        var result = new BrandServ_addBrand_result({success: result});
        output.writeMessageBegin("addBrand", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new BrandServ_addBrand_result(err);
        output.writeMessageBegin("addBrand", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.addBrand(args.brand,  function (err, result) {
      var result = new BrandServ_addBrand_result((err != null ? err : {success: result}));
      output.writeMessageBegin("addBrand", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

BrandServProcessor.prototype.process_updateBrand = function(seqid, input, output) {
  var args = new BrandServ_updateBrand_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.updateBrand.length === 1) {
    Q.fcall(this._handler.updateBrand, args.brand)
      .then(function(result) {
        var result = new BrandServ_updateBrand_result({success: result});
        output.writeMessageBegin("updateBrand", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new BrandServ_updateBrand_result(err);
        output.writeMessageBegin("updateBrand", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.updateBrand(args.brand,  function (err, result) {
      var result = new BrandServ_updateBrand_result((err != null ? err : {success: result}));
      output.writeMessageBegin("updateBrand", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

BrandServProcessor.prototype.process_deleteBrand = function(seqid, input, output) {
  var args = new BrandServ_deleteBrand_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.deleteBrand.length === 1) {
    Q.fcall(this._handler.deleteBrand, args.id)
      .then(function(result) {
        var result = new BrandServ_deleteBrand_result({success: result});
        output.writeMessageBegin("deleteBrand", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new BrandServ_deleteBrand_result(err);
        output.writeMessageBegin("deleteBrand", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.deleteBrand(args.id,  function (err, result) {
      var result = new BrandServ_deleteBrand_result((err != null ? err : {success: result}));
      output.writeMessageBegin("deleteBrand", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

BrandServProcessor.prototype.process_deleteBrandBatch = function(seqid, input, output) {
  var args = new BrandServ_deleteBrandBatch_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.deleteBrandBatch.length === 1) {
    Q.fcall(this._handler.deleteBrandBatch, args.brands)
      .then(function(result) {
        var result = new BrandServ_deleteBrandBatch_result({success: result});
        output.writeMessageBegin("deleteBrandBatch", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new BrandServ_deleteBrandBatch_result(err);
        output.writeMessageBegin("deleteBrandBatch", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.deleteBrandBatch(args.brands,  function (err, result) {
      var result = new BrandServ_deleteBrandBatch_result((err != null ? err : {success: result}));
      output.writeMessageBegin("deleteBrandBatch", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

BrandServProcessor.prototype.process_query = function(seqid, input, output) {
  var args = new BrandServ_query_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.query.length === 0) {
    Q.fcall(this._handler.query)
      .then(function(result) {
        var result = new BrandServ_query_result({success: result});
        output.writeMessageBegin("query", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new BrandServ_query_result(err);
        output.writeMessageBegin("query", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.query( function (err, result) {
      var result = new BrandServ_query_result((err != null ? err : {success: result}));
      output.writeMessageBegin("query", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

BrandServProcessor.prototype.process_queryByPage = function(seqid, input, output) {
  var args = new BrandServ_queryByPage_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.queryByPage.length === 1) {
    Q.fcall(this._handler.queryByPage, args.param)
      .then(function(result) {
        var result = new BrandServ_queryByPage_result({success: result});
        output.writeMessageBegin("queryByPage", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new BrandServ_queryByPage_result(err);
        output.writeMessageBegin("queryByPage", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.queryByPage(args.param,  function (err, result) {
      var result = new BrandServ_queryByPage_result((err != null ? err : {success: result}));
      output.writeMessageBegin("queryByPage", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

BrandServProcessor.prototype.process_queryBatch = function(seqid, input, output) {
  var args = new BrandServ_queryBatch_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.queryBatch.length === 1) {
    Q.fcall(this._handler.queryBatch, args.idList)
      .then(function(result) {
        var result = new BrandServ_queryBatch_result({success: result});
        output.writeMessageBegin("queryBatch", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new BrandServ_queryBatch_result(err);
        output.writeMessageBegin("queryBatch", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.queryBatch(args.idList,  function (err, result) {
      var result = new BrandServ_queryBatch_result((err != null ? err : {success: result}));
      output.writeMessageBegin("queryBatch", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}
