import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NbToastrService } from '@nebular/theme';
import { MargemCompleta } from 'src/app/interface/CriarMargemDto';
import { ServiceUsuarioService } from 'src/app/services/service-usuario.service';

@Component({
  selector: 'app-modalmargemview',
  templateUrl: './modalmargemview.component.html',
  styleUrls: ['./modalmargemview.component.scss']
})
export class ModalmargemviewComponent {
  constructor(private dialogRef: MatDialogRef<ModalmargemviewComponent>,
    private toastrService: NbToastrService,private userService: ServiceUsuarioService,
    @Inject(MAT_DIALOG_DATA) public data: { margem: MargemCompleta } ) {
      console.log(data);

     }
     voltar(): void {
      this.dialogRef.close();
    }

}
