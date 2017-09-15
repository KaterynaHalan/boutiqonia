<?php require_once('header.php'); ?>
<div class="offcanvas_container">
    <div class="offcanvas_main_content">
        <div class="page-wrapper woocommerce">
            <div id="primary" class="content-area shop-page shop-has-sidebar">
                <div class="page-header" data-stellar-background-ratio=0.6  style="background: url('/images/bg5.jpg') no-repeat center center;">
                    <div class="row">
                        <div class="title-section ">
                            <div id="breadcrumbs">
                                <span>
                                    <a title="Перейти на главную" href="/" class="home">
                                        <span>Главная</span>
                                    </a>
                                </span> &gt;
                                <span>
                                    <span>Товары</span>
                                </span>
                            </div>
                            <h1 class="page-title">Товары</h1>
                        </div>
                    </div>
                </div>
                <div id="content" class="site-content" role="main">
                    <div class="row">
                        <div class="xlarge-2 large-3 columns show-for-large-up sidebar-pos">
                            <div class="shop_sidebar wpb_widgetised_column">
                                <div id="secondary" class="widget-area" role="complementary">
                                    <aside class="widget woocommerce widget_product_categories">
                                        <h3 class="widget-title">Категории</h3>
                                        <ul class="product-categories">
                                            <li class="cat-item">
                                                <a href="/">Все</a>
                                                <span class="count">245</span>
                                            </li>
                                            <li class="cat-item cat-parent ">
                                                <h4 class="ac_title active">
                                                    <a href="/" class="">Для женщин</a>
                                                    <span class="count">185</span>
                                                </h4>
                                                <ul class='children ac_text '>
                                                    <li class="cat-item">
                                                        <a href="/">Верхняя одежда</a>
                                                        <span class="count">9</span>
                                                    </li>
                                                    <li class="cat-item">
                                                        <a href="/">Платья</a>
                                                        <span class="count">14</span>
                                                    </li>
                                                    <li class="cat-item">
                                                        <a href="/">Юбки</a>
                                                        <span class="count">14</span>
                                                    </li>
                                                    <li class="cat-item">
                                                        <a href="/">Майки и футболки</a>
                                                        <span class="count">14</span>
                                                    </li>
                                                    <li class="cat-item">
                                                        <a href="/">Рубашки и блузы</a>
                                                        <span class="count">14</span>
                                                    </li>
                                                    <li class="cat-item">
                                                        <a href="/">Брюки</a>
                                                        <span class="count">14</span>
                                                    </li>
                                                    <li class="cat-item">
                                                        <a href="/">Шорты</a>
                                                        <span class="count">14</span>
                                                    </li>
                                                    <li class="cat-item">
                                                        <a href="/">Кофты</a>
                                                        <span class="count">14</span>
                                                    </li>

                                                </ul>
                                            </li>
                                            <li class="cat-item cat-parent">
                                                <h4 class="ac_title">
                                                    <a href="/" class="">Для мужчин</a>
                                                    <span class="count">185</span>
                                                </h4>
                                                <ul class='children ac_text'>
                                                    <li class="cat-item">
                                                        <a href="/">Верхняя одежда</a>
                                                        <span class="count">9</span>
                                                    </li>
                                                    <li class="cat-item">
                                                        <a href="/">Пиджаки и костюмы</a>
                                                        <span class="count">14</span>
                                                    </li>
                                                    <li class="cat-item">
                                                        <a href="/">Свитеры</a>
                                                        <span class="count">14</span>
                                                    </li>
                                                    <li class="cat-item">
                                                        <a href="/">Майки и футболки</a>
                                                        <span class="count">14</span>
                                                    </li>
                                                    <li class="cat-item">
                                                        <a href="/">Рубашки</a>
                                                        <span class="count">14</span>
                                                    </li>
                                                    <li class="cat-item">
                                                        <a href="/">Брюки</a>
                                                        <span class="count">14</span>
                                                    </li>
                                                    <li class="cat-item">
                                                        <a href="/">Шорты</a>
                                                        <span class="count">14</span>
                                                    </li>
                                                    <li class="cat-item">
                                                        <a href="/">Кофты</a>
                                                        <span class="count">14</span>
                                                    </li>

                                                </ul>
                                            </li>
                                        </ul>
                                    </aside>
                                    <aside class="widget woocommerce widget_price_filter">
                                        <h3 class="widget-title">Цена</h3>
                                        <form method="get" action="/">
                                            <div class="price_slider_wrapper">
                                                <div class="price_slider" style="display:none;"></div>
                                                <div class="price_slider_amount">
                                                    <input type="text" id="min_price" name="min_price" value=""
                                                           data-min="1" placeholder="Min price"/>
                                                    <input type="text" id="max_price" name="max_price" value=""
                                                           data-max="10000" placeholder="Max price"/>
                                                    <button type="submit" class="button">Фильтр</button>
                                                    <div class="price_label" style="display:none;">
                                                        Цена: <span class="from"></span> &mdash; <span
                                                                class="to"></span>
                                                    </div>
                                                    <div class="clear"></div>
                                                </div>
                                            </div>
                                        </form>
                                    </aside>
                                    <aside class="widget woocommerce widget_layered_nav">
                                        <h3 class="widget-title">Размер</h3>
                                        <select class="dropdown_layered_nav_sizes">
                                            <option value="">Все</option>
                                            <option value="xxl">XXL</option>
                                            <option value="xl">XL</option>
                                            <option value="l">L</option>
                                            <option value="m">M</option>
                                            <option value="s">S</option>
                                            <option value="xs">XS</option>
                                        </select>
                                        <label for="sale">
                                            <input id="sale" type="checkbox" value="">
                                            Sale
                                        </label>
                                    </aside>

                                    <aside class="widget woocommerce widget_product_tag_cloud">
                                        <h3 class="widget-title">Бренды</h3>
                                        <div class="tagcloud">
                                            <a href="/" class="tag-cloud-link" style="font-size: 8pt;">Gucci</a>
                                            <a href="/" class="tag-cloud-link" style="font-size: 8pt;">Louis Vuitton</a>
                                            <a href="/" class="tag-cloud-link" style="font-size: 8pt;">Burberry</a>
                                            <a href="/" class="tag-cloud-link" style="font-size: 8pt;">Chanel</a>
                                            <a href="/" class="tag-cloud-link" style="font-size: 8pt;">Versace</a>
                                            <a href="/" class="tag-cloud-link" style="font-size: 8pt;">Prada</a>
                                            <a href="/" class="tag-cloud-link" style="font-size: 8pt;">Dior</a>
                                            <a href="/" class="tag-cloud-link" style="font-size: 8pt;">Alexander McQween</a>
                                            <a href="/" class="tag-cloud-link" style="font-size: 8pt;">Giorgio Armani</a>
                                            <a href="/" class="tag-cloud-link" style="font-size: 8pt;">Ralph Lauren</a>
                                            <a href="/" class="tag-cloud-link" style="font-size: 8pt;">Hermes</a>
                                            <a href="/" class="tag-cloud-link" style="font-size: 8pt;">Dolce & Gabbana</a>
                                            <a href="/" class="tag-cloud-link" style="font-size: 8pt;">Salvatore Ferragamo</a>
                                            <a href="/" class="tag-cloud-link" style="font-size: 8pt;">Dunhill</a>
                                            <a href="/" class="tag-cloud-link" style="font-size: 8pt;">Calvin Klein</a>
                                        </div>
                                    </aside>
                                    <aside class="widget woocommerce widget_layered_nav">
                                        <h3 class="widget-title">Материал</h3>
                                        <select class="dropdown_layered_nav_sizes">
                                            <option value="">Все</option>
                                            <option value="Атлас">Атлас</option>
                                            <option value="Бархат ">Бархат </option>
                                            <option value="Велюр ">Велюр </option>
                                            <option value="Вискоза ">Вискоза </option>
                                            <option value="Коттон">Коттон</option>
                                            <option value="Полиэстер  ">Полиэстер  </option>
                                            <option value="Хлопок ">Хлопок </option>
                                            <option value="Шёлк  ">Шёлк  </option>
                                        </select>
                                    </aside>

                                    <aside class="widget woocommerce widget_layered_nav">
                                        <h3 class="widget-title">Цвет</h3>
                                        <ul class="colors">
                                            <li class="wc-layered-nav-term" style="background-color: #F74859"><a href="/"></a></li>
                                            <li class="wc-layered-nav-term" style="background-color: #A88897"><a href="/"></a></li>
                                            <li class="wc-layered-nav-term" style="background-color: #DB2808"><a href="/"></a></li>
                                            <li class="wc-layered-nav-term" style="background-color: #2B4839"><a href="/"></a></li>
                                            <li class="wc-layered-nav-term" style="background-color: #F87832"><a href="/"></a></li>
                                            <li class="wc-layered-nav-term" style="background-color: #F8D839"><a href="/"></a></li>
                                            <li class="wc-layered-nav-term" style="background-color: #F8A849"><a href="/"></a></li>
                                            <li class="wc-layered-nav-term" style="background-color: #583828"><a href="/"></a></li>
                                            <li class="wc-layered-nav-term" style="background-color: #C83818"><a href="/"></a></li>
                                            <li class="wc-layered-nav-term" style="background-color: #9898A8"><a href="/"></a></li>
                                            <li class="wc-layered-nav-term" style="background-color: #ffffff"><a href="/"></a></li>
                                            <li class="wc-layered-nav-term" style="background-color: #000000"><a href="/"></a></li>
                                            <li class="wc-layered-nav-term" style="background-color: #F74859"><a href="/"></a></li>
                                            <li class="wc-layered-nav-term" style="background-color: #A88897"><a href="/"></a></li>
                                            <li class="wc-layered-nav-term" style="background-color: #DB2808"><a href="/"></a></li>
                                            <li class="wc-layered-nav-term" style="background-color: #2B4839"><a href="/"></a></li>
                                            <li class="wc-layered-nav-term" style="background-color: #F74859"><a href="/"></a></li>
                                            <li class="wc-layered-nav-term" style="background-color: #A88897"><a href="/"></a></li>
                                            <li class="wc-layered-nav-term" style="background-color: #DB2808"><a href="/"></a></li>
                                            <li class="wc-layered-nav-term" style="background-color: #2B4839"><a href="/"></a></li>
                                            <li class="wc-layered-nav-term" style="background-color: #F87832"><a href="/"></a></li>
                                            <li class="wc-layered-nav-term" style="background-color: #F8D839"><a href="/"></a></li>
                                            <li class="wc-layered-nav-term" style="background-color: #F8A849"><a href="/"></a></li>
                                            <li class="wc-layered-nav-term" style="background-color: #583828"><a href="/"></a></li>
                                        </ul>
                                    </aside>
                                    <aside class="widget woocommerce widget_layered_nav">
                                        <h3 class="widget-title">Стиль</h3>
                                        <select class="dropdown_layered_nav_sizes">
                                            <option value="">Все</option>
                                            <option value="Спортивный">Спортивный</option>
                                            <option value="Академический">Академический</option>
                                            <option value="Деловой">Деловой</option>
                                            <option value="Богемный">Богемный</option>
                                        </select>
                                    </aside>
                                    <aside class="widget woocommerce widget_layered_nav">
                                        <h3 class="widget-title">Сезон</h3>
                                        <div class="season">
                                            <div class="winter">
                                                <h5>Зима</h5>
                                            </div>
                                            <div class="spring">
                                                <h5>Весна</h5>
                                            </div>
                                            <div class="summer">
                                                <h5>Лето</h5>
                                            </div>
                                            <div class="autumn">
                                                <h5>Осень</h5>
                                            </div>
                                        </div>
                                    </aside>
                                    <aside class="widget woocommerce widget_top_rated_products">
                                        <h3 class="widget-title">Просмотренные товары</h3>
                                        <ul class="product_list_widget">
                                            <li>
                                                <a href="/">
                                                    <img width="100" height="128" src="/images/product1.jpg" class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt=""/>
                                                    <span class="product-title">Элегантное платье в полоску  </span>
                                                </a>
                                                <del><span class="woocommerce-Price-amount amount">860.00 грн</span></del>
                                                <ins><span class="woocommerce-Price-amount amount">760.00 грн</span></ins>
                                            </li>

                                            <li>
                                                <a href="/">
                                                    <img width="100" height="128" src="/images/product2.jpg" class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt=""/>
                                                    <span class="product-title">Мужской костюм  </span>
                                                </a>
                                                <del><span class="woocommerce-Price-amount amount">860.00 грн</span></del>
                                                <ins><span class="woocommerce-Price-amount amount">760.00 грн</span></ins>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <img width="100" height="128" src="/images/product3.jpg" class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt=""/>
                                                    <span class="product-title">Зеленое платье   </span>
                                                </a>
                                                <del><span class="woocommerce-Price-amount amount">860.00 грн</span></del>
                                                <ins><span class="woocommerce-Price-amount amount">760.00 грн</span></ins>
                                            </li>
                                        </ul>
                                    </aside>
                                </div>
                            </div>
                        </div>
                        <div id="content-position" class="xlarge-10 large-9 columns content-pos">
                            <div class="top_bar_shop">
                                <div class="catalog-ordering">
                                    <div class="shop-filter"><span>Фильтр</span></div>
                                    <p class="woocommerce-result-count">
                                        Показано 1-12 товаров из 24 </p>

                                    <ul class="shop-ordering">
                                        <li id="shop-catalog-ordering">
                                            <form class="woocommerce-ordering" method="get">
                                                <select name="orderby" class="orderby">
                                                    <option selected='selected'>По умолчанию</option>
                                                    <option>а-я</option>
                                                    <option>я-а</option>
                                                    <option>От дешёвых к дорогим </option>
                                                    <option>От дорогих к дешёвым </option>
                                                </select>
                                                <input type="hidden" name="products_per_column" value="3"/></form>
                                        </li>
                                    </ul>

                                </div> <!--catalog-ordering-->
                                <div class="clearfix"></div>
                            </div><!-- .top_bar_shop-->
                            <div class="active_filters_ontop"></div>
                            <ul class="	row visible products products-grid product-category-list perspective_hover small-up-2 medium-up-2	large-up-3	xlarge-up-3	xxlarge-up-3 animated fadeIn">
                                <li class="product column ">
                                    <a href="#" class="button eva_product_quick_view_button "></a>
                                    <div class="product_thumbnail with_second_image">
                                        <a href="product.php">
                                            <span class="product_thumbnail_secondary" style="background-image:url(/images/product3.jpg)"></span>
                                            <img width="300" height="372" src="/images/product1.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt=""/>
                                        </a>
                                    </div><!--.product_thumbnail-->
                                    <p class="product-category-listing">
                                        <a href="/" class="product-category-link">Женская одежда</a>
                                    </p>
                                    <div class="shop_product_metas">
                                        <div class="yith-wcwl-add-to-wishlist add-to-wishlist-322">
                                            <div class="yith-wcwl-add-button show" style="display:block">
                                                <a href="/" class="add_to_wishlist">
                                                    Добавить в избранное
                                                </a>
                                            </div>
                                        </div>
                                        <div class="clear"></div>
                                        <h3>
                                            <a class="shop_product_title" href="product.php">
                                                Зеленое платье
                                            </a>
                                        </h3>
                                        <div class="product_after_shop_loop">
                                            <div class="product_after_shop_loop_switcher">
                                                <div class="product_after_shop_loop_price">
                                                    <span class="price">
                                                        <span class="woocommerce-Price-amount amount">760.00 грн</span>
                                                    </span>
                                                </div>
                                                <div class="product_after_shop_loop_buttons">
                                                    <a href="/" class="button product_type_simple add_to_cart_button ajax_add_to_cart">
                                                        В корзину
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="product column ">
                                    <a href="#" class="button eva_product_quick_view_button "></a>
                                    <div class="product_thumbnail with_second_image">
                                        <a href="product.php">
                                            <span class="product_thumbnail_secondary" style="background-image:url(/images/product1.jpg)"></span>
                                            <img width="300" height="372" src="/images/product3.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt=""/>
                                        </a>
                                    </div><!--.product_thumbnail-->
                                    <p class="product-category-listing">
                                        <a href="/" class="product-category-link">Женская одежда</a>
                                    </p>
                                    <div class="shop_product_metas">
                                        <div class="yith-wcwl-add-to-wishlist add-to-wishlist-322">
                                            <div class="yith-wcwl-add-button show" style="display:block">
                                                <a href="/" class="add_to_wishlist">
                                                    Добавить в избранное
                                                </a>
                                            </div>
                                        </div>
                                        <div class="clear"></div>
                                        <h3>
                                            <a class="shop_product_title" href="product.php">
                                                Элегантное платье в полоску
                                            </a>
                                        </h3>
                                        <div class="product_after_shop_loop">
                                            <div class="product_after_shop_loop_switcher">
                                                <div class="product_after_shop_loop_price">
                                                    <span class="price">
                                                        <span class="woocommerce-Price-amount amount">760.00 грн</span>
                                                    </span>
                                                </div>
                                                <div class="product_after_shop_loop_buttons">
                                                    <a href="/" class="button product_type_simple add_to_cart_button ajax_add_to_cart">
                                                        В корзину
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="product column ">
                                    <a href="#" class="button eva_product_quick_view_button "></a>
                                    <div class="product_thumbnail with_second_image">
                                        <a href="product.php">
                                            <span class="product_thumbnail_secondary" style="background-image:url(/images/product2-1.jpg)"></span>
                                            <img width="300" height="372" src="/images/product2.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt=""/>
                                        </a>
                                    </div><!--.product_thumbnail-->
                                    <p class="product-category-listing">
                                        <a href="/" class="product-category-link">Мужская одежда</a>
                                    </p>
                                    <div class="shop_product_metas">
                                        <div class="yith-wcwl-add-to-wishlist add-to-wishlist-322">
                                            <div class="yith-wcwl-add-button show" style="display:block">
                                                <a href="/" class="add_to_wishlist">
                                                    Добавить в избранное
                                                </a>
                                            </div>
                                        </div>
                                        <div class="clear"></div>
                                        <h3>
                                            <a class="shop_product_title" href="product.php">
                                                Мужской костюм
                                            </a>
                                        </h3>
                                        <div class="product_after_shop_loop">
                                            <div class="product_after_shop_loop_switcher">
                                                <div class="product_after_shop_loop_price">
                                                    <span class="price">
                                                        <span class="woocommerce-Price-amount amount">760.00 грн</span>
                                                    </span>
                                                </div>
                                                <div class="product_after_shop_loop_buttons">
                                                    <a href="/" class="button product_type_simple add_to_cart_button ajax_add_to_cart">
                                                        В корзину
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="product column ">
                                    <a href="#" class="button eva_product_quick_view_button "></a>
                                    <div class="product_thumbnail with_second_image">
                                        <a href="product.php">
                                            <span class="product_thumbnail_secondary" style="background-image:url(/images/product2-1.jpg)"></span>
                                            <img width="300" height="372" src="/images/product2-2.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt=""/>
                                        </a>
                                    </div><!--.product_thumbnail-->
                                    <p class="product-category-listing">
                                        <a href="product.php" class="product-category-link">Мужская одежда</a>
                                    </p>
                                    <div class="shop_product_metas">
                                        <div class="yith-wcwl-add-to-wishlist add-to-wishlist-322">
                                            <div class="yith-wcwl-add-button show" style="display:block">
                                                <a href="/" class="add_to_wishlist">
                                                    Добавить в избранное
                                                </a>
                                            </div>
                                        </div>
                                        <div class="clear"></div>
                                        <h3>
                                            <a class="shop_product_title" href="/">
                                                Мужской костюм
                                            </a>
                                        </h3>
                                        <div class="product_after_shop_loop">
                                            <div class="product_after_shop_loop_switcher">
                                                <div class="product_after_shop_loop_price">
                                                    <span class="price">
                                                        <span class="woocommerce-Price-amount amount">760.00 грн</span>
                                                    </span>
                                                </div>
                                                <div class="product_after_shop_loop_buttons">
                                                    <a href="/" class="button product_type_simple add_to_cart_button ajax_add_to_cart">
                                                        В корзину
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="product column ">
                                    <a href="#" class="button eva_product_quick_view_button "></a>
                                    <div class="product_thumbnail with_second_image">
                                        <a href="product.php">
                                            <span class="product_thumbnail_secondary" style="background-image:url(/images/product3.jpg)"></span>
                                            <img width="300" height="372" src="/images/product1.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt=""/>
                                        </a>
                                    </div><!--.product_thumbnail-->
                                    <p class="product-category-listing">
                                        <a href="/" class="product-category-link">Женская одежда</a>
                                    </p>
                                    <div class="shop_product_metas">
                                        <div class="yith-wcwl-add-to-wishlist add-to-wishlist-322">
                                            <div class="yith-wcwl-add-button show" style="display:block">
                                                <a href="/" class="add_to_wishlist">
                                                    Добавить в избранное
                                                </a>
                                            </div>
                                        </div>
                                        <div class="clear"></div>
                                        <h3>
                                            <a class="shop_product_title" href="product.php">
                                                Зеленое платье
                                            </a>
                                        </h3>
                                        <div class="product_after_shop_loop">
                                            <div class="product_after_shop_loop_switcher">
                                                <div class="product_after_shop_loop_price">
                                                    <span class="price">
                                                        <span class="woocommerce-Price-amount amount">760.00 грн</span>
                                                    </span>
                                                </div>
                                                <div class="product_after_shop_loop_buttons">
                                                    <a href="/" class="button product_type_simple add_to_cart_button ajax_add_to_cart">
                                                        В корзину
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="product column ">
                                    <a href="#" class="button eva_product_quick_view_button "></a>
                                    <div class="product_thumbnail with_second_image">
                                        <a href="/">
                                            <span class="product_thumbnail_secondary" style="background-image:url(/images/product1.jpg)"></span>
                                            <img width="300" height="372" src="/images/product3.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt=""/>
                                        </a>
                                    </div><!--.product_thumbnail-->
                                    <p class="product-category-listing">
                                        <a href="/" class="product-category-link">Женская одежда</a>
                                    </p>
                                    <div class="shop_product_metas">
                                        <div class="yith-wcwl-add-to-wishlist add-to-wishlist-322">
                                            <div class="yith-wcwl-add-button show" style="display:block">
                                                <a href="/" class="add_to_wishlist">
                                                    Добавить в избранное
                                                </a>
                                            </div>
                                        </div>
                                        <div class="clear"></div>
                                        <h3>
                                            <a class="shop_product_title" href="/">
                                                Элегантное платье в полоску
                                            </a>
                                        </h3>
                                        <div class="product_after_shop_loop">
                                            <div class="product_after_shop_loop_switcher">
                                                <div class="product_after_shop_loop_price">
                                                    <span class="price">
                                                        <span class="woocommerce-Price-amount amount">760.00 грн</span>
                                                    </span>
                                                </div>
                                                <div class="product_after_shop_loop_buttons">
                                                    <a href="/" class="button product_type_simple add_to_cart_button ajax_add_to_cart">
                                                        В корзину
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="product column ">
                                    <a href="#" class="button eva_product_quick_view_button "></a>
                                    <div class="product_thumbnail with_second_image">
                                        <a href="/">
                                            <span class="product_thumbnail_secondary" style="background-image:url(/images/product2-1.jpg)"></span>
                                            <img width="300" height="372" src="/images/product2.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt=""/>
                                        </a>
                                    </div><!--.product_thumbnail-->
                                    <p class="product-category-listing">
                                        <a href="/" class="product-category-link">Мужская одежда</a>
                                    </p>
                                    <div class="shop_product_metas">
                                        <div class="yith-wcwl-add-to-wishlist add-to-wishlist-322">
                                            <div class="yith-wcwl-add-button show" style="display:block">
                                                <a href="/" class="add_to_wishlist">
                                                    Добавить в избранное
                                                </a>
                                            </div>
                                        </div>
                                        <div class="clear"></div>
                                        <h3>
                                            <a class="shop_product_title" href="/">
                                                Мужской костюм
                                            </a>
                                        </h3>
                                        <div class="product_after_shop_loop">
                                            <div class="product_after_shop_loop_switcher">
                                                <div class="product_after_shop_loop_price">
                                                    <span class="price">
                                                        <span class="woocommerce-Price-amount amount">760.00 грн</span>
                                                    </span>
                                                </div>
                                                <div class="product_after_shop_loop_buttons">
                                                    <a href="/" class="button product_type_simple add_to_cart_button ajax_add_to_cart">
                                                        В корзину
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="product column ">
                                    <a href="#" class="button eva_product_quick_view_button "></a>
                                    <div class="product_thumbnail with_second_image">
                                        <a href="/">
                                            <span class="product_thumbnail_secondary" style="background-image:url(/images/product2-1.jpg)"></span>
                                            <img width="300" height="372" src="/images/product2-2.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt=""/>
                                        </a>
                                    </div><!--.product_thumbnail-->
                                    <p class="product-category-listing">
                                        <a href="/" class="product-category-link">Мужская одежда</a>
                                    </p>
                                    <div class="shop_product_metas">
                                        <div class="yith-wcwl-add-to-wishlist add-to-wishlist-322">
                                            <div class="yith-wcwl-add-button show" style="display:block">
                                                <a href="/" class="add_to_wishlist">
                                                    Добавить в избранное
                                                </a>
                                            </div>
                                        </div>
                                        <div class="clear"></div>
                                        <h3>
                                            <a class="shop_product_title" href="/">
                                                Мужской костюм
                                            </a>
                                        </h3>
                                        <div class="product_after_shop_loop">
                                            <div class="product_after_shop_loop_switcher">
                                                <div class="product_after_shop_loop_price">
                                                    <span class="price">
                                                        <span class="woocommerce-Price-amount amount">760.00 грн</span>
                                                    </span>
                                                </div>
                                                <div class="product_after_shop_loop_buttons">
                                                    <a href="/" class="button product_type_simple add_to_cart_button ajax_add_to_cart">
                                                        В корзину
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="product column ">
                                    <a href="#" class="button eva_product_quick_view_button "></a>
                                    <div class="product_thumbnail with_second_image">
                                        <a href="product.php">
                                            <span class="product_thumbnail_secondary" style="background-image:url(/images/product3.jpg)"></span>
                                            <img width="300" height="372" src="/images/product1.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt=""/>
                                        </a>
                                    </div><!--.product_thumbnail-->
                                    <p class="product-category-listing">
                                        <a href="/" class="product-category-link">Женская одежда</a>
                                    </p>
                                    <div class="shop_product_metas">
                                        <div class="yith-wcwl-add-to-wishlist add-to-wishlist-322">
                                            <div class="yith-wcwl-add-button show" style="display:block">
                                                <a href="/" class="add_to_wishlist">
                                                    Добавить в избранное
                                                </a>
                                            </div>
                                        </div>
                                        <div class="clear"></div>
                                        <h3>
                                            <a class="shop_product_title" href="product.php">
                                                Зеленое платье
                                            </a>
                                        </h3>
                                        <div class="product_after_shop_loop">
                                            <div class="product_after_shop_loop_switcher">
                                                <div class="product_after_shop_loop_price">
                                                    <span class="price">
                                                        <span class="woocommerce-Price-amount amount">760.00 грн</span>
                                                    </span>
                                                </div>
                                                <div class="product_after_shop_loop_buttons">
                                                    <a href="/" class="button product_type_simple add_to_cart_button ajax_add_to_cart">
                                                        В корзину
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="product column ">
                                    <a href="#" class="button eva_product_quick_view_button "></a>
                                    <div class="product_thumbnail with_second_image">
                                        <a href="product.php">
                                            <span class="product_thumbnail_secondary" style="background-image:url(/images/product1.jpg)"></span>
                                            <img width="300" height="372" src="/images/product3.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt=""/>
                                        </a>
                                    </div><!--.product_thumbnail-->
                                    <p class="product-category-listing">
                                        <a href="/" class="product-category-link">Женская одежда</a>
                                    </p>
                                    <div class="shop_product_metas">
                                        <div class="yith-wcwl-add-to-wishlist add-to-wishlist-322">
                                            <div class="yith-wcwl-add-button show" style="display:block">
                                                <a href="/" class="add_to_wishlist">
                                                    Добавить в избранное
                                                </a>
                                            </div>
                                        </div>
                                        <div class="clear"></div>
                                        <h3>
                                            <a class="shop_product_title" href="product.php">
                                                Элегантное платье в полоску
                                            </a>
                                        </h3>
                                        <div class="product_after_shop_loop">
                                            <div class="product_after_shop_loop_switcher">
                                                <div class="product_after_shop_loop_price">
                                                    <span class="price">
                                                        <span class="woocommerce-Price-amount amount">760.00 грн</span>
                                                    </span>
                                                </div>
                                                <div class="product_after_shop_loop_buttons">
                                                    <a href="/" class="button product_type_simple add_to_cart_button ajax_add_to_cart">
                                                        В корзину
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="product column ">
                                    <a href="#" class="button eva_product_quick_view_button "></a>
                                    <div class="product_thumbnail with_second_image">
                                        <a href="product.php">
                                            <span class="product_thumbnail_secondary" style="background-image:url(/images/product2-1.jpg)"></span>
                                            <img width="300" height="372" src="/images/product2.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt=""/>
                                        </a>
                                    </div><!--.product_thumbnail-->
                                    <p class="product-category-listing">
                                        <a href="/" class="product-category-link">Мужская одежда</a>
                                    </p>
                                    <div class="shop_product_metas">
                                        <div class="yith-wcwl-add-to-wishlist add-to-wishlist-322">
                                            <div class="yith-wcwl-add-button show" style="display:block">
                                                <a href="/" class="add_to_wishlist">
                                                    Добавить в избранное
                                                </a>
                                            </div>
                                        </div>
                                        <div class="clear"></div>
                                        <h3>
                                            <a class="shop_product_title" href="product.php">
                                                Мужской костюм
                                            </a>
                                        </h3>
                                        <div class="product_after_shop_loop">
                                            <div class="product_after_shop_loop_switcher">
                                                <div class="product_after_shop_loop_price">
                                                    <span class="price">
                                                        <span class="woocommerce-Price-amount amount">760.00 грн</span>
                                                    </span>
                                                </div>
                                                <div class="product_after_shop_loop_buttons">
                                                    <a href="/" class="button product_type_simple add_to_cart_button ajax_add_to_cart">
                                                        В корзину
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="product column ">
                                    <a href="#" class="button eva_product_quick_view_button "></a>
                                    <div class="product_thumbnail with_second_image">
                                        <a href="product.php">
                                            <span class="product_thumbnail_secondary" style="background-image:url(/images/product2-1.jpg)"></span>
                                            <img width="300" height="372" src="/images/product2-2.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt=""/>
                                        </a>
                                    </div><!--.product_thumbnail-->
                                    <p class="product-category-listing">
                                        <a href="product.php" class="product-category-link">Мужская одежда</a>
                                    </p>
                                    <div class="shop_product_metas">
                                        <div class="yith-wcwl-add-to-wishlist add-to-wishlist-322">
                                            <div class="yith-wcwl-add-button show" style="display:block">
                                                <a href="/" class="add_to_wishlist">
                                                    Добавить в избранное
                                                </a>
                                            </div>
                                        </div>
                                        <div class="clear"></div>
                                        <h3>
                                            <a class="shop_product_title" href="/">
                                                Мужской костюм
                                            </a>
                                        </h3>
                                        <div class="product_after_shop_loop">
                                            <div class="product_after_shop_loop_switcher">
                                                <div class="product_after_shop_loop_price">
                                                    <span class="price">
                                                        <span class="woocommerce-Price-amount amount">760.00 грн</span>
                                                    </span>
                                                </div>
                                                <div class="product_after_shop_loop_buttons">
                                                    <a href="/" class="button product_type_simple add_to_cart_button ajax_add_to_cart">
                                                        В корзину
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <nav class="woocommerce-pagination">
                                <ul class='page-numbers'>
                                    <li><span class='page-numbers current'>1</span></li>
                                    <li><a class='page-numbers'
                                           href='/'>2</a>
                                    </li>
                                    <li><a class="next page-numbers"
                                           href="/">&rarr;</a>
                                    </li>
                                </ul>
                            </nav>

                        </div><!-- .columns -->
                    </div><!-- .row -->
                </div><!-- #content -->
            </div><!-- #primary -->

            <script type='text/javascript' src='/js/jquery-ui-widget.min-1.11.4.js'></script>
            <script type='text/javascript' src='/js/jquery-ui-mouse.min-1.11.4.js'></script>
            <script type='text/javascript' src='/js/jquery-ui-slider.min-1.11.4.js'></script>
            <script type='text/javascript' src='/js/accounting.min-0.4.2.js'></script>
            <script type='text/javascript' src='/js/frontend-price-slider.min-3.1.1.js'></script>
            <?php require_once('footer.php'); ?>

