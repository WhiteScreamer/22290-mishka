document.addEventListener('DOMContentLoaded', function(){   
  var menu=document.getElementById("menu")
  var idMenuButton=document.getElementById("top-row__menu-button");
  idMenuButton.addEventListener("click", function() {
      if(menu.className=="menu") {
        menu.className="menu--visible";
        idMenuButton.className="top-row__menu-button top-row__menu-button--close";
      }else{
        menu.className="menu";
        idMenuButton.className="top-row__menu-button top-row__menu-button--open";
      }
  });
  var modalW=document.getElementById("add-to-basket");
  var order=document.getElementById("product__order");
  order.addEventListener("click", function() {
      if(modalW.className=="add-to-basket") {
        modalW.className="add-to-basket--visible";
      }else{
        modalW.className="add-to-basket";
      }
  });
});
