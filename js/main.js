let productos = [
  {nombre:"RTX 4070",precio:150},
  {nombre:"RTX 4060",precio:100},
  {nombre:"RX 6650XT",precio:85},
  {nombre:"RX 7700XT",precio:130}];

function agregarProducto() {
  let inputNombre = document.getElementById('nuevoProductoNombre');
  let inputPrecio = document.getElementById('nuevoProductoPrecio');
  let nombre = inputNombre.value;
  let precio = inputPrecio.value;

  if (nombre !== "" && precio !== "") {
    let producto = {
      nombre: nombre,
      precio: parseFloat(precio)
    };
    productos.push(producto);
    inputNombre.value = "";
    inputPrecio.value = "";
    alert(`Producto agregado con éxito: ${nombre}, Precio: ${precio}`);
  } else {
    alert("Por favor, ingrese un nombre y un precio para el producto validos.");
  }
  
}

function mostrarProductos() {
  let lista = document.getElementById('listaDeProductos');
  lista.innerHTML = "";
  for (let i = 0; i < productos.length; i++) {
    let li = document.createElement('li');
    li.textContent = `Nombre: ${productos[i].nombre}, Precio ${productos[i].precio.toFixed(2)}`;
    lista.appendChild(li);
  }
}
mostrarProductos();
