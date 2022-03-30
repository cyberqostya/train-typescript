# SPA на Typescript (class)  

https://cyberqosyua.github.io/train-typescript  

### Использованы
1. Переключение между вкладками
1. typescript на классах
1. webpack для сборки

### Шпаргалка по TS:
``` 
let isOpende: boolean = false; 
```  

``` 
const notReturningFunction = (): void => { console.log('Hello') } 
```  

``` 
let list: number[] = [1,2,3]; 
```   

```
let list2: Array<number> = [1,2,3]; // Generic
let tupleList: [string, number]; // Tuple Type
```  

```
enum Directions {  
  Up = 2,  
  Down = 5,  
  Left = 7,  
  Right
}
Directions.Left; // 7
Directions.Right; // 8
Directions[5]; // Down  
```

```
function error(str: string, num?: number): never { throw new Error(str); }
function ex(o: object | null): void {  }
```

```
class User {
  public name: string;
  private age: number = 20; // не доступен за пределами класса (даже наследники, не объекты созданные на основе этого класса)
  protected nick: string; // только наследники
  readonly pass: number;

  constructor(name: string, age: number, nick: string, pass: number, public cra: string) {
    this.name = name;
    this.age = age;
    this.nick = nick;
    this.pass = pass;
  }

  setAge(age: number) {this.age = age}
  set newAge(age:number) {this.age = age}
}
const muClass = new User('qwe', 25, 'cyber', 1234, 'qq');
muClass.setAge(22);
muClass.newAge = 30;
```