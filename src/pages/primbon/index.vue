<script lang="ts" setup>
import { ref } from "vue";
import Primbon from "../../services/primbon";
import { ArtiNamaBahasa, ArtiNamaPrimbon } from "../../types/arti-nama";
import { PrimbonTanggalLahir } from "../../types/primbon-tanggal-lahir";
import { GarisHidup } from "../../types/garis-hidup";
import Accordion from "../../components/Accordion.vue";

const dates = new Date();

const date = dates.getDate() < 10 ? "0" + dates.getDate() : dates.getDate();
const month = dates.getMonth() < 10 ? "0" + dates.getMonth() : dates.getMonth();
const year = dates.getFullYear();

const dateNow = `${year}-${month}-${date}`;

const req = ref({
  nama: "",
  tanggalLahir: "",
});
const artiNamaBahasa = ref<ArtiNamaBahasa[]>([]);
const artiNamaPrimbon = ref<ArtiNamaPrimbon[]>([]);
const primbonTanggalLahir = ref<PrimbonTanggalLahir | null>();
const garisHidup = ref<GarisHidup | null>();

const isLoading = ref<boolean>(false);
const el = ref<HTMLDivElement>();

const handleSubmit = async () => {
  isLoading.value = true;

  const artiNama = await Primbon.getArtiNama({ nama: req.value.nama });
  artiNamaBahasa.value = artiNama?.items ?? [];
  artiNamaPrimbon.value = artiNama?.primbon ?? [];

  const primbon = await Primbon.getPrimbonTanggalLahir({
    tanggal_lahir: req.value.tanggalLahir,
  });
  primbonTanggalLahir.value = primbon?.primbon;
  garisHidup.value = primbon?.garis_hidup;

  isLoading.value = false;
  window.scrollTo(0, el.value?.offsetTop as number);
};
</script>

