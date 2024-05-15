import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarprocessoComponent } from './cadastrarprocesso.component';

describe('CadastrarprocessoComponent', () => {
  let component: CadastrarprocessoComponent;
  let fixture: ComponentFixture<CadastrarprocessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarprocessoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarprocessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
