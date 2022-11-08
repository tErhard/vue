<template>
  <div class="card-container">
    <div class="card-image">
      <img :src="imgSrc" />
    </div>
    <div class="card-title">
      {{ title }}
    </div>
    <div class="card-description">
      {{ description }}
    </div>
    <div class="card-price">
      {{ priceToShow }}
    </div>
    <div class="card-header">
      <button>
        <img src="https://image.similarpng.com/very-thumbnail/2021/08/Instagram-Likes-icon-on-trabsparent-background-PNG.png" v-on:click="redicted" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',

  props: {
    imgSrc: {
      type: String,
      default:
        'https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg',
    },
    title: {
      type: String,
      default: 'No title',
    },
    description: {
      type: String,
      default: 'No description',
    },
    price: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    priceToShow() {
      return `${this.price} EUR`
    },
  },
}
</script>

<style lang="css" scoped>


.card-container {
  width: 200px;
  height: 285px;
  border: 2px solid gray;
  border-radius: 3px;
  margin: 10px;
  padding: 10px;
}
.card-container {
  background-color: rgb(243, 243, 243);
}
.card-image {
  padding: 5px;
}
.card-image img {
  width: 100%;
}

.card-header img {
  width: 16px;
}
.card-header button {
  height: 25px;
  width: 30px;
}
.card-header {
  text-align: right;
}
.card-description {
  color: rgb(104, 104, 104);
  font-size: 14px;
}
.card-price {
  text-align: right;
  font-size: 14px;
}



</style>
