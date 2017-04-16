(function() {
    $(document).ready(function() {

        // set active class of li on click
        var listItems = $('ul.menu li');
        $('ul.menu li a').click(function() {
            listItems.removeClass('active');
            $(this).parent().addClass('active');
        })
    })
})();
