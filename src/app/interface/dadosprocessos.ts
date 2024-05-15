import { Provisao } from "./provisao";
import { Riscos } from "./riscos";

export interface Dadosprocessos {

  cod: string;
  status:string;
  numeroCnj:number | null;
  area:number | null;
  parteCliente:string;
  tipoCliente:string;
  parteAdversa:string;
  setor:string;
  objetivo:string;
  comarca:string;
  instancia:string;
  observacao:string;


  valorCausa:number | null;
  dataProtocolo:Date;
  dataBaixa:Date;


  probabilidade:number | null;
  classificacao:string;


  risco:Riscos;
  provisao:Provisao;
}
