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
      $(".ADETourDateInfo").css("display", "block");
    } else {
      $(".ADETourRouteContent").css("display", "none");
      $(".ADETourDateInfo").css("display", "none");
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

  $("#invoice").attr("checked", "true");

  $("#invoice").change(function () {
    if ($("#invoice").is(":checked") === true) {
      console.log("chekced");
      $(".ADETourBillingInfo").css("display", "flex");
    } else {
      console.log("not chekced");
      $(".ADETourBillingInfo").css("display", "none");
    }
  });

  $(".ADETourPaymentContent").css("display", "none");

  $(".ADETourPaymentTitle input").change(function () {
    $(".ADETourPaymentContent").css("display", "none");
    $(".ADETourPaymentTitle input").not($(this)).prop("checked", false);
    $(this)
      .closest(".ADETourPaymentOption")
      .children(".ADETourPaymentContent")
      .css("display", "block");
  });
});
