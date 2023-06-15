let Items = [
    // Existing items from the provided code
  ];

  const renderItems = () => {
    const itemsList = document.getElementById("itemsList");
    itemsList.innerHTML = "";

    Items.forEach((item) => {
      const itemCard = document.createElement("div");
      itemCard.classList.add("card");
      itemCard.innerHTML = `
        <p>ID: ${item.id}</p>
        <p>Description: ${item.desc}</p>
        <p>Price: ${item.price}</p>
        <p>Brand: ${item.brand}</p>
        <p>Category: ${item.category}</p>
        <button onclick="editItem(${item.id})">Edit</button>
        <button onclick="deleteItem(${item.id})">Delete</button>
      `;
      itemsList.appendChild(itemCard);
    });
  };

  const addItem = (event) => {
    event.preventDefault();

    const itemId = document.getElementById("itemId").value;
    const itemImage = document.getElementById("itemImage").value;
    const itemDesc = document.getElementById("itemDesc").value;
    const itemPrice = document.getElementById("itemPrice").value;
    const itemBrand = document.getElementById("itemBrand").value;
    const itemCategory = document.getElementById("itemCategory").value;

    const newItem = {
      id: itemId,
      image: itemImage,
      desc: itemDesc,
      price: itemPrice,
      brand: itemBrand,
      category: itemCategory,
    };

    Items.push(newItem);

    document.getElementById("itemForm").reset();
    renderItems();
  };

  const editItem = (itemId) => {
    // Logic to edit an item with the given itemId
    // You can prompt the user for new values or use input fields to edit the values

    renderItems();
  };

  const deleteItem = (itemId) => {
    // Logic to delete an item with the given itemId

    renderItems();
  };

  renderItems();
  document.getElementById("itemForm").addEventListener("submit", addItem);