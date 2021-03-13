import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CICLOVIDA';
  mainTexto:string;

  constructor(){
    this.mainTexto = 'texto des del padre';
  }
  ngOnInit(){
    let cont = 0;
    setInterval(() =>{
      this.mainTexto = `Texto ${cont++}`;
    }, 2000);

  }



}
