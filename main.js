let disp_int = document.querySelector(".button-funcx")

let display_screen = document.querySelector(".display_screen")

let arr = []

disp_int.addEventListener("click", ()=>{

let textt = disp_int.textContent



arr.push(textt)


 display_screen.value = arr.join('')

})



let all_cleared_btn = document.querySelector(".All_cleared")


all_cleared_btn.addEventListener("click", ()=>{

    if(display_screen.value != "null"){

        display_screen.value = "0";
    }
    

})




let active_btn = document.getElementsByClassName("button-func");

for (let i = 0; i < active_btn.length; i++) {
  active_btn[i].addEventListener("click", function() {
    let textx = this.textContent;
    arr.push(textx);
    display_screen.value = arr.join('');
  });
}

