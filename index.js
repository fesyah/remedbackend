const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')

const app = express()
dotenv.config()

app.use(cors())
app.use(bodyparser.json())

const db = require("./database");
db.connect((err) => {
    if (err) {
        console.log("error connection : ", + err);
        return;
    }

    console.log(`database is connected at id : ${db.threadId}`);
})

app.get('/', (req, res) => res.status(200).send("<h1>My API<h1>"))

const { consumerRouter, employeeRouter } = require('./routers')
app.use('/api', consumerRouter)
app.use('/api', employeeRouter)

const PORT = 2000
app.listen(PORT, () => console.log(`Server is running at PORT : ${PORT}`))