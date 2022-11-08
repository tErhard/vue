<template>
  <div class="list-container">
    <!-- 3.Використовуємо компонент -->
    <product-card
      v-for="item in productListData"
      :key="item.id"
      :img-src="item.imgSrc"
      :title="item.title"
      :description="item.description"
      :price="item.price"
    />

    <!-- <product-card
      :img-src="productListData[0].imgSrc"
      :title="productListData[0].title"
      :price="productListData[0].price"
    />
    <product-card
      :img-src="productListData[1].imgSrc"
      :title="productListData[1].title"
      :price="productListData[1].price"
    />
    <product-card
      :img-src="productListData[2].imgSrc"
      :title="productListData[2].title"
      :price="productListData[2].price"
    /> -->
  </div>
</template>

<script>
//1. Іморт зовнішнього компонента
import ProductCard from './ProductCard.vue'

export default {
  name: 'ProductList',

  //2. Реєструємо компонент
  components: {
    ProductCard,
  },

  props: {
    productListData: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="css" scoped>
.list-container {
  display: flex;
}
</style>
