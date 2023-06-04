## 1. Space
### - 자식 요소들의 y or x의 간격을 정해준다. 
<br/>

```
// 특징

1. gap-y-3과의 차이점을 알아야한다. 
( gap 같은 경우는 gap을 적용해준 태그 안의 요소들에게 gap을 모두 적용한다. y로 예를들면, top-3, bottom-3을 준다는 의미. )

2. gap-y-3과 대비하여 얘기하자면, space-y-3은 자식 요소들의 위아래 간격이 3이므로, 자식 요소 첫번째 요소에게 top-3을 주지 않고 bottom-3만 준다.
( 이 예시만 이해하면 space와 gap의 차이를 쉽게 이해할 수 있다. 직접 코드로 이해해볼 것. )



// 사용 예시

space-${y||x}-${number}

```

## 2. Relative & Absolute
### - position의 relative와 absolute는 relative는 "자신"에게, absolute는 "조상"에게라고 기억하자.> 

<br/>

```
// 특징

1. relative는 자기 자신을 기준으로 top, bottom 등의 위치를 정한다.

2. absolute는 가까운 조상의 relative를 찾고 이 속성을 가진 조상 태그를 기준으로 top, bottom 등을 자신에게 적용한다.

```
<br/>


| 값 | 의미 | 
| --- | --- | 
| static | 기준 없음 (배치 불가능 / 기본값) | 
| relative| 요소 자기 자신을 기준으로 배치|
| absolute | 부모(조상) 요소를 기준으로 배치 |
| fixed| 뷰포트 기준으로 배치|
| stikey | 스크롤 영역 기준으로 배치 |

