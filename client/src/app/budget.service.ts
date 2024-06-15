import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Budget } from './budget';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(private http: HttpClient) { }
  budgetUrl = 'http://localhost:8000/api/budgets';

  getBudgets(){
    return lastValueFrom(this.http.get<Budget[]>(this.budgetUrl))
  }

  getBudgetById(id: number){
    return lastValueFrom(this.http.get<Budget>(`${this.budgetUrl}/${id}`))
  }

  addBudget(budget: Budget){
    console.log(budget);
    return lastValueFrom(this.http.post<Budget>(this.budgetUrl, budget));
  }

  modifyBudget(id: number, budget: Budget){
    console.log(budget);
    return lastValueFrom(this.http.patch<Budget>(`${this.budgetUrl}/${id}`, budget));
  }

  deleteBudget(id: number){
    return lastValueFrom(this.http.delete<Budget>(`${this.budgetUrl}/${id}`));
  }
}
