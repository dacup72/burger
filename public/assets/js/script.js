$(document).ready(function () {

  $(".devourSubmit").on("submit", function (event) {
    event.preventDefault();

    var burgerInfo = {
      burger_id: $(this).children(".burger_id").val(),
      customer: $(this).children(".custom-input").val()
    };
    console.log("=========================")
    console.log(burgerInfo);
    debugger;
    $.ajax({
      method: "PUT",
      url: "/burgers/update",
      data: burgerInfo
    }).then(function (data) {
      
      location.reload();
      
    });

  });
});