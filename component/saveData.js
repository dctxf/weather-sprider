/*
 * @Author: dctxf
 * @Date:   2017-04-26 10:36:22
 * @Last Modified by:   dctxf
 * @Last Modified time: 2017-04-26 10:53:14
 */

'use strict';
const fs = require('fs');
const DIR = '../data/';
/*fs.writeFile('../data/weather.json', { "title": "dctxf" }, function (err) {
  if (err) {
    console.log(err)
  }
});
*/
isDir(DIR, createDir);
// 判断是否存在目录
function isDir(DIR, errCallback, successCallback) {
  fs.readdir(DIR, function (err, files) {
    if (err) {
      errCallback.call(this, DIR);
    } else {
      files.forEach(function (file) {
        console.log(file);
      });
    }
  });
}
// 创建目录
function createDir(DIR) {
  console.log('目录不存在，开始创建目录');
  fs.mkdir(DIR, function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log('目录创建成功');
    }
  });
}

