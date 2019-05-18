function toggleMenu() {
    $('#js-navbar__toggle').on('click', function(){
        $('#js-nav').toggleClass('active');
    })
}

function functionHandler() {
    toggleMenu();
}

window.onload = functionHandler();