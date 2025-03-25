document.addEventListener("DOMContentLoaded", () => {
      const menuButton = document.querySelector(".menu-button");
      const menu = document.querySelector(".menu");
      const fadeLayer = document.querySelector(".fade-layer");
  
      // Visa menyn och fade-layer
      menuButton.addEventListener("click", () => {
          menu.classList.add("show");
          fadeLayer.classList.add("visible");
      });
  
      // Dölj menyn och fade-layer
      fadeLayer.addEventListener("click", () => {
          menu.classList.remove("show");
          fadeLayer.classList.remove("visible");

     
      });

  });