const cell = [
  {id: "1" , stock:3,name: "Asus i3" ,price:"$1.412.000" ,category:"asus", image:"./img/asus.png" },
  {id: "2" ,stock:3, name: "Asus vivoBook ryzen5" ,price:"2.499.000" ,category:"asus", image:"./img/asusvivo.png" },
  {id: "3" , stock:3,name: "asus gaming i 5" ,price:"$4.000.857" ,category:"asus", image:"./img/asusg.png" },
  {id: "4" , stock:3,name: "hp ryzen 5" ,price:"2.599.999" ,category:"hp", image:"./img/hpryzen5.webp" },
  {id: "5" , stock:3,name: "victus gamer" ,price:"4.099.900" ,category:"hp", image:"./img/victus.webp" },
  {id: "6" , stock:3,name: "Asus i core 3" ,price:"$1.400.000" ,category:"asus", image:"./img/asusi3.png" },
  {id: "7" ,stock:3, name: "hp ryzen 3" ,price:"850.000" ,category:"hp", image:"./img/hp ryzen 3.webp" },
  {id: "8" ,stock:3, name: "hp intel celeron" ,price:"850.000" ,category:"hp", image:"./img/hp.png" },
  {id: "9" , stock:3,name: "lenovo ryzen 5" ,price:"1.538.900" ,category:"lenovo", image:"./img/lenovo.png" },
  {id: "10" ,stock:3, name: "lenovo" ,price:"1.264.336" ,category:"lenovo", image:"./img/lenovo1.png" },
  {id: "11" ,stock:3, name: "Dell i 3" ,price:"1.579.888" ,category:"dell", image:"./img/accerr.webp" },
  {id: "12" ,stock:3, name: "Dell i 5" ,price:"1.579.888 ",category:"dell", image:"./img/dell.webp" },
  {id: "13" , stock:3,name: "dell ryzen 5" ,price:"1.850.000" ,category:"dell", image:"./img/dell.png" },
  {id: "14" ,stock:3, name: "dell i 7 " ,price:"$2.490.000" ,category:"dell", image:"./img/dell1.png" },
  {id: "15" ,stock:3, name: "MacBook Air" ,price:"5.220.000" ,category:"apple", image:"./img/mackbook.webp" },
  {id: "16" ,stock:3, name: "Apple Macbook Air3" ,price:"3.990.000" ,category:"apple", image:"./img/macbook1.png" },
  {id: "17" ,stock:3, name: "Macbook pro 2020" ,price:"5.757.481" ,category:"apple", image:"./img/macbookpro.png" },
  {id: "18" ,stock:3, name: "MacBook Pro 16" ,price:"11.999.789" ,category:"aple", image:"./img/macbook.jpg" },
  {id: "19" , stock:3,name: "Laptop Gamer Msi " ,price:"4.049.900" ,category:"msi", image:"./img/msi.webp" },
  {id: "20" ,stock:3, name: "Laptop Msi I7" ,price:"5.728.080" ,category:"msi", image:"./img/msi1.webp" },
  {id: "21" ,stock:3, name: "Portatil Msi Gf63 I5" ,price:"3.350.000" ,category:"msi", image:"./img/msi.jpg" },
  {id: "22" ,stock:3, name: "Acer Nitro 5 Intel I5" ,price:"4.150.000" ,category:"accer", image:"./img/accer.jpg" },
  {id: "23" ,stock:3, name: "Acer Ryzen 5" ,price:"1.550.000" ,category:"accer", image:"./img/accer.png" },
  {id: "24" ,stock:3, name: "Acer Aspire 5" ,price:"2.173.600" ,category:"accer", image:"./img/accer1.png" },
  {id: "25" ,stock:3, name: " Asus  ryzen " ,price:"1.850.000" ,category:"asus", image:"./img/asus.jpg" },
  {id: "26" ,stock:3, name: "gamer Asus" ,price:"5.350.000" ,category:"asus", image:"./img/asusgamer.jpg" },
  {id: "27" ,stock:3, name: "Asus Tuf Intel Ci5" ,price:"3.330.000" ,category:"asus", image:"./img/agaming.png" },
  {id: "28" ,stock:3 ,name: "Portatil Lenovo Ryzen 7" ,price:"2.300.000" ,category:"lenovo", image:"./img/leno.png" },
  {id: "29" ,stock:3 ,name: "Lenovo Ideapad Gaming 3" ,price:"2.990.000" ,category:"lenovo", image:"./img/leno1.png" },
  {id: "30" ,stock:3, name: "Lenovo 15 G3 Ryzen 3 " ,price:"1.760.000" ,category:"lenovo", image:"./img/leno2.png" },
]

