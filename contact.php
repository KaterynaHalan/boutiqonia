<?php require_once('header.php'); ?>

    <div id="contact" class="offcanvas_container woocommerce">
        <div class="offcanvas_main_content">
            <div class="page-wrapper">
                <div id="primary" class="content-area">
                    <div id="content" class="site-content" role="main">
                        <div class="row woocommerce">
                            <div class="large-12 columns wc-notice">
                            </div>
                        </div>
                        <article class="page type-page status-publish hentry">
                            <div class="row">
                                <div class="large-12 columns">
                                    <div class="entry-content">
                                        <div data-vc-full-width="true" data-vc-full-width-init="false"
                                             data-vc-stretch-content="true"
                                             class="vc_row wpb_row vc_row-fluid vc_row-no-padding">
                                            <div class="wpb_column vc_column_container vc_col-sm-12">
                                                <div class="vc_column-inner ">
                                                    <div class="wpb_wrapper">
                                                        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCbIZD4bLscsD1Fz_6P4r9k4J7VcsdvzqI&extension=.js"></script>
                                                        <script src="https://cdn.mapkit.io/v1/infobox.js"></script>
                                                        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400" rel="stylesheet">
                                                        <link href="https://cdn.mapkit.io/v1/infobox.css" rel="stylesheet" >

                                                        <script>
                                                            google.maps.event.addDomListener(window, 'load', init);
                                                            var map, markersArray = [];

                                                            function bindInfoWindow(marker, map, location) {
                                                                google.maps.event.addListener(marker, 'click', function() {
                                                                    function close(location) {
                                                                        location.ib.close();
                                                                        location.infoWindowVisible = false;
                                                                        location.ib = null;
                                                                    }

                                                                    if (location.infoWindowVisible === true) {
                                                                        close(location);
                                                                    } else {
                                                                        markersArray.forEach(function(loc, index){
                                                                            if (loc.ib && loc.ib !== null) {
                                                                                close(loc);
                                                                            }
                                                                        });

                                                                        var boxText = document.createElement('div');
                                                                        boxText.style.cssText = 'background: #fff;';
                                                                        boxText.classList.add('md-whiteframe-2dp');

                                                                        function buildPieces(location, el, part, icon) {
                                                                            if (location[part] === '') {
                                                                                return '';
                                                                            } else if (location.iw[part]) {
                                                                                switch(el){
                                                                                    case 'photo':
                                                                                        if (location.photo){
                                                                                            return '<div class="iw-photo" style="background-image: url(' + location.photo + ');"></div>';
                                                                                        } else {
                                                                                            return '';
                                                                                        }
                                                                                        break;
                                                                                    case 'iw-toolbar':
                                                                                        return '<div class="iw-toolbar"><h3 class="md-subhead">' + location.title + '</h3></div>';
                                                                                        break;
                                                                                    case 'div':
                                                                                        switch(part){
                                                                                            case 'email':
                                                                                                return '<div class="iw-details"><i class="material-icons" style="color:#4285f4;"><img src="//cdn.mapkit.io/v1/icons/' + icon + '.svg"/></i><span><a href="mailto:' + location.email + '" target="_blank">' + location.email + '</a></span></div>';
                                                                                                break;
                                                                                            case 'web':
                                                                                                return '<div class="iw-details"><i class="material-icons" style="color:#4285f4;"><img src="//cdn.mapkit.io/v1/icons/' + icon + '.svg"/></i><span><a href="' + location.web + '" target="_blank">' + location.web_formatted + '</a></span></div>';
                                                                                                break;
                                                                                            case 'desc':
                                                                                                return '<label class="iw-desc" for="cb_details"><input type="checkbox" id="cb_details"/><h3 class="iw-x-details">Details</h3><i class="material-icons toggle-open-details"><img src="//cdn.mapkit.io/v1/icons/' + icon + '.svg"/></i><p class="iw-x-details">' + location.desc + '</p></label>';
                                                                                                break;
                                                                                            default:
                                                                                                return '<div class="iw-details"><i class="material-icons"><img src="//cdn.mapkit.io/v1/icons/' + icon + '.svg"/></i><span>' + location[part] + '</span></div>';
                                                                                                break;
                                                                                        }
                                                                                        break;
                                                                                    case 'open_hours':
                                                                                        var items = '';
                                                                                        if (location.open_hours.length > 0){
                                                                                            for (var i = 0; i < location.open_hours.length; ++i) {
                                                                                                if (i !== 0){
                                                                                                    items += '<li><strong>' + location.open_hours[i].day + '</strong><strong>' + location.open_hours[i].hours +'</strong></li>';
                                                                                                }
                                                                                                var first = '<li><label for="cb_hours"><input type="checkbox" id="cb_hours"/><strong>' + location.open_hours[0].day + '</strong><strong>' + location.open_hours[0].hours +'</strong><i class="material-icons toggle-open-hours"><img src="//cdn.mapkit.io/v1/icons/keyboard_arrow_down.svg"/></i><ul>' + items + '</ul></label></li>';
                                                                                            }
                                                                                            return '<div class="iw-list"><i class="material-icons first-material-icons" style="color:#4285f4;"><img src="//cdn.mapkit.io/v1/icons/' + icon + '.svg"/></i><ul>' + first + '</ul></div>';
                                                                                        } else {
                                                                                            return '';
                                                                                        }
                                                                                        break;
                                                                                }
                                                                            } else {
                                                                                return '';
                                                                            }
                                                                        }

                                                                        boxText.innerHTML =
                                                                            buildPieces(location, 'photo', 'photo', '') +
                                                                            buildPieces(location, 'iw-toolbar', 'title', '') +
                                                                            buildPieces(location, 'div', 'address', 'location_on') +
                                                                            buildPieces(location, 'div', 'web', 'public') +
                                                                            buildPieces(location, 'div', 'email', 'email') +
                                                                            buildPieces(location, 'div', 'tel', 'phone') +
                                                                            buildPieces(location, 'div', 'int_tel', 'phone') +
                                                                            buildPieces(location, 'open_hours', 'open_hours', 'access_time') +
                                                                            buildPieces(location, 'div', 'desc', 'keyboard_arrow_down');

                                                                        var myOptions = {
                                                                            alignBottom: true,
                                                                            content: boxText,
                                                                            disableAutoPan: true,
                                                                            maxWidth: 0,
                                                                            pixelOffset: new google.maps.Size(-140, -40),
                                                                            zIndex: null,
                                                                            boxStyle: {
                                                                                opacity: 1,
                                                                                width: '280px'
                                                                            },
                                                                            closeBoxMargin: '0px 0px 0px 0px',
                                                                            infoBoxClearance: new google.maps.Size(1, 1),
                                                                            isHidden: false,
                                                                            pane: 'floatPane',
                                                                            enableEventPropagation: false
                                                                        };

                                                                        location.ib = new InfoBox(myOptions);
                                                                        location.ib.open(map, marker);
                                                                        location.infoWindowVisible = true;
                                                                    }
                                                                });
                                                            }

                                                            function init() {
                                                                var mapOptions = {
                                                                    center: new google.maps.LatLng(50.449225548862984,30.51653354492192),
                                                                    zoom: 11,
                                                                    gestureHandling: 'auto',
                                                                    fullscreenControl: false,
                                                                    zoomControl: true,
                                                                    disableDoubleClickZoom: true,
                                                                    mapTypeControl: false,
                                                                    scaleControl: false,
                                                                    scrollwheel: false,
                                                                    streetViewControl: false,
                                                                    draggable : true,
                                                                    clickableIcons: false,
                                                                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                                                                    styles: [{"featureType":"water","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#aee2e0"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#abce83"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#769E72"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#7B8758"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"color":"#EBF4A4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#8dab68"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#5B5B3F"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ABCE83"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#A4C67D"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#9BBF72"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#EBF4A4"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#87ae79"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#7f2200"},{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"visibility":"on"},{"weight":4.1}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#495421"}]},{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"visibility":"off"}]}]
                                                                }
                                                                var mapElement = document.getElementById('map');
                                                                var map = new google.maps.Map(mapElement, mapOptions);
                                                                var locations = [
                                                                    {"title":"Киев","address":"Киев, Украина","desc":"","tel":"","int_tel":"","email":"","web":"","web_formatted":"","open":"","time":"","lat":50.4501,"lng":30.523400000000038,"vicinity":"Киев","open_hours":"","marker":{"fillColor":"#E91E63","fillOpacity":1,"strokeWeight":0,"scale":1.5,"path":"M10.2,9.6C4.5,9.6-0.1,14.3-0.1,20c0,5.7,10.3,12.1,10.3,16.6c0-4.5,10.3-10.9,10.3-16.6S15.9,9.6,10.2,9.6z M10.2,24.3c-2.4,0-4.4-2-4.4-4.4s2-4.4,4.4-4.4s4.4,2,4.4,4.4S12.6,24.3,10.2,24.3z","anchor":{"x":10,"y":30},"origin":{"x":0,"y":0},"style":2},"iw":{"address":true,"desc":true,"email":true,"enable":true,"int_tel":true,"open":true,"open_hours":true,"photo":true,"tel":true,"title":true,"web":true}}
                                                                ];
                                                                for (i = 0; i < locations.length; i++) {
                                                                    marker = new google.maps.Marker({
                                                                        icon: locations[i].marker,
                                                                        position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
                                                                        map: map,
                                                                        title: locations[i].title,
                                                                        address: locations[i].address,
                                                                        desc: locations[i].desc,
                                                                        tel: locations[i].tel,
                                                                        int_tel: locations[i].int_tel,
                                                                        vicinity: locations[i].vicinity,
                                                                        open: locations[i].open,
                                                                        open_hours: locations[i].open_hours,
                                                                        photo: locations[i].photo,
                                                                        time: locations[i].time,
                                                                        email: locations[i].email,
                                                                        web: locations[i].web,
                                                                        iw: locations[i].iw
                                                                    });
                                                                    markersArray.push(marker);

                                                                    if (locations[i].iw.enable === true){
                                                                        bindInfoWindow(marker, map, locations[i]);
                                                                    }
                                                                }
                                                            }
                                                        </script>
                                                        <style>
                                                            #map {
                                                                height:450px;
                                                                width:100%;
                                                                margin-top: 165px;
                                                            }
                                                        </style>
                                                        <div id='map'></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="vc_row-full-width vc_clearfix"></div>
                                        <div data-vc-full-width="true" data-vc-full-width-init="false"
                                             class="vc_row wpb_row vc_row-fluid vc_row-o-equal-height vc_row-flex">
                                            <div class="wpb_column vc_column_container vc_col-sm-8">
                                                <div class="vc_column-inner vc_custom_1485890321478">
                                                    <div class="wpb_wrapper">
                                                        <div class="vc_empty_space" style="height: 80px">
                                                            <span class="vc_empty_space_inner"></span>
                                                        </div>
                                                        <h1 style="font-size: 40px;color: #333333;line-height: 40px;text-align: left" class="vc_custom_heading">КОНТАКТЫ</h1>
                                                        <h4 style="font-size: 26px;color: #9EC416;line-height: 30px;text-align: left" class="vc_custom_heading vc_custom_1485270348103">
                                                           ФОРМА СВЯЗИ
                                                        </h4>
                                                        <div>
                                                            <form action="/" method="post" >
                                                                <div class="row">
                                                                    <div class="large-4 columns">
                                                                        <label>Имя *<br/>
                                                                            <span class="wpcf7-form-control-wrap">
                                                                                <input type="text" name="" value="" size="40"/>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                    <div class="large-4 columns">
                                                                        <label> Email *<br/>
                                                                            <span class="wpcf7-form-control-wrap">
                                                                                <input type="email" name="" value="" size="40"/>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                    <div class="large-4 columns">
                                                                        <label> Телефон *<br/>
                                                                            <span class="wpcf7-form-control-wrap">
                                                                                <input type="text" name="" value="" size="40"/>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <p><label> Сообщение<br/>
                                                                        <span class="wpcf7-form-control-wrap ">
                                                                            <textarea name="" cols="40" rows="10"></textarea>
                                                                        </span>
                                                                    </label>
                                                                </p>
                                                                <p>
                                                                    <input type="submit" value="Отправить"/>
                                                                </p>
                                                            </form>
                                                        </div>
                                                        <div class="vc_empty_space" style="height: 80px"><span class="vc_empty_space_inner"></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="wpb_column vc_column_container vc_col-sm-4 vc_col-has-fill">
                                                <div class="vc_column-inner vc_custom_1456090660314">
                                                    <div class="wpb_wrapper">
                                                        <div class="vc_empty_space" style="height: 50px"><span class="vc_empty_space_inner"></span></div>
                                                        <div class="vc_separator wpb_content_element vc_separator_align_left vc_sep_width_100 vc_sep_border_width_3 vc_sep_pos_align_left vc_custom_1487757371341 vc_separator-has-text">
                                                            <span class="vc_sep_holder vc_sep_holder_l">
                                                                <span style="border-color:#9EC416;" class="vc_sep_line"></span>
                                                            </span>
                                                            <h4>НАШ АДРЕС</h4>
                                                            <span class="vc_sep_holder vc_sep_holder_r">
                                                                <span style="border-color:#9EC416;" class="vc_sep_line"></span>
                                                            </span>
                                                        </div>
                                                        <div class="wpb_text_column wpb_content_element ">
                                                            <div class="wpb_wrapper">
                                                                <h5>Киев, Украина</h5>
                                                                <p><a href="tel:+380635115151">+380 63 511 51 51</a><br/>
                                                                    <a href="mailto:info@boutiqonia.com">info@boutiqonia.com</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="vc_separator wpb_content_element vc_separator_align_left vc_sep_width_100 vc_sep_border_width_3 vc_sep_pos_align_left vc_custom_1487757377709 vc_separator-has-text">
                                                            <span class="vc_sep_holder vc_sep_holder_l"><span
                                                                        style="border-color:#9EC416;"
                                                                        class="vc_sep_line"></span></span><h4>Часы работы</h4><span
                                                                    class="vc_sep_holder vc_sep_holder_r"><span
                                                                        style="border-color:#9EC416;"
                                                                        class="vc_sep_line"></span></span>
                                                        </div>
                                                        <div class="wpb_text_column wpb_content_element ">
                                                            <div class="wpb_wrapper">
                                                                <p><strong>Пн - Пт</strong>: 10.00 - 18.00<br/>
                                                                    <strong>Суббота</strong>: 10.00 - 16.00<br/>
                                                                    <strong>Воскресенье</strong>: 12.00 - 16.00</p>

                                                            </div>
                                                        </div>
                                                        <div class="vc_separator wpb_content_element vc_separator_align_left vc_sep_width_100 vc_sep_border_width_3 vc_sep_pos_align_left vc_custom_1487757377709 vc_separator-has-text">
                                                            <span class="vc_sep_holder vc_sep_holder_l"><span
                                                                        style="border-color:#9EC416;"
                                                                        class="vc_sep_line"></span></span><h4>Соц сети</h4><span
                                                                    class="vc_sep_holder vc_sep_holder_r"><span
                                                                        style="border-color:#9EC416;"
                                                                        class="vc_sep_line"></span></span>
                                                        </div>
                                                        <div class="wpb_text_column wpb_content_element ">
                                                            <div class="wpb_wrapper">
                                                                <ul class="social-icons">
                                                                    <li>
                                                                        <a target="_blank" title="Facebook" href="https://facebook.com/boutiqonia/">
                                                                            <img src="/images/facebook.png" alt="">
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a target="_blank" title="Instagram" href="https://instagram.com/Boutiqonia/">
                                                                            <img src="/images/instagram.png" alt="">
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a target="_blank" title="Viber" href="tel:+380635115151">
                                                                            <img src="/images/viber.png" alt="">
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a target="_blank" title="Whatsapp" href="tel:+380635115151">
                                                                            <img src="/images/whatsapp.png" alt="">
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a target="_blank" title="Telegram" href="tel:+380635115151">
                                                                            <img src="/images/telegram.png" alt="">
                                                                        </a>
                                                                    </li>
                                                                </ul>

                                                            </div>
                                                        </div>
                                                        <div class="vc_empty_space" style="height: 100px"><span
                                                                    class="vc_empty_space_inner"></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="vc_row-full-width vc_clearfix"></div>
                                    </div><!-- .entry-content -->

                                </div><!-- .columns -->
                            </div><!-- .row -->

                        </article><!-- #post -->


                        <div class="clearfix"></div>


                    </div><!-- #content -->

                </div><!-- #primary -->
<?php require_once('footer.php'); ?>