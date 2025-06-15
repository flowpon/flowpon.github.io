function showPage(pageId) {
  // すべてのページを非表示にする
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.style.display = "none";
  });

  // 指定されたページを表示する
  const activePage = document.getElementById(pageId);
  if (activePage) {
    activePage.style.display = "block";
  }
}

// 初期表示はホームページ
document.addEventListener("DOMContentLoaded", () => {
  showPage("home");
});
