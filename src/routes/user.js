const router = require("express").Router()
const customError = require("../utils/customError")

//회원가입
router.post("",(req,res) => {
    
    try{
        if(!id){
            throw customError("아이디 이상함", 400)

            const error = new Error("아이디 이상함")
            error.statusCode = 400
            throw error

            res.status(400).send({
                "message": "아이디 이상함"
            })
            return
        }
        
        if(!pw){
            throw customError("비밀번호 이상함", 400)

            const error = new Error("비밀번호 이상함")
            error.statusCode = 400
            throw error

            res.status(400).send({
                "message": "비밀번호 이상함"
            })
            return
        }
    
        if(elem) throw customError("아이디 중복됨", 400)

        //DB 로직


    } catch(err){
        res.status(err.statusCode || 500).send({
            "message" : err.message
        })
        // res.status(500).send({
        //     "message": err.message
        // })
    }




    //발생할 수 있는 상태코드가 뭐가 잇는가? 예측할 수 있어야함
    //201, 400, 409. 500
})
router.get("/:user-idx",(req,res) => {

    //200,400,401,404,500

})

//module.Medle.export = router // 이 처리가 되어있는 것만 가져다가 import 해서 사용이 가능함
module.exports = router