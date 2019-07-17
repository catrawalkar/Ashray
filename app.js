const   express = require("express"),
        app     = express();
        
//app config

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

//Routes

app.get('/', (req,res)=>{
    res.render('landing')
})

app.get('/index', (req,res)=>{
    res.render('index')
})
        
app.listen(process.env.PORT, process.env.IP, ()=>{
    console.log(`server started at port: ${process.env.PORT}`)
})