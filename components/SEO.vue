<template>
    <div class="container">
        <div class="seoItem">
            <div class="seoFrame">
                <div class="h1">Заказать цветы с доставкой</div>
                <div class="txt">Доставка цветов способна в одно мгновение изменить настроение человека, прогнать хандру
                    и грусть. Ведь для любой женщины букет – это всегда желанный подарок, независимо от праздника и
                    повода. Цветы – это простой и универсальный способ сделать жизнь любимого человека ярче и красочней.
                    Интернет-магазин Magical Flower предлагает заказать цветы с доставкой на дом или в офис.
                    Профессиональные флористы подберут идеальную композицию для любого повода. У нас всегда найдется
                    роскошный букет для юбилея, скромный благоухающий презент для поздравления с профессиональным
                    праздником, оригинальный цветочный ансамбль на 8 марта для мамы, сестры или возлюбленной. Богатый
                    выбор цветов в каталоге дополняется сладкими букетами, игрушками и аксессуарами, а также уникальным
                    оформлением в шляпные коробки и корзины.
                </div>
            </div>
            <img src="@/assets/img/SEOimg.svg">
        </div>
        <div class="seoItem">
            <img src="@/assets/img/SEOimg.svg">

            <div class="seoFrame">
                <div class="h1">Букеты на дом</div>
                <div class="txt">Доставка цветов в Москве выполняется курьерами без выходных. Мы предлагаем стильные,
                    современные букеты цветов. У нас можно заказать монобукеты, подобрав необходимое количество бутонов
                    и сложные композиции с разными растениями. Если цветы вам нужны срочно, оставьте заявку по телефону,
                    укажите все детали заказа – мы недорого соберем и отправим букет по указанному адресу на дом в
                    течение двух часов Заявки на цветы принимаются круглосуточно. Мы отправляем курьеров в этот же день
                    с букетом по любому адресу в столице и Подмосковье. Возможен самовывоз из магазина бесплатно, для
                    постоянных покупателей действуют скидки. Мы гарантируем, что получатель наших цветочных композиций
                    будет в восторге.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SEO"
}
</script>

<style scoped>
.container {
    width: auto;
    height: auto;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 50px;

    background: #F3F5F8;
    border-radius: 40px;
    margin-top: 50px;
}

.seoItem {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;

    width: 100%;
    height: 360px;

    align-self: stretch;
}

.seoFrame {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
}

.h1 {
    font-weight: 500;
    font-size: 36px;
    line-height: 100%;

    color: #2F3132;
}

.txt {
    font-size: 20px;
    line-height: 130%;

    color: #989EA5;
}
</style>