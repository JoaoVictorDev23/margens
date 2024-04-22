
export interface Margem{
  Id?: String;
  cliente: String;
  linha: String;
  origem: String;
  destino: String;
  margem: Number;
  margemAgr:Number;
  kilometragem:Number;
  pesoTon:Number;
  frete:Number;
  icms: Number;

  observacao: String;
}
