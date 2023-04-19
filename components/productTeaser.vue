<template>
    <div class="card"
         v-for="(card) in card"
    >
        <img v-if="card.sale" class="sale" src="../assets/img/badges/sale.svg">
        <img :src="card.img">
        <div v-if="card.badges" class="badges">
            <img v-if="card.freeDelivery" src="../assets/img/badges/freeDelivery.svg">
            <img v-if="card.hit" src="../assets/img/badges/hit.svg">
            <img v-if="card.combo" src="../assets/img/badges/combo.svg">
            <img v-if="card.bestPrice" src="../assets/img/badges/bestPrice.svg">
        </div>
        <div v-else class="badges"></div>
        <div class="cartFrame">
            <button class="cartButton">В корзину</button>
            <button class="likeButton"><img src="@/assets/img/li_heartFill.svg"></button>
        </div>
        <div class="clickFrame">
            <div class="oneClick">
                <img src="@/assets/img/stick.svg">
                Купить в 1 клик
            </div>
            <div class="size">{{ card.size }} см</div>
        </div>
        <div class="price">
            <div class="new">{{ card.price }}</div>
            <div class="old" v-if="card.exPrice2">{{ card.exPrice }}</div>
        </div>
        <div class="cashback">
            <img src="../assets/img/badges/cashback.svg">
            {{ card.cashback }} баллов
        </div>
        <div class="productName">{{ card.title }}</div>
        <div class="rating">
            <UiStarRating/>
            <div class="numberOfValuers">{{ card.numberOfValuers }}</div>
        </div>
        <div class="deliveryFrame">
            <div class="delivery">Доставка</div>
            <div class="deliveryTime">{{ card.delivery }} часа</div>
        </div>
    </div>

</template>

<script>
export default {
    name: "productTeaser",
    data() {
        return {
            card: [
                {
                    title: "101 белая роза - коробка Raffaello в подарок",
                    img: "/img/teaserBouquet.jpg",
                    size: "30×35",
                    price: "4790 ₽",
                    exPrice: "6990 ₽",
                    exPrice2: true,
                    cashback: '200',
                    rating: 0,
                    numberOfValuers: '54',
                    delivery: "2",
                    badges: true,
                    sale: true,
                    hit: true,
                    combo: false,
                    freeDelivery: false,
                    bestPrice: false,
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

.sale {
    position: absolute;
    left: 214px;
    top: 22px;
}

.badges {
    height: 20px;
}

.cartFrame {
    display: none;
    gap: 10px;
    margin-top: 18px;
    transition: 0.5s;

}

.card:hover .cartFrame {
    display: flex;
    transition: 0.5s;


}

.cartButton {
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

.likeButton {
    width: 47px;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #E4E5E7;
    border-radius: 12px;
}

.clickFrame {
    display: none;
    justify-content: space-between;
    width: 100%;
    margin-top: 22px;
    transition: 0.5s;

}

.card:hover .clickFrame {
    display: flex;

}

.oneClick {
    font-weight: 500;
    font-size: 16px;
    line-height: 110%;

    color: #2F3132;
}

.size {
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

.productName {
    font-weight: 500;
    font-size: 20px;
    line-height: 110%;
    background: #ffffff;
    margin-top: 12px;
    color: #2F3132;
}

.rating {
    margin-top: 13px;
    display: flex;
    gap: 10px;
}

.numberOfValuers {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;

    color: #989EA5;
}

.deliveryFrame {
    display: flex;
    gap: 7px;
    margin-top: 15px;
}

.delivery {
    font-size: 16px;
    line-height: 110%;

    color: #989EA5;
}

.deliveryTime {
    font-size: 16px;
    line-height: 110%;

    color: #2F3132;
}
</style>