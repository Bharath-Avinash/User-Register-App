import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { User } from '../User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  list =[
    {
      
      label: 'Photography',
      isChecked: false
    },
    {
      
      label: 'Writing',
      isChecked: false
    },
    {
      
      label: 'Painting',
      isChecked: false
    },
    {
      
      label: 'Knitting',
      isChecked: false
    },
    {
      
      label: 'Dancing',
      isChecked: false
    },
    {
      
      label: 'Gardening',
      isChecked: false
    },
    {
      
      label: 'Drawing',
      isChecked: false
    },
    {
      
      label: 'Gyming',
      isChecked: false
    },
    {
      
      label: 'Cooking',
      isChecked: false
    },
    {
      
      label: 'Scrapbooking',
      isChecked: false
    },
    {
      
      label: 'Origami',
      isChecked: false
    }
  ]

  
  

  selectedItemsList: any[] = [];

constructor(private userService: RegisterService) {

  
}
  ngOnInit(): void {

    this.fetchSelectedItems();
    
  }
onFormSubmit(form: NgForm) {
 let user = new User();
   
   
   if(form.invalid){
    return;	
   } 	
  user.username= form.value.username;
  user.age = form.value.age;
  user.address = form.value.address;
  user.gender = form.value.gender;
  user.hobbies=this.selectedItemsList;
  


  console.log(user);

  let response =this.userService.doRegistration(user);
  response.subscribe(data=>console.log(data));
  

   this.resetForm(form);
}
resetForm(form: NgForm) {
    
  form.resetForm();
}



get result() {
  return this.list.filter(item => item.isChecked);
}

changeCheckbox(e:Event) {
  

  this.fetchSelectedItems();
  
}

fetchSelectedItems() {
  this.selectedItemsList = this.list.filter((value, index) => {
    return value.isChecked
  });
}





}
