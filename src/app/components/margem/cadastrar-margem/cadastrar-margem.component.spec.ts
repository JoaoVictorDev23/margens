import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarMargemComponent } from './cadastrar-margem.component';

describe('CadastrarMargemComponent', () => {
  let component: CadastrarMargemComponent;
  let fixture: ComponentFixture<CadastrarMargemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarMargemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarMargemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
