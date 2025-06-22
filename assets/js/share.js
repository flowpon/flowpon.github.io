//リンクコピー
function copyUrl() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    alert("リンクをコピーしました！");
  });
}
