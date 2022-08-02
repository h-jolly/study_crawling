const request = require('request');

// 네이버 주소 가져오기
const url = 'https://www.naver.com';

request(url, (err, res, body) => {
  console.log(body);
});
