
const products = [
    "Laptop",
    "Phone",
    "Headphones",
    "Monitor",
];

// Log the first product
function logFirstProduct() {
    console.log(products[0]);
}

// Add a new product
function addProduct(newProduct) {
    products.push(newProduct);
}

// Update a product name using its index
function updateProductName(index, newName) {
    products[index] = newName;
}

// Remove the last product
function removeLastProduct() {
    products.pop();
}


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
