//* carrito = {
//* array = [
//* {name: "producto1", Price: 10}, // [0]
//* {name: "producto2", Price: 20}, // [1]
//* ],
//* agregarProductos: function

//*}
//* Aserciones

const CarritoCompra = require("../test/index");

describe("Clase CarritoCompra", () => {

let carrito;
beforeEach(() => {
    carrito = new CarritoCompra();
});
const producto1 = {name:"Producto1", price: 10};
const producto2 = {name:"Producto2", price: 20};

    it("CarritoCompra debe ser una clase", () => {
    expect(typeof CarritoCompra).toBe("function");
    expect(carrito instanceof CarritoCompra). toBe(true);
    });

    it("CarritoCompra inicia la propiedad 'productos' como un Array vacío", () => {
        expect(Array.isArray(carrito.products)).toBe(true);
        expect(carrito.products).toHaveLength(0);
    })

it ("agregarProducto agregar productos al carrito", () => {
    carrito.agregarProducto(producto1);
    expect(carrito.products).toHaveLength(1);
    expect(carrito.products(0)).toEqual(producto1);
    
    carrito.agregarProducto(producto2);
    expect(carrito.products).toHaveLength(2);
    expect(carrito.products(1)).toEqual(producto2);
})

it("calcularTotal devuelve el total", () => {
    carrito.agregarProducto(producto1);  
    carrito.agregarProducto(producto2);  
    expect(carrito.calcularTotal()).toBe(30)
})

it("aplicarDescuento devuelve el total con el descuento", () => {
    carrito.agregarProducto(producto1);  
    carrito.agregarProducto(producto2);  
    expect(carrito.aplicarDescuento(100)).toBe(0);
    expect(carrito.aplicarDescuento(50)).toBe(15);
    expect(carrito.aplicarDescuento(20)).toBe(24);
});

});