const productos = []; 

exports.getAllProducts = (req, res) => {
    res.json(productos);
};

exports.createProduct = (req, res) => {
    const newProduct = req.body;
    productos.push(newProduct);
    res.status(201).json(newProduct);
};

exports.updateProduct = (req, res) => {
    const id = req.params.id;
    const updatedProduct = req.body;
    productos[id] = updatedProduct;
    res.json(updatedProduct);
};

exports.deleteProduct = (req, res) => {
    const id = req.params.id;
    productos.splice(id, 1);
    res.status(204).send();
};
