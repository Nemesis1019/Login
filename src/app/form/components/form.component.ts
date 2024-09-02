import { Component, OnInit } from "@angular/core";
import { FormBuilder,Validator,FormGroup, Validators } from "@angular/forms";

@Component({
  selector:'app-form',
  templateUrl:'./form.component.html'
})
export class FormComponent  {

  solicitudForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.solicitudForm = this.fb.group({
      nit_empresa: ['', [Validators.required, Validators.pattern(/^\d{9,10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', [Validators.required, Validators.pattern(/^3\d{9}$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rep_password: ['', [Validators.required]],
      terms: [false, Validators.requiredTrue],
      dataProcessing: [false, Validators.requiredTrue],
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('rep_password')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.solicitudForm.valid) {
      console.log('Formulario válido y enviado:', this.solicitudForm.value);
    } else {
      console.log('Formulario no válido:', this.solicitudForm.errors);
    }
  }


}
