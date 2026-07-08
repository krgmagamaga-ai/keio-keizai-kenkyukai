# 学生起業コミュニティ 申し込みページ

大学生向け起業コミュニティの申し込みページです。
**大学名・学部・学年・メールアドレスをすべて入力しないと、LINE登録には進めない**ようになっています。

## 仕組み

1. ユーザーが `index.html` の申し込みフォームに入力する
2. 必須項目（大学名 / 学部 / 学年 / メールアドレス）が未入力・不正な場合はエラー表示され、先に進めない
3. すべて正しく入力されると、公式LINEの友だち追加ページへ自動で移動する

## 公開前に必ず設定すること

`index.html` の下部にある `<script>` 内の設定を書き換えてください。

```js
const LINE_URL = "https://lin.ee/XXXXXXX"; // ← 公式LINEの友だち追加URLに置き換え
const FORM_ENDPOINT = "";
```

### LINE_URL（必須）

公式LINEの「友だち追加URL」に置き換えてください。

1. [LINE Official Account Manager](https://manager.line.biz/) にログイン
2. 「友だちを増やす」→「友だち追加ガイド」
3. 「URLを作成」でコピーした `https://lin.ee/...` のURLを貼り付け

### FORM_ENDPOINT（任意）

入力された大学・学部・学年・メールアドレスを記録したい場合に設定します。
[Formspree](https://formspree.io/) や Google Apps Script のWebアプリURLなど、POSTを受け付けるURLを指定すると、LINEに移動する前に入力内容がJSONで送信されます。

空欄（`""`）のままの場合、入力チェックだけ行い、内容はどこにも保存されません。

## 公開方法（GitHub Pages）

1. GitHubのリポジトリ → Settings → Pages
2. 「Source」で `Deploy from a branch` を選択し、公開したいブランチと `/ (root)` を指定
3. 表示されたURL（`https://<ユーザー名>.github.io/kigyou/`）が申し込みページのURLになります

以後、申し込みリンクにはこのGitHub PagesのURLを使ってください（Claudeのアーティファクト共有リンクは使わない）。
