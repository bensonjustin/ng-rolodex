import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
@Component({
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements AfterViewInit {
  @ViewChild('nameInput', null)
  nameInput: ElementRef;
  formData = {
    name: '',
    address: '',
    mobile: '',
    email: '',
    created_by: ''
  };
  errors = {
    name: '',
    address: '',
    mobile: '',
    email: '',
    created_by: ''
  };
  nameValid = false;
  emailValid = false;
  constructor(private backend: BackendService) {}
  ngAfterViewInit() {
    this.nameInput.nativeElement.focus();
  }
  validateName = () => {
    if (!this.formData.name) {
      this.nameValid = false;
      this.errors.name = 'Name is Required';
    } else if (this.formData.name.length < 3) {
      this.nameValid = false;
      this.errors.name = 'Name should be at least 3 characters';
    } else {
      this.nameValid = true;
      this.errors.name = '';
    }
  };
  validateEmail = () => {
    if (!this.formData.email) {
      this.emailValid = false;
      this.errors.email = 'Email is Required';
    } else if (this.formData.email.length < 3) {
      this.emailValid = false;
      this.errors.email = 'Email should be at least 3 characters';
    } else if (!this.formData.email.includes('@')) {
      this.emailValid = false;
      this.errors.email = 'Badly Formatted Email';
    } else {
      this.emailValid = true;
      this.errors.email = '';
    }
  };
  submit = () => {
    this.backend.contact(this.formData).then(response => {
      console.log(response); // { success: 200 }
    });
  };
}
