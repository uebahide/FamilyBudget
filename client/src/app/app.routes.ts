import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { BudgetFormComponent } from './budget-form/budget-form.component';
import { AboutComponent } from './about/about.component';
import { NewBudgetComponent } from './new-budget/new-budget.component';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'budgets',
    component: BudgetListComponent
  },
  {
    path: 'budget/new',
    component: NewBudgetComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
  ,
  {
    path: 'budget/:id/edit',
    component: NewBudgetComponent 
  }
];
