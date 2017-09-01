import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) {
    console.log('constructor ran..');

  }

  ngOnInit() {
    console.log('ngOnInit ran...');

    this.name = 'Thummala Phanindra';
    this.email = 'phani@test.com';
    this.age = 24;
    this.address = {
      street:'BTM',
      city: 'Bangalore',
      state:'Karnataka'
    }
    this.hobbies = ['Write code', 'Watch movies', 'Listen to music'];
    this.hello ='hello';

    this.dataService.getPosts().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    });
  }

  

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(i){
    this.hobbies.splice(i, 1);
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}


interface Address{
  street:string,
  city:string,
  state:string
}

interface Post{
  id: number,
  title:string,
  body:string,
  userId:number
}
