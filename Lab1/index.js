/*
This runs the server alone, nothing else?
*/

const express = require('express')
const app = express()
const port = 8080

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render(__dirname + "/myWebPage.ejs")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})