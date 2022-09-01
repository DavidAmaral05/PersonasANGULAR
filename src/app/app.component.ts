import { Component, OnInit } from '@angular/core';
import { listaPersona } from './modelos/listaPersona.interface';
import { ApiService } from './servicios/api/api.service';
import { personaUnitaria } from './modelos/personaUnitaria.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'personasView';

  constructor(private apiService: ApiService) { }

  public nuevo = false;

  listaPersonas!:listaPersona[];
  datosPersona!: personaUnitaria;

  searchValue!: string;

  datosCapturados = new FormGroup<any>({
    idpersona: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    genero: new FormControl('')
  })

  ngOnInit(): void {
    this.apiService.getAll().subscribe((resp: any) => {
      this.listaPersonas = resp
    })
  }

  getPersona(idpersona:any): void{
    this.apiService.getSinglePersona().subscribe((resp:any)=>{
      this.datosPersona = resp[Number(idpersona)-1],
      this.datosCapturados.setValue({
        'idpersona': idpersona,
        'nombre': this.datosPersona.nombre,
        'apellido': this.datosPersona.apellido,
        'genero': this.datosPersona.genero
      })
  })
}

  Evento(form:personaUnitaria){
    if (document.getElementById("enviar")?.click){
      if (confirm("ENVIADO")){
        this.apiService.postPersona(form).subscribe(resp => {
          console.log(resp)
          document.location.reload()
        })
      }
    }
    if (document.getElementById("modificar")?.click){
      if (confirm('MODIFICADO')){
        this.apiService.putPersona(form).subscribe(resp =>{
          console.log(resp)
          document.location.reload()
        })
      }
    }
    if (document.getElementById("eliminar")?.click){
      let datos:personaUnitaria = this.datosCapturados.value
      if (confirm('ELIMINADO')){
        this.apiService.deletePersona(datos).subscribe(resp=> {
          console.log(resp)
          document.location.reload()
        })
      }
    }
  }

  mostrarFormulario(){
    this.nuevo = true;
  }

  cancelarFormulario(){
    this.nuevo = false;
    this.datosCapturados.reset()
  }

  element = false;
  showData(){
    return (this.element = true)
  } 
  hideData(){
    return (this.element = false)
  }

  element2 = false;
  showData2(){
    return (this.element2 = true)
  } 
  hideData2(){
    return (this.element2 = false)
  }

  element3 = false;
  showData3(){
    return (this.element3 = true)
  } 
  hideData3(){
    return (this.element3 = false)
  }

  element4 = false;
  showData4(){
    return (this.element4 = true)
  } 
  hideData4(){
    return (this.element4 = false)
  }
}
