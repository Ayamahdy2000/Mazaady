<template>
  <div class="main-card w-full products-card">
    <header class="flex justify-between items-center">
      <ul class="flex tabs">
        <li class="tabs__item tabs__item--active">Products</li>
        <li class="tabs__item">Articles</li>
        <li class="tabs__item">Reviews</li>
      </ul>
      <button class="btn btn--gradient hidden sm:block">
        <span><PlusCircleIcon />add review</span>
      </button>
    </header>
    <h2 class="generic-title">Products <span>(12)</span></h2>

    <card v-for="(item, index) in items" :key="index" :item="item"/>
  </div>
</template>
<script>
import { PlusCircleIcon } from "@heroicons/vue/24/outline";
import card from "./card.vue"
export default {
  components: {
    PlusCircleIcon,
    card
  },
  data() {
    return {
      items: [
        {
          isLike: false,
          title:
            "Six-piece clothing set (blouse - pants - hat and hat and blouse - pants - blouse - pants -)",
          price: 1000,
          type: "live",
        },
        {
          isLike: true,
          title: "Six-piece clothing set (blouse - pants )",
          price: 1000,
          type: "sale",
        },
        {
          isLike: false,
          title:
            "Six-piece clothing set (blouse - pants - hat and hat and blouse - pants - blouse - pants -)",
          price: 1000,
          type: "live",
        },
        {
          isLike: true,
          title: "Six-piece clothing set (blouse - pants )",
          price: 1000,
          type: "sale",
        },
        {
          isLike: false,
          title:
            "Six-piece clothing set (blouse - pants - hat and hat and blouse - pants - blouse - pants -)",
          price: 1000,
          type: "live",
        },
        {
          isLike: true,
          title: "Six-piece clothing set (blouse - pants )",
          price: 1000,
          type: "sale",
        },
      ],
    };
  },
};
</script>
