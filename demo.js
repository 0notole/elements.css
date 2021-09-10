$(document).ready(function () {

    // Making all the <code> elements visible (with no JS they make no sense)
    // And wrap them into the .relative div to add a copy button
    $("code").show().wrap('<div class="relative"></div>');
    $(".relative code").after('<button class="button button_transparent far fa-copy" title="Copy to Clipboard"></button>');

    // Outputting the source code inside each <code> block
    $("code").each(function () {

        // The original
        var code = $(this).html();

        // Measuring the initial indent
        var shift = code.match(/^\s{0,100}/)[0].length;

        // Replacing that shift
        var regex = new RegExp("\\s{" + shift + "}", "g");

        // Replacing the < and >
        var replaced = code.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;');

        if (shift > 0) {
            replaced = replaced.replace(regex, '<br>');
        }

        replaced = replaced.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '<br>').replace(/\s/g, '&nbsp;');

        $(this).html(replaced);

    });

    $(".relative code + .button").click(function (e) {

        e.preventDefault();

        // The button we just clicked on
        var button = $(this);

        // The code we're about to copy
        var text = button.prev('code').html();

        navigator.clipboard.writeText(text).then(function() {
            button.addClass('green').removeClass('far fa-copy').addClass('fa-check fas');
        }, function(err) {
            button.addClass('red').removeClass('far fa-copy').addClass('fa-times fas');
        });

    });

    $("a[href*=\\#][scroll]").click(function(e) {

        var href = (e.target.tagName == 'SPAN' || e.target.tagName == 'I') ? $(e.target).parent().attr('href') : $(e.target).attr('href');

        if (href != '#') {

            var hash = href.substring(href.indexOf('#')+1);

            if ($('#' + hash).length) {
                $('html, body').animate({
                    scrollTop: $('#' + hash).offset().top
                }, 250);
            }

        }

    });


});

function popup () {
    $('body').append('<div class="overlay" id="overlay"></div><div class="popup" id="demo"><div class="card shadow"><div class="flex middle-xs box"><div class="subtitle grow">Demo Popup</div><button id="close" class="button button_white fa fa-times"></button></div><div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div></div></div>');
    $("#demo").show(function () {
        $("#close, #overlay").click(close);
    });
}

function close () {
    $("#overlay, #demo").remove();
}

$(document).on('keyup',function(evt) {
    if (evt.keyCode == 27) {
       close();
    }
});
