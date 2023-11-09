document.addEventListener("DOMContentLoaded", function() {
  const menuItems = document.querySelectorAll(".menu a");
  const sections = document.querySelectorAll("section");
  
  menuItems.forEach(function(menuItem) {
    menuItem.addEventListener("click", function(e) {
      e.preventDefault();
  
      const target = this.getAttribute("href");
  
      sections.forEach(function(section) {
        if ("#" + section.id === target) {
          section.style.display = "block";
        } else {
          section.style.display = "none";
        }
      });
    });
  });
});