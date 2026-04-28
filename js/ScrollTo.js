$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      const hash = this.hash;

      $("html, body").animate({
        scrollTop: $(hash).offset().top - 72
      }, 700, function () {
        window.location.hash = hash;
      });

      $(".mobile").slideUp(180);
      $("#click").attr("aria-expanded", "false");
      $("body").removeClass("menu-open");
    }
  });
});

$("#click").click(function () {
  const isOpen = $(this).attr("aria-expanded") === "true";

  $(".mobile").slideToggle(180);
  $(this).attr("aria-expanded", String(!isOpen));
  $("body").toggleClass("menu-open", !isOpen);
});
