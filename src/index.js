import express from 'express'
import config  from './config.js'
import connectToDB from './connect.js'
import usersRoutes from './routes/users.route.js'
import productRoutes from './routes/products.route.js'
import viewRoutes from './routes/views.route.js'
import { engine } from 'express-handlebars'

const app = express()

app.use (express.static('public'))

app.engine('handlebars', engine({
    runtimeOptions:{
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true, 
    }
}))
app.set('view engine', 'handlebars')
app.set('views', './src/views')

connectToDB()

app.use(express.json())

app.use('/api/users', usersRoutes)
app.use('/api/products', productRoutes)
app.use('/', viewRoutes)


app.listen(config.PORT, () => console.log('Listen to port'+ config.PORT))