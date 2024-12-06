const {Client} = require("pg")

const dbInit = {
    "user": "ubuntu",
    "password":"1234",
    "host" : "localhost",
    "port" : 5432,
    "database": "web"
}

const client = new Client(dbInit)
client.connect()

module.exports = client;

// 1. 중복코드 제거했음
// 2. 연결 자체도 매우 효율적이게 되었음 (한 번만 연결하고 재활욯 하기 때문)