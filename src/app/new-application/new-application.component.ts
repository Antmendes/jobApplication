import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-application',
  templateUrl: './new-application.component.html',
  styleUrls: ['./new-application.component.css']
})
export class NewApplicationComponent implements OnInit {
  application: Object[] = []

  model = {
    plataforma: '',
    empresa: '',
    cargo: '',
    data: ''
  }


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.persistData()
  }
  
  @ViewChild('platInput')
  platInput!: ElementRef

  @ViewChild('empInput')
  empInput!: ElementRef

  @ViewChild('cargoInput')
  cargoInput!: ElementRef

  @ViewChild('dataInput')
  dataInput!: ElementRef

  saveApplication(model: Object): void{
    this.application.push(model)
    this.model.plataforma = this.platInput.nativeElement.value
    this.model.empresa = this.empInput.nativeElement.value
    this.model.cargo = this.cargoInput.nativeElement.value
    this.model.data = this.dataInput.nativeElement.value
    
    localStorage.setItem('list', JSON.stringify(this.application))
    this.persistData()
    alert('Cadastro realizado')
    this.router.navigate(['home'])
  }

  persistData(): void{
    let storage = localStorage.getItem('list')
    let arr = JSON.parse(storage || '[]')
    this.application = arr
    
  }

}
