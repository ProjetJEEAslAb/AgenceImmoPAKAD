$(function () {
    var divs = $("div");
    divs.not("").hide();
    $("#idmeuble").change(function () {
        divs.filter(":visible").hide();
        $($(this).val()).show();
        return false;
    });
});