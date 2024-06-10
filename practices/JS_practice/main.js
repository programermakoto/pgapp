"use strict";
{
  function play(){

    setTimeout(() => {
      images[currentIndex].classList.remove("current");//1.フォーカス当たっている写真を消す
      currentIndex++;//2 2枚目の画像に移動する
      if(currentIndex >= images.length){
        currentIndex = 0;
      }
      images[currentIndex].classList.add("current");//3.写真を写真を表示

      play();
    },4000);
  }

  const images = document.querySelectorAll(".hero img");
  let currentIndex = 0;
  play();

}



