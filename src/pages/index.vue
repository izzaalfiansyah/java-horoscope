<template>
  <div
    class="min-h-screen flex lg:flex-row flex-col lg:pt-0 pt-20 items-center justify-between lg:space-x-20"
  >
    <img src="../assets/astro.webp" class="lg:w-350px w-300px" alt="" />
    <div
      class="grow space-y-8 w-full lg:w-auto lg:pt-0 pt-10 text-center lg:text-left"
    >
      <div class="text-3xl font-semibold">Baca Ramalan Tentang Dirimu</div>
      <p class="font-thin">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quo eligendi
        doloremque nisi dignissimos, eius numquam fugit. Iste, eveniet
        doloremque repudiandae quidem, suscipit iure fugit, officiis facere
        dolorum dolorem minima.
      </p>
      <router-link
        to="/primbon"
        class="bg-primary no-underline inline-block text-gray-900 font-normal px-8 py-2.5 rounded-full border-none cursor-pointer hover:bg-opacity-90 transition"
      >
        RAMAL SEKARANG
      </router-link>
    </div>
  </div>
</template>
