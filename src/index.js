//Creando objetos :D (POO)
const _private =  new WeakMap()

/*=============================================================================================================================================================*/
class Book {
    constructor(title, author, price){
        const properties={
            _title: title,
            _author: author,
            _price: price
        }
        _private.set(this, {properties})
    }
    //Se puede obtener el titulo y author de un libro
    get title(){
        return _private.get(this).properties['_title']
    }
    get author(){
        return _private.get(this).properties['_author']
    }
    get price(){
        return _private.get(this).properties['_price']
    }
    //Se puede cambiar el precio del libro
    set price(newPrice){
        return _private.get(this).properties['_price'] = newPrice;
    }


    /*Ya no se requiere ya que trabajamos con el constructor todas nuestras variables y ahora las ingresamos desde nuestras intancias
    title = '1984 Dia de las papas';
    author = 'Geoges Papas';
    price = 350;
    */
    //Poliformismo
    getAllData(){
        console.log(`Titulo: ${this.title}, Autor: ${this.author}, Precio: ${this.price}`)
    }
}

class Seller {
    constructor(cedula, nombre) {
        this._cedula = cedula;
        this._nombre = nombre;

        _private.set
        _private.get
    }
}

//Herencia padre he Hijo
class Comic extends Book{
    constructor(name, author, price, illustrators){
        super(name, author, price)
        //palabra clave para agregar un nuevo elemento
        this.illustrators = illustrators;
    }

    addIllustrator(newIllustrator = []) {
        this.illustrators.push(newIllustrator)
    }
    //Poliformismo herencia
    getAllData() {
        super.getAllData();
        console.log(`Ilustrador/res ${this.illustrators}`)
    }
}

//carrito de compra de libros
class ShoppingCart {
    constructor() {
        this.products=[]
    }
    addProduct(amount, price){
        this.products.push(...Array(amount).fill(price))
    }
    showProduct(){
        console.log(this.products);
    }
    calcTotal(){
        return this.products
                            .map(price => price)
                            .reduce((ac, price)=> ac + price, 0)
    }
    printTicket(){
        console.log(`Total a pagar $ ${this.calcTotal()}`)
    }
}
/*=============================================================================================================================================================*/
//Instancia de Book
const book1 = new Book('1984 Dia de las papas', 'Geoges Papas', 350);
const book2 = new Book('1001 papas', 'Lukas Papas', 270);

//console.log(book1._title)
console.log(book1.title)
//console.log(book1._author)
console.log(book1.author)
//console.log(book1._price)
console.log(book1.price)

//console.log(book2._title)
console.log(book2.title)
//console.log(book2._author)
console.log(book2.author)
//console.log(book2._price)
console.log(book2.price)

//Instancia de vendedor
const vendedor1 = new Seller(1000400500, 'Raul De las Papas')

console.log(vendedor1._cedula)
console.log(vendedor1._nombre)

/*=============================================================================================================================================================*/
//cambiaron los precios de los libros
console.group('cambiaron el precio del libro', book1.title)
book1.price=400;
console.log(book1.title)
console.log(book1.author)
console.log(book1.price)
console.groupEnd()
/*=============================================================================================================================================================*/
//llegaron nuevos libros a la tienda //herencia
console.group('Nuevos libros llegaron a la tienda')

const comic1 = new Comic('Batman la broma asesina', 'Alan Papas', 50, ['B.Papotas', 'J.Papitas'])
console.log(comic1.title)
console.log(comic1.author)
console.log(comic1.price)
console.log(comic1.illustrators)
comic1.addIllustrator('Z.PaPotes')
console.log(comic1.illustrators)
console.groupEnd()
/*=============================================================================================================================================================*/
console.group('Libros vendidos en el carrito de compras')
const cart = new ShoppingCart();
cart.addProduct(2, comic1.price)
cart.addProduct(1, book1.price)
cart.showProduct()
cart.printTicket()
/*=============================================================================================================================================================*/

book1.getAllData()
book2.getAllData()
comic1.getAllData()