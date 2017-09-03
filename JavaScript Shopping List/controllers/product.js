const Product = require('../models/Product');

module.exports = {
	index: (req, res) => {
		Product.find().then(products => {
			res.render('product/index', {products: products});
		});
	},
	createGet: (req, res) => {
		res.render('product/create');
	},
	createPost: (req, res) => {
		let productArg = req.body;
		Product.create(productArg).then(product => {
			res.redirect('/');
		});
	},
	editGet: (req, res) => {
		let product = req.params.id;
		Product.findById(product).then(product => {
			res.render('product/edit', product);
		});
	},
	editPost: (req, res) => {
		let productId = req.params.id;
		let productArgs = req.body;
		
		Product.findByIdAndUpdate(productId, productArgs).then(product => {
			res.redirect('/');
		});
	}
};