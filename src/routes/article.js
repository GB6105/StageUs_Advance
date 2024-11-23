const router = require("express").Router()

const customError = require("../utils/customError")

// 따로 파일 만들어서 나눠줌
// const titleRegx = "/^.{1,100}$/"
// const contentRegx = "/^.{1,1000}$/"

//imoprt 하는 방법도 달라짐
const {titleRegx,contentRegx} = require("../constants/regx")

const checkLogin = require("../middlewares/checkLogin")

const wrapper = require("../utils/wrapper")

// 변수에 들어가있는 middleware의 순차적으로 방문 
// router.post("",checkLogin,checkValidity(),wrapper((req,res) => {
router.post("",wrapper((req,res) => { // 이 함수를 매개변수로 주고 싶어서 그런식으로 작성함 
    const {title,content} = req.body;
    //try{
        // // 로그인 여부 체크
        // const idx = req.session.idx
        // if(!idx) throw customError("로그인 필요",401)

        // 입력값 에외처리(미들웨어로 빼기 과제)
        if(!title.match(titleRegx)) throw customError("title 값 이상", 401);
        if(!content.match(contentRegx)) throw customError("content 값 이상", 401);

        // DB 처리

        // DB 후처리

        // 응답

        // 총 3가지만 남게 될것임
        res.status(200).send({
            "message": "작성 성공 !"
        }) // 빈 오브젝트 보내줘야 프론트가 편함 

    // }catch (err){
    //     res.status(err.statusCode || 500).send({
    //         "message" : err.message
    //     })
    // }
}))
// app.get("",(req,res) => {

// })

module.exports = router // 이 처리가 되어있는 것만 가져다가 import 해서 사용이 가능함