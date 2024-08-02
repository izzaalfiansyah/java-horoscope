import http from "./http";

interface ArtiNamaBahasa {
  nama: string;
  gender: string;
  asal: string;
  arti: string;
}

interface ArtiNamaPrimbon {
  nama: string;
  arti: string;
  detail: string;
}

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
}
