/*
 * Viewport - jQuery selectors for finding elements in viewport
 *
 * Copyright (c) 2008-2009 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *  http://www.appelsiini.net/projects/viewport
 *
 */
(function($) {

    $.belowthefold = function(element, settings) {
        var fold = $(window).height() + $(window).scrollTop();
        return fold <= $(element).offset().top - settings.threshold;
    };

    $.abovethetop = function(element, settings) {
        var top = $(window).scrollTop();
        return top >= $(element).offset().top + $(element).height() - settings.threshold;
    };

    $.rightofscreen = function(element, settings) {
        var fold = $(window).width() + $(window).scrollLeft();
        return fold <= $(element).offset().left - settings.threshold;
    };

    $.leftofscreen = function(element, settings) {
        var left = $(window).scrollLeft();
        return left >= $(element).offset().left + $(element).width() - settings.threshold;
    };

    $.inviewport = function(element, settings) {
        var $element = $(element);
        var offset = $element.offset();

        var $window = $(window);
        var windowTop = $window.scrollTop();
        var top = offset.top - settings.threshold;

        if (top < windowTop) {
            if (top + $element.height() < windowTop) {
                return false;
            } else {
                // top edge below the window's top
            }
        } else {
            if (top > windowTop + $window.height()) {
                return false;
            } else {
                // bottom edge above the window's bottom
            }
        }

        var windowLeft = $window.scrollLeft();
        var left = offset.left - settings.threshold;

        if (left < windowLeft) {
            if (left + $element.width() < windowLeft) {
                return false;
            } else {
                // left edge be on the left side of the window's left edge
            }
        } else {
            if (left > windowLeft + $window.width()) {
                return false;
            } else {
                // right edge be on the right side of the window's right edge
            }
        }

        return true;
    };

    $.extend($.expr[':'], {
        "below-the-fold": function(a, i, m) {
            return $.belowthefold(a, {threshold : 0});
        },
        "above-the-top": function(a, i, m) {
            return $.abovethetop(a, {threshold : 0});
        },
        "left-of-screen": function(a, i, m) {
            return $.leftofscreen(a, {threshold : 0});
        },
        "right-of-screen": function(a, i, m) {
            return $.rightofscreen(a, {threshold : 0});
        },
        "in-viewport": function(a, i, m) {
            return $.inviewport(a, {threshold : 0});
        }
    });


})(jQuery);
