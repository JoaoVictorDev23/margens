import { Injectable } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  constructor(private sidebarService: NbSidebarService) {}

  toggle() {
    this.sidebarService.toggle(false, 'left');
  }
}
