

$(document).ready(function(){
    $('.search-input').focus(function() {
        $.getJSON( "/search-engine/index.json");
    });
    // If search-input has value add class that moves it in front of label
    $('#site-search-text').on("propertychange input", function () { // input = ie9+, propertychange < ie9
        element = $(this);
        if (element.val()) {
            element.addClass('has-value');
        } else {
            element.removeClass('has-value');
        }
    });
    $(function() {
        $('#search-query').lunrSearch({
            indexUrl: '/search-engine/index.json',   // Url for the .json file containing search index data
            results : '#search-results',  // selector for containing search results element
            entries : '.entries',         // selector for search entries containing element (contained within results above)
            template: '#search-results-template'  // selector for Mustache.js template
        });
    });
});