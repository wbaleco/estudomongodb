const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gerenciadorfinanceiro', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conectado com sucesso");
}).catch((err) => {
    console.log("Erro ao tentar conectar" + err);
});