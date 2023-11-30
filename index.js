const json = `
{
  "data": [
      {
          "name": "カラーピッカー",
          "link": "colorPicker/colorPicker.html"
      },
      {
          "name": "文字数カウンター",
          "link": "charCount/charCount.html"
      },
      {
          "name": "ダークモード",
          "link": "darkMode/darkMode.html"
      },
      {
          "name": "チェックボックス",
          "link": "checkbox/checkbox.html"
      },
      {
          "name": "スクロール",
          "link": "scroll/scroll.html"
      },
      {
          "name": "メニュー",
          "link": "menu/menu.html"
      },
      {
        "name": "アニメーション：見出しを下から浮き上がらせよう",
        "link": "animation/index.html"
      },
      {
        "name": "アニメーション：見出しを回転させよう",
        "link": "animation/index2.html"
      },
      {
        "name": "アニメーション：見出しの色を変化",
        "link": "animation/index3.html"
      },
      {
        "name": "アニメーション：背景が伸びる見出し",
        "link": "animation/iindex4.html"
      },
      {
        "name": "アニメーション：ふよふよ動く見出し",
        "link": "animation/index5.html"
      },
      {
        "name": "アニメーション２：複数の画像を表示させる",
        "link": "animation2/index.html"
      },
      {
        "name": "アニメーション２：複数の画像を回転させる",
        "link": "animation2/index2.html"
      },
      {
        "name": "アニメーション２：複数の画像がふわふわ落ちてくる",
        "link": "animation2/index3.html"
      },
      {
        "name": "アニメーション２：ぼかしがなくなりくっきりと画像を表示",
        "link": "animation2/index4.html"
      }
  ]
}
`
const parse = JSON.parse(json);
const data = parse.data;
console.log(data);

for(let i = 0; i < data.length; i++) {
  let table = document.getElementById('table1');
  let newRow = table.insertRow();

  let newCell = newRow.insertCell();
  let newText = document.createTextNode(i + 1);
  newCell.appendChild(newText);

  newCell = newRow.insertCell();
  newText = document.createTextNode(data[i].name);
  newCell.appendChild(newText);

  newCell = newRow.insertCell();
  const mm = document.createElement("a");
  mm.href = data[i].link;
  mm.innerText = data[i].link;

  newText = mm
  newCell.appendChild(newText);
}