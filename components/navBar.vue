<template>
    <div class="navBar">
        <div class="menu">Доставка и оплата</div>
        <div class="menu">Контакты</div>
        <div class="menu">Гарантия</div>
        <div class="menu">Отзывы</div>
        <div class="menu">О нас</div>
        <div class="tel">+7 499 490 10 90
        <img class="arrow" src="@/assets/img/arrowDown.svg"></div>
        <div class="menu, time">с 8:00 до 24:00</div>
    </div>
    <div class="searchNavBar">
        <img src="@/assets/img/logo.svg">
        <div class="searchBar">
            <button class="catalogButton">
                <img class="hamburger" src="@/assets/img/hamburger-button.svg">
                Каталог
            </button>
            <input class="searchInput" placeholder="Поиск"></div>
        <div class="profileBar">
        <div class="profile"><img src="@/assets/img/li_user.svg">Войти</div>
        <div class="profile"><img src="@/assets/img/li_heart.svg">Избранное</div>
        <div class="profile"><img src="@/assets/img/li_shopping-cart.svg">Корзина</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "navBar"
}
</script>

<style scoped>
.navBar {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 34px;
    margin-top: 30px;
    width: 100%;
}

.menu {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 110%;
    color: #989EA5;
}

.tel{
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 110%;
    color: #2F3132;
    margin-left: auto;
}

.arrow{
    margin-left: 12px;
    align-content: center;
}

.time {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 110%;
    color: #989EA5;
}

.searchNavBar{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    width: 100%;
    margin-top: 40px;
}

.searchBar{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;
}

.catalogButton{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px;
    gap: 10px;
    width: calc(70px + (110 – 70) * ((100vw — 500px) / (1920 – 500)));
    height: 56px;
    background: #B46B95;
    border-radius: 12px;
    font-style: normal;
    font-weight: 500;
    font-size: calc(8px + (15 – 8) * ((100vw — 500px) / (1920 – 500)));
    line-height: 110%;
    color: #FFFFFF;
    border: none;
}
.hamburger{
    background: none;
}

.searchInput{
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: calc(100px + (553 – 100) * ((100vw — 500px) / (1920 – 500)));
    height: 56px;
    border: 1px solid #B46B95;
    border-radius: 12px;
    background-image: url(@/assets/img/search.svg) ;
    background-repeat: no-repeat;
    background-position: 18px center;
    padding-left: 50px;
    outline: none;
}

input::placeholder{
    font-weight: 500;
    font-size: 20px;
    line-height: 110%;
    color: #B46B95;
}

.profileBar{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 34px;
    isolation: isolate;
}
.profile{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 6px;

}
</style>