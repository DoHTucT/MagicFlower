<template>
    <div class="background"/>
    <div class="container">
        <div class="column">
            <span class="item">Гарантия</span>
            <span class="item">Доставка и оплата</span>
            <span class="item">Правила возврата</span>
            <span class="item">Контакты</span>
            <span class="item">Отзывы о сайте</span>
            <span class="item">О нас</span>
        </div>
        <div class="column">
            <span class="item">Цветы</span>
            <span class="item">Букеты</span>
            <span class="item">Розы</span>
            <span class="item">Букеты из клубники</span>
            <span class="item">Подарки</span>
            <span class="item">Съедобные букеты</span>
            <span class="item">Букеты из 101 розы</span>
        </div>
        <div class="column">
            <span class="item">Карта сайта</span>
            <span class="item">Юридическая информация</span>
            <span class="item">Политика</span>
            <span class="item">Договор оферты</span>
            <span class="item">Филиал в Санкт-Петербурге</span>
            <span class="item">Станции метро</span>
            <span class="item">Населенные пункты</span>
        </div>
        <div class="contacts">
            <div class="tel">+7 (499) 490-10-90</div>
            <div class="callBack">Обратный звонок</div>
            <div class="time">с 8:00 до 24:00</div>
            <div class="address">129594, г. Москва, 3-й проезд Марьиной Рощи, дом 5</div>
            <div class="email">buket@magicalflower.ru</div>
            <div class="social">
                <img src="@/assets/img/VK.svg">
                <img src="@/assets/img/TG.svg">
                <img src="@/assets/img/Whatsapp.svg">
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "foo-ter"
}
</script>

<style scoped>
.background {
    position: absolute;
    right: 0;
    width: 100%;
    height: 545px;
    margin-top: 85px;

    background: #F3F5F8;
    border-radius: 40px 40px 0px 0px;

    z-index: -10;
}

.container {
    display: flex;
    margin-top: 85px;
    width: 100%;
}

.column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 27px;
    margin-top: 50px;

    width: 271px;
}

.item {
    font-size: 16px;
    line-height: 110%;

    color: #989EA5;
    cursor: pointer;
}

.contacts {
    margin-top: 48px;
}

.tel {
    font-size: 32px;
    line-height: 100%;

    color: #2F3132;
}

.callBack {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 274px;
    height: 44px;
    margin-top: 13px;

    background: #B46B95;
    border-radius: 10px;

    font-size: 17px;
    line-height: 120%;

    color: #FFFFFF;
    cursor: pointer;
}

.time {
    font-size: 17px;
    line-height: 120%;
    color: #989EA5;
    margin-top: 24px;
}

.address {
    font-size: 17px;
    line-height: 120%;
    color: #989EA5;
    margin-top: 17px;
}

.email {
    font-size: 17px;
    line-height: 120%;
    margin-top: 17px;

    color: #B46B95;
}

.social {
    display: flex;
    gap: 20px;
    margin-top: 20px;
}
</style>