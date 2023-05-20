$(document).ready(function () {
  $(".ADETourDetailCarousel").slick({
    infinite: true,
    slidesToShow: 3,
    arrows: true,
    autoplay: false,
  });

  // should delete
  $(".ADETourExpandRoute").click(() => {
    if ($(".ADETourRouteContent").css("display") === "none") {
      $(".ADETourRouteContent").css("display", "block");
    } else {
      $(".ADETourRouteContent").css("display", "none");
    }
  });

  $(".ADETourNoteTitle").click(function () {
    const content = $(`#content${$(this)[0].id}`);
    if (content.css("display") === "none") {
      content.css("display", "block");
    } else {
      content.css("display", "none");
    }
  });
});
