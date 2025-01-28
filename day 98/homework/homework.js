document.getElementById("startBtn").addEventListener("click", function() {
    const name = document.getElementById("nameInput").value;
    if (name !== "") {
        startUserPage(name);
    }
});

function startUserPage(name) {
    document.getElementById("intro").style.display = "none";
    document.getElementById("userPage").style.display = "block";
    document.getElementById("userName").innerText = `Hello, ${name}!`;
    updatePage(0);
}

function updatePage(score) {
    document.getElementById("score").innerText = score;

    document.getElementById("colorPicker").addEventListener("input", function() {
        document.body.style.backgroundColor = this.value;
    });

    document.getElementById("updateScoreBtn").addEventListener("click", function() {
        const newScore = document.getElementById("scoreInput").value;
        if (newScore !== "") {
            document.getElementById("score").innerText = newScore;
        }
    });
}