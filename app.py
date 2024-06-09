from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

# Initial product data
products = [
    {
        "name": "Product 1",
        "description": "Description for product 1",
        "image": "https://via.placeholder.com/150"
    },
    {
        "name": "Product 2",
        "description": "Description for product 2",
        "image": "https://via.placeholder.com/150"
    },
    {
        "name": "Product 3",
        "description": "Description for product 3",
        "image": "https://via.placeholder.com/150"
    }
]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/admin')
def admin():
    return render_template('admin.html')

@app.route('/api/products', methods=['GET'])
def get_products():
    return jsonify(products)

@app.route('/api/products', methods=['POST'])
def update_products():
    global products
    products = request.json
    return jsonify({"message": "Products updated successfully"}), 200

if __name__ == '__main__':
    app.run(debug=True)
