let Items = [
    {
      id: 1,
      image:"https://i.postimg.cc/nh2VM21q/Nike-Neutral-Olive-Metal-Swoosh-Cap-removebg-preview.png",
      desc: "Rolex champagne Daytona",
      price: "399",
      brand:"Nike",
      category:"",
    },
    {
      id: 2,
      image:"https://i.postimg.cc/xdF6jrJh/Nike-Futura-Oxen-Brown-Cap-removebg-preview.png",
      desc: "Rolex submariner in oystersteel",
      price: "399",
      brand:"Nike",
      category:"",
    },
    {
      id: 3,
      image:"https://i.postimg.cc/Z5QNCJH8/Nike-Sportswear-Heritage86-Black-Cap-removebg-preview.png",
      desc: "Sahmed & sons",
      price: "399",
      brand:"Nike",
      category:"",
    },
    {
      id: 4,
      image:"https://i.postimg.cc/L6jvg9sF/adidas-Originals-MC-Multicolour-Cap-removebg-preview.png",
      desc: "Police Menso Watch clean silver fang for men",
      price: "359",
      brand:"Addidas",
      category:"",
    },
    {
      id: 5,
      image:"https://i.postimg.cc/s2xgGLK5/adidas-Originals-Black-Satin-Cap-removebg-preview.png",
      desc: "Police Malawi Multifunction Leather strap",
      price: "359",
      brand:"UA",
      category:"",
    },
    {
        id:6,
        image:"https://i.postimg.cc/ZYr6V9F0/adidas-Essential-White-Running-Cap-removebg-preview.png",
        desc:"Police Raho Watch skull addition for men",
        price:"399",
        brand:"UA",
        category:"",
    
    },
    {
      id:7,
      image:"https://i.postimg.cc/PNnvYv4G/Under-Armour-Isochill-Black-Run-Cap-removebg-preview-removebg-preview.png",
      desc:"Police Raho Watch skull addition for men",
      price:"399",
      brand:"UA",
      category:"",
    
    },
    {
    id:8,
    image:"https://i.postimg.cc/Nj3fd22L/Under-Armour-Blitzing-3-0-Royal-Blue-Cap-removebg-preview-1.png",
    desc:"Police Raho Watch skull addition for men",
    price:"399",
    brand:"UA",
    category:"",
    
    },
    {
    id:9,
    image:"https://i.postimg.cc/85hH7vMv/Under-Armour-White-Blitzing-Cap-removebg-preview.png",
    desc:"Police Raho Watch skull addition for men",
    price:"349",
    brand:"UA",
    category:"",
    
    },
    {
    id:10,
    image:"https://i.postimg.cc/63YD8Fdn/New-Balance-Tabacco-Classics-Brown-Cap-removebg-preview.png",
    desc:"Police Raho Watch skull addition for men",
    price:"489",
    brand:"NB",
    category:"",
    
    },
    {
    id:11,
    image:"https://i.postimg.cc/vmyj3Gh5/New-Balance-Black-Run-Cap-removebg-preview.png",
    desc:"Police Raho Watch skull addition for men",
    price:"399",
    brand:"NB",
    category:"",
    
    },
    {
    id:12,
    image:"https://i.postimg.cc/VLbVwJHj/New-Balance-Blue-Haze-Running-Visor-removebg-preview.png",
    desc:"Police Raho Watch skull addition for men",
    price:"399",
    brand:"NB",
    category:"",
    },
    
    ];
    
      
      let dispItem = document.querySelector(".Caps");
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