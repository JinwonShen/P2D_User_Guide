$(".subMenu ul").hide();
$(".subMenu a").click(function () {
  $(this).parent(".subMenu").children("ul").slideToggle("100");
  $(this).find(".rightBtn").toggleClass("fa-caret-up fa-caret-down");
});