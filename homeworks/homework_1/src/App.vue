<template>
  <div>
    <!-- 3.Використовувати компонент -->
    <product-list :product-list-data="listData" />
  </div>
</template>

<script>
//1. Імпортувати компонент
import ProductList from '@/component/ProductList'

export default {
  name: 'App',
  //2.Реєстрація компонента
  components: {
    ProductList,
  },

  data() {
    return {
      listData: [
        {
          id: 1,
          imgSrc:
            'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/b6e11cbd-509d-483d-b21d-850e2d7924ca/air-zoom-alphafly-next-2-orszaguti-versenycipo-JrCvJQ.png',
          title: 'Nike Air Zoom Alphafly NEXT% 2',
          description: "Men's Road Racing Shoes",
          price: 299.99,
        },
        {
          id: 2,
          imgSrc:
            'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/d6d806fa-c0ff-421a-8b01-2897038a6edd/zoomx-vaporfly-next-2-orszaguti-versenycipo-GsMHKb.png',
          title: 'Nike ZoomX Vaporfly Next% 2',
          description: "Women's Road Racing Shoes",
          price: 249.99,
        },
        {
          id: 3,
          imgSrc:
            'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/2ada706e-eabf-417b-a126-339434f884f5/air-zoom-pegasus-39-orszaguti-futocipo-l68zCm.png',
          title: 'Nike Air Zoom Pegasus 39',
          description:"Women's Road Running Shoes",
          price: 119.99,
        },
      ],
    }
  },
}
</script>

<style>
#app {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: black;
  margin-top: 30px;
  
}
</style>