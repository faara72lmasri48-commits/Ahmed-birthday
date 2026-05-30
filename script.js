function checkPassword(){

    let password =
    document.getElementById("password").value;

    if(password === "Ahmed26"){

        document
        .getElementById("screen1")
        .classList.remove("active");

        document
        .getElementById("screen2")
        .classList.add("active");

    }

    else{

        document
        .getElementById("error")
        .innerHTML =
        "Wrong Secret Code ❤️";

    }
}

function nextScreen(number){

    document
    .querySelectorAll(".screen")
    .forEach(screen => {

        screen.classList.remove("active");

    });

    document
    .getElementById("screen" + number)
    .classList.add("active");

}
