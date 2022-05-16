// app.js 

let currentProducts = products;
let categories = new Set();
const productsSection = document.querySelector('.products');

const renderProducts = (items) => {
    productsSection.innerHTML = "";
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
    categories = ["All", ...categories];

    categories.forEach((category, index) => {
        const newCategory = document.createElement('button');
        newCategory.innerHTML = category;
        newCategory.dataset.category = category;

        index === 0 ? newCategory.classList.add("active") : "";

        categoriesItems.appendChild(newCategory);
    });
    
};

document.onload = renderProducts(currentProducts);
document.onload = renderCategories(currentProducts);

const categoriesButtons = document.querySelectorAll(".categories-items button");

categoriesButtons.forEach(btn => btn.addEventListener('click', (e) => {
    const category = e.target.dataset.category;

    categoriesButtons.forEach((btn) => btn.classList.remove("active"));

    e.target.classList.add(".active")

    currentProducts = products;

    if (category === "All") {
         currentProducts = products;
    } else {
         currentProducts = currentProducts.filter((product) => 
            product.category === category
            );
    };    

    renderProducts(currentProducts);
}));

const searchBarInput = document.querySelector(".search-bar-input");

searchBarInput.addEventListener('input', (e) => {
    const search = e.target.value;

    const foundProducts = currentProducts.filter((product) => {
        if(product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
            return product;
        }
    });

    const emptyState = document.querySelector(".empty-state");

    foundProducts.length === 0 ? emptyState.classList.add('active'):
     emptyState.classList.remove('active');
    renderProducts(foundProducts);
});

