const adminProducts = JSON.parse(localStorage.getItem("adminProducts")) || [];

let Items = [
  
{
  id:13,
  image:"https://i.postimg.cc/7PcT7hPt/Nike-Men-s-Ecru-Sweat-Pants-removebg-preview.png",
  desc:" white sweat pants",
  price:"1356",
brand:"Nike",
category:"Pants",
quantity:"5",
},
{
  id:14,
  image:"https://i.postimg.cc/zXKSGKwF/Nike-Men-s-Black-NSW-Club-Jogger-Pants-removebg-preview.png",
  desc:" black joggers",
  price:"1259",
brand:"Nike",
category:"pants",
quantity:"5",
},
{
  id:15,
  image:"https://i.postimg.cc/yx99WCR8/Nike-Club-Blue-Cargo-Pants-removebg-preview.png",
  desc:"blue cargo pants",
  price:"1356",
brand:"Nike",
category:"pants",
quantity:"5"
}
,
{
  id:16,
  image:"https://i.postimg.cc/9fkHF6VS/Mens-adidas-Tiro-23-Club-Training-Black-Pants-removebg-preview.png",
  desc:"black training pants",
  price:"1099",
brand:"addidas",
category:"pants",
quantity:"5"
}
,
{
  id:17,
  image:"https://i.postimg.cc/d0kSnLPH/adidas-Originals-Men-s-Black-Pants-removebg-preview.png",
  desc:"black original pants",
  price:"2299",
brand:"Addidas",
category:"pants",
quantity:"5"
}
,
{
  id:18,
  image:"https://i.postimg.cc/tC4k2YF3/adidas-Originals-Men-s-3-stripes-Olive-Green-Cargo-Pants-removebg-preview.png",
  desc:"olive cargo pants",
  price:"1899",
brand:"Addidas",
category:"pants",
quantity:"4"
}
,
{
  id:19,
  image:"https://i.postimg.cc/9QGVmmQn/under-armor-pique-track-pants-removebg-preview.png",
  desc:"pique track grey trackpants pants windbraker for running and casual",
  price:"1999",
brand:"UA",
category:"pants",
quantity:"5"
}
,
{
  id:20,
  image:"https://i.postimg.cc/k4DW3hvf/under-armor-pique-blue-removebg-preview.png",
  desc:"blue pique track pants",
  price:"1599",
brand:"UA",
category:"pants",
quantity:"6"
}
,
{
  id:21,
  image:"https://i.postimg.cc/Kz6XQcfL/under-armor-grey-removebg-preview.png",
  desc:"grey pants",
  price:"1399",
brand:"UA",
category:"pants",
quantity:"8"
}
,
{
  id:22,
  image:"https://i.postimg.cc/N0CgccsC/new-balance-AT-pants-removebg-preview.png",
  desc:"Green AT pants for running or casual",
  price:"1399",
brand:"NB",
category:"pants",
quantity:"8"
}
,
{
  id:23,
  image:"https://i.postimg.cc/SQCpZ8Mv/impact-Core-NB-removebg-preview.png",
  desc:"Pimpact core pants for sports and casual wear multicolored",
  price:"1299",
  brand:"NB",
  category:"pants",
  quantity:"6"

}
,
{
  id:24,
  image:"https://i.postimg.cc/jdPXDH1t/grey-NB-removebg-preview.png",
  desc:"grey pants side button up full length for casual wear and sports for men and boys multicolor",
  price:"1899",
  brand: "NB",
  category:"pants",
  quantity:"8"
}
,

{
  id: 1,
  image:"https://i.postimg.cc/bvLC0bxM/Nike-Men-s-Olive-Green-Windbreaker-Jacket-removebg-preview.png",
  desc: "windbreaker jacket",
  price: "1800",
  brand:"Nike",
  category:"jacket",
  quantity:"8"
},
{
  id: 2,
  image:"https://i.postimg.cc/9QbKbvVJ/Nike-Men-s-Green-Harrington-Jacket-removebg-preview.png",
  desc: "harrington jacket",
  price: "2899",
  brand:"Nike",
  category:"jacket",
  quantity:"9"
},
{
  id: 3,
  image:"https://i.postimg.cc/hjT0ydTc/Nike-Sportswear-Storm-FIT-Windrunner-Men-s-PRIMALOFT-Black-Filled-Parka-removebg-preview.png c4",
  desc: "storm sportswear ",
  price:" 1899",
  brand:"Nike",
  category:"jacket",
  quantity:"8"
},
{
  id: 4,
  image:"https://i.postimg.cc/2ypH0swt/Mens-adidas-Marathon-Warm-up-Blue-Jacket-removebg-preview.png",
  desc: "warm up jacket",
  price: "1899",
  Brand:"Addidas",
  category:"jacket",
  quantity:"8"
},
{
  id: 5,
  image:"https://i.postimg.cc/ncFKnVCk/Men-s-adidas-Designed-for-Gameday-Black-Full-Zip-Hoodie-removebg-preview-1.png",
  desc: "gameday hoodie",
  price: "1700",
  brand:"Addidas",
  category:"jacket",
  quantity:"8"
},
{
    id:6,
    image:"https://i.postimg.cc/qRZrgvp3/adidas-Originals-Men-s-Multicolour-Windbreaker-removebg-preview.png",
    desc:"windbreaker jacket",
    price:"1499",
    brand:"Addidas",
    category:"jacket",
    quantity:"8"

},
{
  id:7,
  image:"https://i.postimg.cc/T1xTzYJM/winter-AU-removebg-preview.png",
  desc:"winter jacket",
  price:"2 399",
  brand:"UA",
  category:"jacket",
  quantity:"8"

},
{
id:8,
image:"https://i.postimg.cc/HnNBJjZF/gold-gear-AU-removebg-preview.png",
desc:"gold gear jacket",
price:"4356",
brand:"UA",
category:"jacket",
quantity:"8"

},
{
id:9,
image:"https://i.postimg.cc/3N2Fw9G0/fore-front-AU-removebg-preview.png",
desc:"fore front jacket",
price:"4356",
brand:"UA",
category:"jacket",
quantity:"6"

},
{
id:10,
image:"https://i.postimg.cc/ZYgqY4YN/Mens-New-Balance-Accelerate-Half-Zip-Black-Top-removebg-preview.png",
desc:"half zip top",
price:"4356",
brand:"NB",
category:"jacket",
quantity:"7"

},
{
id:11,
image:"https://i.postimg.cc/pdhH6n81/New-Balance-Men-s-Hoops-Black-Hoodie-removebg-preview.png",
desc:"hoops hoodie",
price:"4356",
brand:"NB",
category:"jacket",
quantity:"8"

},
{
id:3,
image:"https://i.postimg.cc/7Yfm7Myc/New-Balance-All-Terrain-Rust-Jacket-removebg-preview.png",
desc:"AT jacket",
price:"4356",
brand:"NB",
category:"jacket",
quantity:"7"

},
{
  id: 1,
  image:"https://i.postimg.cc/nh2VM21q/Nike-Neutral-Olive-Metal-Swoosh-Cap-removebg-preview.png",
  desc: "Metal swoosh cap",
  price: "399",
  brand:"Nike",
  category:"caps",
  quantity:"6"
},
{
  id: 2,
  image:"https://i.postimg.cc/xdF6jrJh/Nike-Futura-Oxen-Brown-Cap-removebg-preview.png",
  desc: "Futura cap",
  price: "399",
  brand:"Nike",
  category:"caps",
  quantity:"6"
},
{
  id: 3,
  image:"https://i.postimg.cc/Z5QNCJH8/Nike-Sportswear-Heritage86-Black-Cap-removebg-preview.png",
  desc: "Heritage cap",
  price: "399",
  brand:"Nike",
  category:"caps",
  quantity:"6"
},
{
  id: 4,
  image:"https://i.postimg.cc/L6jvg9sF/adidas-Originals-MC-Multicolour-Cap-removebg-preview.png",
  desc: "original MC cap",
  price: "359",
  brand:"Addidas",
  category:"caps",
  quantity:"9"
},
{
  id: 5,
  image:"https://i.postimg.cc/s2xgGLK5/adidas-Originals-Black-Satin-Cap-removebg-preview.png",
  desc: "original satin cap",
  price:" 359",
  brand:"UA",
  category:"caps",
  quantity:"8"
},
{
    id:6,
    image:"https://i.postimg.cc/ZYr6V9F0/adidas-Essential-White-Running-Cap-removebg-preview.png",
    desc:"running cap",
    price:"399",
    brand:"UA",
    category:"caps",
    quantity:"7"

},
{
  id:7,
  image:"https://i.postimg.cc/PNnvYv4G/Under-Armour-Isochill-Black-Run-Cap-removebg-preview-removebg-preview.png",
  desc:"drunning cap",
  price:"399",
  brand:"UA",
  category:"caps",
  quantity:"8"

},
{
id:8,
image:"https://i.postimg.cc/Nj3fd22L/Under-Armour-Blitzing-3-0-Royal-Blue-Cap-removebg-preview-1.png",
desc:"blitz cap",
price:"399",
brand:"UA",
category:"caps",
quantity:"9"

},
{
id:9,
image:"https://i.postimg.cc/85hH7vMv/Under-Armour-White-Blitzing-Cap-removebg-preview.png",
desc:"blitz cap",
price:"349",
brand:"UA",
category:"caps",
quantity:"9"

},
{
id:10,
image:"https://i.postimg.cc/63YD8Fdn/New-Balance-Tabacco-Classics-Brown-Cap-removebg-preview.png",
desc:"classic cap",
price:"489",
brand:"NB",
category:"caps",
quantity:"9"

},
{
id:11,
image:"https://i.postimg.cc/vmyj3Gh5/New-Balance-Black-Run-Cap-removebg-preview.png",
desc:"running cap",
price:"399",
brand:"NB",
category:"caps",
quantity:"8"

},
{
id:12,
image:"https://i.postimg.cc/VLbVwJHj/New-Balance-Blue-Haze-Running-Visor-removebg-preview.png",
desc:"haze running cap",
price:"399",
brand:"NB",
category:"caps",
quantity:"5"
},
{
  id: 1,
  image:"https://i.postimg.cc/V6LVC5ng/Nike-Men-s-Air-Max-Black-Sneaker-removebg-preview.png",
  desc: "AirMax sneaker",
  price: "2799",
  brand:"Nike",
  category:"sneakers",
  quantity:"5"
},
{
  id: 2,
  image:"https://i.postimg.cc/XYjHhpDb/Nike-Junior-Freak-4-Black-Sneaker-Nike-Junior-Freak-4-Black-Sneaker-removebg-preview.png",
  desc: "Junior freak sneaker",
  price: "2399",
  brand:"Nike",
  category:"sneakers",
  quantity:"5"
},
{
  id: 3,
  image:"https://i.postimg.cc/5tH3dvBZ/mens-airmax-alpha-removebg-preview.png",
  desc: "AirMax alpha",
  price:" 2299",
  brand:"Nike",
  category:"sneakers",
  quantity:"3"
},
{
  id: 4,
  image:"https://i.postimg.cc/Fz2vp0xN/Men-s-adidas-DROPSET-TRAINER-GREY-removebg-preview.png",
  desc: "dropset trainer",
  price: "2199",
  brand:"Addidas",
  category:"sneakers",
  quantity:"4"
},
{
  id: 5,
  image:"https://i.postimg.cc/Pf85pqyT/adidas-Originals-Men-s-NMD-Black-Sneaker-removebg-preview.png",
  desc: "original sneaker",
  price:" 2299",
  brand:"Addidas",
  category:"sneakers",
  quantity:"5"
},

{
id:9,
image:"https://i.postimg.cc/GmPRP8Tn/Men-s-adidas-D-Rose-Son-of-Chi-2-0-Black-Shoes-removebg-preview.png",
desc:"D rose son of chi",
price:"2599",
brand:"Addidas",
category:"sneakers",
quantity:"4"
},
{
    id:6,
    image:"https://i.postimg.cc/J7gHvg64/images-7-removebg-preview.png",
    desc:"origin sneaker",
    price:"2999",
    brand:"UA",
    category:"sneakers",
quantity:"3"
},
{
  id:7,
  image:"https://i.postimg.cc/W4HJVHNn/AU-phantom-removebg-preview.png",
  desc:"phantom sneaker",
  price:"3999",
  brand:"UA",
  category:"sneakers",
quantity:"8"
},
{
id:8,
image:"https://i.postimg.cc/JzyLg6Fm/44cf65edbd11302198b3f9e5f0683503-removebg-preview.png",
desc:"original sneaker",
price:"2399",
brand:"UA",
category:"sneakers",
quantity:"7"
},

{
id:10,
image:"https://i.postimg.cc/RF0hWQF0/New-balance-removebg-preview.png",
desc:"Remote sneaker",
price:"1899",
brand:"NB",
category:"sneakers",
quantity:"5"
},
{
id:11,
image:"https://i.postimg.cc/7ZyL3y6d/new-balance-men-removebg-preview.png",
desc:"Original runner",
price:"4399",
brand:"NB",
category:"sneakers",
quantity:"4"
},
{
id:'12',
image:"https://i.postimg.cc/yNpgXr2R/new-balance-grey-removebg-preview.png",
desc:"Original sneaker",
price:"1399" ,
brand:"NB",
category:"sneakers",
quantity:"10"

},
];

