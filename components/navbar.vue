<template>
  <Disclosure class="navbar" as="nav" v-slot="{ open }">
    <div class="mx-auto navbar__content container">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden ">
          <DisclosureButton
            class="relative inline-flex items-center justify-center navbar__bars"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block " aria-hidden="true" />
            <XMarkIcon v-else class="block " aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="flex items-center justify-center sm:items-stretch sm:justify-start h-full"
        >
          <div class="flex flex-shrink-0 items-center">
            <img
              class="navbar__brand"
              src="https://mazaady.com/images/mazaady-logo.svg"
              alt="Mazaady logo"
            />
          </div>
          <div class="hidden md:ml-8 sm:ml-3 sm:block">
            <div class="flex navbar__items   h-full items-center">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="navbar__item"
                :class="[item.current ? 'navbar__item--active' : '']"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</a
              >
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto"
        >
          <button class="navbar__icon__left navbar__icon--border">
            <MagnifyingGlassIcon class="h-5 w-5" aria-hidden="true" />
          </button>
          <button class="navbar__icon__left navbar__icon--border">
            <BellIcon class="h-5 w-5" aria-hidden="true" />
          </button>

          <!-- Profile dropdown -->
          <Menu as="div" class="relative navbar__icon__left navbar__profile">
            <div>
              <MenuButton
                class="relative flex rounded-full text-sm"
              >
                <span class="absolute -inset-1.5" />
                <span class="sr-only">Open user menu</span>
                <img
                  class=" rounded-full"
                  src="https://images.unsplash.com/photo-1461468611824-46457c0e11fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHx3b21hbnxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                />
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    >Your Profile</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    >Settings</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    >Sign out</a
                  >
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
          <button class="btn btn--gradient hidden sm:block">
            <span><PlusCircleIcon />add new project</span>
          </button>
          <button
            class="hidden sm:block navbar__icon__right navbar__icon--border"
          >
            <GlobeAltIcon class="h-5 w-5" aria-hidden="true" />
          </button>
          <button class="hidden sm:block navbar__icon__right">EN</button>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden container">
      <div class="p-2 pb-4">
      <div class="navbar__items">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          class="navbar__item"
          :class="item.current ? 'navbar__item--active' : ''"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
        </div>

        <button class="btn btn--gradient block">
          <span><PlusCircleIcon />add new project</span>
        </button>

        <div class="flex items-center ">
          <button class="navbar__icon__right mt-6 navbar__icon--border">
            <GlobeAltIcon class="h-5 w-5" aria-hidden="true" />
          </button>
          <button class="navbar__icon__right mt-6">EN</button>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
  GlobeAltIcon,
} from "@heroicons/vue/24/outline";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Blog", href: "#", current: false },
  { name: "Gifts", href: "#", current: false },
];
</script>
