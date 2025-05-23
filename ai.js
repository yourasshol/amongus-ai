function moveAI() {
    players.forEach(player => {
        if (player.role === "crew") {
            player.x += Math.random() * 4 - 2; // Move randomly
            player.y += Math.random() * 4 - 2;
        } else if (player.role === "imposter") {
            const target = players[0]; // Chase first crewmate
            player.x += (target.x - player.x) * 0.01;
            player.y += (target.y - player.y) * 0.01;
        }
    });
}

setInterval(moveAI, 100);