for(let  i = 0; i < adminProducts.length; i++) {
  Items.push(adminProducts[i]);
}

  
  let dispItem = document.querySelector(".Products");
  Items.forEach((data) => {
    dispItem.innerHTML += `
      <div class= "card  col-lg-4 col-12 col-md-4 col-sm-6">
      <img src="${data.image}">
      <div class="card-body">
      <p class="text-black">${data.desc} </p>
      <p class="prices <br>">ZAR ${data.price}</p>
      <p class="Brands <br>"> ${data.brand}</p>
      <button class="btn btn-primary" onclick="addToCart(${data.id})">Add to Cart</button>
      </div>
      </div>`;
  });

  

  let dispItems = document.querySelector(".Products");
  let filteredItems = [];

function displayItems(items) {
  dispItem.innerHTML = '';

  if (items.length === 0) {
    dispItem.innerHTML = '<h1 class"mx-4" >No items found.</h1>';
  } else {
    items.forEach((data) => {
      dispItem.innerHTML += `
        <div class="card col-lg-4 col-12 col-md-4 col-sm-6 m-4 my-5">
          <img src="${data.image}">
          <div class="card-body">
            <p class="text-black">${data.desc}</p>
            <p class="prices <br>">ZAR ${data.price}</p>
            <p class="prices <br">${data.brand}</p>
            <button class="btn btn-primary <br>" onclick="addToCart(${data.id})">Add to Cart</button>
          </div>
        </div>`;
    });
  }

  
}

