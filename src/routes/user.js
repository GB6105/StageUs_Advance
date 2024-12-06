const router = require("express").Router()
const customError = require("../utils/customError")
const client = require("../constants/postgresql")

//회원가입
// router.post("",(req,res) => {
//     const {id , pw} = req.body;


//     try{
//         if(!id){
//             throw customError("아이디 이상함", 400)

//             // const error = new Error("아이디 이상함")
//             // error.statusCode = 400
//             // throw error

//             // res.status(400).send({
//             //     "message": "아이디 이상함"
//             // })
//             // return
//         }
        
//         if(!pw){
//             throw customError("비밀번호 이상함", 400)

//             // const error = new Error("비밀번호 이상함")
//             // error.statusCode = 400
//             // throw error

//             // res.status(400).send({
//             //     "message": "비밀번호 이상함"
//             // })
//             // return
//         }
    
//         //if(elem) throw customError("아이디 중복됨", 400)

        
//         //DB 로직
//         // 이미 한 번 import 되면 가져다가 쓰니까 connect는 한 번만 사용하는 것
//         // 그래서 문제는 없다.

//         client.query('SELECT * FROM account.list WHERE id = $1',[id],(err,result)=>{
//             if(err){
//                 return res.status(500).send({
//                     "message": err.message
//                 })
//             }else{
//                 if(result.rows.length > 0){
                    
//                     return res.status(409).send({
//                         "message": "duplicated id"
//                     })
//                 }else{
//                     client.query('INSERT INTO account.list VALUES($1, $2)',[id,pw],(err2,result2)=>{
//                         if(err2){
//                             console.log(5)
//                             return res.status(500).send({
//                                 "message": err.message
//                             })
//                         }else {
//                             res.status(200).send({})
//                         }
//                     })
//                 }
//             }
//         })

//     } catch(err){
//         res.status(err.statusCode || 500).send({
//             "message" : err.message
//         })
//         // res.status(500).send({
//         //     "message": err.message
//         // })
//     }




//     //발생할 수 있는 상태코드가 뭐가 잇는가? 예측할 수 있어야함
//     //201, 400, 409. 500
// })

router.post("", async(req, res) =>{
    const {id , pw} = req.body;
    try{
        if(!id) throw customError("아이디 이상함", 400)
        if(!pw) throw customError("비밀번호 이상함", 400)
        
        const idDuplicateResult = await client.query('SELECT * FROM account.list WHERE id = $1',[id])
        if(idDuplicateResult.rows.length>0) throw customError("duplicated id", 409)

        client.query('INSERT INTO account.list VALUES($1, $2)',[id,pw])
        res.status(200).send({})

        // client.query('SELECT * FROM account.list WHERE id = $1',[id],(err,result)=>{
        //     if(err){
        //         return res.status(500).send({
        //             "message": err.message
        //         })
        //     }else{
        //         if(result.rows.length > 0){
                    
        //             return res.status(409).send({
        //                 "message": "duplicated id"
        //             })
        //         }else{
        //             client.query('INSERT INTO account.list VALUES($1, $2)',[id,pw],(err2,result2)=>{
        //                 if(err2){
        //                     console.log(5)
        //                     return res.status(500).send({
        //                         "message": err.message
        //                     })
        //                 }else {
        //                     res.status(200).send({})
        //                 }
        //             })
        //         }
        //     }
        // })

    } catch(err){
        res.status(err.statusCode || 500).send({
            "message" : err.message
        })
    }
})

router.get("/:user-idx",(req,res) => {

    //200,400,401,404,500

})

//module.Medle.export = router // 이 처리가 되어있는 것만 가져다가 import 해서 사용이 가능함
module.exports = router