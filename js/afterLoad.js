$(function() {
    var tofetch = $("load").each(function() {
        $(this).load($(this).attr('src'));
    });
});