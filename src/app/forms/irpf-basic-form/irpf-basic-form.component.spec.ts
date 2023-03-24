import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrpfBasicFormComponent } from './irpf-basic-form.component';

describe('IrpfBasicFormComponent', () => {
  let component: IrpfBasicFormComponent;
  let fixture: ComponentFixture<IrpfBasicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IrpfBasicFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IrpfBasicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
