const customError = require("../utils/customError")
const wrapper = require("../utils/wrapper")

const checkLogin = wrapper((req,res,next)=>{
    const idx = req.session.idx
    //try{
        if(!idx) throw customError("로그인 필요",401)
        //다음 미들웨어로 어떻게 가나
        next() // 다음 middleware로 흐름을 이동시켜주세요
    // }catch(err){
    //     res.status(err.statusCode || 500).send({ // send가 실행시 거기서 모든 게 끝남
    //         "message" : err.message
    //     })
    // }

}) // 이 함수에서 만들어진 req, res가 다음 req, res로 계속 유지됨 다음 middleware에서 req 구조체에 들어가있는 값의 참조가 가능해짐
module.exports = checkLogin
