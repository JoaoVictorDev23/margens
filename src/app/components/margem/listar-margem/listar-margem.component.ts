import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ModalmargemviewComponent } from '../../modal/modalmargemview/modalmargemview.component';
import { ModalmargemexcluirComponent } from '../../modal/modalmargemexcluir/modalmargemexcluir.component';
import { ModalmargemeditarComponent } from '../../modal/modalmargemeditar/modalmargemeditar.component';
import { Margem } from 'src/app/interface/margem';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { NbToastrService } from '@nebular/theme';
import { MargemService } from 'src/app/services/margem.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listar-margem',
  templateUrl: './listar-margem.component.html',
  styleUrls: ['./listar-margem.component.scss']
})
export class ListarMargemComponent implements AfterViewInit {


    loading: boolean = true; // Variável para controlar o estado de carregamento
    selectedFilter: string | null = null;

    margens: Margem[] = [];
    dataSource = new MatTableDataSource<Margem>(this.margens);
    displayedColumns: string[] = ['cliente', 'origem', 'destino','margem','observacao'];

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    constructor(public dialog: MatDialog, private toastrService: NbToastrService, private margemService: MargemService,private router: Router) {
    this.margemList();
    }

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    selectFilter(event: any) {
      this.selectedFilter = event.target.value;
    }

    applyFilter(event: any) {
      const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();

      // Verifica se há um filtro selecionado
      if (this.selectedFilter) {
        // Aplica o filtro no campo selecionado
        this.dataSource.filter = filterValue;
        this.dataSource.filterPredicate = (data: any, filter: string) => {
          const searchString = filter.toLowerCase();
          // Aplica o filtro no campo selecionado
          switch (this.selectedFilter) {
            case 'cliente':
              return data.cliente.toLowerCase().includes(searchString);
            case 'destino':
              return data.destino.toLowerCase().includes(searchString);
            case 'linha':
              return data.linha.toLowerCase().includes(searchString);
            default:
              return false; // Retorna falso para evitar a filtragem se nenhum campo for selecionado
          }
        };
      } else {
        // Se nenhum filtro estiver selecionado, limpa o filtro
        this.dataSource.filter = '';
      }
    }
    formatarCnpj(cnpj: string): string {
      // Verifica se o CNPJ é válido antes de aplicar a máscara
      if (cnpj && cnpj.length === 14) {
        return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
      }
      return cnpj; // Retorna o CNPJ sem máscara se não for válido
    }

    margemList(){
      this.margemService.margemList().subscribe(
        (data:Margem[]| null) => {
          try{
            if(data){
              this.margens = data;
              this.dataSource.data = this.margens;
            }else{
              throw new Error('A Lista de Margens está vazia!');
            }
          }
          catch(error){
            console.log('Erro ao Filtrar margens:', error);
            this.toastrService.danger("Erro ao buscar margens.","Erro")
          }
          finally {
            this.loading = false; // Finaliza o estado de carregamento após tentar obter e filtrar os dados
          }
        },
        (error)=>{
          console.log('Erro ao obter as margens.', error);
          this.toastrService.danger('Erro ao obter margens!',"Erro");
          this.loading = false;
        }
      )
    }



    openDialog(margem: Margem) {
      const dialogRef = this.dialog.open(ModalmargemviewComponent, { data: { margem:'2'  } });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

    openDialogExcluir(margem: Margem) {
      const dialogRef = this.dialog.open(ModalmargemexcluirComponent, { data: { margem:'2'  } });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

    openDialogAtualizar(margem: Margem) {
      const dialogRef = this.dialog.open(ModalmargemeditarComponent, { data: { margem: '2' } });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

}
