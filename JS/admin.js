const adminProducts = JSON.parse(localStorage.getItem("adminProducts")) || [];

function addProducts() {
    const id = Math.floor(Math.random() * 1000000);

    const product = {
        id,
        image: document.getElementById("image").value,
        desc: document.getElementById("product-desc").value,
        price: parseFloat(document.getElementById("product-price").value),
        category: document.getElementById("category").value,
        quantity: parseInt(document.getElementById("quantity").value),
        brand: parseInt(document.getElementById("brand").value),
    }
    adminProducts.push(product);  
    localStorage.setItem("adminProducts", JSON.stringify(adminProducts));
    displayAdminProducts();

}

const addBtn = document.getElementById("btn-add");
addBtn.addEventListener("click", addProducts)

function displayAdminProducts() {
    const listProducts = document.getElementById("product-list");
   
        listProducts.innerHTML = "";
        adminProducts.forEach((product) => {
            let adminTable = document.createElement("tr");
            adminTable.innerHTML = `
            <td> <img src="${product.image}"> </td>
            <td>${product.desc}</td>
            <td>${product.price}</td>
            <td>${product.category}</td>
             <td>${product.brand}</td>
            <td>${product.quantity}</td>
            <td>
                <button class="deleteBtn" onclick="deleteProducts(${product.id})"> Delete </button>
            </td>
            `;
            listProducts.appendChild(adminTable);
  
        })
}
displayAdminProducts();

function deleteProducts(productId) {
    const adminIndex = adminProducts.findIndex((product) => product.id === productId);

    if(adminIndex !== -1) {
        adminProducts.splice(adminIndex, 1);
    }

    localStorage.setItem("adminProducts", JSON.stringify(adminProducts));
    displayAdminProducts();
} 