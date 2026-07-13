/**
 * confirm.html の申し込みフォームから送信された内容を
 * 指定のスプレッドシートに1行ずつ追記するための Google Apps Script。
 *
 * 使い方は README.md の「スプレッドシート連携（FORM_ENDPOINT）」を参照してください。
 */
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);

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
