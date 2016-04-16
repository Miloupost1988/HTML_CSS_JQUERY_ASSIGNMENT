// javascript

$(document).ready(function() {

    var mainColumn = $("#main-column");
    mainColumn.css("background-color", "#CCC");

    $("#heading h1").text("belangrijkste heading");

    $(".button").click(function() {
        $(".button").fadeOut("slow",
            function() {

            });
    });
});
