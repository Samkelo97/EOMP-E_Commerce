let Items = [
  

    {
      id: 1,
      image:"https://i.postimg.cc/V6LVC5ng/Nike-Men-s-Air-Max-Black-Sneaker-removebg-preview.png",
      desc: "Rolex champagne Daytona",
      price: "2 799",
      brand:"Nike",
      category:"",
    },
    {
      id: 2,
      image:"https://i.postimg.cc/XYjHhpDb/Nike-Junior-Freak-4-Black-Sneaker-Nike-Junior-Freak-4-Black-Sneaker-removebg-preview.png",
      desc: "Rolex submariner in oystersteel",
      price: "2 399",
      brand:"Nike",
      category:"",
    },
    {
      id: 3,
      image:"https://i.postimg.cc/5tH3dvBZ/mens-airmax-alpha-removebg-preview.png",
      desc: "Sahmed & sons",
      price: "2 299",
      brand:"Nike",
      category:"",
    },
    {
      id: 4,
      image:"https://i.postimg.cc/Fz2vp0xN/Men-s-adidas-DROPSET-TRAINER-GREY-removebg-preview.png",
      desc: "Police Menso Watch clean silver fang for men",
      price: "2 199",
      brand:"Addidas",
      category:"",
    },
    {
      id: 5,
      image:"https://i.postimg.cc/Pf85pqyT/adidas-Originals-Men-s-NMD-Black-Sneaker-removebg-preview.png",
      desc: "Police Malawi Multifunction Leather strap",
      price: "2 299",
      brand:"Addidas",
      category:"",
    },
    
    {
    id:9,
    image:"https://i.postimg.cc/GmPRP8Tn/Men-s-adidas-D-Rose-Son-of-Chi-2-0-Black-Shoes-removebg-preview.png",
    desc:"Police Raho Watch skull addition for men",
    price:"2 599",
    brand:"Addidas",
    category:"",
    
    },
    {
        id:6,
        image:"https://i.postimg.cc/J7gHvg64/images-7-removebg-preview.png",
        desc:"Police Raho Watch skull addition for men",
        price:"2 999",
        brand:"UA",
        category:"",
    
    },
    {
      id:7,
      image:"https://i.postimg.cc/W4HJVHNn/AU-phantom-removebg-preview.png",
      desc:"Police Raho Watch skull addition for men",
      price:"3 999",
      brand:"UA",
      category:"",
    
    },
    {
    id:8,
    image:"https://i.postimg.cc/JzyLg6Fm/44cf65edbd11302198b3f9e5f0683503-removebg-preview.png",
    desc:"Police Raho Watch skull addition for men",
    price:"2 399",
    brand:"UA",
    category:"",
    
    },
    
    {
    id:10,
    image:"https://i.postimg.cc/RF0hWQF0/New-balance-removebg-preview.png",
    desc:"Police Raho Watch skull addition for men",
    price:"1 899",
    brand:"NB",
    category:"",
    
    },
    {
    id:11,
    image:"https://i.postimg.cc/7ZyL3y6d/new-balance-men-removebg-preview.png",
    desc:"Police Raho Watch skull addition for men",
    price:"4 399",
    brand:"NB",
    category:"",
    
    },
    {
    id:'',
    image:"https://i.postimg.cc/yNpgXr2R/new-balance-grey-removebg-preview.png",
    desc:"Police Raho Watch skull addition for men",
    price:"1 399",
    brand:"NB",
    category:"",
    
    },
    ];
    
      
      let dispItem = document.querySelector(".Sneakers");
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
      
      