class ProductManager {
  constructor() {
    this.products = [];
  }

  getProducts() {
    console.log(this.products);
  }

  addProduct(
    title,
    descripcion,
    precio = 200,
    imagen = "sin img",
    code = 123,
    stock = 25
  ) {
    
    const producto = {
      id: this.products.length +1,
      title,
      descripcion,
      precio,
      imagen,
      code,
      stock,
    };
    // se pushea el objeto al array de eventos
    this.products.push(producto);
  }
}

const valor = new ProductManager();
valor.addProduct('botella metalica','de lata homo')
valor.addProduct('pava electrica','kaji')
valor.getProducts();

