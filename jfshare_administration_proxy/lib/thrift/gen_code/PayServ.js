//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;

var result_ttypes = require('./result_types')


var ttypes = require('./pay_types');
//HELPER FUNCTIONS AND STRUCTURES

PayServ_payUrl_args = function(args) {
  this.payReq = null;
  if (args) {
    if (args.payReq !== undefined) {
      this.payReq = args.payReq;
    }
  }
};
PayServ_payUrl_args.prototype = {};
PayServ_payUrl_args.prototype.read = function(input) {
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
        this.payReq = new ttypes.PayReq();
        this.payReq.read(input);
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

PayServ_payUrl_args.prototype.write = function(output) {
  output.writeStructBegin('PayServ_payUrl_args');
  if (this.payReq !== null && this.payReq !== undefined) {
    output.writeFieldBegin('payReq', Thrift.Type.STRUCT, 1);
    this.payReq.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

PayServ_payUrl_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
PayServ_payUrl_result.prototype = {};
PayServ_payUrl_result.prototype.read = function(input) {
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
        this.success = new result_ttypes.StringResult();
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

PayServ_payUrl_result.prototype.write = function(output) {
  output.writeStructBegin('PayServ_payUrl_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

PayServ_payNotify_args = function(args) {
  this.payRes = null;
  if (args) {
    if (args.payRes !== undefined) {
      this.payRes = args.payRes;
    }
  }
};
PayServ_payNotify_args.prototype = {};
PayServ_payNotify_args.prototype.read = function(input) {
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
        this.payRes = new ttypes.PayRes();
        this.payRes.read(input);
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

PayServ_payNotify_args.prototype.write = function(output) {
  output.writeStructBegin('PayServ_payNotify_args');
  if (this.payRes !== null && this.payRes !== undefined) {
    output.writeFieldBegin('payRes', Thrift.Type.STRUCT, 1);
    this.payRes.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

PayServ_payNotify_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
PayServ_payNotify_result.prototype = {};
PayServ_payNotify_result.prototype.read = function(input) {
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
        this.success = new result_ttypes.StringResult();
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

PayServ_payNotify_result.prototype.write = function(output) {
  output.writeStructBegin('PayServ_payNotify_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

PayServClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
PayServClient.prototype = {};
PayServClient.prototype.seqid = function() { return this._seqid; }
PayServClient.prototype.new_seqid = function() { return this._seqid += 1; }
PayServClient.prototype.payUrl = function(payReq, callback) {
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
    this.send_payUrl(payReq);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_payUrl(payReq);
  }
};

PayServClient.prototype.send_payUrl = function(payReq) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('payUrl', Thrift.MessageType.CALL, this.seqid());
  var args = new PayServ_payUrl_args();
  args.payReq = payReq;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

PayServClient.prototype.recv_payUrl = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new PayServ_payUrl_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('payUrl failed: unknown result');
};
PayServClient.prototype.payNotify = function(payRes, callback) {
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
    this.send_payNotify(payRes);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_payNotify(payRes);
  }
};

PayServClient.prototype.send_payNotify = function(payRes) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('payNotify', Thrift.MessageType.CALL, this.seqid());
  var args = new PayServ_payNotify_args();
  args.payRes = payRes;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

PayServClient.prototype.recv_payNotify = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new PayServ_payNotify_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('payNotify failed: unknown result');
};
PayServProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
PayServProcessor.prototype.process = function(input, output) {
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

PayServProcessor.prototype.process_payUrl = function(seqid, input, output) {
  var args = new PayServ_payUrl_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.payUrl.length === 1) {
    Q.fcall(this._handler.payUrl, args.payReq)
      .then(function(result) {
        var result = new PayServ_payUrl_result({success: result});
        output.writeMessageBegin("payUrl", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new PayServ_payUrl_result(err);
        output.writeMessageBegin("payUrl", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.payUrl(args.payReq,  function (err, result) {
      var result = new PayServ_payUrl_result((err != null ? err : {success: result}));
      output.writeMessageBegin("payUrl", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

PayServProcessor.prototype.process_payNotify = function(seqid, input, output) {
  var args = new PayServ_payNotify_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.payNotify.length === 1) {
    Q.fcall(this._handler.payNotify, args.payRes)
      .then(function(result) {
        var result = new PayServ_payNotify_result({success: result});
        output.writeMessageBegin("payNotify", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new PayServ_payNotify_result(err);
        output.writeMessageBegin("payNotify", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.payNotify(args.payRes,  function (err, result) {
      var result = new PayServ_payNotify_result((err != null ? err : {success: result}));
      output.writeMessageBegin("payNotify", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}
