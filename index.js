const express = require('express')
const app = express()
const port = 5000

// MongoDB 연결
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://HHm:HHm230327@hhm.8k6d6kh.mongodb.net/test')
    .then(() => console.log("mongoDB connected...")) // 연결 성공
    .catch(err => console.log(err)) // 연결 err


app.get('/', (req, res) => res.send('HHm에 오신 것을 환영합니다'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))