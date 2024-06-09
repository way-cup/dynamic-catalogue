document.addEventListener('DOMContentLoaded', function() {
    const productForm = document.getElementById('productForm');
    const productList = document.getElementById('productList');
    const addProductButton = document.getElementById('addProduct');

    fetch('/api/products')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => addProductInput(product));
        });

    addProductButton.addEventListener('click', () => {
        addProductInput();
    });

    productForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const products = [];

        document.querySelectorAll('.product-input').forEach(productDiv => {
            const name = productDiv.querySelector('.name').value;
            const description = productDiv.querySelector('.description').value;
            const image = productDiv.querySelector('.image').value;

            products.push({ name, description, image });
        });

        fetch('/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(products),
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
        });
    });

    function addProductInput(product = { name: '', description: '', image: '' }) {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-input');

        const nameInput = document.createElement('input');
        nameInput.classList.add('name');
        nameInput.type = 'text';
        nameInput.placeholder = 'Product Name';
        nameInput.value = product.name;
        productDiv.appendChild(nameInput);

        const descriptionInput = document.createElement('input');
        descriptionInput.classList.add('description');
        descriptionInput.type = 'text';
        descriptionInput.placeholder = 'Product Description';
        descriptionInput.value = product.description;
        productDiv.appendChild(descriptionInput);

        const imageInput = document.createElement('input');
        imageInput.classList.add('image');
        imageInput.type = 'text';
        imageInput.placeholder = 'Product Image URL';
        imageInput.value = product.image;
        productDiv.appendChild(imageInput);

        productList.appendChild(productDiv);
    }
});
