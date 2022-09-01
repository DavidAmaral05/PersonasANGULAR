import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { listaPersona } from 'src/app/modelos/listaPersona.interface';
import { personaUnitaria } from 'src/app/modelos/personaUnitaria.interface';
import { ResponseI } from 'src/app/modelos/ResponseI.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<listaPersona[]>{
    return this.http.get<listaPersona[]>('/api/persona')
  }

  getSinglePersona(): Observable<personaUnitaria>{
    return this.http.get<personaUnitaria>('/api/persona')
  }

  postPersona(form: personaUnitaria): Observable<ResponseI>{
    return this.http.post<ResponseI>('/api/persona', form)
  }

  putPersona(form: personaUnitaria): Observable<ResponseI>{
    return this.http.put<ResponseI>('/api/persona', form)
  }

  deletePersona(form:personaUnitaria): Observable<ResponseI>{
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
      body:form
    }
    return this.http.delete<ResponseI>('/api/persona', options)
  }

}
