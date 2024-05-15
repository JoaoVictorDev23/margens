import { Component } from '@angular/core';
import { Dadosprocessos } from 'src/app/interface/dadosprocessos';

@Component({
  selector: 'app-cadastrarprocesso',
  templateUrl: './cadastrarprocesso.component.html',
  styleUrls: ['./cadastrarprocesso.component.scss']
})
export class CadastrarprocessoComponent {


  dadosprocessos:Dadosprocessos = {

    cod: "",
    status:"",
    numeroCnj: null,
    area: null,
    parteCliente:"",
    tipoCliente:"",
    parteAdversa:"",
    setor:"",
    objetivo:"",
    comarca:"",
    instancia:"",
    observacao:"",
    valorCausa: null,
    dataProtocolo: new Date(),
    dataBaixa: new Date(),
    probabilidade: null,
    classificacao:"",
    risco:{
      riscoEstimado:"",
      riscoMaximo:"",
      riscoMinimo:"",
      riscoPossivel:"",
      riscoProvavel:"",
      riscoRemoto:""
    },
    provisao:{
      adverso:"",
      area:"",
      avisoPreviso:"",
      cod:"",
      fgts40:"",
      fim:"",
      inicio:"",
      margem500:"",
      numeroCnj: null,
      saldoRecisao:null,
      status:"",
      tempoTrabalhado:""
    }

  }

}
