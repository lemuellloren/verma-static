"use strict";

$(document).ready(function () {
    $(document).ready(function () {
        lottie.loadAnimation({
            container: document.getElementById('hero-banner-wave'), // the dom element that will contain the
            animation,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: './assets/waves/data-color-1.json' // the path to the animation json
        });
    });

});