const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')
const faker = require('faker');
const _ = require('lodash')
app.use(cors())

const users = []
for(let i=1; i<1000; i++){
    users.push(faker.helpers.createCard())
}
const pages = _.chunk(users, 10)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/users', (req, res)=>{
    try {
        if(req.query.page){
            return res.json(pages[parseInt(req.query.page)-1])
        } else {
            return res.json(pages[0])
        }
    } catch (e) {
        return res.status(404).send()
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})