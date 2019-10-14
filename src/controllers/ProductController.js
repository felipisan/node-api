const mongoose = require('mongoose');

//Chamando a tabela
const Product = mongoose.model('Product');

//Isso vai criar um json toda vez que o controller for importado (requisitado)
module.exports = {
    //Método do get
    async index(req, res){
        //Agora, na url eu vou poder fazer tipo:
        //base_url/products?page=2
        const { page = 1 } = req.query;

        //1º param refere-se ao conjunto de regras para paginação, tipo filtering
        // Irá começar da primeira página
        //Irá mostrar 10 objetos por página
        const products = await Product.paginate({}, {page, limit: 10 });
        
        return res.json(products);
    },

    async show(req, res){
        let product = await Product.findById(req.params.id);

        return res.json(product);
    },

    //Método do post
    async store (req, res){
        //Product.create é um método que o mongoose fez p tois
        let product = await Product.create(req.body);

        return res.json(product);
    },

    async update(req, res){
        // O new vai retornar o produto antes de atualizar o produto. 
        // Com o new, vai aparecer o produto já com as mudanças realizadas.
        let product = await Product.findByIdAndUpdate(req.params.id, req.body, 
            { new: true});

        return res.json(product);
    },

    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
}