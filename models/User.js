const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    ID: {
        type: String,
        maxlength: 30,
        unique: 1 //중복 허용하지 않음
    }, //VARCHAR2(30)	PRIMARY KEY,
	PW: {
        type: String,
        maxlength: 100
    }, //VARCHAR2(100)	NOT NULL,
	NAME: {
        type: String,
        maxlength: 20
    }, //VARCHAR2(20)	NOT NULL,
	NICKNAME: {
        type: String,
        maxlength:30,
        unique: 1
    }, //VARCHAR2(30) 	NOT NULL UNIQUE,
	PHONE: {
        type: String,
        maxlength:20,
        unique: 1
    }, //VARCHAR2(20)	NOT NULL UNIQUE,
	EMAIL: {
        type: String,
        maxlength: 30,
        unique: 1
    }, //VARCHAR2(30)	UNIQUE,
	RECEIVE: Number, //1: 수신, 0: 수신X
	GENDER: Number, //1: 남자, 0: 여자
	BIRTH: Number,
	REGION: String,
	MBTI: String,
    Image: String,
    ROLE: {
        type: Number, //1 : 관리자, 0: 일반 유저
        default: 0
    },
    token: String, //유효성 검사(관리) 목적
    tokenExp: Number // 토큰을 사용할 수 있는 유효 기한
})

const User = mongoose.model('User', userSchema)

// 다른 파일에서도 사용할 수 있게 export
module.exports = { User }