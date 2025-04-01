document.addEventListener("DOMContentLoaded", function () {
      
    const checkboxes = document.querySelectorAll("#sortering input[type='checkbox']");
    const container = document.querySelector(".container");
    
    function filterProducts() {

        const checkedFilters = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.parentElement.textContent.trim());
        
        document.querySelectorAll(".card").forEach(card => {

            const productCategory = card.getAttribute("data-category");
            
            if (checkedFilters.length === 0 || checkedFilters.includes(productCategory)) {
                
                card.style.display = "block";

            } else {
                
                card.style.display = "none";

            }
        });
    }
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", filterProducts);
    });
    

    const categories = ["performance", "styling", "kolfiber", "OEM+"];
    container.innerHTML = "";
    
    for (let i = 1; i <= 20; i++) {
        
        let category = categories[i % categories.length];
        let productHTML = `
            <div class="card" data-category="${category}">
                <img src="/MISC/placeholder300.png" alt="Produkt ${i}">
                <h3>Produkt ${i}</h3>
                <p>Kategori: ${category}</p>
                <button>Köp nu</button>
            </div>
        `;
        container.innerHTML += productHTML;
    }

    filterProducts();
    
});

document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-button");
    const menu = document.querySelector(".menu");
    const fadeLayer = document.querySelector(".fade-layer");

    menuButton.addEventListener("click", () => {
        menu.classList.add("show");
        fadeLayer.classList.add("visible");
    });

    fadeLayer.addEventListener("click", () => {
        menu.classList.remove("show");
        fadeLayer.classList.remove("visible");

    
    });

});