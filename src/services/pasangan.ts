import { IdentitasPasangan } from "../types/identitas-pasangan";
import { PerjalananHidup } from "../types/perjalanan-hidup";
import { PrimbonPasangan } from "../types/primbon-pasangan";
import { RamalanPasangan } from "../types/ramalan-pasangan";
import http from "./http";

export interface GetResponseData {
  identitas: IdentitasPasangan;
  perjalanan_hidup: PerjalananHidup[];
  perjalanan_hidup_nb: string;
  primbon: PrimbonPasangan[];
  primbon_nb: string;
  ramalan: RamalanPasangan;
}

export default class Pasangan {
  static async get(props: {
    nama1: string;
    nama2: string;
    tanggal_lahir1: string;
    tanggal_lahir2: string;
  }): Promise<GetResponseData | null> {
    try {
      const res = await http.post("/jodoh", props);
      return res.data;
    } catch (e) {
      return null;
    }
  }
}
