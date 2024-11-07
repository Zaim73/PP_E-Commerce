const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended : true }));
// app.use(require('./routes'));
app.use(require('./routes/loginRoute'));
app.use(require('./routes/productRoute'));
app.get('/', (req, res) => {
 res.redirect('/')
})

app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})