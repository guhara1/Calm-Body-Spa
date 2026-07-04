/* 간다GO · 공용 인터랙션 (경량, 의존성 없음) */
(function () {
  "use strict";

  /* 모바일 내비 토글 */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") nav.classList.remove("open");
    });
  }

  /* 저장된 테마 선호 반영 (기본은 OS 설정) */
  try {
    var saved = localStorage.getItem("gandago-theme");
    if (saved) document.documentElement.setAttribute("data-theme", saved);
  } catch (e) {}

  /* 현재 연도 */
  var y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
})();
