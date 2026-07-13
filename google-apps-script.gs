/**
 * confirm.html の申し込みフォームから送信された内容を
 * 指定のスプレッドシートに1行ずつ追記するための Google Apps Script。
 *
 * confirm.html は「フォーム送信（application/x-www-form-urlencoded）」で送ってくるが、
 * 念のため JSON 本文で来た場合にも対応している。
 *
 * 使い方は README.md の「スプレッドシート連携（FORM_ENDPOINT）」を参照してください。
 */
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // フォーム送信なら e.parameter に、JSON本文なら e.postData.contents に入る
  var data = (e && e.parameter) ? e.parameter : {};
  if ((!data.email && !data.university) && e && e.postData && e.postData.contents) {
    try {
      var json = JSON.parse(e.postData.contents);
      for (var k in json) { data[k] = json[k]; }
    } catch (err) {
      // JSONでなければそのまま無視
    }
  }

  sheet.appendRow([
    new Date(),
    data.eventDate || "",
    data.university || "",
    data.faculty || "",
    data.grade || "",
    data.email || "",
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * ブラウザで /exec のURLを直接開いたときに 200 を返すための関数。
 * 「スクリプト関数が見つかりません」の代わりに簡単な確認メッセージを表示する。
 */
function doGet(e) {
  return ContentService
    .createTextOutput("OK: このURLは申し込みフォームの受け口です。")
    .setMimeType(ContentService.MimeType.TEXT);
}
