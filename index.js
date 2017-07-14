/*
 * @Author: dctxf
 * @Date:   2017-04-26 10:02:12
 * @Last Modified by:   dctxf
 * @Last Modified time: 2017-04-26 10:32:58
 */

'use strict';
const express = require('express');
const cheerio = require('cheerio');
const superagent = require('superagent');
const ip = require('./component/ip');

const app = express();

const PORT = 3000;
const API = 'http://www.weather.com.cn/weather/101010100.shtml';

app.get('/', function (req, res, next) {
  superagent.get(API)
    .end(function (err, sres) {
      if (err) {
        return next(err);
      }
      const $ = cheerio.load(sres.text),
        items = [];
      $('#7d .sky').each(function (idx, el) {
        const $el = $(el);
        items.push({
          day: $el.find('h1').text(),
          weather: $el.find('.wea').text(),
          tem: $el.find('.tem').text(),
          win: $el.find('.win').text()
        });
      });
      res.send(items);
    })
});

app.listen(PORT, function () {
  console.log('app is running at http://' + ip() + ':' + PORT);
})

