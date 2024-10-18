import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule, ButtonModule],
  template: `
    <div style="text-align:center;">
      <button pButton label="Show/Hide Form" icon="pi pi-eye" (click)="toggleForm()"></button>
    </div>

    <div *ngIf="isFormVisible" class="form-container">
      <h3>Sample Form</h3>
      <form>
        <div class="p-field">
          <label for="name">Name</label>
          <input id="name" type="text" pInputText [(ngModel)]="name" placeholder="Enter your name"/>
        </div>
        <div class="p-field">
          <label for="email">Email</label>
          <input id="email" type="email" pInputText [(ngModel)]="email" placeholder="Enter your email"/>
        </div>
        <button pButton label="Submit" type="submit"></button>
      </form>
    </div>
  `,
  styles: [`
    .form-container {
      margin-top: 20px;
    }
    .p-field {
      margin-bottom: 10px;
    }
  `]
})
export class FormComponent {
  isFormVisible: boolean = false;
  name: string = '';
  email: string = '';

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }
}
