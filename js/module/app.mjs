// ES6 모듈의 파일 확장자를 생략할 수 있다.

// import { pi, square, Person } from './lib.mjs';
// import { pi as PI, square as sq, Person as P} from './lib.mjs';
import { pi, square, Person } from './lib';

console.log(pi);
console.log(square(10));
console.log(new Person('Lee'));