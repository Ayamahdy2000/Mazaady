<template>
  <div class="profile-info d-flex-md">
    <div class="main-card">
      <img
        src="https://images.unsplash.com/photo-1461468611824-46457c0e11fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHx3b21hbnxlbnwwfHwwfHx8MA%3D%3D"
        alt="profile img"
        class="main-card__img"
      />
      <h3 class="main-card__title">hala ahmed</h3>
      <p class="main-card__text">
        I am Hala Ahmed, I am the owner of the local brand called Beauty which is for Mackeup and Skin Care.
      </p>

      <div class="info-cards flex justify-between">
        <div class="info-card">
          <UserIcon />
          <div>
            <p class="info-card__number text-black">5</p>
            <p class="info-card__title">Following</p>
          </div>
        </div>
        <div class="info-card">
          <UserIcon />
          <div>
            <p class="info-card__number text-black">5</p>
            <p class="info-card__title">Following</p>
          </div>
        </div>
        <div class="info-card">
          <UserIcon />
          <div>
            <p class="info-card__number text-black">5 <span>(15)</span></p>
            <p class="info-card__title">Following</p>
          </div>
        </div>
      </div>
      <button class="btn btn--gradient w-full">Follow</button>
    </div>
    <collapse-card :hiddenMobile="true" class="qr-sec">
      <template #header
        ><h3 class="main-card__title">QR Code</h3>
        <div class="flex space-x-8">
          <EyeIcon />
          <ShareIcon />
          <FolderArrowDownIcon />
        </div>
      </template>
      <template #body>
        <div class="info-card">
          <FolderArrowDownIcon />
          <div>
            <p class="info-card__number text-black">
              Download the QR code or share it with your friends.
            </p>
          </div>
        </div>
        <div class="qr-code">
          <div class="qr-code__inner">
            <img
              class=" w-auto max-w-36 mb-0"
              src="https://mazaady.com/images/mazaady-logo.svg"
              alt="Mazaady logo"
            />
            <h3 class="main-card__title mt-0">hala ahmed</h3>
            <QrcodeVue :value="value" class="mt-0" />
            <p>Follow us on Mazaady</p>
          </div>
        </div>
      </template>
    </collapse-card>
  </div>
</template>
<script>
import {
  UserIcon,
  EyeIcon,
  ShareIcon,
  FolderArrowDownIcon,
} from "@heroicons/vue/24/outline";
import CollapseCard from "./collapse-card.vue";
import QrcodeVue from "qrcode.vue";
export default {
  components: {
    UserIcon,
    EyeIcon,
    ShareIcon,
    FolderArrowDownIcon,
    CollapseCard,
    QrcodeVue,
  },
  data() {
    return {
        value:'https://mazaady.com/',
    };
  },
};
</script>
