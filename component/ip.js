/*
 * @Author: dctxf
 * @Date:   2017-04-26 10:15:11
 * @Last Modified by:   dctxf
 * @Last Modified time: 2017-04-26 10:22:41
 */

'use strict';

const os = require('os');
module.exports = function () {
  const network = os.networkInterfaces();
  for (let i = 0; i < network.en0.length; i++) {
    var json = network.en0[i];
    if (json.family == 'IPv4') {
      return json.address;
    }
  }
}

