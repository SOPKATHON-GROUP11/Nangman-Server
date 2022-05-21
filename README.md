# Nangman-Server

## 푸릇푸릇

![p5](https://user-images.githubusercontent.com/39729721/169672059-5137c53b-0355-4eaa-88da-585202f5f931.png)

일상 속 고맙고 미안한 사람들은 많지만 그 마음을 전하기는 쉽지 않다.<br>
전하지 못했던 속마음을 푸릇 푸릇을 통해 남겨보는건 어떨까?
</br>
</br>
</br>
## 각자 개발 담당 부분
|박정훈|공혁준|
|--|--|
|PUT 특정 게시물 물뿌리기|GET 전체 게시글 조회|
|GET 특정 게시글 상세 조회|POST 게시글 작성|
|GET 트리에 달려있는 본인 게시글 전체 조회|GET 본인 게시글 전체 조회|
|PUT 내 나무에 달린 과일들 수확|GET 트리에 달려있는 게시물이 10개 넘는지 확인|
</br>

## Code Convention
>prettier 사용

</br>

## Commit Message Convention
```
  - INIT : 초기화
  - FEAT : 기능 추가
  - UPDATE : 기능 보완 (업그레이드)
  - FIX : 버그 수정
  - REFACTOR : 리팩토링
  - STYLE : 스타일 (코드 형식, 세미콜론 추가: 비즈니스 로직에 변경 없음)
  - DOCS : 문서 (문서 추가(Add), 수정, 삭제)
  - TEST : 테스트 (테스트 코드 추가, 수정, 삭제: 비즈니스 로직에 변경 없음)
  - CHORE : 기타 변경사항 (빌드 스크립트 수정, 에셋 추가 등)

```

</br>

## Git Branch
- main 브랜치 - 프로젝트 초기 셋팅, default branch
- PR ➡️ 코드리뷰 ➡️ 머지( → main)
- 머지 후 feature 브랜치 삭제
- 브랜치 생성 전 main 최신화

```jsx
- main
- feature
   ├── /이슈번호
```

</br>

## Directory Structure
```
Nangman-Server
|
|- .gitignore
|- .env
|- nodemon.json
|- package-lock.json
|- package.json
|- README.md
|- tsconfig.json
|- yarn.lock
|- node_modules
|
|- src
	|- config
		|- index.ts
	|- controllers
		|- FruitController.ts
		|- index.ts
		|- MyController.ts
	|- interfaces
		|- common
			|- PostBaseResponseDto.ts
		|- fruit
			|- FruitCreateDto.ts
			|- FruitInfo.ts
			|- FruitMyResponseDto.ts
			|- FruitResponseDto.ts
				
		|- my
			|- MyCheckResponseDto.ts
		|- user
			|- UserInfo.ts
	|- loaders
		|- db.ts
	|- models
		|- Fruit.ts
		|- User.ts
	|- modules
		|- ResponseMessage.ts
		|- statusCode.ts
		|- util.ts
	|- routes
		|- FruitRouter.ts
		|- index.ts
		|- MyRouter.ts
	|- services
		|- FruitService.ts
		|- index.ts
		|- MyService.ts
	|- index.ts
```

</br>

## 설계한 Collection
### User Collection
```
{
    _id: ObjectId,
    userNickname: String,
    userProfileImageUrl: String
}
```
### Fruit Collection
```
{
    _id: ObjectId,
    type: Number,
    contents: String,
    wateringCount: Number,
    userId: ObjectId,
    onTree: Boolean,
    createdAt: Date,
    updatedAt: Date
}
```

</br>

## package.json
```
{
    "name": "node-typescript-init",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "dev": "nodemon",
        "build": "tsc && node dist"
    },
    "author": "",
    "license": "ISC",
    "devDependencies": {
        "@types/express": "^4.17.13",
        "@types/mongoose": "^5.11.97",
        "@types/node": "^17.0.25",
        "nodemon": "^2.0.15",
        "ts-node": "^10.7.0",
        "typescript": "^4.6.3"
    },
    "dependencies": {
        "dotenv": "^16.0.0",
        "express": "^4.17.3",
        "express-validator": "^6.14.0",
        "mongoose": "^6.3.1"
    }
}
```

</br>
## 🌯 Server Architecture

 ![Untitled Diagram drawio](https://user-images.githubusercontent.com/39729721/169669872-bb4be172-2b11-4d35-81e2-8fac56467bb7.png)

