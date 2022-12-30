import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-applications',
  templateUrl: './my-applications.component.html',
  styleUrls: ['./my-applications.component.css']
})
export class MyApplicationsComponent implements OnInit {
  
 arr:any

  constructor() { }

  ngOnInit(): void {
   this.getList()
    
  }

  getList(){
    let res = localStorage.getItem('list')
    this.arr = JSON.parse(res || '')
    }

    deleteItem(i:number): void{
      this.arr.splice(i,1)
      let res =JSON.stringify(this.arr)
      localStorage.setItem('list', res)
      this.getList()
    }

    
  
}
