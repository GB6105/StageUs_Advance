const wrapper = (func) => {
    //매개변수를 받는 wrapper로 바꿔주는 방식 return으로 변수 받고 감싸주면 된다.
    return (req,res)=>{ //정확히는 여기가 미들웨어를 의미함
        try{
    
            func(req,res) //Router의 비즈니스 로직
    
            //wrapper를 통해 후처리도 효과적으로 가능
            // 열어둔 것들에 대한 종료 (db 커넥트 종료)
            // logging
            // 데이터 정리
        }catch(err){
    
            if(process.env.MODE === "dev"){ //MODE 일때 구분해서 출력
                console.log(err.message) // 에러메시지 한 줄
                console.log(err.stack) // 에러 상세 정보
            }
    
            // 원래는 백엔드 프로젝트에서 에러가 나면 stack trace 보여주면서 웹서 중단됨
            // try-catch 쓰고 있어서, 에러가 나도 중단이 안됨(에러가 난지 모름)
            // 중단이 안되기에 stack tarce도 나오지 않음 
    
            res.status(err.statusCode ||500).send({
                "message":err.message
            })
        }

    }
}
module.exports = wrapper