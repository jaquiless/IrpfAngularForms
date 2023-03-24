export class SpainIrpfCalculatorReactive {
  result: number = 0;

  calculateSpainIrpf(
    annualIncome: number,
    personalPlan: number,
    businessPlan: number
  ) {
    if (annualIncome <= 12450) {
      this.result = (personalPlan + businessPlan) * 0.19;
    } else if (annualIncome >= 12451 && annualIncome <= 20199) {
      this.result = (personalPlan + businessPlan) * 0.24;
    } else if (annualIncome >= 20200 && annualIncome <= 35199) {
      this.result = (personalPlan + businessPlan) * 0.3;
    } else if (annualIncome >= 35200 && annualIncome <= 59999) {
      this.result = (personalPlan + businessPlan) * 0.37;
    } else if (annualIncome >= 60000 && annualIncome <= 299999) {
      this.result = (personalPlan + businessPlan) * 0.45;
    } else if (annualIncome >= 300000) {
      this.result = (personalPlan + businessPlan) * 0.47;
    }
    return this.result;
  }
}
