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
        var _size8 = 0;
        var _rtmp312;
        this.idList = [];
        var _etype11 = 0;
        _rtmp312 = input.readListBegin();
        _etype11 = _rtmp312.etype;
        _size8 = _rtmp312.size;
        for (var _i13 = 0; _i13 < _size8; ++_i13)
        {
          var elem14 = null;
          elem14 = input.readI32();
          this.idList.push(elem14);
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
    for (var iter15 in this.idList)
    {
      if (this.idList.hasOwnProperty(iter15))
      {
        iter15 = this.idList[iter15];
        output.writeI32(iter15);
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

