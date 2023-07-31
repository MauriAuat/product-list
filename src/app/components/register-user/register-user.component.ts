import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  registroForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router:Router) {
    this.registroForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', [Validators.required, Validators.pattern(/^[0-9]{8}$/)]],
      mail: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{9}$/)]],
    });
  }
  
  ngOnInit() {
   
  }

  saveUser() {
    if (this.registroForm.valid) {
      // Si el formulario es válido, almacena los datos en el LocalStorage
      const newUser = this.registroForm.value;
      localStorage.setItem('nombre', newUser.nombre); // Guarda los datos con una clave 'nuevoUsuario'
      localStorage.setItem('apellido', newUser.apellido); // Guarda los datos con una clave 'nuevoUsuario'
      
      //agregar aquí una redirección o mostrar un mensaje de éxito
      this.router.navigate(['']);
    } else {
      
      console.log('Formulario inválido, verifica los campos.');
    }
  }


}
