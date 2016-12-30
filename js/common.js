$(function() {
$(".toggle-mnu").click(function () {
		$(this).toggleClass("on");
		$(".top-mnu").slideToggle();
	});

	setInterval(function () {
        $('.paws img').each(function(i) {
            $(this).delay((i++) * 500).fadeTo(200, 1);
            $(this).delay(3500-(i++) * 500).fadeTo(200, 0);
        })
    },3500)






});

