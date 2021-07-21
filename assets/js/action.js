if ($(".text-slider").length == 1) {
              
    var typed_strings = 
        $(".text-slider-items").text();

    var typed = new Typed(".text-slider", {
        strings: typed_strings.split(", "),
        typeSpeed: 20,
        loop: true,
        backDelay: 900,
        backSpeed: 15,
    });
}

function responsiveFunction(){
    var element = document.getElementById("responsive");
    element.classList.toggle("tpp-responsiveHeader");
}

/*$(document).on('click','tpp-ulHeader li' ,function(){
    $(this).addClass('active').siblings().removeClass('active')
})*/