import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() texto:string;

  constructor() { 
    console.log('estoy en el constructor');
    console.log('lo uso para inicializar propiedades');
    console.log(`TEXTO: ${this.texto}`);//aqui es undefined. Aqui los inputs no estan disponibles
  }
  ngOnChanges(changes: SimpleChange){
    console.log('estoy en el ngOnChanges');
    console.log(`TEXTO: ${this.texto}`);
    //console.log(changes['texto']);//aqui llegan todos lo cambios que se reciben. Nos indica el nuevo cambio, el cambio anterior y si es el primer cambio
    console.log(`valor anterior: ${changes['texto'].previosValue}. Valor actual ${changes['texto'].currentValue}`);//per veure el valor d'una manera mes elegant
  }

  ngOnInit(): void {
    console.log('estoy en el ngOnInit');
    console.log('lo uso para lanzar las acciones que arrancan el componente');
    console.log(`TEXTO: ${this.texto}`);//aqui el texto esta disponible.
  }

  ngAfterViewInit(){
    console.log('estoy en el ngAfterViewInit');
    console.log('lo uso para lanzar las acciones iniciales dentro de la plantilla');
  }
  ngDestroy(){//se ejecuta cuando el componente deja de estar visible en pantalla

  }

}
