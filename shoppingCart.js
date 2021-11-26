let productsInCart = []
const parentElement = document.querySelector("#buyItems");
const cartSumPrice = document.querySelector("#sumPrices");
const products = document.querySelectorAll('.product-under')

function updateProductsInCart(product) {

}


products.forEach(products => {
    products.addEventListener('click', (e) => {
        if (e.target.classicList.contains('addToCart')) {
            const productID = e.target.dataset.productId;
            const productName = product.querySelector('.productName').innerHTML;
            const productPrice = product.querySelector('.priceValue').innerHTML;
            const productImage = product.querySelector('img').src;
            let productToCart = {
                name: productName,
                image: productImage,
                id: prodcutId,
                count: 1,
                price: +productPrice,
                basePrice: +productPrice
            }
            updateProductInCart(productToCart);
            updateShoppingCartHTML();
        }
    });
});