'use strict';
$(document).ready(
    function() {
        $('.dropdown-trigger').dropdown({
            hover: true
        });

        $('.d-filters').click(() => {
            $('.filters').toggleClass('d-none');
            $('.filters').toggleClass('d-flex');

        });
        $('.search-text').focus(() => {
            $('.btn-search').fadeIn();
        })
        $('.search-text').focusout(() => {
            $('.btn-search').fadeOut();
        })
    }
);