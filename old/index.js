// Initializing a client to return content in the store's primary language
const client = ShopifyBuy.buildClient({
    domain: 'ar-holdings-dev-test.myshopify.com',
    storefrontAccessToken: '7834ed716102f02b38892463c60dce57'
});

// Fetch all products in your shop
client.product.fetchAll().then((ObjProducts) => {
    // Do something with the products
    console.log(ObjProducts);
    let products = JSON.stringify(ObjProducts);
    // console.log(ObjProducts);
    ObjProducts.forEach(product => {
        console.log(product.title);
        console.log(product.vendor);
        console.log(product.variants);
        console.log(product.images[0].src);

        // Fetch a single product by ID
        const productId = product.id;

        client.product.fetch(productId).then((product) => {
            // Do something with the product
            console.log(product);
        });

    });
});