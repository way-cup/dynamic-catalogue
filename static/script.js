document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/products')
        .then(response => response.json())
        .then(products => {
            const catalog = document.getElementById('catalog');

            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');

                const productImage = document.createElement('img');
                productImage.src = product.image;
                productDiv.appendChild(productImage);

                const productName = document.createElement('h2');
                productName.textContent = product.name;
                productDiv.appendChild(productName);

                const productDescription = document.createElement('p');
                productDescription.textContent = product.description;
                productDiv.appendChild(productDescription);

                catalog.appendChild(productDiv);
            });
        });
});
