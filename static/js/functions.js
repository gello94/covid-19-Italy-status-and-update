// Main Functions JS file


// Change displayed contents from Side Menu bar#

function show_trend_chart() {
    $("#trends").show();
    $("#regions_trend").hide();
    $('#info_section').hide()
    $('#europe_cases').hide()
}

function show_region_chart() {
    $("#trends").hide();
    $("#regions_trend").show();
    $('#info_section').hide()
    $('#europe_cases').hide()

}

function show_info_section() {
    $("#trends").hide();
    $("#regions_trend").hide();
    $('#info_section').show();
    $('#europe_cases').hide()
}

function show_europe_cases() {
    $("#trends").hide();
    $("#regions_trend").hide();
    $('#info_section').hide();
    $('#europe_cases').show()
}



//collapse sidebar in dashboard
$(document).ready(function () {
    $(".expand-collapse").click(function (e) {
        $("#sidebar-wrapper").toggleClass("collapsed");
    });

    // If screen size < 960px use sidebar collepsed
    if ($(window).width() < 960) {
        $("#sidebar-wrapper").addClass("collapsed");
    } else {
        $("#sidebar-wrapper").removeClass("collapsed");
        $('#menu-bar').toggleClass('fa-angle-right fa-angle-left');
    }
    $('#menu').click(function () {
        $('#menu-bar').toggleClass('fa-angle-right fa-angle-left');
    })

});

// Show modal on page load
$(window).on('load', function () {
    $('#myModal').modal('show');
});