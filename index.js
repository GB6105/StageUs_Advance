const express = require("express")//express 전용 import 구문

const app = express()
app.use(express.json()) // 요청으로 받은 object 및 보낼 objec를 자동으로 String으로 파싱

//GET /article
app.get("/article",(req,res)=>{

})

//GET /article
app.post("/article",(req,res)=>{
    // const title = req.body.title
    // const content = req.body.content

    //프론트엔드가 보내준 값 받아서 저장
    const {title, content} = req.body
    //body,param,query api가 프론트에서 받는 값 3가지 방식
    // 예외처리(할수 있음 해봐)
    // DB 처리
    // 응답
    res.send({
        "success" : true
    })
})



// 웹서버 실행
app.listen(8000,()=>{
    console.log("8000번 포트에서 HTTP 웹 서버 실행")
}) // startup ~~.(톰캣 멸영어)