function filterItems() {
  const minPrice = parseInt(document.getElementById('min-price').value, 10);
  const maxPrice = parseInt(document.getElementById('max-price').value, 10);

  filteredItems = Items.filter((data) => {
    const price = parseInt(data.price.replace(/\s/g,''));
    return price >= minPrice && price <= maxPrice;
  });

  displayItems(filteredItems);
}


displayItems(Items);
document.getElementById('filter-button').addEventListener('click', filterItems);


document.getElementById('clear-filter-button').addEventListener('click', () => {
  displayItems(Items);
});

// add to cart
let shoppingCart = JSON.parse(localStorage.getItem("cartProducts")) || [];
function addToCart(productId) {
    const product = Items.find((product) => product.id === productId);
    if (product) {
        if (product.quantity > 0) {
            product.quantity--;
            shoppingCart.push(product);
          alert("added to cart")
        }
        else {
            console.log("Product Out Of Stock");
            alert("The product you're looking for is out of stock")
        }
    }
    cartDisplay();
    totalSum();
}
function cartDisplay() {
    const cartContent = document.getElementById("tbody");
    localStorage.setItem("cartProducts", JSON.stringify(shoppingCart));
    cartContent.innerHTML = "";
    shoppingCart.forEach((product, index) =>{
        const cartTable = document.createElement("tr");
        cartTable.innerHTML = `
            <td class="w-25">
            <img src="${product.image}" style="width:100px" alt="logo-img">
            </td>
            <td class="">${product.desc}</td>
            <td>ZAR ${product.price}</td>
            <td>
            <button class="btn btn-danger btn-sm">
            <i class="fa fa-times" onclick="deleteItems(${index})"></i>
            </button>
            </td>
        `;
        cartContent.appendChild(cartTable);
    })
}
cartDisplay();
function totalSum () {
    const sumTotal = document.getElementById("total-price");
    let totalPrice = 0;
    shoppingCart.forEach((product) => {
        totalPrice += parseFloat(product.price) ;

      });
    console.log(shoppingCart);
    console.log("Total Price:", totalPrice);
    sumTotal.innerText = `Total: R ${totalPrice}`;
}
totalSum();
function deleteItems(index) {
    let cart = localStorage.getItem("cartProducts");
    shoppingCart = JSON.parse(cart)
    shoppingCart.splice(index, 1);
    localStorage.setItem("cartProducts", JSON.stringify(shoppingCart));
    totalSum();
    cartDisplay();
}
cartDisplay()
function clearCart() {
    shoppingCart = [];
    localStorage.removeItem("cartProducts");
    cartDisplay();
    totalSum();
}
function checkout() {
    if(shoppingCart.length > 0) {
        clearCart();
        alert("Thank you for your purchase")
    } else {
        alert("Your cart is empty, please add items before you checkout")
    }
}

