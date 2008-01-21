/*
 * Viewport - jQuery selectors for finding elements in viewport
 *
 * Copyright (c) 2008 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Revision: $Id: jquery.lazyload.js 291 2008-01-18 20:26:11Z tuupola $
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
        return !$.rightofscreen(element, settings) && !$.leftofscreen(element, settings) && !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
    };
    
    $.extend($.expr[':'], {
        belowthefold  : "$.belowthefold(a,  {threshold : 0})",
        abovethetop   : "$.abovethetop(a,   {threshold : 0})",
        leftofscreen  : "$.leftofscreen(a,  {threshold : 0})",
        rightofscreen : "$.rightofscreen(a, {threshold : 0})",
        inviewport    : "$.inviewport(a,    {threshold : 0})"
    });
    
})(jQuery);
