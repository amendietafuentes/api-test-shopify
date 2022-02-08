// Initializing a client to return content in the store's primary language
const client = ShopifyBuy.buildClient({
    domain: 'ar-holdings-dev-test.myshopify.com',
    storefrontAccessToken: '7834ed716102f02b38892463c60dce57'
});

let btnSync = document.querySelector('#btn-sync-up');
let productsContent = document.querySelector('#products');


btnSync.addEventListener('click', () => {
    resetProducts();
    getProducts();
});

const resetProducts = () => {
    productsContent.innerHTML = "";
}

const getProducts = async() => {

    let HTMLcontent = '';

    client.product.fetchAll().then((ObjProducts) => {

        // Do something with the products
        // let products = JSON.stringify(ObjProducts);
        console.log(ObjProducts);

        ObjProducts.forEach(product => {
            HTMLcontent += `
            <div class="card-product">
                <img src="${product.images[0].src}">` +
                `<div class="product-info">
                    <h1 class="title">${product.title}</h1>` +
                `<p class="vendor">${product.vendor}</p>
                </div>
                <div class="amount-product">
                    <p class="amount">${product.variants[0].price}</p>
                </div>
            </div>`;
        });

        productsContent.innerHTML = HTMLcontent;

    }).catch(errorMessage => {
        console.log(errorMessage);
    });

}

//resetProducts();
getProducts();