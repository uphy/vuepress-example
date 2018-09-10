---
title: 導入
description: helloコマンドのインストール方法、使い方を説明します。
---
<Title />

## インストール

[GitHub Releases](https://github.com/uphy/vuepress-example/releases)からダウンロードし解凍してください。

## 使い方

```console
$ hello
Hello
```

引数を指定することで名前も表示できます。

```console
$ hello "ゆうひ"
Hello ゆうひ
```

@startuml
actor ユーザー
component hello
ユーザー -> hello: ユーザー名
@enduml