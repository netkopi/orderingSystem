const fs = require('fs').promises;


// GET METHOD
// HOME PAGE
const home = (req, res) => {
    try {
        res.status(200).sendFile('index');
    }
    catch(err){
        res.status(500).json(err);
    }
}


// GET METHOD
// CART PAGE
const cart = async (req, res) => {
    try {
        res.status(200).redirect('src/page/cart.html');
    }
    catch(err){
        res.status(500).json(err);
    }
}




// GET METHOD
// PRODUCT DATA
const product = async (req, res) => {
    try {
        const dataFile = await fs.readFile('data.json', 'utf-8');
        const data = JSON.parse(dataFile);
        res.status(200).json( data );
    }
    catch(err){
        res.status(500).json(err);
    }
}






module.exports = {
    home,
    cart,
    product
}