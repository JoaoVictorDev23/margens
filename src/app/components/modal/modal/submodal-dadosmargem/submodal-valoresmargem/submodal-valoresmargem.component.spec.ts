import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmodalValoresmargemComponent } from './submodal-valoresmargem.component';

describe('SubmodalValoresmargemComponent', () => {
  let component: SubmodalValoresmargemComponent;
  let fixture: ComponentFixture<SubmodalValoresmargemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmodalValoresmargemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmodalValoresmargemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
