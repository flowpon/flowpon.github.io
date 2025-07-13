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

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".toggle-header").forEach((header) => {
    header.addEventListener("click", () => {
      const targetId = header.getAttribute("data-target");
      const content = document.getElementById(targetId);
      if (content) {
        content.classList.toggle("hidden");
        header.classList.toggle("open");
        const icon = header.querySelector(".toggle-icon");
        if (icon) {
          icon.textContent = content.classList.contains("hidden") ? "▼" : "▲";
        }
      }
    });
  });
});
