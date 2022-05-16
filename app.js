// app.js 

const currentProducts = products;
let categories = new Set();
const productsSection = document.querySelector('.products');

const renderProducts = (items) => {
    for(let i = 0; i < items.length; i++) {
        const newProduct = document.createElement('div');
        newProduct.className = `product-item ${items[i].sale ? "on-sale" : ""}`;
        newProduct.innerHTML = `
        <img src="${items[i].image}" alt="product-image">
        <p class="product-name">${items[i].name}</p>
        <p class="${items[i].image.description}">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quas laboriosam possimus asperiores,
            saepe corporis labore vero dolorum esse vel rem,
            ab unde exercitationem id natus culpa ratione veritatis maiores fuga.
        </p>
        <div class="product-price">
            <span class="price">${items[i].price.toFixed(2)}</span>
            <span class="price-sale">${(items[i].price - items[i].saleAmount).toFixed(2)} zł</span>                    
        </div>
        <button class="product-add-to-basket-btn">Dodaj Do koszyka</button>
        <p class="product-item-sale-info">Promocja</p>`;
        productsSection.appendChild(newProduct);  
    }
     
};

const renderCategories = (items) => {
    for(let i = 0; i < items.length; i++){
        categories.add(items[i].category);
    }

    const categoriesItems = document.querySelector(".categories-items");
    categories = ["Wszystkie", ...categories];

    categories.forEach((category, index) => {
        const newCategory = document.createElement('button');
        newCategory.innerHTML = category;
        newCategory.dataset = category;

        index === 0 ? newCategory.classList.add('active'): "";

        categoriesItems.appendChild(newCategory);
    });
    
};

document.onload = renderProducts(currentProducts);
document.onload = renderCategories(currentProducts);

