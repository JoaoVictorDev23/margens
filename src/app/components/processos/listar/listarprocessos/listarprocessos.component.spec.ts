import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarprocessosComponent } from './listarprocessos.component';

describe('ListarprocessosComponent', () => {
  let component: ListarprocessosComponent;
  let fixture: ComponentFixture<ListarprocessosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarprocessosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarprocessosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
