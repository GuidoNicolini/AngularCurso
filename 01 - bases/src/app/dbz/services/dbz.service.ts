import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {


  private _personajes: Personaje[] = [];

  get personajes() : Personaje[]{
    return [...this._personajes];
  }

agregarPersonaje (personaje:Personaje){
  this._personajes.push(personaje);
}
  constructor() {}
}
