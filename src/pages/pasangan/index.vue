<script lang="ts" setup>
import { ref } from "vue";
import { dateNow } from "../../plugins/dates";
import Pasangan, { GetResponseData } from "../../services/pasangan";
import ComingSoon from "../coming-soon/index.vue";

const el = ref<HTMLDivElement>();
const data = ref<GetResponseData | null>(null);
const req = ref({
  nama1: "",
  nama2: "",
  tanggal_lahir1: "",
  tanggal_lahir2: "",
});

const isLoading = ref(false);

const handleSubmit = async () => {
  isLoading.value = true;
  const res = await Pasangan.get(req.value);
  data.value = res;
  window.scrollTo(0, el.value?.offsetTop as number);
  isLoading.value = false;
};
</script>

<template>
  <div
    class="py-10 lg:mt-0 mt-20 min-h-screen flex items-center justify-center"
  >
    <form
      @submit.prevent="handleSubmit"
      class="w-full p-10 border border-solid border-gray-800 rounded"
    >
      <div
        class="flex lg:flex-row flex-col items-stretch justify-between gap-10 relative"
      >
        <div class="grow">
          <div class="text-center text-primary text-xl mb-5">Pria</div>
          <div class="text-gray-400 mb-3">Nama Pria</div>
          <input
            type="text"
            placeholder="Masukkan Nama Pria"
            class="w-full rounded-full border-solid border-gray-800 bg-transparent px-5 py-3 outline-none focus:border-primary transition text-gray-100 disabled:bg-gray-800"
            v-model="req.nama1"
            :disabled="isLoading"
            required
          />
          <div class="mb-5"></div>
          <div class="text-gray-400 mb-3">Tanggal Lahir</div>
          <input
            type="date"
            class="w-full rounded-full border-solid border-gray-800 bg-transparent px-5 py-3 outline-none focus:border-primary transition text-gray-100 disabled:bg-gray-800"
            :max="dateNow()"
            v-model="req.tanggal_lahir1"
            :disabled="isLoading"
            required
          />
        </div>
        <div class="lg:border-l-solid border-b-solid border-gray-800"></div>
        <div class="grow">
          <div class="text-center text-primary text-xl mb-5">Wanita</div>
          <div class="text-gray-400 mb-3">Nama Wanita</div>
          <input
            type="text"
            placeholder="Masukkan Nama Wanita"
            class="w-full rounded-full border-solid border-gray-800 bg-transparent px-5 py-3 outline-none focus:border-primary transition text-gray-100 disabled:bg-gray-800"
            v-model="req.nama2"
            :disabled="isLoading"
            required
          />
          <div class="mb-5"></div>
          <div class="text-gray-400 mb-3">Tanggal Lahir</div>
          <input
            type="date"
            class="w-full rounded-full border-solid border-gray-800 bg-transparent px-5 py-3 outline-none focus:border-primary transition text-gray-100 disabled:bg-gray-800"
            :max="dateNow()"
            v-model="req.tanggal_lahir2"
            :disabled="isLoading"
            required
          />
          <div class="mb-10"></div>
        </div>
      </div>
      <div class="mt-10 text-center">
        <button
          type="submit"
          class="bg-primary border-none uppercase w-full py-3 rounded-full cursor-pointer"
          :disabled="isLoading"
        >
          {{ isLoading ? "Memuat..." : "Submit" }}
        </button>
      </div>
    </form>
  </div>
  <div ref="el" :class="{ hidden: !data }">
    <div
      class="bg-primary rounded-lg p-5 text-center flex lg:flex-row flex-col items-center justify-between"
    >
      <div class="font-semibold text-lg grow">
        {{ data?.identitas.nama1 }}
        <div class="text-base">({{ data?.identitas?.tanggal_lahir1 }})</div>
      </div>
      <div class="my-5 font-semibold">&</div>
      <div class="font-semibold text-lg grow">
        {{ data?.identitas.nama2 }}
        <div class="text-base">({{ data?.identitas?.tanggal_lahir2 }})</div>
      </div>
    </div>
    <div class="mt-10">
      <ComingSoon></ComingSoon>
    </div>
  </div>
</template>
