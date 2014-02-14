var upload = require('../lib/upload');

exports.index = function(req, res) {
  res.send({hello: 'world!'});
};

exports.upload = function(req, res) {
  upload.uploadFile(req, res, function() {
    res.send({upload: 'upload'});
  });
};
