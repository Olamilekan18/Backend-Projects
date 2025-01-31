const express = require('express')
const app = express()
const port = 3000
require('./db/connect.js')
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect.js')
require('dotenv').config()

app.get('/', (req, res) => res.send('Home Page'));
app.get('/hello', (req, res) => res.send('Hello World!'))

//middleware
app.use(express.json())

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}
start()
app.use('/api/v1/tasks', tasks)
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))