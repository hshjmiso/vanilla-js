/**
 * 모듈은 파일 단위로 분리되어 있으며 애플리케이션은 필요에 따라 명시적으로 모듈을 로드하여 재사용한다.
 */

const pi = Math.PI;

function square(x) {
    return x * x;
}

class Person {
    constructor(name) {
        this.name = name;
    }
}

// 변수, 함수, 클래스를 하나의 객체로 구성하여 공개
export { pi, square, Person };