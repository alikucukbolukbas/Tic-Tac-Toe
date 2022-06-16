let td1 = document.getElementById("td1");
let td2 = document.getElementById("td2");
let td3 = document.getElementById("td3");
let td4 = document.getElementById("td4");
let td5 = document.getElementById("td5");
let td6 = document.getElementById("td6");
let td7 = document.getElementById("td7");
let td8 = document.getElementById("td8");
let td9 = document.getElementById("td9");

let x = "X";
let o = "O";
let counter = 0;

td1.addEventListener("click", function(){

  if(td1.innerHTML == ""){
    if (counter % 2 == 0){
      td1.innerHTML = x;
      counter += 1;

      if (td1.innerHTML != "" && td2.innerHTML != "" && td3.innerHTML != "" ||
      td1.innerHTML != "" && td4.innerHTML != "" && td7.innerHTML != "" ||
      td1.innerHTML != "" && td5.innerHTML != "" && td9.innerHTML != ""){

        if (td1.innerHTML == td2.innerHTML && td2.innerHTML == td3.innerHTML ){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
        else if (td1.innerHTML == td4.innerHTML && td4.innerHTML == td7.innerHTML){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
        else if (td1.innerHTML == td5.innerHTML && td5.innerHTML == td9.innerHTML){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
      }
    }
    else{
      td1.innerHTML = o;
      counter += 1;

      if (td1.innerHTML != "" && td2.innerHTML != "" && td3.innerHTML != "" ||
      td1.innerHTML != "" && td4.innerHTML != "" && td7.innerHTML != "" ||
      td1.innerHTML != "" && td5.innerHTML != "" && td9.innerHTML != ""){

        if (td1.innerHTML == td2.innerHTML && td2.innerHTML == td3.innerHTML ){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
        else if (td1.innerHTML == td4.innerHTML && td4.innerHTML == td7.innerHTML){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
        else if (td1.innerHTML == td5.innerHTML && td5.innerHTML == td9.innerHTML){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
      }
    }
  }
  else{
      td1 = td1;
  }
  
});
td2.addEventListener("click", function(){

  if(td2.innerHTML == ""){
    if (counter % 2 == 0){
      td2.innerHTML = x;
      counter += 1;

      if (td1.innerHTML != "" && td2.innerHTML != "" && td3.innerHTML != "" ||
      td2.innerHTML != "" && td5.innerHTML != "" && td8.innerHTML != ""){

        if (td1.innerHTML == td2.innerHTML && td2.innerHTML == td3.innerHTML ){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
        else if (td2.innerHTML == td5.innerHTML && td5.innerHTML == td8.innerHTML){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
      }
    }
    else{
      td2.innerHTML = o;
      counter += 1;

      if (td1.innerHTML != "" && td2.innerHTML != "" && td3.innerHTML != "" ||
      td2.innerHTML != "" && td5.innerHTML != "" && td8.innerHTML != ""){

        if (td1.innerHTML == td2.innerHTML && td2.innerHTML == td3.innerHTML ){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
        else if (td2.innerHTML == td5.innerHTML && td5.innerHTML == td8.innerHTML){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
      }
    }
  }
  else{
      td2 = td2;
  }
});
td3.addEventListener("click", function(){

  if(td3.innerHTML == ""){
    if (counter % 2 == 0){
      td3.innerHTML = x;
      counter += 1;

      if (td1.innerHTML != "" && td2.innerHTML != "" && td3.innerHTML != "" ||
      td3.innerHTML != "" && td6.innerHTML != "" && td9.innerHTML != "" ||
      td3.innerHTML != "" && td5.innerHTML != "" && td7.innerHTML != ""){

        if (td1.innerHTML == td2.innerHTML && td2.innerHTML == td3.innerHTML ){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
        else if (td3.innerHTML == td6.innerHTML && td6.innerHTML == td9.innerHTML){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
        else if (td3.innerHTML == td5.innerHTML && td5.innerHTML == td7.innerHTML){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
      }
    }
    else{
      td3.innerHTML = o;
      counter += 1;

      if (td1.innerHTML != "" && td2.innerHTML != "" && td3.innerHTML != "" ||
      td3.innerHTML != "" && td6.innerHTML != "" && td9.innerHTML != "" ||
      td3.innerHTML != "" && td5.innerHTML != "" && td7.innerHTML != ""){

        if (td1.innerHTML == td2.innerHTML && td2.innerHTML == td3.innerHTML ){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
        else if (td3.innerHTML == td6.innerHTML && td6.innerHTML == td9.innerHTML){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
        else if (td3.innerHTML == td5.innerHTML && td5.innerHTML == td7.innerHTML){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
      }
    }
  }
  else{
      td3 = td3;
  }
});
td4.addEventListener("click", function(){
  
  if(td4.innerHTML == ""){
    if (counter % 2 == 0){
      td4.innerHTML = x;
      counter += 1;

      if (td4.innerHTML != "" && td5.innerHTML != "" && td6.innerHTML != "" ||
      td1.innerHTML != "" && td4.innerHTML != "" && td7.innerHTML != ""){

        if (td4.innerHTML == td5.innerHTML && td5.innerHTML == td6.innerHTML ){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
        else if (td1.innerHTML == td4.innerHTML && td4.innerHTML == td7.innerHTML){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
      }
    }
    else{
      td4.innerHTML = o;
      counter += 1;

      if (td4.innerHTML != "" && td5.innerHTML != "" && td6.innerHTML != "" ||
      td1.innerHTML != "" && td4.innerHTML != "" && td7.innerHTML != ""){

        if (td4.innerHTML == td5.innerHTML && td5.innerHTML == td6.innerHTML ){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
        else if (td1.innerHTML == td4.innerHTML && td4.innerHTML == td7.innerHTML){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
      }
    }
  }
  else{
      td4 = td4;
  }
});
td5.addEventListener("click", function(){

  if(td5.innerHTML == ""){
    if (counter % 2 == 0){
      td5.innerHTML = x;
      counter += 1;

      if (td4.innerHTML != "" && td5.innerHTML != "" && td6.innerHTML != "" ||
      td2.innerHTML != "" && td5.innerHTML != "" && td8.innerHTML != "" ||
      td1.innerHTML != "" && td5.innerHTML != "" && td9.innerHTML != "" ||
      td3.innerHTML != "" && td5.innerHTML != "" && td7.innerHTML != ""){

        if (td4.innerHTML == td5.innerHTML && td5.innerHTML == td6.innerHTML ){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
        else if (td2.innerHTML == td5.innerHTML && td5.innerHTML == td8.innerHTML){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
        else if (td1.innerHTML == td5.innerHTML && td5.innerHTML == td9.innerHTML){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
        else if (td3.innerHTML == td5.innerHTML && td5.innerHTML == td7.innerHTML){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
      }
    }
    else{
      td5.innerHTML = o;
      counter += 1;

      if (td4.innerHTML != "" && td5.innerHTML != "" && td6.innerHTML != "" ||
      td2.innerHTML != "" && td5.innerHTML != "" && td8.innerHTML != "" ||
      td1.innerHTML != "" && td5.innerHTML != "" && td9.innerHTML != "" ||
      td3.innerHTML != "" && td5.innerHTML != "" && td7.innerHTML != ""){

        if (td4.innerHTML == td5.innerHTML && td5.innerHTML == td6.innerHTML ){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
        else if (td2.innerHTML == td5.innerHTML && td5.innerHTML == td8.innerHTML){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
        else if (td1.innerHTML == td5.innerHTML && td5.innerHTML == td9.innerHTML){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
        else if (td3.innerHTML == td5.innerHTML && td5.innerHTML == td7.innerHTML){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
      }
    }
  }
  else{
      td5 = td5;
  }
});
td6.addEventListener("click", function(){

  if(td6.innerHTML == ""){
    if (counter % 2 == 0){
      td6.innerHTML = x;
      counter += 1;

      if (td4.innerHTML != "" && td5.innerHTML != "" && td6.innerHTML != "" ||
      td3.innerHTML != "" && td6.innerHTML != "" && td9.innerHTML != ""){

        if (td4.innerHTML == td5.innerHTML && td5.innerHTML == td6.innerHTML ){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
        else if (td3.innerHTML == td6.innerHTML && td6.innerHTML == td9.innerHTML){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
      }
    }
    else{
      td6.innerHTML = o;
      counter += 1;

      if (td4.innerHTML != "" && td5.innerHTML != "" && td6.innerHTML != "" ||
      td3.innerHTML != "" && td6.innerHTML != "" && td9.innerHTML != ""){

        if (td4.innerHTML == td5.innerHTML && td5.innerHTML == td6.innerHTML ){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
        else if (td3.innerHTML == td6.innerHTML && td6.innerHTML == td9.innerHTML){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
      }
    }
  }
  else{
      td6 = td6;
  }
});
td7.addEventListener("click", function(){

  if(td7.innerHTML == ""){
    if (counter % 2 == 0){
      td7.innerHTML = x;
      counter += 1;

      if (td7.innerHTML != "" && td8.innerHTML != "" && td9.innerHTML != "" ||
      td1.innerHTML != "" && td4.innerHTML != "" && td7.innerHTML != "" ||
      td3.innerHTML != "" && td5.innerHTML != "" && td7.innerHTML != ""){

        if (td7.innerHTML == td8.innerHTML && td8.innerHTML == td9.innerHTML ){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
        else if (td1.innerHTML == td4.innerHTML && td4.innerHTML == td7.innerHTML){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
        else if (td3.innerHTML == td5.innerHTML && td5.innerHTML == td7.innerHTML){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
      }
    }
    else{
      td7.innerHTML = o;
      counter += 1;

      if (td7.innerHTML != "" && td8.innerHTML != "" && td9.innerHTML != "" ||
      td1.innerHTML != "" && td4.innerHTML != "" && td7.innerHTML != "" ||
      td3.innerHTML != "" && td5.innerHTML != "" && td7.innerHTML != ""){

        if (td7.innerHTML == td8.innerHTML && td8.innerHTML == td9.innerHTML ){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
        else if (td1.innerHTML == td4.innerHTML && td4.innerHTML == td7.innerHTML){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
        else if (td3.innerHTML == td5.innerHTML && td5.innerHTML == td7.innerHTML){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
      }
    }
  }
  else{
      td7 = td7;
  }
});
td8.addEventListener("click", function(){

  if(td8.innerHTML == ""){
    if (counter % 2 == 0){
      td8.innerHTML = x;
      counter += 1;

      if (td7.innerHTML != "" && td8.innerHTML != "" && td9.innerHTML != "" ||
      td2.innerHTML != "" && td5.innerHTML != "" && td8.innerHTML != ""){

        if (td7.innerHTML == td8.innerHTML && td8.innerHTML == td9.innerHTML ){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
        else if (td2.innerHTML == td5.innerHTML && td5.innerHTML == td8.innerHTML){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
      }
    }
    else{
      td8.innerHTML = o;
      counter += 1;

      if (td7.innerHTML != "" && td8.innerHTML != "" && td9.innerHTML != "" ||
      td2.innerHTML != "" && td5.innerHTML != "" && td8.innerHTML != ""){

        if (td7.innerHTML == td8.innerHTML && td8.innerHTML == td9.innerHTML ){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
        else if (td2.innerHTML == td5.innerHTML && td5.innerHTML == td8.innerHTML){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
      }
    }
  }
  else{
      td8 = td8;
  }
});
td9.addEventListener("click", function(){

  if(td9.innerHTML == ""){
    if (counter % 2 == 0){
      td9.innerHTML = x;
      counter += 1;

      if (td7.innerHTML != "" && td8.innerHTML != "" && td9.innerHTML != "" ||
      td3.innerHTML != "" && td6.innerHTML != "" && td9.innerHTML != "" ||
      td1.innerHTML != "" && td5.innerHTML != "" && td9.innerHTML != ""){

        if (td7.innerHTML == td8.innerHTML && td8.innerHTML == td9.innerHTML ){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
        else if (td3.innerHTML == td6.innerHTML && td6.innerHTML == td9.innerHTML){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
        else if (td1.innerHTML == td5.innerHTML && td5.innerHTML == td9.innerHTML){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
      }
    }
    else{
      td9.innerHTML = o;
      counter += 1;

      if (td7.innerHTML != "" && td8.innerHTML != "" && td9.innerHTML != "" ||
      td3.innerHTML != "" && td6.innerHTML != "" && td9.innerHTML != "" ||
      td1.innerHTML != "" && td5.innerHTML != "" && td9.innerHTML != ""){

        if (td7.innerHTML == td8.innerHTML && td8.innerHTML == td9.innerHTML ){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
        else if (td3.innerHTML == td6.innerHTML && td6.innerHTML == td9.innerHTML){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
        else if (td1.innerHTML == td5.innerHTML && td5.innerHTML == td9.innerHTML){
          alert("WİNNER WİNNER CHİCKEN DİNNER");
          location.reload();
        }
      }
    }
  }
  else{
      td9 = td9;
  }
});

let animationBtn = document.getElementById("animationBtn");
let box = document.getElementsById("box");

animationBtn.addEventListener("click", function(box){
  box.style.animationName = "none";
})









