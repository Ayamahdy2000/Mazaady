<template>
  <div class="card sm:flex justify-between">
    <div class="d-flex">
      <div class="card__img">
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="product img"
        />
        <div class="card__heart" :class="item?.isLike ? 'active' : ''"><HeartIcon /></div>

        <p class="live" v-if="item?.type == 'live'">Live auction</p>
        <p class="sale" v-else>Live auction</p>
      </div>
      <div class="card__content">
        <h3 class="card__title">
          {{item?.title}}
        </h3>
        <p class="card__text">starting price <span>{{item?.price}} EGP</span></p>
        <div class="card__text sm:flex items-center">
          Lot starts in
          <div class="flex space-x-2 sm:space-x-5">
            <span class="card__days" v-for="offer,index in 3" :key="index">2 <span>days</span></span>
           
          </div>
        </div>
      </div>
    </div>
    <HeartIcon class="card__heart" :class="item?.isLike ? 'active' : ''" />
  </div>
</template>
<script>
import { HeartIcon } from "@heroicons/vue/24/outline";
export default {
  components: {
    HeartIcon,
  },
  props:["item"]
};
</script>
