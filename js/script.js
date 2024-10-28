
// variables start
let playeravailable = document.querySelector(".playeravailable");
let playerselected = document.querySelector(".playerselected");
let playerbox = document.querySelector(".playerbox");
let selectionbox = document.querySelector(".selectionbox");
let leftstatus = document.querySelector(".leftstatus");
let selectionnumber = document.querySelector(".selectionnumber");
let selected = document.querySelector(".selected");
selected.style.opacity = "0";
let coinballance = document.querySelector(".coinballance");
let claimbtn = document.querySelector(".claimbtn");
let claimamount = 2500000;
let chooseButtons = document.querySelectorAll(".choose");
let rate = 1500000;
let click = 0;
// variables end


// claim free credit start
claimbtn.addEventListener("click", () => {
  coinball = Number(coinballance.innerHTML);
  coinballance.innerHTML = coinball + claimamount;
  return coinballance.innerHTML;
});

// claim free credit end


function imglinkfind(button) {
  let imglink = button.getAttribute("imgclass");
  return imglink; // Return the imglink to use it later
}

chooseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Assuming coinballance and selectionnumber are defined elements
    coinballance.innerHTML = Number(coinballance.innerHTML) - rate;

    if (Number(coinballance.innerHTML) < rate && Number(coinballance.innerHTML) <= 0) {
      coinballance.innerHTML = null;
      alert("Insufficient Balance");
      selectionnumber.innerHTML = 0;
    } 
    else {
      click += 1;
      selectionnumber.innerHTML = `${click}`;
    }

    let imglink = imglinkfind(button); // Get the image link for the current button

    let selectionBoxitem = document.createElement("div");
    selectionBoxitem.classList.add("selecteditem");
    selectionbox.appendChild(selectionBoxitem);

    let selectedleft = document.createElement("div");
    selectedleft.classList.add("left");
    selectionBoxitem.appendChild(selectedleft);

    let selectedright = document.createElement("div");
    selectedright.classList.add("right");
    selectionBoxitem.appendChild(selectedright);
    selectedright.innerHTML = `<i class="fa-regular fa-trash-can delete"></i>`
    let sctedimg = document.createElement("img");
    sctedimg.setAttribute("src", imglink); 
    selectedleft.appendChild(sctedimg);
  });
});

// palyerbox start
playerselected.addEventListener("click", () => {
  playerbox.style.display = "none";
  selectionbox.style.display = "flex";
  playeravailable.classList.remove("active");
  playerselected.classList.add("active");
  leftstatus.innerHTML = "Selected Player";
  selected.style.opacity = "1";
  selected.innerHTML = `(${selectionnumber.innerHTML}/12)`;
});
playeravailable.addEventListener("click", () => {
  playerselected.classList.remove("active");
  playeravailable.classList.add("active");
  selectionbox.style.display = "none";
  playerbox.style.display = "grid";
  leftstatus.innerHTML = "Available Players";
  selected.style.opacity = "0";
});

// palyerbox end


