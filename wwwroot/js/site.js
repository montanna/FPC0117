/* smooth scrolling sections */
$("a[href*=#]:not([href=#])").click(function () {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
            $("html,body").animate({
                scrollTop: target.offset().top - 50
            }, 800);

            if (this.hash == "#home") {
                $(".scroll-up").hide();
            } else {
                $(".scroll-up").show();
            }

            // activate animations in this section
            target.find(".animate").delay(1200).addClass("animated");
            setTimeout(function () {
                target.find(".animated").removeClass("animated");
            }, 2000);

            return false;
        }
    }
});


$(window).scroll(function () {
    var height = $(window).scrollTop();

    if (height > $("#ministries").offset().top - 100) {
            $("down-button-row").show();
            $(".navbar-trans").addClass("navSolid");
            $(".navbar-trans").removeClass("transparent");
        }

    if (height < $("#ministries").offset().top -100) {
        $("down-button-row").hide();
        $(".active").removeClass("active");
        $("#homeBtn").addClass("active");
        $(".navbar-trans").addClass("transparent");
    }
  
    else if(height < $("#about").offset().top-100){
        $(".active").removeClass("active");
        $("#ministriesBtn").addClass("active");
        
    }
    else if (height < $("#gallery").offset().top - 100) {
        $(".active").removeClass("active");
        $("#aboutBtn").addClass("active");
        $("#goalsContainer").addClass("animated slideInLeft");
        $("#goalsContainer").show();
        $(".mission-container").addClass("animated slideInRight");
        $(".mission-container").delay(300).show();

    }
    else if (height < $("#involvement").offset().top - 100) {
        $(".active").removeClass("active");
        $("#galleryBtn").addClass("active");

    }
    else if (height < $("#news").offset().top - 100) {
        $(".active").removeClass("active");
        $("#involvementBtn").addClass("active");
    }
    else if (height < $("#contact").offset().top - 100) {
        $(".active").removeClass("active");
        $("#newsBtn").addClass("active");
    }
    
    if (height > $("#contact").offset().top - 100) {
        $(".active").removeClass("active");
        $("#contactBtn").addClass("active");
    }
    else if (height < $("#ministries").offset().top - 100) {
        $("down-button-row").hide();

    }
    if ($("#homeBtn").hasClass("active") ){
        $("down-button-row").hide();
    }

});

$("#homeBtn").on("click", function () {
    $("html,body").animate({
        scrollTop: $("#home").offset().top - 50
    }, 800);
    $(".active").removeClass("active");
    $("#homeBtn").addClass("active");
    if($(window).width() <= 768) {
        $(".navbar-collapse").removeClass("in");
        $(".navbar-collapse").addClass("collapse");
    }
});

$("#ministriesBtn").on("click", function () {
    $("html,body").animate({
        scrollTop: $("#ministries").offset().top 
    }, 800);
    $("a.active").removeClass("active");
    $("#ministriesBtn").addClass("active");
    if($(window).width() <= 768) {
        $(".navbar-collapse").removeClass("in");
        $(".navbar-collapse").addClass("collapse");
    }
});

$("#scrollButton").on("click", function () {
    $("html,body").animate({
        scrollTop: $("#ministries").offset().top
    }, 800);
    $("a.active").removeClass("active");
    $("#ministriesBtn").addClass("active");
});

$("#aboutBtn").on("click", function () {
    $("html,body").animate({
        scrollTop: $("#about").offset().top - 50
    }, 800);
    $(".active").removeClass("active");
    $("#aboutBtn").addClass("active");
    if($(window).width() <= 768) {
        $(".navbar-collapse").removeClass("in");
        $(".navbar-collapse").addClass("collapse");
    }
});


$("#galleryBtn").on("click", function () {
    $("html,body").animate({
        scrollTop: $("#gallery").offset().top - 50
    }, 800);
    $(".active").removeClass("active");
    $("#galleryBtn").addClass("active");
    if($(window).width() <= 768) {
        $(".navbar-collapse").removeClass("in");
        $(".navbar-collapse").addClass("collapse");
    }
});

$("#involvementBtn").on("click", function () {
    $("html,body").animate({
        scrollTop: $("#involvement").offset().top - 50
    }, 800);
    $(".active").removeClass("active");
    $("#involvementBtn").addClass("active");
    if($(window).width() <= 768) {
        $(".navbar-collapse").removeClass("in");
        $(".navbar-collapse").addClass("collapse");
    }
});

$("#newsBtn").on("click", function () {
    $("html,body").animate({
        scrollTop: $("#news").offset().top - 50
    }, 800);
    $(".active").removeClass("active");
    $("#newsBtn").addClass("active");
    if($(window).width() <= 768) {
        $(".navbar-collapse").removeClass("in");
        $(".navbar-collapse").addClass("collapse");
    }
});

$("#contactBtn").on("click", function () {
    $("html,body").animate({
        scrollTop: $("#contact").offset().top - 50
    }, 800);
    $(".active").removeClass("active");
    $("#contactBtn").addClass("active");
    if($(window).width() <= 768) {
        $(".navbar-collapse").removeClass("in");
        $(".navbar-collapse").addClass("collapse");
    }
});

$("#ministriesBrowseBtn").on("click", function () {
    $("html,body").animate({
        scrollTop: $("#involvement").offset().top - 50
    }, 800);
    $(".active").removeClass("active");
    $("#involvementBtn").addClass("active");
});

$(".learn-more-button").on("click", function () {
    $(".expand-about").css("display", "block");
    $("#about").css("height", "190vh");
    $("html,body").animate({
        scrollTop: $("#videoExpand").offset().top - 50
    }, 800);
});

$(".close-video-button").on("click", function () {
    $("html,body").animate({
        scrollTop: $("#about").offset().top - 50
    }, 800);
    $(".active").removeClass("active");
    $("#aboutBtn").addClass("active");
});

$(".involvementApplyBTN").on("click", function () {
    $(".involvementPopUp").show();
    $(".PopUpBkg").show();
});
