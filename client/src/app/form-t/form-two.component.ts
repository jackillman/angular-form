import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  moduleId:module.id,
  // selector: 'form-two',
  templateUrl: './form-two.component.html',
  styleUrls: ['./form-two.component.css']
})

export class FormTwoComponent {



 submitForm(){
  alert("Оплачено");
 }

}
