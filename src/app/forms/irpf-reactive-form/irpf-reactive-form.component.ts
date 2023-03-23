import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AndorraIrpfCalculatorReactive } from './AndorraIrpfCalculatorReactive';
import { SpainIrpfCalculatorReactive } from './SpainIrpfCalculatorReactive';

@Component({
  selector: 'app-irpf-reactive-form',
  templateUrl: './irpf-reactive-form.component.html',
  styleUrls: ['./irpf-reactive-form.component.scss']
})
export class IrpfReactiveFormComponent {
  
  result: number = 0;


  constructor(private formBuilder: FormBuilder) {

  }

      form = this.formBuilder.group({
      annualIncome: ['', Validators.required],
      personalPlan: ['', [Validators.required, Validators.min(0), Validators.max(1500)]],
      businessPlan: ['', [Validators.required, Validators.min(0), Validators.max(8500)]]
    });

  IrpfSpain() {
    if (this.form.valid) {  
      const spainCalculator = new SpainIrpfCalculatorReactive();
      this.result = spainCalculator.calculateSpainIrpf(
        Number(this.form.controls['annualIncome']!.value), 
        Number(this.form.controls['personalPlan']!.value), 
        Number(this.form.controls['businessPlan']!.value),
      );
    }
  }

  IrpfAndorra() {
    if (this.form.valid) {
      const andorraCalculator = new AndorraIrpfCalculatorReactive();
      this.result = andorraCalculator.calculateAndorraIrpf(
        Number(this.form.controls['annualIncome']!.value), 
        Number(this.form.controls['personalPlan']!.value), 
        Number(this.form.controls['businessPlan']!.value)
      );
    }
  }

}

