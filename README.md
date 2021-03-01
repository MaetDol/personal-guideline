# personal-guideline
JS Code style guideline for me

본인 코드 스타일마저 들쭉날쭉하는 본인을 위해 작성해놓는 문서입니다. \
(아마도) ESLint도 추가할..듯..? \
개인의 스타일 중 하나이며 최선은 아닙니다. \
언제나 더 나은 코드를 위해 💻


## 세미콜론 semicolon
가능한 경우, 항상 붙인다
```javascript
'use strict';
const myVar = 3;
const fnc = function() {};
```

## 조건문 condition
비교 연산자가 세 개 이상이면 별도로 관리한다
```javascript
const haveToJob = isTrue && orIsIt && howAboutThis;
if( haveToJob ){}

const isValidUser = ({name, age}) => name.length && age > 0 && age < 150;
return users.filter( isValidUser );
```

## 소괄호 공백 whitespace
- 문자 직후 `(|)`가 나올경우 내부 컨텐츠와 한 칸 띄운다 \
  하지만 `(|)`가 연속해서 나온다면 내부 컨텐츠와 붙여쓴 뒤 다음 `(|)`와 띄운다
- `()`내부에서 `{}|[]`가 나오면 붙여쓴다
```javascript
if( haveToJob ) {
  specialJob( withSomeParam );
}
fnc({ val: 123 }, fnc( null,  getId(user) );
function fnc({ param1, param2 }) {
  // ...
}
job( arr.map( v => update(v)) );
```

## 중문 내부에서의 함수 선언 delcare function within scope
함수 접근 범위를 제한하기 위해 중문`{}` 내부에 선언할 경우, \
변수에 할당하는 방식을 사용한다
```javascript
function job() {
  const usedMultipleTimes = () => {/* ... */};
  const someFnc = function() { 
    console.log( this );
  };
}
```
