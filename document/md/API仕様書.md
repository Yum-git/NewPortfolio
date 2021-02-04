---
title: API仕様書
tags: []
---

# API仕様
## 制作物 /product
### 制作物新規追加
- RequestURL
  - /product/create
  - POST
- API情報
  - 制作物を新規追加します
- Parameters
  - header
    - token : jwttoken
  - body
    - title : STRING
    - description : STRING
    - picture_path : STRING
    - skill_stack : STRING
- Response
  - Code : 200
### 制作物変更
- RequestURL
  - /product/chenge
  - PUT
- API情報
  - 制作物の情報を変更します
- Parameters
  - header
    - token : jwttoken
  - body
    - base_title : STRING
    - title : STRING
    - description : STRING
    - picturepath : STRING
    - skillstack : STRING
- Response
  - Code : 200
### 制作物削除
- RequestURL
  - /product/delete
  - DELETE
- API情報
  - 制作物を削除します
- Parameters
  - header
    - token : jwttoken
  - body
    - title : STRING
- Response
  - Code : 200
### 制作物取得
- RequestURL
  - /product/get
  - GET
- API情報
  - 制作物を一括取得します
- Parameters
  - None
- Response
  - body
    - list
      - title : STRING
      - description : STRING
      - picturepath : STRING
      - skillstack : STRING

## スキル /skill
### スキル新規追加
- RequestURL
  - /skill/create
  - POST
- API情報
  - スキルを新規追加します
- Parameters
  - header
    - token : jwttoken
  - body
    - skillname : STRING
    - desceription : STRING
    - library : list
      - libraryname : STRING
- Response
  - Code : 200
### スキル変更
- RequestURL
  - /skill/chenge
  - PUT
- API情報
  - スキル情報を変更します
- Parameters
  - header
    - token : jwttoken
  - body
    - skillname : STRING
    - desceription : STRING
    - library : list
      - libraryname : STRING
- Response
  - Code : 200
### スキル削除
- RequestURL
  - /skill/delete
  - DELETE
- API情報
  - スキルを削除します
- Parameters
  - header
    - token : jwttoken
  - body
    - skillname : STRING
- Response
  - Code : 200
### スキル取得
- RequestURL
  - /skill/get
  - GET
- API情報
  - スキルを一括取得します
- Parameters
  - None
- Response
  - list
    - skillname : STRING
    - desceription : STRING
    - library : list
      - libraryname : STRING

## ログイン処理 /login
### アカウント新規追加
- RequestURL
  - /login/signup
  - POST
- API情報
  - ログインアカウントを追加します
- Parameters
  - body
    - username : STRING
    - password : STRING
- Response
  - header
    - token : jwttoken

### アカウントログイン
- RequestURL
  - /login/login
  - POST
- API情報
  - ログインします
- Parameters
  - body
    - username : STRING
    - password : STRING
- Response
  - header
    - token : jwttoken
