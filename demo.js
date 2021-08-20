$(document).ready(function () {
    $("code").each(function () {

        var code = $(this).html();

        var shift = code.match(/^\s{0,100}/)[0].length;
        console.log(shift);

        var replaced = code.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '<br>').replace(/\s/g, '&nbsp;');

        $(this).html(replaced);

    });


    $("a[href*=\\#][scroll]").click(function(e) {
        var href = $(e.target).attr('href');
        console.log(e.target);

        if (href != '#') {


            var url = $(e.target).attr('href');
            if (url) {
                var hash = url.substring(url.indexOf('#')+1);
                if ($('#' + hash).length) {
                    $('html, body').animate({
                        scrollTop: $('#' + hash).offset().top
                    }, 250);
                    toggleNav(e, false);
                }
            }

        }

    });


});