const container = document.getElementById('main')
const btncreate = document.getElementById('btn-create')
let imgSelected = "";
let idProduct = 30

const modal = document.querySelector('.modal');
const closemodal = document.getElementById('close-modal');
const newname = document.getElementById('new-name');
const newprice = document.getElementById('new-price');
const newcategory = document.getElementById('new-category');
const newimage = document.getElementById('new-image');
const btnnewproduct = document.getElementById('btn-new-create');

// variables de modal de actualizar producto
const modalupdate = document.querySelector('.modal-upload');
const btnupdate = document.getElementById('btn-upload');
const closemodalupdate = document.getElementById('close-modal-upload');
const idproduct= document.getElementById('id-product');
const btnbuscar = document.getElementById('buscar-product');
const updatename= document.getElementById('update-name');
const updateprice = document.getElementById('update-price');
const updatecategory = document.getElementById('update-category');
const btnupdateproduct = document.getElementById('btn-new-update')

closemodalupdate.addEventListener("click" , close_modal_update)
btnbuscar.addEventListener("click" , buscarproduct);
btnupdate.addEventListener("click" ,showmodalupdate);
btncreate.addEventListener("click", showmodal);
closemodal.addEventListener("click", close_modal);
btnnewproduct.addEventListener("click", createnewproduct);
newimage.addEventListener("change", importimg);
btnupdateproduct.addEventListener("click" , updateproduct)

//actualizar prducto encontrado
function updateproduct() {
    const product = idproduct.value
    const objetoBuscado = cell.find(objeto => objeto.id === product);

    objetoBuscado.name = updatename.value;
    objetoBuscado.price = updateprice.value;
    objetoBuscado.category = updatecategory.value

    close_modal_update();
    cards();
}

//buscar producto para actualizar
function buscarproduct() {
    const product = idproduct.value
    const objetoBuscado = cell.find(objeto => objeto.id === product);

if (objetoBuscado) {
    const name = objetoBuscado.name;
    const price = objetoBuscado.price;
    const category = objetoBuscado.category;

    updatename.value = name;
    updateprice.value=price;
    updatecategory.value =category
} else {
    console.log("Objeto no encontrado");
}
}

// importar imagen
function importimg(event) {
    const currentimg = event.target.files[0];
    const objecturl = URL.createObjectURL(currentimg);
    imgSelected = objecturl;
}


//cartas
function cards() {
  // Limpiar el contenedor antes de volver a agregar las tarjetas
  container.innerHTML = "";

  // Iterar sobre cada elemento en la matriz cell y crear una tarjeta para cada uno
  cell.forEach((cell) => makeCard(cell));
}


//crear un nuevo producto
function createnewproduct() {
    idProduct++;
    const newproduct = newname.value;
    const newpriceproduct = newprice.value;
    const newcategoryproduct = newcategory.value;
    const newid = idProduct;

    let newcell = { id: newid, name: newproduct, price: newpriceproduct, category: newcategoryproduct, image: imgSelected };

    cell.push(newcell);
    modal.style.display = 'none';
    // Llama a la función cards después de agregar un nuevo producto
    cards();
}

//abrir y cerrar modal actualizar
function showmodalupdate() {
    modalupdate.style.display= 'flex';
}
function close_modal_update() {
    modalupdate.style.display='none';
}

// abrir y cerrar modal
function close_modal() {
    modal.style.display = 'none';
}

function showmodal() {
    modal.style.display = 'flex';
}

// crear carta
function makeCard(cell) {
    const card = document.createElement('div')
    card.classList.add('card')

    const name = document.createElement('h2')
    name.textContent = cell.name
    const category = document.createElement('p')
    category.textContent = `Marca: ${cell.category}`
    const price = document.createElement('p')
    price.textContent = `Precio: $${cell.price}`
    const addToCart = document.createElement('button')
    addToCart.textContent = "Agregar al carrito"

    // Agrega un evento o función para el botón addToCart si es necesario

    const imgCard = document.createElement('img')
    imgCard.src = cell.image
    imgCard.alt = cell.name

    card.appendChild(imgCard)
    card.appendChild(name)
    card.appendChild(category)
    card.appendChild(price)
    card.appendChild(addToCart)

    container.appendChild(card)
}

