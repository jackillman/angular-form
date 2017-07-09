import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  moduleId:module.id,
  // selector: 'form-main',
  templateUrl: './form-main.component.html',
  styleUrls: ['./form-main.component.css']
})
export class FormMainComponent {


 
 submit(form: NgForm){
        console.log(form);
    }

}
