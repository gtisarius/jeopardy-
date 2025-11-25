// Manual quick-test:
// 1) Open the page and use the Add player button — new inputs will be created with names player2, player3, etc.
// 2) Submit the form — the POST body will include categories and every playerN input's value.
// 3) Remove player will remove the last added input (and its line-break) so it won't be sent.
let playerCount = 2;

function addPlayer() {
    const playerInput = document.getElementById("playerInput");
    let maxPlayerCount = Number(document.getElementById("gameboardCategories").value) * 5;
    if (playerCount < maxPlayerCount) {
        playerCount += 1;
        const newPlayer = document.createElement("input");
        newPlayer.type = "text";
        newPlayer.classList.add("playernames");
        // set the visible value and a form name so the input is included when the form posts
        newPlayer.value = "Player " + playerCount;
        newPlayer.name = `player${playerCount}`;
        playerInput.appendChild(newPlayer);
        // keep the same visual structure as the original HTML by adding a line-break
        const br = document.createElement('br');
        playerInput.appendChild(br);
    } else {
        window.alert("You cannot add any new players!");
    }
};

function removePlayer() {
    const playerInput = document.getElementById("playerInput");
    if (playerCount > 2) {
        playerCount -= 1;
        // remove the last element(s) that belong to the last player input
        let last = playerInput.lastElementChild;
        if (!last) return;

        // If there's a trailing <br>, remove it first
        if (last.tagName && last.tagName.toLowerCase() === 'br') {
            playerInput.removeChild(last);
            last = playerInput.lastElementChild;
        }

        if (last && last.tagName && last.tagName.toLowerCase() === 'input') {
            playerInput.removeChild(last);
        }
    } else {
        window.alert("You cannot remove Players 1 and 2!")
    }
}


// Handle form submission
document.getElementById('gameForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const categories = parseInt(document.getElementById('gameboardCategories').value);
    const playerInputs = document.querySelectorAll('.playernames');
    const players = Array.from(playerInputs).map(input => input.value);
    
    const gameData = {
        categories: categories,
        players: players
    };
    
    console.log('Sending JSON:', gameData);
    
    fetch('/api/start_game', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(gameData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        // Start your game with the response
        //startGame(5, categories, 200);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to start game');
    });
});
