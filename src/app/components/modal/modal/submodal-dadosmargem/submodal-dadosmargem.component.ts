import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NbToastrService } from '@nebular/theme';
import { MargemCompleta } from 'src/app/interface/CriarMargemDto';
import { ServiceUsuarioService } from 'src/app/services/service-usuario.service';

@Component({
  selector: 'app-submodal-dadosmargem',
  templateUrl: './submodal-dadosmargem.component.html',
  styleUrls: ['./submodal-dadosmargem.component.scss']
})
export class SubmodalDadosmargemComponent {

  constructor(private dialogRef: MatDialogRef<SubmodalDadosmargemComponent>,
    private toastrService: NbToastrService,private userService: ServiceUsuarioService,
    @Inject(MAT_DIALOG_DATA) public data: { margemCompleta: MargemCompleta } ) {

     }
}
