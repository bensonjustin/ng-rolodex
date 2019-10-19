import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements AfterViewInit {
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
  addressValid = false;
  emailValid = false;
  mobileValid = false;
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
  validateAddress = () => {
    if (!this.formData.address) {
      this.addressValid = false;
      this.errors.address = 'Address is Required';
    } else if (this.formData.name.length < 3) {
      this.addressValid = false;
      this.errors.address = 'Address should be at least 3 characters';
    } else {
      this.addressValid = true;
      this.errors.address = '';
    }
  };
  validateMobile = () => {
    if (!this.formData.mobile) {
      this.mobileValid = false;
      this.errors.mobile = 'Mobile is Required';
    } else if (this.formData.name.length < 3) {
      this.mobileValid = false;
      this.errors.mobile = 'Mobile should be at least 3 characters';
    } else {
      this.mobileValid = true;
      this.errors.mobile = '';
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
