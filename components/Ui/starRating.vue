<template>
    <div class="starRating">
        <span v-for="index in starLimit" :key="index" class="star star--empty"><img src="@/public/img/starEmpty.svg" alt=""></span>
        <div class="starRating__full">
<!--            <span v-for="index in starLimit" :key="index" class="star star&#45;&#45;full"><img src="@/public/img/starFull.svg"></span>-->
        </div>
    </div>

</template>

<script>
export default {
    name: "starRating",

    props: {
        rating: {
            type: Number,
            default: 0,
        },
        starLimit: {
            type: Number,
            default: 5
        }
    }
}
</script>

<style scoped>
.starRating {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 2px;
    background: #ffffff;
    width: 98px;
    height: 18px;
    &__full{
        position: absolute;
        width: 0;
        height: 100%;
        top: 0;
        left: 0;
        overflow: hidden;

    }
}
img{
    background: #ffffff;
}

.star {
    display: inline-block;
    background: #ffffff;

    &--full {
        position: absolute;
        width: 0;
        height: 100%;
        top: 0;
        left: 0;
        overflow: hidden;
    }

    &--empty {
        
    }
}
</style>