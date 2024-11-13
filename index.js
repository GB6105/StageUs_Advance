const express = require("express")//express 전용 import 구문

const app = express()
app.use(express.json()) // 요청으로 받은 object 및 보낼 objec를 자동으로 String으로 파싱

//GET /article
app.get("/article",(req,res)=>{
    res.send("Hello world");
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



const userData = [
    { name: "user1", id: "test1", pw: "test1111", age: 20, gender: "M", phone: "010-1111-1111", email: "test1@gmail.com", address: "Korea" },
    { name: "user2", id: "test2", pw: "test2222", age: 30, gender: "F", phone: "010-2222-2222", email: "test2@gmail.com", address: "Japan" },
    { name: "user3", id: "test3", pw: "test3333", age: 40, gender: "M", phone: "010-3333-3333", email: "test3@gmail.com", address: "Canada" }
];




// 1. 로그인 CURD

// INSERT INTO user (name, id, pw, age, gender, phone, email, address) VALUES ('name','id','pw','age','gender','phone#','email','address');
//Create
app.post("/user",(req,res) => {

    const {name, id, pw, age, gender, phone, email, address} = req.query;



    res.send({
        "success" : true
    })
})


// SELECT * FROM user WHERE id = 'user_id';
//Read = GET
app.get("/user",(req,res) => {

    const user_id = req.query.id;
    


    res.send();
})