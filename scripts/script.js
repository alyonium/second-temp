$(document).ready(function () {
    const headerNav = $('.header__nav');
    //burger menu
    $('.header__burger').click(function () {
        if (headerNav.hasClass('active')) {
            headerNav.removeClass('active');
            $('html').css('overflow-y', 'scroll');
        } else {
            headerNav.addClass('active');
            $('html').css('overflow-y', 'hidden');
        }
    });
    //cross
    $('.header__nav__close').click(function () {
        headerNav.removeClass('active');
        $('html').css('overflow-y', 'scroll');
    });
    //input-1
    $('.slide4__button').click(function () {
        const inputs = [];
        const children = $('.slide4__button').parent().children('input').toArray();
        children.forEach(function (el) {
            inputs.push({
                    name: $(el).attr('class'),
                    value: $(el).val()
                });
        });
        console.log(inputs);
    });
    //input-2
    $('.slide9__button').click(function() {
        const inputs = [];
        const children = $('.slide9__button').parent().children('input').toArray();
        children.forEach(function (el) {
           inputs.push({
               name: $(el).attr('class'),
               value: $(el).val()
           });
        });
        console.log(inputs);
    });
});

