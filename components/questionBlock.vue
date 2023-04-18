<template>
    <div class="container">
        <div class="h1">Вопросы и ответы</div>
        <div class="question-accordion">
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item class="question" title="Какие способы оплаты?" name="1">
                    <div class="answer">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita maiores odit voluptatem?
                        Autem enim, esse ipsum non quae qui sapiente voluptate! Asperiores eveniet natus odit, pariatur
                        repellendus sequi! Corporis, iure?
                    </div>
                </el-collapse-item>
                <el-collapse-item class="question" title="Как заказать цветы?" name="2">
                    <div class="answer">
                        Оформить заказ можно по телефону либо на сайте, добавив понравившийся букет в корзину и заполнив
                        все необходимые поля.
                    </div>
                </el-collapse-item>
                <el-collapse-item class="question" title="Есть ли у вас срочная доставка на дом?" name="3">
                    <div class="answer">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem earum est iusto libero nemo
                        pariatur, quis ratione rerum saepe sit! Adipisci doloremque eum facere ipsam iure nihil nostrum
                        ratione sint?
                    </div>
                </el-collapse-item>
                <el-collapse-item class="question" title="В какое время осуществляется доставка цветов?" name="4">
                    <div class="answer">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid excepturi inventore nam
                        nobis repellat sed veniam! Accusantium, animi autem culpa ducimus, illo magnam odit quasi
                        quibusdam ratione sapiente vel.
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>


    </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
    console.log(val)
}
</script>

<script lang="ts">
export default {
    name: "questionBlock"
}
</script>

<style scoped>
.container {
    margin-top: 90px;
    width: 63%;
}

.h1 {
    font-size: 36px;
    line-height: 100%;

    color: #2F3132;

}

.el-collapse {
    --el-collapse-header-font-size: 20px;
    --el-collapse-header-height: 50px;
    --el-collapse-header-text-color: #2F3132;
    margin-top: 25px;
}

/deep/ .el-collapse-item__header.is-active {
    color: #B46B95;
}

.answer {
    font-size: 18px;
    line-height: 160%;

    color: #989EA5;
}
</style>