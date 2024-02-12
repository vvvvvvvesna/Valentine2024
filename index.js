function clickAnswer(param) {
    if (param === "yes") {
        document.getElementById("yes").style.display = "block";
        document.getElementById("no").style.display = "none";
    } else if (param === "no") {
        document.getElementById("no").style.display = "block";
        document.getElementById("yes").style.display = "none";
    }
}