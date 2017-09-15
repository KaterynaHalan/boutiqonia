var woocommerce_price_slider_params = {"min_price":"","max_price":"","currency_format_num_decimals":"0","currency_format_symbol":" грн","currency_format_decimal_sep":".","currency_format_thousand_sep":",","currency_format":"%v%s"};

jQuery(function(e){if("undefined"==typeof woocommerce_price_slider_params)return!1;e("input#min_price, input#max_price").hide(),e(".price_slider, .price_label").show();var r=e(".price_slider_amount #min_price").data("min"),c=e(".price_slider_amount #max_price").data("max"),i=parseInt(r,10),_=parseInt(c,10);woocommerce_price_slider_params.min_price&&(i=parseInt(woocommerce_price_slider_params.min_price,10)),woocommerce_price_slider_params.max_price&&(_=parseInt(woocommerce_price_slider_params.max_price,10)),e(document.body).bind("price_slider_create price_slider_slide",function(r,c,i){e(".price_slider_amount span.from").html(accounting.formatMoney(c,{symbol:woocommerce_price_slider_params.currency_format_symbol,decimal:woocommerce_price_slider_params.currency_format_decimal_sep,thousand:woocommerce_price_slider_params.currency_format_thousand_sep,precision:woocommerce_price_slider_params.currency_format_num_decimals,format:woocommerce_price_slider_params.currency_format})),e(".price_slider_amount span.to").html(accounting.formatMoney(i,{symbol:woocommerce_price_slider_params.currency_format_symbol,decimal:woocommerce_price_slider_params.currency_format_decimal_sep,thousand:woocommerce_price_slider_params.currency_format_thousand_sep,precision:woocommerce_price_slider_params.currency_format_num_decimals,format:woocommerce_price_slider_params.currency_format})),e(document.body).trigger("price_slider_updated",[c,i])}),e(".price_slider").slider({range:!0,animate:!0,min:r,max:c,values:[i,_],create:function(){e(".price_slider_amount #min_price").val(i),e(".price_slider_amount #max_price").val(_),e(document.body).trigger("price_slider_create",[i,_])},slide:function(r,c){e("input#min_price").val(c.values[0]),e("input#max_price").val(c.values[1]),e(document.body).trigger("price_slider_slide",[c.values[0],c.values[1]])},change:function(r,c){e(document.body).trigger("price_slider_change",[c.values[0],c.values[1]])}})});

var focused=0;
guaven_data_path='';
guaven_woos_idb_version=8;
guaven_engine_start_delay=500;
guaven_woos_disable_focusout=0;
guaven_show_all_text="";
guaven_woos_populars_enabled=0;
guaven_woos_categories_enabled=0;
cmaxcount=5;
guaven_woos_correction_enabled=1;
guaven_woos_pinnedtitle="";
guaven_woos_sugbarwidth=1;
minkeycount=3;
maxcount=10;
maxtypocount=10;
guaven_woos_large_data=0;
guaven_woos_updir="";
guaven_woos_exactmatch=0;
guaven_woos_backend=0;
guaven_woos_perst="";
guaven_woos_persprod="";
guaven_woos_mobilesearch=0;
guaven_woos_ignorelist=[""];
guaven_woos_dttrr=0;guaven_woos_wpml="";
guaven_woos_homeurl="";