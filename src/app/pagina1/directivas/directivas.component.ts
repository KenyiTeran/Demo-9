import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {

  /* Ejemplo NgIf */ /* Mensaje es un atributo */
  mensaje = "Angular - Desarrollo de aplicaciones";
  mostrar = true;
  valor = "Ocultar";

  Generar(){
    if(this.mostrar){ // Si mostrar == true
      this.valor = "mostrar";
      this.mostrar = false;
    }else{ // mostrar el false
      this.valor = "Ocultar";
      this.mostrar = true;
    }
  }
  // Atributos para NG Model
  // Para usar NgMdodel -> Inportar nModule y formsModule en el modulo
  // Que gestiona el componente

  // Ejemplo 1
  nombre = "";
  apellidos = "";

  // Ejemplo 2
  numero1 = 0;
  numero2 = 0;
  resultado = 0;

  Sumar(){
    this.resultado = this.numero1 + this.numero2;
  }

  // Trabajando con NgStile
  Color(){
    return 'Yellow'
  }
  
  /* Atributos para ngSwich */
  num1 = 0;
  num2 = 0;
  op = 'ninguno';
}



