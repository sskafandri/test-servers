"use strict";




(function () {

    function myFunction(x) {

        x.classList.toggle("change");

        $(".nav-menu").toggleClass("active");

        $(".top-navigation").toggleClass("active")


    }



    function package_switcher(evt, cityName) {


        var i, tabcontent, tablinks;

        tabcontent = document.getElementsByClassName("package-row");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("package-nav-link");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "flex";
        document.getElementById(cityName).style.justifyContent = "space-around";
        evt.currentTarget.className += " active";


    }




    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();
}());




