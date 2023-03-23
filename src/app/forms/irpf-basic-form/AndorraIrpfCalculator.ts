export class AndorraIrpfCalculator{
    
    
    result: number = 0;

    calculateAndorraIrpf(annualIncome: number, personalPlan:number, businessPlan: number) {
    
    if (annualIncome <= 23999) {
      this.result = (personalPlan + businessPlan) * 0.00;
    } else if (annualIncome >= 24000 && annualIncome <= 39999) {
      this.result = (personalPlan + businessPlan) * 0.05;
    } else if (annualIncome >= 40000) {
      this.result = (personalPlan + businessPlan) * 0.1;
    }
    return this.result;
    }
}