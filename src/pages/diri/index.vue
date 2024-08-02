<script lang="ts" setup>
import { ref } from "vue";
import Primbon from "../../services/primbon";
const dates = new Date();

const date = dates.getDate() < 10 ? "0" + dates.getDate() : dates.getDate();
const month = dates.getMonth() < 10 ? "0" + dates.getMonth() : dates.getMonth();
const year = dates.getFullYear();

const dateNow = `${year}-${month}-${date}`;

const req = ref({
  nama: "",
  tanggalLahir: "",
});
const isLoading = ref<boolean>(false);

const handleSubmit = async () => {
  isLoading.value = true;
  const artiNama = await Primbon.getArtiNama({ nama: req.value.nama });
  console.log(artiNama);
  isLoading.value = false;
};
</script>

<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <form
      class="border border-solid border-gray-800 w-full lg:w-xl rounded lg:p-20 p-10"
      @submit.prevent="handleSubmit"
    >
      <div class="text-gray-400 mb-3">Nama</div>
      <input
        type="text"
        placeholder="Masukkan Namamu"
        class="w-full rounded-full border-solid border-gray-800 bg-transparent px-5 py-3 outline-none focus:border-primary transition text-gray-100"
        v-model="req.nama"
        required
      />
      <div class="mb-5"></div>
      <div class="text-gray-400 mb-3">Tanggal Lahir</div>
      <input
        type="date"
        placeholder="Masukkan Namamu"
        class="w-full rounded-full border-solid border-gray-800 bg-transparent px-5 py-3 outline-none focus:border-primary transition text-gray-100"
        :max="dateNow"
        v-model="req.tanggalLahir"
        required
      />
      <div class="text-center">
        <button
          type="submit"
          class="bg-primary border-none uppercase w-full mt-14 py-3 rounded-full cursor-pointer"
        >
          submit
        </button>
      </div>
    </form>
  </div>
</template>
