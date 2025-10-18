import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CanComponentDeactivate } from '../../guards/can-deactivate.guard';
import { LogoutButtonComponent } from '../../shared/logout-button/logout-button.component';

@Component({
  selector: 'app-hiring-form-page',
  imports: [ReactiveFormsModule, CommonModule, LogoutButtonComponent],
  templateUrl: './hiring-form-page.html',
  styleUrl: './hiring-form-page.css'
})
export class HiringFormPage implements OnInit, CanComponentDeactivate {
  hiringForm!: FormGroup;
  hasUnsavedChanges: boolean = false;

  constructor(
    private fb: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.initializeForm();
    
    // Track form changes
    this.hiringForm.valueChanges.subscribe(() => {
      this.hasUnsavedChanges = true;
    });
  }

  private initializeForm() {
    this.hiringForm = this.fb.group({
      jobTitle: ['', [Validators.required, Validators.minLength(3)]],
      jobCode: ['', [Validators.required, Validators.pattern(/^[A-Z0-9-]+$/)]],
      jobDescription: ['', [Validators.required, Validators.minLength(10)]],
      education: ['', Validators.required],
      minExperience: ['', [Validators.required, Validators.min(0)]],
      maxExperience: ['', [Validators.required, Validators.min(0)]],
      salary: ['', [Validators.required, Validators.min(0)]],
      skills: this.fb.array([])
    });

    // Add initial skill
    this.addSkill();
  }

  get skillsArray(): FormArray {
    return this.hiringForm.get('skills') as FormArray;
  }

  addSkill() {
    const skillGroup = this.fb.group({
      skill: ['', Validators.required],
      level: ['', Validators.required]
    });
    this.skillsArray.push(skillGroup);
  }

  removeSkill(index: number) {
    if (this.skillsArray.length > 1) {
      this.skillsArray.removeAt(index);
    }
  }

  onSubmit() {
    if (this.hiringForm.valid) {
      const formData = this.hiringForm.value;
      
      // Add timestamp to the form data
      const formDataWithTimestamp = {
        ...formData,
        submittedAt: new Date().toISOString(),
        id: this.generateUniqueId()
      };
      
      // Store in localStorage
      this.saveToLocalStorage(formDataWithTimestamp);
      
      console.log('Form submitted:', formDataWithTimestamp);
      alert('Form submitted successfully and saved to localStorage!');
      
      // Mark as no unsaved changes after successful submission
      this.hasUnsavedChanges = false;
      
      // Optionally reset the form after successful submission
      // this.onReset();
    } else {
      this.markFormGroupTouched();
      alert('Please fill in all required fields correctly.');
    }
  }

  private saveToLocalStorage(formData: any) {
    if (!isPlatformBrowser(this.platformId)) {
      console.log('Form data (SSR):', formData);
      return;
    }
    
    try {
      // Get existing data from localStorage
      const existingData = localStorage.getItem('hiringForms');
      let formsArray: any[] = [];
      
      if (existingData) {
        formsArray = JSON.parse(existingData);
      }
      
      // Add new form data to the array
      formsArray.push(formData);
      
      // Save back to localStorage
      localStorage.setItem('hiringForms', JSON.stringify(formsArray));
      
      console.log('Form saved to localStorage. Total forms:', formsArray.length);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
      alert('Error saving form data. Please try again.');
    }
  }

  private generateUniqueId(): string {
    return 'form_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  // Method to retrieve all saved forms from localStorage
  getAllSavedForms(): any[] {
    if (!isPlatformBrowser(this.platformId)) {
      return [];
    }
    
    try {
      const existingData = localStorage.getItem('hiringForms');
      return existingData ? JSON.parse(existingData) : [];
    } catch (error) {
      console.error('Error retrieving from localStorage:', error);
      return [];
    }
  }

  // Method to clear all saved forms from localStorage
  clearAllSavedForms(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    
    if (confirm('Are you sure you want to clear all saved forms?')) {
      localStorage.removeItem('hiringForms');
      alert('All saved forms have been cleared.');
    }
  }

  // Method to view saved forms
  viewSavedForms(): void {
    const savedForms = this.getAllSavedForms();
    
    if (savedForms.length === 0) {
      alert('No saved forms found.');
      return;
    }

    // Create a formatted display of saved forms
    let formsDisplay = `Found ${savedForms.length} saved form(s):\n\n`;
    
    savedForms.forEach((form, index) => {
      formsDisplay += `Form ${index + 1}:\n`;
      formsDisplay += `- Job Title: ${form.jobTitle}\n`;
      formsDisplay += `- Job Code: ${form.jobCode}\n`;
      formsDisplay += `- Education: ${form.education}\n`;
      formsDisplay += `- Experience: ${form.minExperience}-${form.maxExperience} years\n`;
      formsDisplay += `- Salary: $${form.salary}\n`;
      formsDisplay += `- Skills: ${form.skills.length} skills\n`;
      formsDisplay += `- Submitted: ${new Date(form.submittedAt).toLocaleString()}\n`;
      formsDisplay += `- ID: ${form.id}\n\n`;
    });

    // Show in alert (you could also create a modal for better display)
    alert(formsDisplay);
    
    // Also log to console for detailed view
    console.log('All saved forms:', savedForms);
  }

  onReset() {
    this.hiringForm.reset();
    // Clear skills array and add one empty skill
    while (this.skillsArray.length !== 0) {
      this.skillsArray.removeAt(0);
    }
    this.addSkill();
    this.hasUnsavedChanges = false;
  }

  // CanDeactivate implementation
  canDeactivate(): boolean {
    if (this.hasUnsavedChanges) {
      return confirm('You have unsaved changes. Are you sure you want to leave this page?');
    }
    return true;
  }

  private markFormGroupTouched() {
    Object.keys(this.hiringForm.controls).forEach(key => {
      const control = this.hiringForm.get(key);
      control?.markAsTouched();
    });
  }

  // Validation helpers
  isFieldInvalid(fieldName: string): boolean {
    const field = this.hiringForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  getFieldError(fieldName: string): string {
    const field = this.hiringForm.get(fieldName);
    if (field && field.errors && field.touched) {
      if (field.errors['required']) return `${fieldName} is required`;
      if (field.errors['minlength']) return `${fieldName} must be at least ${field.errors['minlength'].requiredLength} characters`;
      if (field.errors['min']) return `${fieldName} must be at least ${field.errors['min'].min}`;
      if (field.errors['pattern']) return `${fieldName} format is invalid`;
    }
    return '';
  }
}
