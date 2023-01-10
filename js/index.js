let gameContent = document.getElementById("game-content");
console.log(gameContent);
function startGame() {
  gameContent.innerHTML = `<div class="row gx-0">
  <div class="col-4">
    <img src="images/rock.png" alt="a hand showing rock" class="rock w-100" />
  </div>
  <div class="col-4">
    <img
      src="images/paper.png"
      alt="a hand showing paper"
      class="paper w-100"
    />
  </div>
  <div class="col-4">
    <img
      src="images/scissors.png"
      alt="a hand showing scissors"
      class="scissors w-100"
    />
  </div>
</div>
<div class="row gx-0">
  <div class="col-4 mt-5 d-flex justify-content-center">
    <button class="rock-btn mt-5" onclick="possibleChose('rock')">rock</button>
  </div>
  <div class="col-4 mt-5 d-flex justify-content-center">
    <button class="paper-btn mt-5" onclick="possibleChose('papers')">papers</button>
  </div>
  <div class="col-4 mt-5 d-flex justify-content-center">
    <button class="scissors-btn mt-5" onclick="possibleChose('scissors')">scissors</button>
  </div>
</div>
<div class="row gx-0">
  <div class="col-12 mt-5">
    <h1 class="make-choose mt-4">make your choice</h1>
  </div>
</div>`;
}
function possibleChose() {
  gameContent.innerHTML = `<div class="row gx-0">
  <div class="col-6 d-flex justify-content-center">
    <h2 class="computer">computer</h2>
  </div>
  <div class="col-6 d-flex justify-content-center">
    <h2 class="you">you</h2>
  </div>
</div>
<div class="row gx-0">
  <div class="col-6">
    <img src="images/rock.png" alt="" srcset="" class="w-100" />
  </div>
  <div class="col-6">
    <img src="images/rock.png" alt="" srcset="" class="rock-img w-100" />
  </div>
</div>
<div class="row gx-0">
  <div class="col-12 d-flex justify-content-center">
    <h1 class="result">ohh ! you lost yohoo</h1>
  </div>
</div>
<div class="row gx-0">
  <div class="col-12 d-flex justify-content-center">
    <button onclick="tryAgain()">try again</button>
  </div>
</div>`;
}
function tryAgain() {
  gameContent.innerHTML = `<div class="row gx-0">
  <div class="col-4">
    <img src="images/rock.png" alt="a hand showing rock" class="rock w-100" />
  </div>
  <div class="col-4">
    <img
      src="images/paper.png"
      alt="a hand showing paper"
      class="paper w-100"
    />
  </div>
  <div class="col-4">
    <img
      src="images/scissors.png"
      alt="a hand showing scissors"
      class="scissors w-100"
    />
  </div>
</div>
<div class="row gx-0">
  <div class="col-4 mt-5 d-flex justify-content-center">
    <button class="rock-btn mt-5" onclick="rock()">rock</button>
  </div>
  <div class="col-4 mt-5 d-flex justify-content-center">
    <button class="paper-btn mt-5" onclick="papers()">papers</button>
  </div>
  <div class="col-4 mt-5 d-flex justify-content-center">
    <button class="scissors-btn mt-5" onclick="scissors()">scissors</button>
  </div>
</div>
<div class="row gx-0">
  <div class="col-12 mt-5">
    <h1 class="make-choose mt-4">make your choice</h1>
  </div>
</div>`;
}
