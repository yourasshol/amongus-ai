const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;

const players = [
    { x: 100, y: 100, color: "blue", role: "crew" },
    { x: 300, y: 200, color: "red", role: "imposter" }
];

function drawPlayers() {
    players.forEach(player => {
        ctx.fillStyle = player.color;
        ctx.fillRect(player.x, player.y, 30, 30);
    });
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayers();
    requestAnimationFrame(gameLoop);
}

gameLoop();
