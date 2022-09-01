import { Pipe, PipeTransform } from '@angular/core';
import { listaPersona } from './modelos/listaPersona.interface';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(listapersonas: listaPersona[], searchValue: string) {
    if (!listapersonas|| !searchValue) {
      return listapersonas;
    }
    return listapersonas.filter(persona => 
      persona.nombre.toLowerCase().includes(searchValue.toLowerCase()) ||
      persona.apellido.toLowerCase().includes(searchValue.toLowerCase()) ||
      persona.genero.toLowerCase().includes(searchValue.toLowerCase())
      );
  }

}
