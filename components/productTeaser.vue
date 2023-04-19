<template>
    <div class="card">
        <img src="../public/img/teaserBouquet.jpg">
        <div class="badges">лучшая цена</div>
        <div class="cartFrame">
            <button class="cartButton">В корзину</button>
            <button class="likeButton"><img src="@/assets/img/li_heartFill.svg"> </button>
        </div>
        <div class="clickFrame">
            <div class="oneClick">
                <img src="@/assets/img/stick.svg">
                Купить в 1 клик
            </div>
            <div class="size">30×35 см</div>
        </div>
        <div class="price">
            <div class="new">4790 ₽</div>
            <div class="old">6990 ₽</div>
        </div>
        <div class="cashback">
            <img src="@/public/img/cashback.svg">
            200 баллов
        </div>
        <div class="productName">101 белая роза - коробка Raffaello в подарок</div>
        <div class="rating">
        <UiStarRating/>
            <div class="numberOfValuers">54</div>
        </div>
        <div class="deliveryFrame">
        <div class="delivery">Доставка</div>
        <div class="deliveryTime">2 часа</div>
        </div>
    </div>

</template>

<script>
export default {
    name: "productTeaser",
    data() {
        return {
          cards: [
              {
                  img: '/img/teaserBouquet.jpg',
                  sale: null,
                  badge: 'лучшая цена',
                  title: '101 белая роза - коробка Raffaello в подарок',
                  price: '4790 ₽',
                  oldPrice: '6990 ₽',
                  cashback: '200 баллов',
                  rating: '54',
                  deliveryTime: '2 часа',
                  size: '30×35 см'
              }
          ]
        }
    }
}
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    position: relative;

    width: auto;
    height: auto;

    background: #FFFFFF;
    border-radius: 26px;
    transition: 0.5s;
}

.card:hover {
    position: relative;
    width: auto;
    height: 570px;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);
    z-index: 3;
}

.badges {
    padding: 3px 6px;

    width: auto;
    height: auto;

    background: #B6F3A0;

    font-style: italic;
    font-weight: 800;
    font-size: 13px;
    line-height: 110%;

    text-align: right;
    text-transform: uppercase;

    color: #000000;
}

.cartFrame{
    display: none;
    gap: 10px ;
    margin-top: 18px;
    transition: 0.5s;

}
.card:hover .cartFrame {
    display: flex;
    transition: 0.5s;


}

.cartButton{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 11px 16px;
    gap: 10px;

    width: 195px;
    height: 47px;

    background: #B46B95;
    border-radius: 12px;
    border: 0;
    font-size: 16px;
    line-height: 110%;

    color: #FFFFFF;
}

.likeButton{
    width: 47px;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #E4E5E7;
    border-radius: 12px;
}

.clickFrame{
    display: none;
    justify-content: space-between;
    width: 100%;
    margin-top: 22px;
    transition: 0.5s;

}

.card:hover .clickFrame{
    display: flex;

}

.oneClick{
    font-weight: 500;
    font-size: 16px;
    line-height: 110%;

    color: #2F3132;
}

.size{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;

    /*width: 74px;*/
    /*height: 25px;*/

    background: rgba(228, 229, 231, 0.7);
    border-radius: 100px;

    font-weight: 500;
    font-size: 12px;
    line-height: 110%;

    text-align: center;

    color: #2F3132;

    opacity: 0.7;
}

.price {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 10px;
    background: #ffffff;
    margin-top: 16px;
}
.price:hover {
    margin-top: 18px;
}

.new {
    font-weight: 500;
    font-size: 26px;
    line-height: 110%;
    background: #ffffff;

    color: #2F3132;
}

.old {
    font-weight: 500;
    font-size: 16px;
    line-height: 110%;

    text-decoration-line: line-through;
    background: #ffffff;

    color: #989EA5;
}

.cashback {
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 6px;
    margin-top: 12px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    background: #ffffff;

    color: #2F3132;
}

.productName{
    font-weight: 500;
    font-size: 20px;
    line-height: 110%;
    background: #ffffff;
margin-top: 12px;
    color: #2F3132;
}

.rating{
    margin-top: 13px;
    display: flex;
    gap: 10px;
}

.numberOfValuers{
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;

    color: #989EA5;
}

.deliveryFrame{
    display: flex;
    gap: 7px;
    margin-top: 15px;
}
.delivery{
    font-size: 16px;
    line-height: 110%;

    color: #989EA5;
}

.deliveryTime{
    font-size: 16px;
    line-height: 110%;

    color: #2F3132;
}
</style>