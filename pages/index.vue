<template>
  <button class="btn btn--gradient btn--fixed">
    <span><PlusCircleIcon />add review</span>
  </button>
  <div class="container mx-auto">
    <div class="d-flex-lg sm:space-x-6">
      <profile-info class="" />
      <product-card />
    </div>
  </div>
</template>
<script>
import ProfileInfo from "~/components/profile-info.vue";
import productCard from "~/components/product-card.vue";
import { PlusCircleIcon } from "@heroicons/vue/24/outline";

export default {
  components: { ProfileInfo, productCard, PlusCircleIcon },
};
</script>