<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <form
      class="border border-solid border-gray-800 w-full lg:w-xl rounded lg:p-20 lg:p-10 p-5"
      @submit.prevent="handleSubmit"
    >
      <div class="text-gray-400 mb-3">Nama</div>
      <input
        type="text"
        placeholder="Masukkan Namamu"
        class="w-full rounded-full border-solid border-gray-800 bg-transparent px-5 py-3 outline-none focus:border-primary transition text-gray-100 disabled:bg-gray-800"
        v-model="req.nama"
        :disabled="isLoading"
        required
      />
      <div class="mb-5"></div>
      <div class="text-gray-400 mb-3">Tanggal Lahir</div>
      <input
        type="date"
        placeholder="Masukkan Namamu"
        class="w-full rounded-full border-solid border-gray-800 bg-transparent px-5 py-3 outline-none focus:border-primary transition text-gray-100 disabled:bg-gray-800"
        :max="dateNow"
        v-model="req.tanggalLahir"
        :disabled="isLoading"
        required
      />
      <div class="text-center">
        <button
          type="submit"
          class="bg-primary border-none uppercase w-full mt-14 py-3 rounded-full cursor-pointer"
          :disabled="isLoading"
        >
          {{ isLoading ? "Memuat..." : "Submit" }}
        </button>
      </div>
    </form>
  </div>
  <div
    ref="el"
    :class="{
      hidden:
        !artiNamaBahasa.length &&
        !artiNamaPrimbon.length &&
        !primbonTanggalLahir,
    }"
  >
    <div class="bg-primary rounded-lg p-5 text-center">
      <div class="font-semibold text-lg">
        {{ req.nama }} ({{ primbonTanggalLahir?.tgl_lahir }})
      </div>
    </div>
    <div
      class="mt-10 border rounded-lg border-solid border-gray-800 lg:p-10 p-5"
    >
      <div class="text-center text-lg font-semibold text-primary">
        Arti Nama
      </div>
      <div class="mt-5">
        <div class="overflow-x-auto">
          <table
            class="border border-solid border-collapse w-full font-thin whitespace-nowrap"
          >
            <thead>
              <tr>
                <td class="border border-solid border-gray-800 p-3">No</td>
                <td class="border border-solid border-gray-800 p-3">Nama</td>
                <td class="border border-solid border-gray-800 p-3">Asal</td>
                <td class="border border-solid border-gray-800 p-3">Arti</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in artiNamaBahasa">
                <td class="border border-solid border-gray-800 p-3">
                  {{ i + 1 }}
                </td>
                <td class="border border-solid border-gray-800 p-3">
                  {{ item.nama }}
                </td>
                <td class="border border-solid border-gray-800 p-3">
                  {{ item.asal }}
                </td>
                <td class="border border-solid border-gray-800 p-3">
                  {{ item.arti }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="mt-5">
        <div
          v-for="item in artiNamaPrimbon"
          class="mb-5 border border-gray-800 border-solid rounded p-5"
        >
          <div class="mb-3 text-lg">
            <span class="font-normal text-primary">{{ item.nama }}</span>
            memiliki arti {{ item.arti }}
          </div>
          <p class="text-gray-400 lg:text-base text-sm">{{ item.detail }}</p>
        </div>
      </div>
    </div>
    <div
      class="mt-10 border rounded-lg border-solid border-gray-800 lg:p-10 p-5"
    >
      <div class="text-center text-lg font-semibold text-primary">
        Ramalan Primbon
      </div>
      <div class="mt-5 border-gray-800">
        <table>
          <tbody>
            <tr>
              <td>Tgl Lahir</td>
              <td class="px-5">:</td>
              <td>{{ primbonTanggalLahir?.tgl_lahir }}</td>
            </tr>
            <tr>
              <td>Weton</td>
              <td class="px-5">:</td>
              <td>{{ primbonTanggalLahir?.weton }}</td>
            </tr>
            <tr>
              <td>Mongso</td>
              <td class="px-5">:</td>
              <td>{{ primbonTanggalLahir?.mongso }}</td>
            </tr>
            <tr>
              <td>Wuku</td>
              <td class="px-5">:</td>
              <td>{{ primbonTanggalLahir?.wuku }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mt-5 mb-5">
        <Accordion
          title="Sifat Anda Berdasarkan Weton"
          :content="(primbonTanggalLahir?.sifat_weton as string)"
        />
      </div>
      <div class="mt-5 mb-5">
        <Accordion
          title="Sifat Anda Berdasarkan Wuku"
          :content="(primbonTanggalLahir?.sifat_wuku as string)"
        />
      </div>
      <div class="mt-5 mb-5">
        <Accordion
          title="Keadaan Umum"
          :content="(primbonTanggalLahir?.keadaan_umum as string)"
        />
      </div>
      <div class="mt-5 mb-5">
        <Accordion
          title="Keadaan Alam Semesta"
          :content="(primbonTanggalLahir?.keadaan_alam_semesta as string)"
        />
      </div>
      <div class="mt-5 mb-5">
        <Accordion
          title="Keadaan Masa Kanak Kanak"
          :content="(primbonTanggalLahir?.keadaan_masa_kanak_kanak as string)"
        />
      </div>
      <div class="mt-5 mb-5">
        <Accordion
          title="Keadaan Masa Remaja"
          :content="(primbonTanggalLahir?.keadaan_masa_remaja as string)"
        />
      </div>
      <div class="mt-5 mb-5">
        <Accordion
          title="Keadaan Kesehatan"
          :content="(primbonTanggalLahir?.keadaan_kesehatan as string)"
        />
      </div>
      <div class="mt-5 mb-5">
        <Accordion
          title="Ciri Khas"
          :content="(primbonTanggalLahir?.ciri_khas as string)"
        />
      </div>
      <div class="mt-5 mb-5">
        <Accordion
          title="Ikatan Persahabatan"
          :content="(primbonTanggalLahir?.ikatan_persahabatan as string)"
        />
      </div>
      <div class="mt-5 mb-5">
        <Accordion
          title="Jodoh"
          :content="(primbonTanggalLahir?.jodoh as string)"
        />
      </div>
      <div class="mt-5 mb-5">
        <Accordion
          title="Saat yang Tepat"
          :content="(primbonTanggalLahir?.saat_yang_tepat as string)"
        />
      </div>
    </div>
    <div
      class="mt-10 border rounded-lg border-solid border-gray-800 lg:p-10 p-5"
    >
      <div class="text-center text-lg font-semibold text-primary">
        Karakter : Garis Hidup {{ garisHidup?.garis_hidup }}
      </div>
      <div
        class="mt-5 text-gray-400 lg:text-base text-sm"
        v-html="garisHidup?.detail"
      ></div>
    </div>
  </div>
</template>
