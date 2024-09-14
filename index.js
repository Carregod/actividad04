const express = require('express');
const app = express();
app.use(express.json());
const productosRoute = require('./routes/productosRoute');
const experienciasRoute = require('./routes/experienciasRoute');

app.use('/productos', productosRoute);
app.use('/experiencias', experienciasRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});