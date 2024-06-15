import { Component } from '@angular/core';
import { BudgetFormComponent } from '../budget-form/budget-form.component';
import { Budget } from '../budget';
import { BudgetService } from '../budget.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-budget',
  standalone: true,
  imports: [BudgetFormComponent],
  templateUrl: './new-budget.component.html',
  styleUrl: './new-budget.component.css'
})
export class NewBudgetComponent {
  budget: Budget = new Budget();

  constructor(
    private budgetService: BudgetService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ){}

  async ngOnInit(){
    const paramId = this.route.snapshot.paramMap.get('id');
    if(paramId){
      const id: number = parseInt(paramId); 
      const budget = await this.budgetService.getBudgetById(id);
      if(budget){
        this.budget = budget;
      }
    }
  }

  async handleSave(budget: Budget){
    if(this.budget.id){
      await this.budgetService.modifyBudget(this.budget.id, budget);
      this.router.navigate(['/budgets']);
    }else{
      await this.budgetService.addBudget(budget);
      this.router.navigate(['/budgets'])
    }
  }
}
