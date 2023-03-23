import { Component } from '@angular/core';
import { SpainIrpfCalculator } from './spainIrpfCalculator';
import { AndorraIrpfCalculator } from './AndorraIrpfCalculator';


@Component({
  selector: 'app-irpf-basic-form',
  templateUrl: './irpf-basic-form.component.html',
  styleUrls: ['./irpf-basic-form.component.scss']
})
export class IrpfBasicFormComponent {

  constructor() {
    
    }

  annualIncome: number = 0;
  personalPlan: number = 0;
  businessPlan: number = 0;
  result: number = 0;

  IrpfSpain() {
    const spainCalculator = new SpainIrpfCalculator();
    this.result = spainCalculator.calculateSpainIrpf(this.annualIncome, this.personalPlan, this.businessPlan);
  }

  IrpfAndorra() {
    const andorraCalculator = new AndorraIrpfCalculator();
    this.result = andorraCalculator.calculateAndorraIrpf(this.annualIncome, this.personalPlan, this.businessPlan);
  }

}




