// Manual quick-test:
// 1) Open the page and use the Add player button — new inputs will be created with names player2, player3, etc.
// 2) Submit the form — the POST body will include categories and every playerN input's value.
// 3) Remove player will remove the last added input (and its line-break) so it won't be sent.
const menu = document.getElementById("menu");
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

function generateBoard(rows, columns) {
    const board = document.getElementById("gameboard");
    if (!board) return null;

    // clear any existing board
    board.innerHTML = '';

    // defensive checks & normalize inputs
    rows = Math.max(0, parseInt(rows, 10) || 0);
    columns = Math.max(0, parseInt(columns, 10) || 0);

    const table = document.createElement("table");
    table.classList.add('gameboard-table');

    // local helper so we don't rely on global getRandomInt
    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    // make a shallow copy of questionsArr so we do not permanently mutate the global
    const available = Array.isArray(questionsArr) ? questionsArr.slice() : [];

    // HEADERS: pick a unique random category for each column (if available)
    const headRow = table.insertRow();
    for (let j = 0; j < columns; j++) {
        const th = document.createElement('th');

        if (available.length === 0) {
            th.textContent = "";
            headRow.appendChild(th);
            continue;
        }

        const idx = getRandomInt(0, available.length - 1);
        const category = available[idx];
        th.textContent = category && category.category ? category.category : "";
        // store the category object on the header for future reference
        th.dataset.categoryIndex = idx;
        available.splice(idx, 1); // ensure headers are unique
        headRow.appendChild(th);
    }

    // CELLS: create rows of values (e.g., 200, 400, 600...) and fill columns
    const baseValue = 200; // standard Jeopardy-like increments
    for (let i = 0; i < rows; i++) {
        const tr = table.insertRow();
        const value = baseValue * (i + 1);

        for (let j = 0; j < columns; j++) {
            const td = document.createElement('td');
            td.classList.add('clue-cell');
            td.dataset.row = i;
            td.dataset.col = j;
            td.dataset.value = String(value);
            td.textContent = `$${value}`;

            // simple click behavior: mark used and remove text to indicate claimed clue
            td.addEventListener('click', function () {
                if (this.classList.contains('used')) return;
                this.classList.add('used');
                // you might replace this with logic to show the question / open modal
                this.textContent = '';
            });

            tr.appendChild(td);
        }
    }

    board.appendChild(table);
    return table;
}

function hookFormSubmission(formId, endpoint, dataSupplier, dataConsumer) {
    document.getElementById(formId).addEventListener('submit', function(e) {
        e.preventDefault();
        
        gameData = dataSupplier()
        console.log('Sending JSON:', gameData);
        
        fetch(endpoint, {
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
            dataConsumer(data)
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to start game');
        });
    });
}

hookFormSubmission('gameForm', '/api/start_game', function() {
    const categories = parseInt(document.getElementById('gameboardCategories').value);
    const playerInputs = document.querySelectorAll('.playernames');
    const players = Array.from(playerInputs).map(input => input.value);
        
    const gameData = {
        categories: categories,
        players: players
    };
    
    return gameData
}, function(data) {
    menu.style.display = "none";
    console.log(data);
    generateBoard(5, categories);
});


// Handle form submission

