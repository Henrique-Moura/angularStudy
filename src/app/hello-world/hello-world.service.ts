import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  constructor() { }

  getCursos(): string[] {
    return ['Java', 'Angular', 'Node']
  }
}
