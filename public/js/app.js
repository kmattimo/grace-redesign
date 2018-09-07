console.log('Grace!')

/*
    No webpack, no fancy stuff. 
    When I was a Grace, I was super eager to show them all kinds of tech,
    auto-whiz-bang amazing stuff to make their lives better. 
    But I soon realized that I was the one needing to be shown
    that all the fancy stuff is really quite unnecessary.
*/

$('.header__main-menu-toggle').click(function() {
    $('.header__main-menu-toggle').toggleClass('is-active');
    $('.main-menu').toggleClass('main-menu--is-active');
})