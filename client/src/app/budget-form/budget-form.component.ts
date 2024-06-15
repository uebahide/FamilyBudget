import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Budget } from '../budget';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-budget-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './budget-form.component.html',
  styleUrl: './budget-form.component.css'
})
export class BudgetFormComponent implements OnChanges{
  @Input() budget: Budget = new Budget();
  @Output() save = new EventEmitter<Budget>();

  budgetForm = this.fb.group({
    title: ['', [Validators.required]],
    amount: [0, [Validators.required]],
    category: ['', [Validators.required]],
  })

  constructor(private fb: FormBuilder){}

  ngOnChanges(): void {
    this.budgetForm.patchValue(this.budget);
  }

  get title(){
    return this.budgetForm.get('title');
  }
  get amount(){
    return this.budgetForm.get('amount');
  }
  get category(){
    return this.budgetForm.get('category');
  }

  handleSubmit(){
    const budget = this.budget;
    this.save.emit(Object.assign(budget, this.budgetForm.value));
  }
}
