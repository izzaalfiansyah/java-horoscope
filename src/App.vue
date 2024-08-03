<script lang="ts" setup="">
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
      <div>
        <ul class="list-none flex space-x-6 font-normal">
          <li v-for="item in menus">
            <router-link
              :to="item.path"
              class="no-underline text-white hover:text-primary"
              :class="{ '!text-primary': item.path == $route.fullPath }"
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
