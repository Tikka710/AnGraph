export class User {
  initial: string

  constructor(public id: number, public name: string){
    this.initial = name.slice(0, 1)
  }
}
