import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { Budget } from '../budget';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-budget-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './budget-list.component.html',
  styleUrl: './budget-list.component.css'
})
export class BudgetListComponent implements OnInit{
  constructor(private budgetService: BudgetService){}

  budgets: Budget[] = [];
  async ngOnInit(){
    this.budgets = await this.budgetService.getBudgets();
  }
}
