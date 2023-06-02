## 목차

1. [Git 취소](#stage-&-commit-취소)
2. [Branch](#Branch)

## Git 취소
- stage & commit 취소 


```
// 방금 stage 하고 commit 한 내용을 취소하고 바로 이전 상태로 돌아간다.  ( 변경 내용 유지함 )

git reset Head^
```

## Brach
- local branch 생성 직후, branch 변경

```
// 로컬에서 branch 생성과 동시에 checkout(이동) 하기. ( 로컬에 생성한 후 꼭 원격 저장소로 push 할 것 )

git checkout -b NewBranchName
```
