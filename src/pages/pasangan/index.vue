<script lang="ts" setup>
import { ref } from "vue";
import { dateNow } from "../../plugins/dates";
import Pasangan, { GetResponseData } from "../../services/pasangan";

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
  isLoading.value = false;

  setTimeout(() => {
    window.scrollTo(0, el.value?.offsetTop as number);
  }, 500);
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
          <div class="text-center text-primary text-xl mb-5">Anda</div>
          <div class="text-gray-400 mb-3">Nama Anda</div>
          <input
            type="text"
            placeholder="Masukkan Nama Anda"
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
          <div class="text-center text-primary text-xl mb-5">Pasangan</div>
          <div class="text-gray-400 mb-3">Nama Pasangan</div>
          <input
            type="text"
            placeholder="Masukkan Nama Pasangan"
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
    <div
      class="mt-10 border rounded-lg border-solid border-gray-800 lg:p-10 p-5"
    >
      <div class="flex items-center justify-center space-x-2 lg:mt-0 mt-5">
        <svg
          v-for="(_, i) in Array.from({ length: 5 })"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="lg:size-11 size-8 text-gray-600"
          :class="{ '!text-red-500 fill-red-500': i < (data?.ramalan.nilai as number) }"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </div>
      <div class="py-10">
        <table class="lg:text-base text-sm">
          <tbody>
            <tr>
              <td class="align-top whitespace-nowrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-5 mt-0.8 text-cyan-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </td>
              <td class="align-top lg:pl-10 pl-3 lg:pr-3 pr-1">:</td>
              <td class="align-top" v-html="data?.ramalan.sisi_positif"></td>
            </tr>
            <tr>
              <td class="align-top whitespace-nowrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-5 mt-0.8 text-yellow-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 12h14"
                  />
                </svg>
              </td>
              <td class="align-top lg:pl-10 pl-3 lg:pr-3 pr-1">:</td>
              <td class="align-top" v-html="data?.ramalan.sisi_negatif"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        class="text-center lg:text-base text-sm"
        v-html="data?.ramalan.sisi_detail"
      ></div>
    </div>
    <div
      class="mt-10 border rounded-lg border-solid border-gray-800 lg:p-10 p-5"
    >
      <div class="text-center text-lg font-semibold text-primary">Pasaran</div>
      <div
        class="mt-5 text-justify lg:text-base text-sm"
        v-html="data?.primbon_nb"
      ></div>
      <div class="border-b-solid border-gray-800 mt-10"></div>
      <div class="mt-10">
        <div class="mb-5" v-for="item in data?.primbon">
          <div
            class="text-white lg:text-base text-sm"
            v-html="item.pasaran"
          ></div>
          <div
            class="text-gray-500 lg:text-base text-sm"
            v-html="item.detail"
          ></div>
        </div>
      </div>
    </div>
    <div
      class="mt-10 border rounded-lg border-solid border-gray-800 lg:p-10 p-5"
    >
      <div class="text-center text-lg font-semibold text-primary">
        Perjalanan Hidup
      </div>
      <div class="mt-5 lg:text-base text-sm">
        Adapun ramalan perjalanan hidup anda bersama pasangan ketika sudah
        menjadi suami istri menurut usia pernikahan adalah sebagai berikut:
      </div>
      <div class="border-b-solid border-gray-800 mt-10"></div>
      <div class="mt-10">
        <div
          v-for="item in data?.perjalanan_hidup"
          class="mb-5 lg:flex items-center justify-between border-solid border-gray-800 rounded p-4 lg:text-base text-sm"
        >
          <div class="text-white">{{ item.tahun }} Tahun</div>
          <div class="text-gray-500">
            {{ item.detail }}
          </div>
        </div>
      </div>
      <div class="border-b-solid border-gray-800 mt-10"></div>
      <div
        class="mt-10 lg:text-base text-sm"
        v-html="data?.perjalanan_hidup_nb"
      ></div>
    </div>
  </div>
</template>
