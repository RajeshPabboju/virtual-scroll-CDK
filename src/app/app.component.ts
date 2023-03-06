import { Component, OnInit } from '@angular/core';
import { UsersService } from './Services/users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  
  name = 'Angular';
  Arr = Array;
  tableData:any[] = [];
  constructor(public usersService:UsersService){}

  ngOnInit() {
   this.getUsers();
    // for (let i = 0; i < 1000; i++) {
    //   this.tableData.push({
    //     name: `Name ${i}`,
    //     id: i
    //   });
    // }
  }

  getUsers(){
    this.usersService.getUsers().subscribe((res:any)=>{
      this.tableData = res;
    })
  }
}
