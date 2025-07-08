document.addEventListener("DOMContentLoaded", function () {
  //  GTranslate用のdivを追加
  const wrapper = document.createElement("div");
  wrapper.className = "gtranslate_wrapper";
  document.body.appendChild(wrapper);

  // GTranslateの設定
  window.gtranslateSettings = {
    default_language: "ja",
    native_language_names: true,
    wrapper_selector: ".gtranslate_wrapper",
    switcher_horizontal_position: "right",
    float_switcher_open_direction: "bottom",
    flag_style: "3d",
    alt_flags: {
      en: "usa",
    },
  };

  //  翻訳ウィジェットのスクリプトを読み込む
  const script = document.createElement("script");
  script.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
  script.defer = true;
  document.body.appendChild(script);
});
