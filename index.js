const express = require("express")//express 전용 import 구문

const app = express()
app.use(express.json()) // 요청으로 받은 object 및 보낼 objec를 자동으로 String으로 파싱
app.use(express.urlencoded({extneded: false}))
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

//

const userData = [
    { name: "user1", id: "test1", pw: "test1111", age: 20, gender: "M", phone: "010-1111-1111", email: "test1@gmail.com", address: "Korea" },
    { name: "user2", id: "test2", pw: "test2222", age: 30, gender: "F", phone: "010-2222-2222", email: "test2@gmail.com", address: "Japan" },
    { name: "user3", id: "test3", pw: "test3333", age: 40, gender: "M", phone: "010-3333-3333", email: "test3@gmail.com", address: "Canada" }
];




// 1. 로그인 CURD

// INSERT INTO user (name, id, pw, age, gender, phone, email, address) VALUES ('name','id','pw','age','gender','phone#','email','address');
//Create
app.post("/user",(req,res) => {
    // const {name, id, pw, age, gender, phone, email, address} = req.body;
    // res.send({
    //     "success" : true,
    //     "id" : id,
    //     "pw" : pw
    // })
    const test = req.body.id;

    res.send({
        "result" : test
    })
})

// 1-2. 유저 정보 불러오기 
// SELECT * FROM user WHERE id = 'user_id';
//Read = GET
app.get("/user",(req,res) => {
    const inputed_id = req.query.id; // GET 방식으로 넘어오기
    if(!inputed_id) {// 1. 값이 입력되지 않은 경우
        return res.status(400).send({
            "message": "Nothing inputed, please check"
        })
    }
    const id_regex = /^[A-Za-z0-9]+$/ ;
    if(id_regex.test(inputed_id)){
        // const result_set = userData.filter((data)=>{return data.id === inputed_id;})
        const result_set = userData.filter((data)=>data.id === inputed_id)
        
        if(result_set.length >0 ){
            return res.status(200).send({ // 2. 정상적으로 값을 받았고 값을 돌려주는 경우
                    "return" : id_regex.test(inputed_id),
                    "user_data" : result_set
            })
        }else{
            return res.status(200).send({ // 3. 정상적인 값이지만 돌려줄 값이 없는 경우
                "message" : "No such user data, please check"
            })
        }
    }else{
        return res.status(400).send( // 4. 비정상적인 값을 받은 경우
            {
                "message": "Invalid input, please check"
            }
        )
    }
})


// 1-3. 유저 정보 수정
// UPDATE user SET pw = 'pw', name = 'name', phone = 'phone', email = 'email', address = 'address' WHERE id = 'id'
app.put("/user",(req,res) => {
    console.log(req.body);
    // const {id, pw, name, phone, email, address} = req.body; //POST 방식으로 넘어오기
    const {id, pw, name, phone, email, address} = req.query; //GET 방식으로 넘어오기
    if(id === null ){
        return res.status(400).send({
            "message":"Not enough input, pleas check"
        })
    }
    // const checkNull = arr.filter((elem) => data.elem === "")
    // if(checkNull) return res.status(400).send({
    //     "message" : "Not enough input, please check"
    // })


    const temp = id;
    res.send({
        "id" :  temp,
        "pw" : pw,
        "message": "hello"
    })
    
    
    
})


// 1-4. 유저 정보 삭제
// DELETE FROM user WHERE id = 'id'
app.delete("/user",(req,res) => {
    const inputed_id = req.query.id; // GET 방식으로 넘어오기
    if(!inputed_id) {// 1. 값이 입력되지 않은 경우
        return res.status(400).send({
            "message": "Nothing inputed, please check"
        })
    }
    const id_regex = /^[A-Za-z0-9]+$/ ;
    if(id_regex.test(inputed_id)){
        // const result_set = userData.filter((data)=>{return data.id === inputed_id;})
        const result_set = userData.filter((data)=>data.id === inputed_id)
        
        if(result_set.length >0 ){
            return res.status(200).send({ // 2. 정상적으로 값을 받았고 값을 돌려주는 경우
                    "message" : "User data successfully deleted"
            })
        }else{
            return res.status(200).send({ // 3. 정상적인 값이지만 돌려줄 값이 없는 경우
                "message" : "No such user data, please check"
            })
        }
    }else{
        return res.status(400).send( // 4. 비정상적인 값을 받은 경우
            {
                "message": "Invalid input, please check"
            }
        )
    }
})



// app.get("/user",(req,res) => {


//     // 처래해야할 것
//     // 1. 값 받기
//     // 1-1. 정규표현식과 비교하기(input이면)
//     // 2. DB 연결하기
//     // 3. DB에 query 보내기
//     // 4. 값 받아오기
//     // 5. 해당값 보내기

//     // 1. 값 받기
//     const inputed_id = req.query.id;
//     if(!inputed_id) return res.send({"message": "Nothing inputed, please check"})

//     // 1-1. 정규표현식과 비교하기

//     const id_regex = /^[A-Za-z0-9]+$/ ;
//     if(id_regex.test(inputed_id)){
//         //DB로 값 보내기
//         // for (let i = 0; i < userData.length; i++){
//         //     if(userData[i].id === inputed_id){
//         //         const result_set = userData[i];
//         //         return res.send({
//         //                 "return" : id_regex.test(inputed_id),
//         //                 "id" : result_set.id,
//         //                 "name" : result_set.name,
//         //                 "pw": result_set.pw,
//         //                 "age" : result_set.age,
//         //                 "gender" : result_set.gender,
//         //                 "phone" : result_set.phone,
//         //                 "email" : result_set.email,
//         //                 "address" : result_set.address
//         //             }
//         //         )
//         //     }
//         // }
//         const result_set = userData.filter((elem)=>{
//             return elem.id === inputed_id;
//         })

//         return res.send({
//                 "return" : id_regex.test(inputed_id),
//                 "message" : 
//                 "set" : result_set
//         })
//     }else{
//         return res.send(
//             {
//                 "message": "Wrong ID inputed, please check"
//             }
//         )
//     }

//     // 2. DB 연결하기

//     // 3. DB에 query 보내기

//     // 4. 값 받아오기

//     // 5. 해당 값 보내기

// })



    // const user_id = req.query.id;
    // // res.send(
    // //     {
    // //        "received Id": user_id

    // //     }
    // // )
    // // const data = userData.filter((obj) =>{
    // //     return obj[1] == user_id;
    // // })

    // for(let i = 0; i < userData.length; i++){
    //     // if(userData[i].id == user_id){
            
    //     //         return res.send({
    //     //             "name" : data.name,
    //     //             "pw" : data.pw
    //     //         })
    //     // }else{
    //     //     return res.send(
    //     //         {
    //     //             "message": "There is no such info"
    //     //         }
    //     //     )
    //     // }

    // }

    // res.send({
    //     "length": userData.length,
    //     "name" : userData[0].name
    // })
    
    // // if (user_id != NULL){
    // //     res.send({
    // //         name : 
    // //     });

    // // }
