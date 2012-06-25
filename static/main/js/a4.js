$(document).ready(function(e) {
    /*= datepicker */
    if(typeof($.datepicker) == 'object') {
        $('#paper_from, #paper_to').datepicker({dateFormat: 'yy-mm-dd', showOn: 'button', buttonImage: '/static/main/images/searchinfo-calendar.png', buttonImageOnly: true});
    }
    /*= /datepicker */
    /*= fake selects */
    var setFields = function(e) {
        $(this).parent().find('span').text($(this).val());
    }
    $('div.select select').each(setFields)
    $('div.select select').bind('change', setFields);
    /*= /fake selects */
    /*= placeholders */
    $('input[type="text"]:not(.hasDatepicker), textarea').each(function(i) {
        $(this).data('initval', $(this).val());
        $(this).bind('focus', function(e) {
            if($(this).val() == $(this).data('initval')) {
                $(this).val('');
            }
        });
        $(this).bind('blur', function(e) {
            if($(this).val() == '') {
                $(this).val($(this).data('initval'));
            }
        });
    });
    $('form').bind('submit', function(e) {
        $(this).find('input[type="text"], textarea').each(function(e) {
            if($(this).val() == $(this).data('initval')) {
                $(this).val('');
            }
        }); 
    });
    /*= /placeholders */
    /*= tooltips */
    $('ul.news li[rel]').bind('mouseenter', function(e) {
        $(this).find('div.tooltip').remove();
        var tooltip = $('<div class="tooltip"><div>' + $(this).attr('rel') + '</div></div>');
        $(this).append(tooltip);
        var offset = tooltip.offset();
        tooltip.remove();
        tooltip.css('top', offset.top.toString() + 'px').css('left', offset.left.toString() + 'px');
        $(document.body).append(tooltip);
    });
    $('ul.news li[rel]').bind('mouseleave', function(e) {
        $(this).find('div.tooltip').remove();
        $(document.body).find('div.tooltip').remove();
    });
    /*= /tooltips */
    /* IE7 fixes */
    if ($.browser.msie && $.browser.version <= 7) {
        $('#breadcrumbs li:not(.home)').before(' > ');
        $('#top ul.menu li:not(.search):not(.search + li)').before(' | ');
        $('#content ul.pager li:not(:first)').before(' | ');
        $('#footer ul.menu li:not(:first)').before(' | ');
    }

});