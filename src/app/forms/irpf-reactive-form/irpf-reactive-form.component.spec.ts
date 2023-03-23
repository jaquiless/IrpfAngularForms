import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrpfReactiveFormComponent } from './irpf-reactive-form.component';

describe('IrpfReactiveFormComponent', () => {
  let component: IrpfReactiveFormComponent;
  let fixture: ComponentFixture<IrpfReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrpfReactiveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IrpfReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
