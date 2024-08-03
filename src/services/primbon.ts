import http from "./http";
import { ArtiNamaBahasa, ArtiNamaPrimbon } from "../types/arti-nama";
import { PrimbonTanggalLahir } from "../types/primbon-tanggal-lahir";

export default class Primbon {
  static async getArtiNama(props: { nama: string }): Promise<{
    success: boolean;
    items?: ArtiNamaBahasa[];
    primbon?: ArtiNamaPrimbon[];
  } | null> {
    try {
      const res = await http.post("/arti-nama", { nama: props.nama });

      return res.data;
    } catch (e) {
      return null;
    }
  }

  static async getPrimbonTanggalLahir(props: {
    tanggal_lahir: string;
  }): Promise<{
    success: boolean;
    primbon?: PrimbonTanggalLahir;
  } | null> {
    try {
      const res = await http.post("/primbon", {
        tanggal_lahir: props.tanggal_lahir,
      });

      return res.data;
    } catch (e) {
      return null;
    }
  }
}
