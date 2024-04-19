import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalmargemviewComponent } from './modalmargemview.component';

describe('ModalmargemviewComponent', () => {
  let component: ModalmargemviewComponent;
  let fixture: ComponentFixture<ModalmargemviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalmargemviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalmargemviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
