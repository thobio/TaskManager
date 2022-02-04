const connectDB = require('./db/connect')
const express = require('express');
const app = express();
require('dotenv').config()
const errorHandler = require('./middileware/error-handler')

// routes
const pagenotFoundRouter = require('./routes/page_not_found_router')
const taskRouter = require('./routes/task_routes')

//middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Task response page
app.use('/api/v1/tasks', taskRouter)

// 404 error Response page 
app.use('*', pagenotFoundRouter)

app.use(errorHandler)

const port = process.env.PORT || 8080
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        const server = app.listen(port, () => {
            const host = server.address().address
            const port = server.address().port
            console.log(`http://${host}:${port}`);
        })
    } catch (e) { console.log(e) }
}

start()