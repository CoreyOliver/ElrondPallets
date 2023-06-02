// module/middleware init
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')
const cors = require('cors')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const palletRoutes = require('./routes/pallet')
const methodOverride = require('method-override')

// config
require('dotenv').config({path: './config/.env'})
require('./config/passport')(passport)

//DB connection

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(logger('dev'))
app.use(cors())
app.use(methodOverride('_method'))

//sessions
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
    )
    
    // Passport middleware
    app.use(passport.initialize())
    app.use(passport.session())
    
    app.use(flash())
    
    app.use('/', mainRoutes)
    app.use('/pallet', palletRoutes)
    
    
    connectDB().then(() => {
        console.log('db connected')
        app.listen(process.env.PORT, ()=>{
            console.log(`Server is running on ${process.env.PORT}, you better catch it!`)
        })  
    })