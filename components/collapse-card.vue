<template>
  <div
    class="mt-6 accordion main-card"
    @click="hiddenMobile && isMobile ? openSec() : ''"
    :class="isOpen ? 'accrodin--open ' : 'accrodin--close'"
  >
    <header class="flex justify-between items-center accordion__header">
      <slot name="header" />
      <div class="collapse__arrow" v-if="hiddenMobile && isMobile">
        <ChevronUpIcon class="" />
      </div>
    </header>
    <main class="accordion__body">
       <slot name="body"/>
    </main>
  </div>
</template>
<script>
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/vue/24/outline";
let mq = window.matchMedia("(max-width: 640px)");
export default {
  props: ["hiddenMobile"],
  components: {
    ChevronUpIcon,
    ChevronDownIcon,
  },
  data() {
    return {
      isMobile: false,
      isOpen: true,
    };
  },
  methods: {
    listenToMq() {
      mq.addListener((e) => {
        this.isMobile = e.matches;
      });
    },
    openSec() {
      this.isOpen = !this.isOpen;
    },
  },
  mounted() {
    this.listenToMq();
    if (window.innerWidth < 640) {
      this.isMobile = true;
    }
  },
};
</script>
