let yes = document.getElementById('yes');
let no = document.getElementById('no');
let modal = document.getElementById('modal');
let wrongAnswer = document.getElementById('wrongAnswer');
let polaroid1 = document.getElementById('firstDiv');
let polaroid2 = document.getElementById('secondDiv');
let polaroid3 = document.getElementById('thirdDiv');
let polaroid4 = document.getElementById('fourthDiv');
let polaroid5 = document.getElementById('fifthDiv');
let heart1 = document.getElementById('heart1');
let heart2 = document.getElementById('heart2');
let heart3 = document.getElementById('heart3');
let heart4 = document.getElementById('heart4');
let heart5 = document.getElementById('heart5');
let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');
let text3 = document.getElementById('text3');
let text4 = document.getElementById('text4');
let text5 = document.getElementById('text5');
let heartStart1 = document.getElementById('heartStart1');
let heartStart2 = document.getElementById('heartStart2');
let heartStart3 = document.getElementById('heartStart3');
let heartStart4 = document.getElementById('heartStart4');
let heartStart5 = document.getElementById('heartStart5');
let finalText = document.getElementById('finalText');

yes.addEventListener('click', clickYes);
no.addEventListener('click', clickNo);
modal.addEventListener('click', clickModal);
polaroid1.addEventListener('click', clickPolaroid1);
polaroid2.addEventListener('click', clickPolaroid2);
polaroid3.addEventListener('click', clickPolaroid3);
polaroid4.addEventListener('click', clickPolaroid4);
polaroid5.addEventListener('click', clickPolaroid5);
heart1.addEventListener('click', clickheart1);
heart2.addEventListener('click', clickheart2);
heart3.addEventListener('click', clickheart3);
heart4.addEventListener('click', clickheart4);
heart5.addEventListener('click', clickheart5);


function clickModal(e) {
  if(e.target !== no && e.target !== yes) {
    wrongAnswer.style.opacity = '0';
  }
}

function clickNo(e) {
  if(e.target == no) {
    no.style.display = 'none';
    wrongAnswer.style.opacity = '1';
    yes.style.backgroundColor = '#00ff31';
  }
}

function clickYes(e) {
  if(e.target == yes) {
    modal.style.display = 'none';
    polaroid1.classList.add('moved1');
  }
}

function clickheart1(e) {
  if(e.target == heart1) {
    heart1.classList.add('textHeartMoved');
    text1.innerHTML = 'You make me happy.';
    setTimeout(function touchHere() {
      text1.innerHTML = 'Touch here.';
    }, 2000);
  }
}

function clickPolaroid1(e) {
  if(e.target == text1 && heart1.classList.contains('textHeartMoved')) {
    polaroid1.classList.add('movedRight');
    polaroid2.classList.add('moved2');
    setTimeout(function removePolaroid1() {
      polaroid1.style.display = 'none';
    },1000);
  }
}

function clickheart2(e) {
  if(e.target == heart2) {
    heart2.classList.add('textHeartMoved');
    text2.innerHTML = 'You always support me.';
    setTimeout(function touchHere() {
      text2.innerHTML = 'Touch here.';
    }, 2000);
  }
}

function clickPolaroid2(e) {
  if(e.target == text2 && heart2.classList.contains('textHeartMoved')) {
    polaroid2.classList.add('movedRight');
    polaroid3.classList.add('moved3');
    setTimeout(function removePolaroid2() {
      polaroid2.style.display = 'none';
    },1000);
  }
}

function clickheart3(e) {
  if(e.target == heart3) {
    heart3.classList.add('textHeartMoved');
    text3.innerHTML = 'You make me laugh.';
    setTimeout(function touchHere() {
      text3.innerHTML = 'Touch here.';
    }, 2000);
  }
}

function clickPolaroid3(e) {
  if(e.target == text3 && heart3.classList.contains('textHeartMoved')) {
    polaroid3.classList.add('movedRight');
    polaroid4.classList.add('moved4');
    setTimeout(function removePolaroid3() {
      polaroid3.style.display = 'none';
    },1000);
  }
}

function clickheart4(e) {
  if(e.target == heart4) {
    heart4.classList.add('textHeartMoved');
    text4.innerHTML = 'I can be myself around you.';
    setTimeout(function touchHere() {
      text4.innerHTML = 'Touch here.';
    }, 2000);
  }
}

function clickPolaroid4(e) {
  if(e.target == text4 && heart4.classList.contains('textHeartMoved')) {
    polaroid4.classList.add('movedRight');
    polaroid5.classList.add('moved5');
    setTimeout(function removePolaroid4() {
      polaroid4.style.display = 'none';
    },1000);
  }
}

function clickheart5(e) {
  if(e.target == heart5) {
    heart5.classList.add('textHeartMoved');
    text5.innerHTML = 'You give me peace of mind.';
    setTimeout(function touchHere() {
      text5.innerHTML = 'Touch here.';  
      finalText.classList.add('finalTextMoved');
    }, 2000);
  
  }
  }

  function clickPolaroid5(e) {
    if(e.target == text5 && heart5.classList.contains('textHeartMoved')) {
      polaroid5.classList.add('movedRight');
      setTimeout(function removePolaroid5() {
        polaroid5.style.display = 'none';
      },1000);
      heartStart1.classList.add('heartEnd1');
      heartStart2.classList.add('heartEnd2');
      heartStart3.classList.add('heartEnd3');
      heartStart4.classList.add('heartEnd4');
      heartStart5.classList.add('heartEnd5');
    }
  }  

 