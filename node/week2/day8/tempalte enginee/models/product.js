const products = [];

module.exports = class Product{
    constructor(){
        this.title = t;
    }

    save(){
        products.push(this);
    }

    static fetchAll(){
        return this.products;
    }
}