// Llama a la función cards fuera del evento DOMContentLoaded
cards();

//buscador
$(document).ready(function(){
    $("#input_buscar").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".card").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

// Array para almacenar los productos en el carrito
let cart = [];

const emptyCart = document.getElementById('empty-cart')

document.addEventListener('DOMContentLoaded', () => {
    try {
        const storedCart = localStorage.getItem('products-in-cart');
        if (storedCart) {
            // Intenta analizar la cadena JSON
            cart = JSON.parse(storedCart);
            updateCart();  // Actualiza la interfaz del carrito después de cargar desde localStorage
        }
    } catch (error) {
        // Maneja el error al analizar la cadena JSON
        console.error('Error parsing cart from localStorage:', error);
        // Puedes tomar medidas adicionales según tus necesidades, como restablecer el carrito o informar al usuario.
    }

    // Resto del código...
});


// Función para agregar un producto al carrito
function addToCart(productToAdd) {
  const { id, stock } = productToAdd;
  if (stock > 0) {
      const existingItem = cart.find(item => item.id === id);

      if (existingItem) {
          existingItem.quantity += 1;
      } else {
          cart.push({ ...productToAdd, quantity: 1 });
      }

      // Actualizar el stock del producto
      productToAdd.stock -= 1;

      // Guardar el carrito en localStorage
      localStorage.setItem('products-in-cart', JSON.stringify(cart));

      // Actualizar la interfaz del carrito
      updateCart();
  }
}

  


  
// Función para actualizar la vista del carrito
function updateCart() {
  const cartItemsDiv = document.getElementById('cart-items');
  cartItemsDiv.innerHTML = '';

  let totalPrice = 0;

  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-new-product');
    cartItem.innerHTML = `<p id = "text">${item.name} - Cantidad:</p> 
    <div class = "buttons">
      <button class = "btn-Minum" onclick="decrementQuantity('${item.id}')">-</button><p id="text">
      ${item.quantity}</p>
      <button class = "btn-Plus" onclick="incrementQuantity('${item.id}')">+</button>
      <button class = "btn-Delete" onclick="removeFromCart('${item.id}')">Eliminar</button>
    </div>`;

    cartItemsDiv.appendChild(cartItem);

    totalPrice += item.price * item.quantity;
  });

  document.getElementById('cart-total').innerText = `$${totalPrice}`;
}

// Funciones para ajustar la cantidad de productos en el carrito
function incrementQuantity(id) {
  const item = cart.find(item => item.id === id);
  if (item && item.quantity < item.stock) {
    item.quantity++;
    updateCart();
  }
}

function decrementQuantity(id) {
  const item = cart.find(item => item.id === id);
  if (item && item.quantity > 1) {
    item.quantity--;
    updateCart();
  }
  
}

// Función para eliminar un producto del carrito
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem('products-in-cart', JSON.stringify(cart));
  updateCart();
}


// Función para vaciar completamente el carrito
document.getElementById('empty-cart').addEventListener('click', () => {
  cart = [];
  localStorage.setItem('prdocuts-in-cart', cart)
  updateCart();
});

// Función para realizar el checkout (puedes implementarla según tus necesidades)
document.getElementById('checkout').addEventListener('click', () => {
  // Lógica para finalizar la compra
});

// Evento al hacer clic en "Añadir al carrito" en cada producto
container.addEventListener('click', function(event) {
    if (event.target.classList.contains('btnAdd')) {
      const id = event.target.getAttribute('id');
      const productToAdd = products.find(product => product.id === id);
      addToCart(productToAdd);
    }
  });
  
  // Función para eliminar un producto del carrito
  function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('products-in-cart', JSON.stringify(cart));
    updateCart();
}

  
  // Función para vaciar completamente el carrito
  emptyCart.addEventListener('click', () => {
    cart = [];
    localStorage.setItem('products-in-cart', cart);
    updateCart();
  });
  
  // Función para realizar el checkout (puedes implementarla según tus necesidades)
  document.getElementById('checkout').addEventListener('click', () => {
    // Lógica para finalizar la compra
  });

