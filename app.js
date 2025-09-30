const express = require("express");
const { engine } = require("express-handlebars");

const PORT = 3000;
const app = express();

app.engine('handlebars', engine({defaultLayout: 'main', extname: '.handlebars'}))
app.set('view engine', 'handlebars')


app.get('/', (req, res) => {
   res.render('./home', { nome: "Ricardo", isLogged: true })
})

app.listen(PORT, () => {
   console.log(`Servidor rodando em http://localhost:${PORT}`);
})