import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMargemComponent } from './listar-margem.component';

describe('ListarMargemComponent', () => {
  let component: ListarMargemComponent;
  let fixture: ComponentFixture<ListarMargemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarMargemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarMargemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
