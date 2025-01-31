const express = require('express')
const app = express()
const port = 3000
const tasks = require('./routes/tasks')
app.get('/', (req, res) => res.send('Home Page'));
app.get('/hello', (req, res) => res.send('Hello World!'))

//middleware
app.use(express.json())

app.use('/api/v1/tasks', tasks)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))