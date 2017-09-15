<?php require_once('header.php'); ?>
    <div class="offcanvas_container woocommerce-cart">
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
                                    <span>Корзина</span>
                                </span>
                                </div>
                                <h1 class="page-title">Корзина</h1>
                            </div>
                        </div>
                    </div>
                    <div id="content" class="site-content" role="main">
                        <div class="row woocommerce">
                            <div class="large-12 columns wc-notice">
                            </div>
                        </div>
                        <article class="page type-page status-publish hentry">
                            <div class="row">
                                <div class="large-12 columns">
                                    <div class="entry-content">
                                        <div class="woocommerce">
                                            <form class="woocommerce-cart-form" action="/" method="post">
                                                <table class="shop_table shop_table_responsive cart woocommerce-cart-form__contents" cellspacing="0">
                                                    <thead>
                                                    <tr>
                                                        <th class="product-remove">&nbsp;</th>
                                                        <th class="product-thumbnail">Изображение</th>
                                                        <th class="product-name">Название</th>
                                                        <th class="product-price">Цена</th>
                                                        <th class="product-quantity">Количество</th>
                                                        <th class="">Размер</th>
                                                        <th class="product-subtotal">Всего</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr class="woocommerce-cart-form__cart-item cart_item">
                                                        <td class="product-remove">
                                                            <a href="/" class="remove">&times;</a>
                                                        </td>
                                                        <td class="">
                                                            <a href="/">
                                                                <img width="100" height="128" src="/images/product1.jpg" class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt=""/>
                                                            </a>
                                                        </td>
                                                        <td class="">
                                                            <a href="/">Элегантное платье в полоску</a>
                                                        </td>

                                                        <td class="">
                                                            <span class="woocommerce-Price-amount amount">760.00 грн</span>
                                                        </td>

                                                        <td class="">
                                                            <div class="center quantity">
                                                                <div class="input-group">
                                                                      <span class="input-group-btn">
                                                                          <button type="button" class="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                                                                              <span class="glyphicon glyphicon-minus">-</span>
                                                                          </button>
                                                                      </span>
                                                                    <input type="text" name="quant[1]" class="form-control input-number" value="1" min="1" max="10">
                                                                    <span class="input-group-btn">
                                                                          <button type="button" class="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                                                                              <span class="glyphicon glyphicon-plus">+</span>
                                                                          </button>
                                                                      </span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <select class="dropdown_layered_nav_sizes">
                                                                <option value="xxl">XXL</option>
                                                                <option value="xl">XL</option>
                                                                <option value="l">L</option>
                                                                <option value="m">M</option>
                                                                <option value="s">S</option>
                                                                <option value="xs">XS</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            <span class="woocommerce-Price-amount amount">760.00 грн</span>
                                                        </td>
                                                    </tr>
                                                    <tr class="woocommerce-cart-form__cart-item cart_item">
                                                        <td class="product-remove">
                                                            <a href="/" class="remove">&times;</a>
                                                        </td>
                                                        <td class="">
                                                            <a href="/">
                                                                <img width="100" height="128" src="/images/product3.jpg" class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt=""/>
                                                            </a>
                                                        </td>
                                                        <td class="">
                                                            <a href="/">Зеленое платье</a>
                                                        </td>

                                                        <td class="">
                                                            <span class="woocommerce-Price-amount amount">760.00 грн</span>
                                                        </td>

                                                        <td class="">
                                                            <div class="center quantity">
                                                                <div class="input-group">
                                                                      <span class="input-group-btn">
                                                                          <button type="button" class="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                                                                              <span class="glyphicon glyphicon-minus">-</span>
                                                                          </button>
                                                                      </span>
                                                                    <input type="text" name="quant[1]" class="form-control input-number" value="1" min="1" max="10">
                                                                    <span class="input-group-btn">
                                                                          <button type="button" class="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                                                                              <span class="glyphicon glyphicon-plus">+</span>
                                                                          </button>
                                                                      </span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <select class="dropdown_layered_nav_sizes">
                                                                <option value="xxl">XXL</option>
                                                                <option value="xl">XL</option>
                                                                <option value="l">L</option>
                                                                <option value="m">M</option>
                                                                <option value="s">S</option>
                                                                <option value="xs">XS</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            <span class="woocommerce-Price-amount amount">760.00 грн</span>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </form>
                                            <div class="gift">
                                                <h3>В подарок</h3>
                                                <form class="woocommerce-cart-form" action="/" method="post">
                                                    <table class="shop_table shop_table_responsive cart woocommerce-cart-form__contents" cellspacing="0">
                                                        <thead>
                                                        <tr>
                                                            <th class="product-remove">&nbsp;</th>
                                                            <th class="product-thumbnail">Изображение</th>
                                                            <th class="product-name">Название</th>
                                                            <th class="">Размер</th>
                                                            <th class="product-price">Цена</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr class="woocommerce-cart-form__cart-item cart_item">
                                                            <td class="product-remove">
                                                                <a href="/" class="remove">&times;</a>
                                                            </td>
                                                            <td class="">
                                                                <a href="/">
                                                                    <img width="100" height="128" src="/images/product1.jpg" class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt=""/>
                                                                </a>
                                                            </td>
                                                            <td class="">
                                                                <a href="/">Элегантное платье в полоску</a>
                                                            </td>

                                                            <td>
                                                                <select class="dropdown_layered_nav_sizes">
                                                                    <option value="xxl">XXL</option>
                                                                    <option value="xl">XL</option>
                                                                    <option value="l">L</option>
                                                                    <option value="m">M</option>
                                                                    <option value="s">S</option>
                                                                    <option value="xs">XS</option>
                                                                </select>
                                                            </td>
                                                            <td>
                                                                <span class="woocommerce-Price-amount amount">760.00 грн</span>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </form>
                                            </div>
                                            <div class="cart-collaterals">
                                                <div class="cart_totals ">
                                                    <h2 class="total-title">К оплате</h2>
                                                    <table cellspacing="0" class="shop_table shop_table_responsive">
                                                        <tr class="cart-subtotal">
                                                            <th>Всего</th>
                                                            <td>
                                                                <span class="woocommerce-Price-amount amount">1520.00 грн</span>
                                                            </td>
                                                        </tr>
                                                        <tr class="cart-subtotal">
                                                            <th>Скидка</th>
                                                            <td>
                                                                <span class="woocommerce-Price-amount amount">200.00 грн</span>
                                                            </td>
                                                        </tr>
                                                        <tr class="order-total">
                                                            <th>Итог</th>
                                                            <td data-title="Total">
                                                                <strong>
                                                                    <span class="woocommerce-Price-amount amount">1320.00 грн</span>
                                                                </strong>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                <div class="wc-proceed-to-checkout">
                                                    <a href="/" class="checkout-button button btn1 bshadow alt wc-forward">
                                                        <span>Оформить заказ</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div><!-- .entry-content -->
                                </div><!-- .columns -->
                            </div><!-- .row -->
                        </article><!-- #post -->
                    </div><!-- #content -->
                </div><!-- #primary -->

                <script>
                    jQuery('.one-click-button').click(function () {
                        jQuery('.one-click-modal').fadeIn(400);
                        jQuery('.overlay-modal').fadeIn(400);
                    });
                    function close_modal() {
                        jQuery('.modal').fadeOut(400);
                        jQuery('.overlay-modal').fadeOut(400);
                    }
                    jQuery('.btn-number').click(function(e){
                        e.preventDefault();

                        fieldName = jQuery(this).attr('data-field');
                        type      = jQuery(this).attr('data-type');
                        var input = jQuery("input[name='"+fieldName+"']");
                        var currentVal = parseInt(input.val());
                        if (!isNaN(currentVal)) {
                            if(type == 'minus') {

                                if(currentVal > input.attr('min')) {
                                    input.val(currentVal - 1).change();
                                }
                                if(parseInt(input.val()) == input.attr('min')) {
                                    jQuery(this).attr('disabled', true);
                                }

                            } else if(type == 'plus') {

                                if(currentVal < input.attr('max')) {
                                    input.val(currentVal + 1).change();
                                }
                                if(parseInt(input.val()) == input.attr('max')) {
                                    jQuery(this).attr('disabled', true);
                                }

                            }
                        } else {
                            input.val(0);
                        }
                    });
                    jQuery('.input-number').focusin(function(){
                        jQuery(this).data('oldValue', jQuery(this).val());
                    });
                    jQuery('.input-number').change(function() {

                        minValue =  parseInt(jQuery(this).attr('min'));
                        maxValue =  parseInt(jQuery(this).attr('max'));
                        valueCurrent = parseInt(jQuery(this).val());

                        name = jQuery(this).attr('name');
                        if(valueCurrent >= minValue) {
                            jQuery(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
                        } else {
                            alert('Sorry, the minimum value was reached');
                            jQuery(this).val(jQuery(this).data('oldValue'));
                        }
                        if(valueCurrent <= maxValue) {
                            jQuery(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
                        } else {
                            alert('Sorry, the maximum value was reached');
                            jQuery(this).val(jQuery(this).data('oldValue'));
                        }


                    });
                    jQuery(".input-number").keydown(function (e) {
                        // Allow: backspace, delete, tab, escape, enter and .
                        if (jQuery.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
                            // Allow: Ctrl+A
                            (e.keyCode == 65 && e.ctrlKey === true) ||
                            // Allow: home, end, left, right
                            (e.keyCode >= 35 && e.keyCode <= 39)) {
                            // let it happen, don't do anything
                            return;
                        }
                        // Ensure that it is a number and stop the keypress
                        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                            e.preventDefault();
                        }
                    });
                </script>
<?php require_once('footer.php'); ?>