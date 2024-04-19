import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Margem } from 'src/app/interface/margem';
import { MargemService } from 'src/app/services/margem.service';

@Component({
  selector: 'app-cadastrar-margem',
  templateUrl: './cadastrar-margem.component.html',
  styleUrls: ['./cadastrar-margem.component.scss']
})
export class CadastrarMargemComponent {

  constructor(
    private margemService: MargemService,
    private toastrService:NbToastrService,
    private router:Router,
    private http: HttpClient){

  }

  margem: Margem = {
    cliente:"",
    linha:"",
    origem:"",
    destino:"",
    margem:0,
    observacao:""

  }
  todosCamposSelecionados(): boolean {
    return (
      this.margem.cliente !== "" &&
      this.margem.linha !== "" &&
      this.margem.margem !== 0 &&
      this.margem.destino !== "" &&
      this.margem.origem !== "" &&
      this.margem.observacao !== ""
    );
  }

  cadastrarMargem():void {
    this.margemService.cadastrarMargem(this.margem).subscribe(
      response => {
        this.toastrService.success('Margem cadastrada com sucesso!','Sucesso');
        setTimeout(() => {
          location.reload(); // Recarrega a página após 1 segundos
        }, 1000);
      },
      error =>{
        if(error.error && error.error.message){
          this.toastrService.warning(error.error.message, 'Erro');

        }else {
          this.toastrService.warning('Erro ao cadastrar Margem.!', 'Erro');
        }
      }
    )
  }

}
