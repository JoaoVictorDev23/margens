import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbButtonModule,
  NbCardModule,
  NbDialogModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbMenuModule,
  NbSelectModule,
  NbSidebarModule,
  NbStepperModule,
  NbThemeModule,
  NbAutocompleteModule,
  NbUserModule,
  NbContextMenuModule,
  NbWindowModule,
  NbToastrModule,
  NbChatModule,
  NbToggleModule,
  NbBadgeModule,
  NbAlertModule,
  NbCheckboxModule,
  NbFormFieldModule

} from '@nebular/theme';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { MatPaginator, MatPaginatorModule} from '@angular/material/paginator';

import { MatIconModule } from '@angular/material/icon';

import { ReactiveFormsModule } from '@angular/forms';

import { UsuarioCadastrarComponent } from './components/usuarios/usuario-cadastrar/usuario-cadastrar.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CadastrarMargemComponent } from './components/margem/cadastrar-margem/cadastrar-margem.component';
import { ListarMargemComponent } from './components/margem/listar-margem/listar-margem.component';
import { ModalmargemviewComponent } from './components/modal/modalmargemview/modalmargemview.component';
import { ModalmargemexcluirComponent } from './components/modal/modalmargemexcluir/modalmargemexcluir.component';
import { ModalmargemeditarComponent } from './components/modal/modalmargemeditar/modalmargemeditar.component';
import { SubmodalDadosmargemComponent } from './components/modal/modal/submodal-dadosmargem/submodal-dadosmargem.component';
import { SubmodalValoresmargemComponent } from './components/modal/modal/submodal-dadosmargem/submodal-valoresmargem/submodal-valoresmargem.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    UsuarioCadastrarComponent,
    LoginComponent,
    CadastrarMargemComponent,
    ListarMargemComponent,
    ModalmargemviewComponent,
    ModalmargemexcluirComponent,
    ModalmargemeditarComponent,
    SubmodalDadosmargemComponent,
    SubmodalValoresmargemComponent,



  ],
  imports: [
    BrowserModule,NgxMaskDirective,
    AppRoutingModule,RouterModule,
    MatTableModule,MatIconModule,NbChatModule,
    NbDialogModule.forRoot(),    NbToastrModule.forRoot(),MatTabsModule,NbToggleModule,ReactiveFormsModule,
    NbSidebarModule.forRoot(),NbMenuModule.forRoot(),NbIconModule,MatPaginatorModule,NbBadgeModule,
    NbLayoutModule, NbButtonModule, BrowserAnimationsModule,NbStepperModule,NbContextMenuModule ,NbWindowModule,
    NbThemeModule.forRoot({ name: 'default' }), NbCardModule,MatDialogModule,NbUserModule,
    FormsModule,MatInputModule,NbInputModule,NbSelectModule,CommonModule,MatFormFieldModule,NbAutocompleteModule,
    HttpClientModule,CommonModule,NbAlertModule,NbCheckboxModule,NbFormFieldModule,
    MatProgressSpinnerModule,MatNativeDateModule,MatDatepickerModule,NbEvaIconsModule




  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
