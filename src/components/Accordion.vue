<script lang="ts" setup>
import { ref } from "vue";

defineProps<{
  title: string;
  content: string;
}>();

const showContent = ref(false);

const toggleContent = () => {
  showContent.value = !showContent.value;
};
</script>

<template>
  <div class="border border-gray-800 border-solid rounded p-5">
    <div
      class="text-lg flex items-center justify-between"
      @click="toggleContent"
    >
      <div class="font-normal text-primary">{{ title }}</div>
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
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
    <p
      class="text-gray-400 mt-3"
      :class="{ hidden: !showContent }"
      v-html="content"
    ></p>
  </div>
</template>
