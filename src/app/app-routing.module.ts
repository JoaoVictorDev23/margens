import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { UsuarioCadastrarComponent } from './components/usuarios/usuario-cadastrar/usuario-cadastrar.component';
import { CadastrarMargemComponent } from './components/margem/cadastrar-margem/cadastrar-margem.component';
import { ListarMargemComponent } from './components/margem/listar-margem/listar-margem.component';

const routes: Routes = [ {
  path: '',
  children: [
    {
      path: '',
      redirectTo:'login',
      pathMatch: 'prefix'
    },
    {
      path: 'login',
      component: LoginComponent,
    }
  ],
  },
  {
    path:'', component:SidenavComponent,
    children:[
      {path: 'home',component: HomeComponent},
      {path:'margem/cadastrar',component: CadastrarMargemComponent},
      {path:'margem/listar',component:ListarMargemComponent},
      {path:'usuario', component:UsuarioCadastrarComponent},


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
