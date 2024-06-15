import { Component } from '@angular/core';
import { Budget } from '../budget';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  income: number = 0
  outcome: number = 0
  budgets: Budget[] = [];

  constructor(private budgetService: BudgetService){}

  async ngOnInit(){
    this.budgets = await this.budgetService.getBudgets();

    this.budgets.forEach((budget) => {
      if(budget.amount > 0){
        this.income += budget.amount;
      }else{
        this.outcome += budget.amount;
      }
    })
  }
}
