<!DOCTYPE html>
<html lang="ua">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">

    <title>Boutiqonia</title>

    <link href="/images/favicon.png" rel="shortcut icon"/>
    <link href="/images/favicon.png" rel="shortcut icon" type="image/vnd.microsoft.icon"/>
    <link href="/images/favicon.png" rel=icon sizes=16x16 type="image/png"/>
    <link href="/images/favicon.png" rel=icon sizes=32x32 type="image/png"/>
    <link href="/images/favicon.png" rel=icon sizes=96x96 type="image/png"/>
    <link href="/images/favicon.png" rel=icon sizes=192x192 type="image/png"/>
    <link href="/images/favicon.png" rel=apple-touch-icon-precomposed />
    <link href="/images/favicon.png" rel=apple-touch-icon-precomposed sizes=60x60 />
    <link href="/images/favicon.png" rel=apple-touch-icon-precomposed sizes=72x72 />
    <link href="/images/favicon.png" rel=apple-touch-icon-precomposed sizes=76x76 />
    <link href="/images/favicon.png" rel=apple-touch-icon-precomposed sizes=114x114 />
    <link href="/images/favicon.png" rel=apple-touch-icon-precomposed sizes=120x120 />
    <link href="/images/favicon.png" rel=apple-touch-icon-precomposed sizes=152x152 />
    <link href="/images/favicon.png" rel=apple-touch-icon-precomposed sizes=180x180 />

    <link rel='stylesheet' href='/css/style.css' type='text/css' media='all'>
    <link rel='stylesheet' href='/css/js_composer.min-5.2.css' type='text/css' media='all'/>

    <script type='text/javascript' src='/js/jquery-1.12.4.js'></script>
    <script type='text/javascript' src='/js/jquery.themepunch.tools.min-5.4.5.1.js'></script>
    <script type='text/javascript' src='/js/jquery.themepunch.revolution.min-5.4.5.1.js'></script>
    <script type='text/javascript' src='/js/picturefill.min-3.0.2.js'></script>

    <script>
        jQuery(document).ready(function(){
            jQuery(".active").next().slideDown();
            jQuery('.ac_title').click(function(){
                if( jQuery(this).hasClass('active') ){
                    jQuery(this).next().slideUp();
                    jQuery(this).removeClass('active');
                }else{
                    jQuery('.ac_text').slideUp();
                    jQuery(this).next().slideDown();
                    jQuery('.ac_title').removeClass('active');
                    jQuery(this).addClass('active');
                }
                return false;
            });
            jQuery('.colors li').click(function(){
                jQuery('.colors li').removeClass('active-color');
                jQuery(this).addClass('active-color');
            });

        });

        // CountDown start
        var year = 2017;
        var month = 8;
        var day = 27;
        var hour= 0;
        var min= 0;
        var sec= 0;
        // CountDown end

        // Modal start
        var eva_ajax_url = '/modal.php';
        // Modal end
    </script>

    <!--[if lte IE 9]>    <link rel="stylesheet" type="text/css" href="/css/vc_lte_ie9.min.css" media="screen"><![endif]-->


</head>
<body data-form-style="minimal">
<header class="site-header animate-search " role="banner">
    <div class="header-wrapper row">
        <div class="nav">
            <div class="header-nav">
                <div class="menu-trigger menu_trigger_1">
                    <div><span></span></div>
                    <span class="menu-title">Меню</span>
                </div>
            </div>
            <div class="header-contact">
                <div class="header-contact-desc">
                    <span>Свяжитесь с нами</span>
                    <h3><a href="tel:+380635115151">+380 63 511 51 51</a></h3>
                </div>
            </div>
        </div><!-- .nav -->
        <div class="site-branding">
            <a href="/" rel="home">
                <img class="main-logo dark animated fadeIn"
                     src="/images/logo.png"
                     alt="logo">
                <img class="main-logo light animated fadeIn"
                     src="/images/logo.png"
                     alt="logo">
                <img class="sticky-logo animated fadeIn"
                     src="/images/logo-menu.png"
                     alt="logo">
            </a>
        </div><!-- .site-branding -->
        <div class="tools">
            <ul>
                <li class="search-button">
                    <a href="#search" class="cd-search-trigger cd-text-replace">
                        <i class="icon-search"></i>
                    </a>
                </li>
                <li class="">
                    <a href="/">
                        <i class="icon-user"></i>
                    </a>
                    <a href="/">
                        <i class="icon-exit"></i>
                    </a>
                </li>
                <li class="" style="display: none;">
                    <a href="/">
                        <i class="icon-user-check"></i>
                    </a>
                </li>
                <li class="cart-button">
                    <a href="/">
                        <div class="cart-desc">
                            <span class="cart_total"><span class="woocommerce-Price-amount amount">0.00 грн</span></span>
                            Корзина
                        </div>
                        <i class="icon-cart"></i>
                        <span class="cart_items_number counter_number animated rubberBand">2</span>
                    </a>
                </li>
            </ul>
        </div><!-- .tools -->
    </div>
</header>