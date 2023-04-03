const express = require("express");
const app = express();
const test = require("./Router/test");

app.use("/api", test);

const port = 5000; // 노드 서버가 사용할 포트 넘버

app.listen(port, () => console.log(`${port}`));

// MongoDB 연결
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://HHm:HHm230327@hhm.8k6d6kh.mongodb.net/test')
    .then(() => console.log("mongoDB connected...")) // 연결 성공
    .catch(err => console.log(err)) // 연결 err