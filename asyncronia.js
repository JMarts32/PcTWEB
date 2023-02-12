/**
 * Para este ejercicio debemos determinar el producto mas vendido a partir
 * de una lista de pedidos y una lista de productos.
 * 
 * Se debera dar una salida por consola que de el nombre del pedido
 * y la cantidad de veces que ha sido pedido.
 */

const pedidos = "https://gist.githubusercontent.com/josejbocanegra/7b6febf87e9d986048a648487b35e693/raw/576531a2d0e601838fc3de997e021816a4b730f8/detallePedido.json";
const productos = "https://gist.githubusercontent.com/josejbocanegra/be0461060d1c2d899740b8247089ba22/raw/916d2141e32e04031bda79c8886e8e4df0ae7f24/productos.json";

let cp = {};
let arrayCP = [];

fetch(pedidos).then(res => res.json()).then(res =>{
    // llamo a la funcion para leer los datos
    maspedido(res);
    // Organizo la lista de los productos por la cantida de veces que se ha pedido
    arrayCP.sort((a,b) =>{
        return a.cantidad - b.cantidad;
    }).reverse();

    fetch(productos).then(pro => pro.json()).then(pro => {
        productoMV(pro, arrayCP[0].idProduct, arrayCP[0].cantidad )
    });
});


// Aca leo los datos de los pedidos y determino cual es el mas pedido
function maspedido(res){
    //obtengo cada uno de los pedidos y los sumoen el objeto de cantidadPedidos para obtener las veces que se pidieron
    for (pedido of res){
        let llaves = Object.keys(cp);
        if (llaves.includes(pedido["idproducto"])){
            cp[pedido["idproducto"]] += Number(pedido["cantidad"]);
        }else{
            cp[pedido["idproducto"]] = Number(pedido["cantidad"]);
        }
    }

    for (id in cp){
        arrayCP.push({"idProduct": id, "cantidad": cp[id]});
    }
}

// funcio para hallar el nombre del producto mas vendido
function productoMV(pro, idpro, cantidadpro){
    for (producto of pro){
        if (producto["idproducto"] == idpro){
            console.log(producto["nombreProducto"], "es el producto mas vendido con", cantidadpro, "unidades" );
        }
    }
}