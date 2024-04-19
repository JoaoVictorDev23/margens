import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalmargemexcluirComponent } from './modalmargemexcluir.component';

describe('ModalmargemexcluirComponent', () => {
  let component: ModalmargemexcluirComponent;
  let fixture: ComponentFixture<ModalmargemexcluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalmargemexcluirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalmargemexcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
