let Items = [
  
    {
      id:13,
      image:"https://i.postimg.cc/7PcT7hPt/Nike-Men-s-Ecru-Sweat-Pants-removebg-preview.png",
      desc:"Police Raho Watch skull addition for men",
      price:"1 356",
    brand:"Nike",
    category:"Pants",
    },
    {
      id:14,
      image:"https://i.postimg.cc/zXKSGKwF/Nike-Men-s-Black-NSW-Club-Jogger-Pants-removebg-preview.png",
      desc:"Police Raho Watch skull addition for men",
      price:"1 259",
    brand:"Nike",
    category:"pants",
    },
    {
      id:15,
      image:"https://i.postimg.cc/yx99WCR8/Nike-Club-Blue-Cargo-Pants-removebg-preview.png",
      desc:"Police Raho Watch skull addition for men",
      price:"1 356",
    brand:"Nike",
    category:"pants",
    }
    ,
    {
      id:16,
      image:"https://i.postimg.cc/9fkHF6VS/Mens-adidas-Tiro-23-Club-Training-Black-Pants-removebg-preview.png",
      desc:"Police Raho Watch skull addition for men",
      price:"1 099",
    brand:"addidas",
    category:"pants",
    }
    ,
    {
      id:17,
      image:"https://i.postimg.cc/d0kSnLPH/adidas-Originals-Men-s-Black-Pants-removebg-preview.png",
      desc:"Police Raho Watch skull addition for men",
      price:"2 299",
    brand:"Addidas",
    category:"pants",
    }
    ,
    {
      id:18,
      image:"https://i.postimg.cc/tC4k2YF3/adidas-Originals-Men-s-3-stripes-Olive-Green-Cargo-Pants-removebg-preview.png",
      desc:"Police Raho Watch skull addition for men",
      price:"1 899",
    brand:"Addidas",
    category:"pants",
    }
    ,
    {
      id:19,
      image:"https://i.postimg.cc/9QGVmmQn/under-armor-pique-track-pants-removebg-preview.png",
      desc:"Police Raho Watch skull addition for men",
      price:"1 999",
    brand:"UA",
    category:"pants"
    }
    ,
    {
      id:20,
      image:"https://i.postimg.cc/k4DW3hvf/under-armor-pique-blue-removebg-preview.png",
      desc:"Police Raho Watch skull addition for men",
      price:"1 599",
    brand:"UA",
    category:"pants"
    }
    ,
    {
      id:21,
      image:"https://i.postimg.cc/Kz6XQcfL/under-armor-grey-removebg-preview.png",
      desc:"Police Raho Watch skull addition for men",
      price:"1 399",
    brand:"UA",
    category:"pants"
    }
    ,
    {
      id:22,
      image:"https://i.postimg.cc/N0CgccsC/new-balance-AT-pants-removebg-preview.png",
      desc:"Police Raho Watch skull addition for men",
      price:"1 399",
    brand:"NB",
    category:"pants"
    }
    ,
    {
      id:23,
      image:"https://i.postimg.cc/SQCpZ8Mv/impact-Core-NB-removebg-preview.png",
      desc:"Police Raho Watch skull addition for men",
      price:"1 299",
      brand:"NB",
      category:"pants"
    
    }
    ,
    {
      id:24,
      image:"https://i.postimg.cc/jdPXDH1t/grey-NB-removebg-preview.png",
      desc:"Police Raho Watch skull addition for men",
      price:"1 899",
      brand: "NB",
      category:"pants",
    }];
    let dispItem = document.querySelector(".Pants");
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