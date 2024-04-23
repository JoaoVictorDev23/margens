import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { ValoresMargem } from 'src/app/interface/ValoresMargemDto';
import { Margem } from 'src/app/interface/margemDto';
import { MargemCompleta } from 'src/app/interface/CriarMargemDto';
import { MargemService } from 'src/app/services/margem.service';
import { Cliente } from 'src/app/interface/ClienteDto';
import { ClienteserviceService } from 'src/app/services/cliente/clienteservice.service';
import { Observable, map, of, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-margem',
  templateUrl: './cadastrar-margem.component.html',
  styleUrls: ['./cadastrar-margem.component.scss']
})
export class CadastrarMargemComponent implements OnInit {
  clientes: Cliente[] = [];
  filteredClientes$: Observable<Cliente[]>;
  inputFormControl: FormControl;

  constructor(
    private margemService: MargemService,
    private toastrService: NbToastrService,
    private clienteService: ClienteserviceService,
    private router: Router,
    private http: HttpClient
  ) {
    this.inputFormControl = new FormControl();
    this.filteredClientes$ = this.inputFormControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filterClientes(value))
    );
  }

  ngOnInit() {
    this.getClientes();
  }

  private filterClientes(value: string): Cliente[] {
    const filterValue = value.toLowerCase();
    return this.clientes.filter(cliente => cliente.nomeCliente.toLowerCase().includes(filterValue));
  }

  viewHandle(value: string) {
    return value.toUpperCase();
  }



  margemCompleta: MargemCompleta = {
    margemDto: {
      cliente:"",
      linha:"",
      origem:"",
      destino:"",
      margem:0,
      margemAgr:0,
      kilometragem:0,
      pesoTon:0,
      frete:0,
      icms:0,
      observacao:""
    },
    valoresMargemDto:{
      fe:0,
      fm:0,

      feTruck:0,
      fmTruck:0,

      feBitrem:0,
      fmBitrem:0,

      feCarreta:0,
      fmCarreta:0,

      feGranel:0,
      fmGranel:0,

      feRodotrem:0,
      fmRodotrem:0,

      idMargem:""
    }


  }

  todosCamposSelecionados(): boolean {
    return (
      this.margemCompleta.margemDto.cliente !== "" &&
      this.margemCompleta.margemDto.linha !== "" &&
      this.margemCompleta.margemDto.margem !== 0 &&
      this.margemCompleta.margemDto.destino !== "" &&
      this.margemCompleta.margemDto.origem !== "" &&
      this.margemCompleta.margemDto.observacao !== ""
    );
  }
  calcularICMS() {
    // Calcula o ICMS baseado no valor do frete
    this.margemCompleta.margemDto.icms = this.margemCompleta.margemDto.frete * 0.88;
  }

  cadastrarMargem(): void {
    const clienteSelecionado = this.clientes.find(cliente => cliente.nomeCliente === this.margemCompleta.margemDto.cliente);
    if (clienteSelecionado) {
      this.margemCompleta.margemDto.cliente = clienteSelecionado.grupoCliente;

      this.margemService.cadastrarMargem(this.margemCompleta).subscribe(
        response => {
          this.toastrService.success('Margem cadastrada com sucesso!', 'Sucesso');
          setTimeout(() => {
            location.reload(); // Recarrega a página após 1 segundo
          }, 1000);
        },
        error => {
          if (error.error && error.error.message) {
            this.toastrService.warning(error.error.message, 'Erro');
          } else {
            this.toastrService.warning('Erro ao cadastrar Margem!', 'Erro');
          }
        }
      );
    } else {
      this.toastrService.warning('Cliente não encontrado!', 'Erro');
    }
  }

  getClientes(): void {
    this.clienteService.clienteList().subscribe(clientes => {
      this.clientes = clientes;
    });
  }

  verdados(){
    console.log(this.margemCompleta);
  }


}
