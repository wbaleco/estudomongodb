const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gerenciadorfinanceiro', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conectado com sucesso");
}).catch((err) => {
    console.log("Erro ao tentar conectar" + err);
});

const PagamentoSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    valor: {
        type: Number,
        require: true
    }
});

var Pagamento = mongoose.model('Pagamentos', PagamentoSchema);
new Pagamento({
    nome: "Internet",
    valor: 150
}).save().then(() => {
    console.log("Cadastro realizado com sucesso");
}).catch((err) => {
    console.log("Erro ao tentar cadastrar" + err);
})