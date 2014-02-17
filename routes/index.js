var upload = require('../lib/upload');

exports.index = function(req, res) {
  res.render('index', { title: 'Improvise Server'});
};

exports.upload = function(req, res) {
  upload.uploadFile(req, res, function(err) {
    if(err) {
      res.send({upload: 'failed'});
    }
    else {
      res.send({upload: 'sucess'});
    }
  });
};
