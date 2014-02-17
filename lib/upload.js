var fs = require('fs');

var api = {};
api.name = 'upload';
module.exports = api;

api.uploadFile = function uploadFile(req, res, callback) {
  // grab file info
  var filePath = req.files.fileUpload.path;
  var fileOName = req.files.fileUpload.originalFilename;
  var fileName = req.files.fileUpload.name;
  var fileSize = req.files.fileUpload.size;
  var fileType = req.files.fileUpload.type;

  // check for valid file type
  if(fileType === 'audio/mpeg') {
    saveFile(filePath, fileName, callback);
  }
  else {
    callback('invalid file');
  }
};

var saveFile = function saveFile(path, name, callback) {
  // read file from uploaded path
  fs.readFile(path, function(err, data) {
    if(err) {
      console.log('[saveFile] Error: fs.readFile()', err);
      callback(err);
    }
    else {
      // save file to app path
      var uploadPath = __dirname+'/../uploads/'+name;
      console.log(uploadPath);
      fs.writeFile(uploadPath, data, function(err) {
        if(err) {
          console.log('[saveFile] Error: fs.writeFile()', err);
          callback(err);
        }
        else {
          console.log('[saveFile] Success. Wrote file: '+name);
          callback(null);
        }
      });
    }
  });
};
