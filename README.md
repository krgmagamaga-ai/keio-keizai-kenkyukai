# Summer 1Day起業 申し込みページ

慶應経済研究会主催、本気で起業したい大学生のための1日体験「Summer 1Day起業」の申し込みページです。
**大学名・学部・学年・メールアドレスをすべて入力しないと、LINE登録には進めない**ようになっています。

## 仕組み

1. ユーザーが `index.html` のランディングページで参加したい日程（VOL.1〜3）を選び、「申し込みに進む」を押す
2. 選択した日程は `confirm.html?vol=1〜3` のクエリパラメータとして引き継がれ、フォーム上部に表示される
3. `confirm.html` の申し込みフォームに入力する
4. 必須項目（大学名 / 学部 / 学年 / メールアドレス）が未入力・不正な場合はエラー表示され、先に進めない
5. すべて正しく入力されると、公式LINEの友だち追加ページへ自動で移動する

## 公開前に必ず設定すること

`confirm.html` の下部にある `<script>` 内の設定を書き換えてください。

```js
const LINE_URL = "https://lin.ee/Nj88fS3";
const FORM_ENDPOINT = "";
```

### LINE_URL（設定済み）

公式LINEの友だち追加URL `https://lin.ee/Nj88fS3` を設定済みです。

### FORM_ENDPOINT（スプレッドシート連携）

申し込み内容（日程・大学・学部・学年・メール）を下記スプレッドシートに自動で記録したい場合は、
Google Apps Script のWebアプリを使います。

対象スプレッドシート: https://docs.google.com/spreadsheets/d/1skAWG9eYUlS3O39gpmXhrvBWXCU7UW6QkAfErlWdeeo/edit

1. 上記スプレッドシートを開き、メニューから「拡張機能」→「Apps Script」を開く
2. デフォルトの `myFunction` などの中身を消し、このリポジトリの `google-apps-script.gs` の内容を貼り付けて保存
3. 右上の「デプロイ」→「新しいデプロイ」をクリック
4. 「種類の選択」で「ウェブアプリ」を選び、以下を設定してデプロイ
   - 実行するユーザー: 自分
   - アクセスできるユーザー: 全員
5. 発行された「ウェブアプリのURL」（`https://script.google.com/macros/s/.../exec`）をコピー
6. `confirm.html` の `FORM_ENDPOINT` にそのURLを貼り付け

設定すると、申し込みフォーム送信のたびにスプレッドシートへ「送信日時・日程・大学名・学部・学年・メールアドレス」が1行追加されます。

空欄（`""`）のままの場合、入力チェックだけ行い、内容はどこにも保存されません。

## 公開方法（GitHub Pages）

1. GitHubのリポジトリ → Settings → Pages
2. 「Source」で `Deploy from a branch` を選択し、公開したいブランチと `/ (root)` を指定
3. 表示されたURL（`https://<ユーザー名>.github.io/kigyou/`）が申し込みページのURLになります

以後、申し込みリンクにはこのGitHub PagesのURLを使ってください（Claudeのアーティファクト共有リンクは使わない）。
