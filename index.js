
let boxs = document.querySelectorAll(".box");
let rest = document.getElementById("Reset");
let win = document.querySelector("#winer");

console.log(win);

let turn0 = true; // player0,playerx

let winPattern = [

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 3, 8],
    [0, 4, 8],
    [2, 4, 6]


]

boxs.forEach((box) => {


    box.addEventListener("click", function () {

        // box.innerHTML = " ekubj"; //The innerHTML property in JavaScript allows 
        //you to get or set the HTML content inside an element. 
        //It's a common and powerful way to dynamically manipulate the DOM 
        //(Document Object Model).

        if (turn0) {

            box.innerText = "O";
            turn0 = false;
        }

        else {

            box.innerText = "X"
            turn0 = true;
        }

        box.disabled = true; //Using the disabled property is a straightforward way to control the interactivity of form elements in your web applications.
        checkwinner();
    })


})


const restgame = () => {

    turn0 = true;
    enable();


}


const disabledbox = () => {

    for (let box of boxs) {

        box.disabled = true;

    }
}

const enable = () => {

    for (let box of boxs) {

        box.disabled = false;
        box.innerText = "";
    }
}


const checkwinner = () => {

    for (let pattern of winPattern) {


        console.log(pattern[0], pattern[1], pattern[2]);

        let pos1 = boxs[pattern[0]].innerText;
        let pos2 = boxs[pattern[1]].innerText;
        let pos3 = boxs[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {

            if (pos1 === pos2 && pos2 === pos3) {

                disabledbox();
                win.innerText = `You are winner ${pos1}`;
            }
        }
    }
}

rest.addEventListener("click", function () {

    restgame();
    win.innerText = "";
})

