import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalmargemeditarComponent } from './modalmargemeditar.component';

describe('ModalmargemeditarComponent', () => {
  let component: ModalmargemeditarComponent;
  let fixture: ComponentFixture<ModalmargemeditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalmargemeditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalmargemeditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
