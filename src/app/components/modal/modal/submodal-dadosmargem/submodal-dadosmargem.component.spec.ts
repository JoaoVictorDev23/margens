import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmodalDadosmargemComponent } from './submodal-dadosmargem.component';

describe('SubmodalDadosmargemComponent', () => {
  let component: SubmodalDadosmargemComponent;
  let fixture: ComponentFixture<SubmodalDadosmargemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmodalDadosmargemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmodalDadosmargemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
