<script lang="ts" setup="">
import { ref } from "vue";

interface Menu {
  path: string;
  title: string;
}

const menus: Menu[] = [
  {
    path: "/",
    title: "Beranda",
  },
  {
    path: "/primbon",
    title: "Primbon",
  },
  {
    path: "/pasangan",
    title: "Pasangan",
  },
  {
    path: "/pekerjaan",
    title: "Pekerjaan",
  },
];

const showSidebar = ref(false);

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
};
</script>

<template>
  <div
    class="min-h-screen bg-gray-900 text-gray-100 font-light text-base font-sans"
  >
    <div
      class="fixed top-0 right-0 left-0 bg-transparent backdrop-blur h-20 p-5 lg:px-32 flex items-center justify-between z-20 border-b-solid border-gray-800"
    >
      <div class="text-lg font-semibold">
        HORO<span class="text-primary">SCOPE</span>
      </div>
      <button
        class="border-none bg-transparent text-white"
        @click="toggleSidebar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div
        class="lg:block fixed z-30 top-0 bottom-0 right-0 w-72 lg:w-auto lg:bg-transparent bg-gray-900 h-screen lg:h-auto border-l-solid lg:border-l-none border-gray-800 lg:p-0 p-5 lg:!translate-x-0 translate-x-full transition"
        :class="{ '!translate-x-0': showSidebar }"
      >
        <div class="text-right mb-10">
          <button class="bg-transparent border-none" @click="toggleSidebar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <ul
          class="list-none flex lg:flex-row flex-col lg:space-y-0 space-y-5 lg:space-x-6 font-normal"
        >
          <li v-for="item in menus">
            <router-link
              :to="item.path"
              class="no-underline text-white hover:text-primary"
              :class="{ '!text-primary': item.path == $route.fullPath }"
              @click="toggleSidebar"
            >
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="lg:px-32 p-5">
      <router-view> </router-view>
    </div>
  </div>
</template>
