# AJAX 비동기 자바스크립트와 XML (Asynchronous JavaScript and XML)
 서버와 통신하기 위해 XMLHttpRequest 객체를 사용하는 것을 말한다.
   * 페이지 새로고침 없이 서버에 요청
   * 서버로부터 데이터를 받고 작업을 수행

## 1 - HTTP request 만드는 방법
JavaScript를 이용하여 서버로 보내는 HTTP request를 만들기 위해서는 기능을 제공하는 Object의 인스턴스가 필요하다.
XMLHttpRequest가 그러한 Object의 한 예이다.

* 서버에 요청(Request)을 하기에 앞서, 서버로 보낸 요청에 대한 응답을 받았을 때 어떤 동작을 할 것인지 정해야한다.
* httpRequest의 onreadystatechange property에 특정 함수를 할당하면 요청에 대한 상태가 변화할 때 특정함수가 불리게 된다.

```httpRequest.onreadystatechange = nameOfTheFunction;```

### open() 메소드
* 첫번째 파라미터는 HTTP 요구 방식(request method) - GET, POST, HEAD 중의 하나이거나 서버에서 지원하는 다른 방식이다.
HTTP 표준에 따라 모두 대문자로 표기해야한다.
* 두번째 파라미터는 요구하고자하는 URL이다 보안상의 이유로 서드 파티 도메인 상의 URL은 기본적으로 호출할 수 없다.
도메인이 정확하지 않으면 'permission denied'에러가 발생할 수 있다.
* 세번째 파라미터(생략 가능)는 요구가 비동기식(Asynchronous)으로 수행될 지를 결정한다. 만약 이 파라미터가 true(기본값)으로 
설정된 경우에는 자바스크립트 함수가 지속적으로 수행될 수 있어 서버로부터 응답을 받기 전에도 유저와 페이지의 상호작용이 계속 진행된다.
이것이 AJAX의 첫번째 A(Asynchronous: 비동기성)이다.
  * false로 설정된 경우 동기적으로 작동한다. (send() 함수에서 서버로부터 응답이 올 때까지 기다림)

### send() 메소드
* 파라미터는 POST 방식으로 요구한 경우 서버로 보내고 싶은 어떠한 데이터라도 가능하다.
데이터는 서버에서 쉽게 parse할 수 있는 형식(format)이어야 한다.

```"name=value&anothername="+encodeURIComponent(myVar)+"&so=on"```

```multipart/form-data```, JSON, XML, SOAP 등과 같은 다른 형식(format)도 가능하다. 

만약 POST 형식으로 데이터를 보내려 한다면, 요청(request)에 MIME type을 먼저 설정해야 한다.

```javascript 
httpRequest.setReqeustHeader('Content-Type', 'application/x-www-form-urlencoded');
```

## 2 - 서버 응답에 대한 처리
XMLHttpRequest.DONE(상수 4)라면, 서버로부터 모든 응답을 받았으며 이를 처리할 준비가 되어있다는 것을 뜻한다.
```javascript 
if (httpRequest.readyState === XMLHttpRequest.DONE) {
    // 이상 없음, 응답 받았음
} else {
    // 아직 준비되지 않음
}
```
readyState가 가질 수 있는 모든 값의 목록
* 0 (uninitialized) - (request가 초기화되지 않음)
* 1 (loading) - (서버와의 연결이 성사됨)
* 2 (loaded) - (서버가 request를 받음)
* 3 (interactive) - (request(요청)을 처리하는 중)
* 4 (complete) - (request에 대한 처리가 끝났으며 응답할 준비가 완료됨)

그다음 HTTP 응답 상태 코드를 검사해야 한다. 
```javascript 
if (httpRequest.status === 200) {
    // 이상 없음!
} else {
    // 요구를 처리하는 과정에서 문제가 발생되었음
    // 예를 들어 응답 상태 코드는 404 (Not Found) 이거나
    // 혹은 500 (Internal Server Error) 이 될 수 있음
}
```
서버에서 받은 데이터를 통해 원하는 작업을 수행할 수 있다. 그리고 응답 데이터에 접근하기 위한 옵션이 2가지 있다.
* ```http_request.responseText``` - 서버의 응답을 텍스트 문자열로 반환할 것이다.
* ```http_request.responseXML:``` - 서버의 응답을 XMLDocument 객체로 반환하며 자바스크립트의 DOM 함수들을 통해 이 객체를 다룰 수 있다.