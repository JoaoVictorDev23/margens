import { Component, Inject } from '@angular/core';
import { NB_WINDOW, NbMenuItem, NbMenuService,NbSidebarService,NbToastrService } from '@nebular/theme';
import { ChangeDetectionStrategy } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Usuario } from 'src/app/interface/usuario-interface';
import { ServiceUsuarioService } from 'src/app/services/usuario/service-usuario.service';
import { AuthService } from 'src/app/services/authservice.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  toggle() {
    this.sidebarService.toggle(false, 'left');
  }
  items: NbMenuItem[] = [
    {
      title: 'Página Inicial',
      icon: 'home-outline',
      link: '/home',

    },
    {
      title: 'Cadastros',
      icon: 'list-outline',
      children: [

        {title:'Cadastro de Usuário',
        icon: 'person-add',
        link: '/usuario'
       },
       {
        title:'Cadastro de Margem',
        icon:'clipboard-outline',
        link:'/margem/cadastrar'
       }
      ],
    },
    {
      title: 'Consultas',
      icon: 'file-text-outline',
      children: [

        {title:'Linhas',
        icon: 'person-add',
        link: '/margem/listar'
       },
      ],
    },

    {
      title: 'Sair',
      icon: 'log-out-outline',
      link:'/login'
    },

  ];



  items2 = [
    { title: 'Alterar Senha'},
    { title: 'Sair', link:'/login' },
  ];

  constructor(private nbMenuService: NbMenuService,    private toastrService: NbToastrService, // Adicione NbToastrService aqui
              private userService: ServiceUsuarioService,private authService:AuthService, private sidebarService: NbSidebarService
  ) {
  }
  ngOnInit() {
    this.loadUser();
    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title => {
        let toastrMessage: string;

        if (title === 'Logout') {
          toastrMessage = 'Você escolheu sair do sistema!';
          this.showAlert('Alerta', toastrMessage, 'warning');
        } else {
          toastrMessage = `${title}!`;
          this.showAlert('Redirecionando para:', toastrMessage, 'success');
        }
      });
  }

  private showAlert(title: string, message: string, status: string): void {
    this.toastrService.show(message, title, { status });
  }


  usuario: Usuario = {
    name:'',
    cpf:'',
    email:'',
    perfis:[0],
    senha:''
  }

  loadUser() {

      this.userService.getUserByEmail().subscribe(
        (user: Usuario) => {
          this.usuario =  user; // Armazene os dados do Pessoa na variável local
        },
        (error) => {
          console.error('Erro ao carregar dados do Pessoa:', error);
        }
      );
    }

  }



