/// <reference path="jquery-2.1.0-vsdoc.js"/>
/// <reference path="bootstrap.js"/>
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $("div.item img").hover(function () {
        $(this).css("cursor", "pointer");
    });
    $("div.item img").click(function () {
        $divCarouselClicked = $(this).parent().parent();
        $copy = $divCarouselClicked.clone();
        $currModalCarousel = $("div#modalCarousel div.carousel-inner");
        $currModalCarousel.empty();
        $("div#modalCarousel ol.carousel-indicators").empty();
        $currModalCarousel.prepend($copy);
        var imagesDivs = $("div.item", $copy);
        var noOfImages = imagesDivs.length;
        for (var i = 0; i < noOfImages; i++) {
            if (imagesDivs[i].className=="item active") {
                $("div#modalCarousel ol.carousel-indicators").append('<li data-target="div#modalCarousel" data-slide-to="' + i + '" class="active"></li>');
            }
            else {
                $("div#modalCarousel ol.carousel-indicators").append('<li data-target="div#modalCarousel" data-slide-to="' + i + '"></li>');
            }
        }
        $("div#universalModal").modal("show");
    });
    //$('div#universalModal').on('hidden.bs.modal', function () {
    //    $imageClickedParent.prepend($divCarouselClicked);
    //})
});