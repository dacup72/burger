$(document).ready(function () {

  $(".devourSubmit").on("submit", function (event) {
    event.preventDefault();

    var burgerInfo = {
      burger_id: $(this).children(".burger_id").val(),
      customer: $(this).children(".custom-input").val(),
      devoured: $(this).children(".burger_devoured").val()
    };
    //console.log("=========================")
    //console.log(burgerInfo);
    //debugger;
    $.ajax({
      method: "PUT",
      url: "/burgers/update",
      data: burgerInfo
    }).then(function (data) {
      location.reload();
    });
  });

  $(".deleteBurgerSubmit").on("submit", function (event) {
    event.preventDefault();

    var burgerInfo = {
      burger_id: $(this).children(".burger_id").val(),
    };
    //console.log("=========================")
    //console.log(burgerInfo);
    //debugger;
    $.ajax({
      method: "DELETE",
      url: "/burgers/deleteBurger",
      data: burgerInfo
    }).then(function (data) {
      location.reload();
    });
  });

  $(".deleteCartSubmit").on("submit", function (event) {
    event.preventDefault();

    $.ajax({
      method: "DELETE",
      url: "/burgers/deleteCart"
    }).then(function (data) {
      location.reload();
    });
  });
});