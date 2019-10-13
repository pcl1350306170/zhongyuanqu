<?php
$arr = '{code: 0,count: 1000,data:[city: "城市-1",classify: "词人",experience: 884,id: 10001,logins: 58,score: 27,sex: "男",sign: "签名-1",username: "user-1",wealth: 64928690,{city: "城市-0",classify: "作家",experience: 255,id: 10000,logins: 24,score: 57,sex: "女",sign: "签名-0",username: "user-0",wealth: 82830700}]}';
var_dump(json_decode($arr));
var_dump(json_decode($arr, true));
