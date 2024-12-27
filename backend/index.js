require('dotenv').config()
const express = require('express')

const sequelize = require('./db')
const models = require('./models/models')
// для запросов
const cors = require('cors')
// для фото
const fileUpload = require('express-fileupload')
const path = require('path')


// подключение роутеров
const router = require('./routes/index')
// обработчик ошибок
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.port || 5000

const app = express()
app.use(cors())
app.use(express.json())
// чтобы файлы в папке статик можно было получить как статик
app.use(express.static(path.resolve(__dirname, 'static')))
// чтобы загрузить файлы
app.use(fileUpload({}))
// использовать маршруты
app.use('/api', router)

// должен быть самый последний 
app.use(errorHandler)


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => {console.log(`server started: http://localhost:${PORT}`)})
    } catch (e) {
        console.log(e)
    }
}

start()