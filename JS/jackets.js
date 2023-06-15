let Items = [
  
   {
      id: 1,
      image:"https://i.postimg.cc/bvLC0bxM/Nike-Men-s-Olive-Green-Windbreaker-Jacket-removebg-preview.png",
      desc: "Rolex champagne Daytona",
      price: "1 800",
      brand:"Nike",
      category:"",
    },
    {
      id: 2,
      image:"https://i.postimg.cc/9QbKbvVJ/Nike-Men-s-Green-Harrington-Jacket-removebg-preview.png",
      desc: "Rolex submariner in oystersteel",
      price: "2 899",
      brand:"Nike",
      category:"",
    },
    {
      id: 3,
      image:"https://i.postimg.cc/hjT0ydTc/Nike-Sportswear-Storm-FIT-Windrunner-Men-s-PRIMALOFT-Black-Filled-Parka-removebg-preview.png c4",
      desc: "Sahmed & sons",
      price: "1 899",
      brand:"Nike",
      category:"",
    },
    {
      id: 4,
      image:"https://i.postimg.cc/2ypH0swt/Mens-adidas-Marathon-Warm-up-Blue-Jacket-removebg-preview.png",
      desc: "Police Menso Watch clean silver fang for men",
      price: "1 899",
      Brand:"Addidas",
      category:"",
    },
    {
      id: 5,
      image:"https://i.postimg.cc/ncFKnVCk/Men-s-adidas-Designed-for-Gameday-Black-Full-Zip-Hoodie-removebg-preview-1.png",
      desc: "Police Malawi Multifunction Leather strap",
      price: "1 700",
      brand:"Addidas",
      category:"",
    },
    {
        id:6,
        image:"https://i.postimg.cc/qRZrgvp3/adidas-Originals-Men-s-Multicolour-Windbreaker-removebg-preview.png",
        desc:"Police Raho Watch skull addition for men",
        price:"1 499",
        brand:"Addidas",
        category:"",
    
    },
    {
      id:7,
      image:"https://i.postimg.cc/T1xTzYJM/winter-AU-removebg-preview.png",
      desc:"Police Raho Watch skull addition for men",
      price:"2 399",
      brand:"UA",
      category:"",
    
    },
    {
    id:8,
    image:"https://i.postimg.cc/HnNBJjZF/gold-gear-AU-removebg-preview.png",
    desc:"Police Raho Watch skull addition for men",
    price:"4 356",
    brand:"UA",
    category:"",
    
    },
    {
    id:9,
    image:"https://i.postimg.cc/3N2Fw9G0/fore-front-AU-removebg-preview.png",
    desc:"Police Raho Watch skull addition for men",
    price:"4 356",
    brand:"UA",
    category:"",
    
    },
    {
    id:10,
    image:"https://i.postimg.cc/ZYgqY4YN/Mens-New-Balance-Accelerate-Half-Zip-Black-Top-removebg-preview.png",
    desc:"Police Raho Watch skull addition for men",
    price:"4 356",
    brand:"NB",
    category:"",
    
    },
    {
    id:11,
    image:"https://i.postimg.cc/pdhH6n81/New-Balance-Men-s-Hoops-Black-Hoodie-removebg-preview.png",
    desc:"Police Raho Watch skull addition for men",
    price:"4 356",
    brand:"NB",
    category:"",
    
    },
    {
    id:3,
    image:"https://i.postimg.cc/7Yfm7Myc/New-Balance-All-Terrain-Rust-Jacket-removebg-preview.png",
    desc:"Police Raho Watch skull addition for men",
    price:"4 356",
    brand:"NB",
    category:"",
    
    },
    
    ];
    
      
      let dispItem = document.querySelector(".Jackets");
      Items.forEach((data) => {
        dispItem.innerHTML += `
          <div class= "card  col-lg-4 col-12 col-md-4 col-sm-6 m-4 my-5">
          <img src="${data.image}">
          <div class="card-body">
          <p class="text-black">${data.desc} </p>
          <p class="prices <br>">ZAR ${data.price}</p>
          <p class="Brands <br>"> ${data.brand}</p>
          <button class="btn btn-primary" onclick="addToCart(${data.id})">Add to Cart</button>
          </div>
          </div>`;
      });
      function filterItems() {
        const minPrice = document.getElementById('min-price').value;
        const maxPrice = document.getElementById('max-price').value;
      
        filteredItems = Items.filter((data) => {
          const price = parseInt(data.price.replace(/\s/g, ''));
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
      function addToCart(dataId) {
          const product = Items.find((data) => data.id === dataId);
          if (product) {
              if (Items.quantity > 5) {
                  Items.quantity--;
                  shoppingCart.push(Items);
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
          const cartContent = document.getElementById("table");
          localStorage.setItem("cartProducts", JSON.stringify(shoppingCart));
          cartContent.innerHTML = "";
          shoppingCart.forEach((Items, index) =>{
              const cartTable = document.createElement("tr");
              cartTable.innerHTML = `
                  <td class="w-25">
                  <img src="${Items.image}" alt="logo-img">
                  </td>
                  <td class="">${Items.desc}</td>
                  <td>R ${Items.price}</td>
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
          shoppingCart.forEach((Items) => {
              totalPrice += Items.price;
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
      
      