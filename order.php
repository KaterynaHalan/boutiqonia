<?php require_once('header.php'); ?>
    <link rel='stylesheet' href='https://apimgmtstorelinmtekiynqw.blob.core.windows.net/content/MediaLibrary/Widget/Map/styles/map.css' />
    <div class="offcanvas_container woocommerce-checkout">
        <div class="offcanvas_main_content">
            <div class="page-wrapper">
                <div id="primary" class="content-area">
                    <div class="page-header" data-stellar-background-ratio=0.6 style="background: url('/images/bg6.jpg') no-repeat center center;">
                        <div class="row">
                            <div class="title-section ">
                                <div id="breadcrumbs">
                                <span>
                                    <a title="Перейти на главную" href="/" class="home">
                                        <span>Главная</span>
                                    </a>
                                </span> &gt;
                                    <span>
                                    <span>Оформление заказа</span>
                                </span>
                                </div>
                                <h1 class="page-title">Оформление заказа</h1>
                            </div>
                        </div>
                    </div>
                    <div id="content" class="site-content" role="main">
                        <div id="secondary" class="widget-area" role="complementary">
                        <article class="page type-page status-publish hentry">
                            <div class="row">
                                <div class="large-12 columns">
                                    <div class="entry-content">
                                        <div class="widget woocommerce">
                                            <div class="checkout_login">
                                                <div class="row">
                                                    <div class="xlarge-9 large-11 xlarge-centered large-centered text-center columns">
                                                        <div class="checkout_login_button">
                                                            Вы зарегистрированы? <a class="showlogin">Кликните сюда, чтобы войти</a>
                                                        </div>
                                                        <form class="woocomerce-form woocommerce-form-login login" method="post" style="display:none;">
                                                            <p class="form-row form-row-first">
                                                                <label for="username">Логин
                                                                    <span class="required">*</span>
                                                                </label>
                                                                <input type="text" class="input-text" name="" id="username"/>
                                                            </p>
                                                            <p class="form-row form-row-last">
                                                                <label for="password">
                                                                    Пароль
                                                                    <span class="required">*</span>
                                                                </label>
                                                                <input class="input-text" type="password" name="" id="password"/>
                                                            </p>
                                                            <div class="clear"></div>
                                                            <p class="form-row">
                                                                <input type="submit" class="button" name="" value="Войти"/>
                                                                <label class="woocommerce-form__label woocommerce-form__label-for-checkbox inline">
                                                                    <input name="" type="checkbox" id="rememberme" value=""/>
                                                                    <span>Запомнить меня</span>
                                                                </label>
                                                            </p>
                                                            <p class="lost_password">
                                                                <a href="/">Забыли пароль?</a>
                                                            </p>
                                                            <div class="clear"></div>
                                                        </form>
                                                        <script>
                                                            jQuery('.showlogin').click(function () {
                                                                jQuery('.woocommerce-form-login').slideToggle(400);
                                                            });
                                                        </script>
                                                    </div>
                                                </div>
                                            </div><!-- .checkout_login-->
                                            <div class="row">
                                                <div class="xxlarge-9 xlarge-10 large-12 large-centered columns">
                                                    <form name="checkout" method="post" class="checkout woocommerce-checkout" action="/">
                                                        <div class="row">
                                                            <div class="large-7 columns">
                                                                <div class="checkout_left_wrapper">
                                                                    <div class="col2-set" id="customer_details">
                                                                        <div class="col-1">
                                                                            <div class="woocommerce-billing-fields">
                                                                                <h3>Информация</h3>
                                                                                <div class="woocommerce-billing-fields__field-wrapper">
                                                                                    <p>
                                                                                        <label for="billing_first_name" class="">
                                                                                            Имя
                                                                                            <abbr class="required">*</abbr>
                                                                                        </label>
                                                                                        <input type="text" class="input-text " name="" id="billing_first_name" placeholder="" value=""/>
                                                                                    </p>

                                                                                    <p>
                                                                                        <label for="billing_phone" class="">
                                                                                            Телефон
                                                                                            <abbr class="required">*</abbr>
                                                                                        </label>
                                                                                        <input type="text" class="input-text" name="" id="billing_phone" placeholder="" value=""/>
                                                                                    </p>
                                                                                    <p>
                                                                                        <label for="billing_email" class="">
                                                                                            Email
                                                                                            <abbr class="required">*</abbr>
                                                                                        </label>
                                                                                        <input type="email" class="input-text " name="" id="billing_email" placeholder="" value=""/>
                                                                                    </p>
                                                                                    <p>
                                                                                        <label for="order_comments" class="">
                                                                                            Сообщение
                                                                                        </label>
                                                                                        <textarea name="" class="input-text " id="order_comments" placeholder="Введите сообщение" rows="2" cols="5"></textarea>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div><!--.checkout_left_wrapper-->
                                                                <div class="woocommerce-tabs wc-tabs-wrapper">
                                                                    <ul class="tabs wc-tabs" role="tablist">
                                                                        <li class="description_tab" id="tab-title-description" role="tab"
                                                                            aria-controls="tab-description">
                                                                            <a href="#tab-description">Курьер</a>
                                                                        </li>
                                                                        <li class="reviews_tab" id="tab-title-reviews" role="tab"
                                                                            aria-controls="tab-reviews">
                                                                            <a href="#tab-reviews">Новая почта</a>
                                                                        </li>
                                                                    </ul>
                                                                    <div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab"
                                                                         id="tab-description" role="tabpanel"
                                                                         aria-labelledby="tab-title-description">
                                                                        <p>
                                                                            <label for="city" class="">
                                                                                Город
                                                                            </label>
                                                                            <select id="city" class="dropdown_layered_nav_sizes">
                                                                                <option>Киев</option>
                                                                            </select>
                                                                        </p>
                                                                        <p class="region">
                                                                            <label for="region" class="">
                                                                                Район
                                                                            </label>
                                                                            <div>
                                                                            <select id="region" class="dropdown_layered_nav_sizes">
                                                                                <option>Деснянский</option>
                                                                                <option>Дарницкий</option>
                                                                                <option>Днепровский</option>
                                                                                <option>Голосеевский</option>
                                                                                <option>Оболонский</option>
                                                                                <option>Печерский</option>
                                                                                <option>Подольский</option>
                                                                                <option>Соломенский</option>
                                                                                <option>Святошинский</option>
                                                                                <option>Шевченковский</option>
                                                                            </select>
                                                                        </div>
                                                                        </p>
                                                                        <p>
                                                                            <label for="address" class="">
                                                                                Адрес
                                                                            </label>
                                                                            <input type="text" class="input-text " name="" id="address" placeholder="Введите местоположение" value=""/>
                                                                        </p>
                                                                    </div>
                                                                    <div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab"
                                                                         id="tab-reviews" role="tabpanel" aria-labelledby="tab-title-reviews" style="display: none;">
                                                                        <div id="np-map">
                                                                            <button type="button"
                                                                                    id="npw-map-open-button">НАЙБЛИЖЧЕ
                                                                                ВІДДІЛЕННЯ
                                                                            </button>
                                                                            <script async="" defer="" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAPhm7Q29X5ldwjLtA7IMYHU_0xATiWK3A&amp;language=ru"></script>
                                                                        </div>
                                                                    </div>


                                                                </div>
                                                            </div><!--.large-7-->
                                                            <div class="large-5 columns">
                                                                <div class="checkout_right_wrapper custom_border">
                                                                    <div class="order_review_wrapper">
                                                                        <h2 id="order_review_heading">Ваш заказ</h2>
                                                                        <div id="order_review" class="woocommerce-checkout-review-order">
                                                                            <table class="shop_table woocommerce-checkout-review-order-table">
                                                                                <thead>
                                                                                <tr>
                                                                                    <th class="product-name">Товар</th>
                                                                                    <th class="product-total">Цена</th>
                                                                                </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                <tr class="cart_item">
                                                                                    <td class="product-name">
                                                                                        Элегантное платье в полоску
                                                                                        <strong class="product-quantity">&times; 1</strong>
                                                                                    </td>
                                                                                    <td class="product-total">
                                                                                        <span class="woocommerce-Price-amount amount">760.00 грн</span>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr class="cart_item">
                                                                                    <td class="product-name">
                                                                                        Зеленое платье
                                                                                        <strong class="product-quantity">&times; 1</strong>
                                                                                        <dl class="variation">
                                                                                            <dt class="variation-sizes">
                                                                                                размер:
                                                                                            </dt>
                                                                                            <dd class="variation-sizes">
                                                                                                <p>S</p>
                                                                                            </dd>
                                                                                        </dl>
                                                                                    </td>
                                                                                    <td class="product-total">
                                                                                        <span class="woocommerce-Price-amount amount">760.00 грн</span>
                                                                                    </td>
                                                                                </tr>
                                                                                </tbody>
                                                                                <tfoot>
                                                                                <tr class="cart-subtotal">
                                                                                    <th>Всего</th>
                                                                                    <td>
                                                                                        <span class="woocommerce-Price-amount amount">1520.00 грн</span>
                                                                                    </td>
                                                                                </tr>

                                                                                <tr class="cart-subtotal">
                                                                                    <th>Доставка</th>
                                                                                    <td>
                                                                                        <span class="woocommerce-Price-amount amount">100.00 грн</span>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr class="order-total">
                                                                                    <th>Итог</th>
                                                                                    <td>
                                                                                        <strong><span class="woocommerce-Price-amount amount">1620.00 грн</span></strong>
                                                                                    </td>
                                                                                </tr>
                                                                                </tfoot>
                                                                            </table>
                                                                            <div id="payment"
                                                                                 class="woocommerce-checkout-payment">
                                                                                <ul class="wc_payment_methods payment_methods methods">
                                                                                    <li class="wc_payment_method payment_method_cheque">
                                                                                        <input id="payment_method_cheque" type="radio" class="input-radio" name="payment" value="" checked='checked'/>
                                                                                        <label for="payment_method_cheque">
                                                                                            Наличными
                                                                                        </label>
                                                                                    </li>
                                                                                    <li class="wc_payment_method payment_method_paypal">
                                                                                        <input id="payment_method_paypal" type="radio" class="input-radio" name="payment" value=""/>
                                                                                        <label for="payment_method_paypal">
                                                                                            На карту ПриватБанка
                                                                                        </label>
                                                                                    </li>
                                                                                </ul>
                                                                                <div class="form-row place-order">
                                                                                    <input type="submit" class="button alt" name="" value="Продолжить"/>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div><!--.order_review_wrapper-->
                                                                </div><!--.checkout_right_wrapper-->
                                                            </div><!--.large-5-->
                                                        </div><!--.row-->
                                                    </form>
                                                </div><!-- .columns -->
                                            </div><!-- .row -->
                                        </div>
                                    </div><!-- .entry-content -->
                                </div><!-- .columns -->
                            </div><!-- .row -->
                        </article><!-- #post -->
                        </div>
                        <div class="clearfix"></div>
                    </div><!-- #content -->
                </div><!-- #primay -->
                <script type='text/javascript' id='map' charset='utf-8' data-lang='ua' apiKey='95b0cbc3c21a34fa0c4dcbd6bc9034f1' data-town='undefined' data-town-name='undefined' data-town-id='undefined' src='https://apimgmtstorelinmtekiynqw.blob.core.windows.net/content/MediaLibrary/Widget/Map/dist/map.min.js'></script>
<?php require_once('footer.php'); ?>