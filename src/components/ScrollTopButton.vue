<script lang="ts" setup="">
const scrollToTop = () => {
  window.scrollTo(0, 0);
};
</script>

<template>
  <button
    class="fixed bottom-10 right-10 rounded-full w-14 h-14 bg-primary shadow border-none z-40 flex items-center justify-center cursor-pointer"
    @click="scrollToTop"
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
        d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
      />
    </svg>
  </button>
</template>
