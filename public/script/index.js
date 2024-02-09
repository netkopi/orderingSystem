const menuBtn = document.querySelector('#menu-btn');

menuBtn.addEventListener('change', () => {
    const menuLinks = document.querySelector('#menu-links');
    if(menuBtn.checked){
        menuLinks.style.display = 'flex';
    }
    else if(!menuBtn.checked){
        menuLinks.style.display = 'none';
    }
});


window.addEventListener('load', () => {
    
    fetch(`http://localhost:5000/product`)
    .then(res => res.json())
    .then( data => {

        const productContainer = document.querySelector('#products-container');
        data.map((item, index) => {
            productContainer.innerHTML += `
            
                <div class='product' data-item-id='${item.id}'>
                    <div class='img'>
                        <img src='${item.image}'/>
                    </div>
                    <div class='product-info'>
                        <p>${item.name}</p>
                        <p class='price'>${item.price}Php</p>
                        <button>Add to cart</button>
                    </div>
                </div>

            `;
        })
    
    })
    .catch(err => console.error(err));
});