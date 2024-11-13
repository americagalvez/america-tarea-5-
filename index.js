fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const productsContainer = document.getElementById('products-container');
    data.products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <p class="price">$${product.price.toFixed(2)}</p>
        <button>Agregar al carrito</button>
      `;
      productsContainer.appendChild(productElement);
    });
  })
  .catch(error => console.error('Error al cargar los productos:', error));
