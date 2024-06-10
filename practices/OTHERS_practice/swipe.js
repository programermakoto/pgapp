document.addEventListener('DOMContentLoaded', (e) => {
  // DOMContentLoadedは HTML の初期文書が完全に読み込まれ解釈された時点で発生し、スタイルシート、画像、サブフレームの読み込みが完了するのを待ちません。
  const image = document.querySelector('#scroll img');

  let position = 0; // スクロールの開始位置
  const speed = 1; // スクロールの速度

  function MakotoRun() {
    position -= speed; // 左に移動するためにpositionを減らす
    image.style.transform = `translateX(${position}px)`;

    // 画像が完全に左に移動したら、位置をリセット
    if (Math.abs(position) >= image.offsetWidth) {
      position = 0;
    }

    requestAnimationFrame(MakotoRun); // 次の描画フレームで再度実行するように指示
  }

  MakotoRun(); // アニメーション開始
});
