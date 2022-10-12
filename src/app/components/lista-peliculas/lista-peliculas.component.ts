import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { IPelicula } from '../../interfaces/ipelicula';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent implements OnInit {

  public peliculas:IPelicula[] | any;
  public nuevaPelicula:IPelicula | any={titulo:"", director:"", imagen:""};
  public peliculaDetalle:IPelicula | any ={titulo:"", director:"", imagen:""};
  public ver:boolean=false;

  constructor() { 
    this.peliculas=[
      {titulo:"Tiburon", director:"Spielberg", imagen:"https://mewmagazine.es/wp-content/uploads/2021/01/tiburon-pelicula.jpg"},
      {titulo:"Alien", director:"Ridley", imagen:"https://images.ecestaticos.com/YIuxgKfHfLRlUtOCuUie_i5b7C8=/0x0:1022x765/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fb7f%2F5ec%2F3f5%2Fb7f5ec3f51564bd3af46a5609457d6b9.jpg"},
      {titulo:"El Exorcista", director:"William Friedkin", imagen:"https://www.ecartelera.com/carteles/5100/5147/001_m.jpg"}
    ]
  }

  ngOnInit(): void {
  }

  agregarPelicula(){
    console.log("Agregando")
    this.peliculas.push({...this.nuevaPelicula})
  }

  mostrarDetalle(pelicula:IPelicula){
    this.peliculaDetalle=pelicula;
    this.ver=true;
  }

  eliminarPelicula(pelicula:IPelicula){
    const index = this.peliculas.indexOf(pelicula,0);
    if(index>-1){
      this.peliculas.splice(index,1)
    }
    
  }

  cerrar():void{
    this.ver=false;
  }
}
