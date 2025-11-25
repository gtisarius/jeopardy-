//const gameboard = document.getElementById("gameboard");

const questionsPile = [
  {
    category_id: 1,
    category: "Programming",
    questions: [
      { question_id: 1, question: "This markup language is behind every webpage.", difficulty: 1, answer: "What is HTML" },
      { question_id: 2, question: "This language is commonly used to style webpages.", difficulty: 1, answer: "What is CSS" },
      { question_id: 3, question: "This language runs in the browser and adds interactivity.", difficulty: 1, answer: "What is JavaScript" },
      { question_id: 4, question: "This programming paradigm focuses on objects containing data and methods.", difficulty: 2, answer: "What is object-oriented programming" },
      { question_id: 5, question: "This version control system is the most widely used today.", difficulty: 2, answer: "What is Git" },
      { question_id: 6, question: "This keyword in JavaScript declares a block-scoped variable.", difficulty: 2, answer: "What is let" },
      { question_id: 7, question: "This algorithmic notation expresses time complexity for worst-case performance.", difficulty: 3, answer: "What is Big O notation" },
      { question_id: 8, question: "This data structure follows FIFO ordering.", difficulty: 3, answer: "What is a queue" },
      { question_id: 9, question: "This design pattern ensures a class has only one instance.", difficulty: 3, answer: "What is the Singleton pattern" }
    ]
  },

  {
    category_id: 2,
    category: "Math",
    questions: [
      { question_id: 10, question: "This number is known as the additive identity.", difficulty: 1, answer: "What is zero" },
      { question_id: 11, question: "This branch of math studies shapes and sizes.", difficulty: 1, answer: "What is geometry" },
      { question_id: 12, question: "This symbol represents subtraction.", difficulty: 1, answer: "What is the minus sign" },
      { question_id: 13, question: "This constant is approximately equal to 3.14159.", difficulty: 2, answer: "What is pi" },
      { question_id: 14, question: "This algebraic concept represents an unknown value.", difficulty: 2, answer: "What is a variable" },
      { question_id: 15, question: "This type of triangle has all sides equal.", difficulty: 2, answer: "What is equilateral" },
      { question_id: 16, question: "This theorem relates the sides of a right triangle.", difficulty: 3, answer: "What is the Pythagorean theorem" },
      { question_id: 17, question: "This rule determines the derivative of a composite function.", difficulty: 3, answer: "What is the chain rule" },
      { question_id: 18, question: "This branch of math deals with abstract structures such as groups and rings.", difficulty: 3, answer: "What is abstract algebra" }
    ]
  },

  {
    category_id: 3,
    category: "Science",
    questions: [
      { question_id: 19, question: "This force keeps you on the ground.", difficulty: 1, answer: "What is gravity" },
      { question_id: 20, question: "This organ pumps blood through the body.", difficulty: 1, answer: "What is the heart" },
      { question_id: 21, question: "This state of matter has a definite shape and volume.", difficulty: 1, answer: "What is a solid" },
      { question_id: 22, question: "This scientist proposed the theory of general relativity.", difficulty: 2, answer: "Who is Albert Einstein" },
      { question_id: 23, question: "This gas makes up most of Earth's atmosphere.", difficulty: 2, answer: "What is nitrogen" },
      { question_id: 24, question: "This cell structure contains DNA in eukaryotes.", difficulty: 2, answer: "What is the nucleus" },
      { question_id: 25, question: "This law states that entropy in a closed system never decreases.", difficulty: 3, answer: "What is the second law of thermodynamics" },
      { question_id: 26, question: "This type of bond forms when electrons are shared.", difficulty: 3, answer: "What is a covalent bond" },
      { question_id: 27, question: "This particle is exchanged to produce the electromagnetic force.", difficulty: 3, answer: "What is the photon" }
    ]
  },

  {
    category_id: 4,
    category: "History",
    questions: [
      { question_id: 28, question: "This war ended with the Treaty of Versailles in 1919.", difficulty: 1, answer: "What is World War I" },
      { question_id: 29, question: "This ancient civilization built the pyramids of Giza.", difficulty: 1, answer: "What is Egypt" },
      { question_id: 30, question: "He was the first President of the United States.", difficulty: 1, answer: "Who is George Washington" },
      { question_id: 31, question: "This empire was ruled by Genghis Khan.", difficulty: 2, answer: "What is the Mongol Empire" },
      { question_id: 32, question: "This war occurred between the North and South United States from 1861–1865.", difficulty: 2, answer: "What is the American Civil War" },
      { question_id: 33, question: "This revolution began in 1789 and led to the rise of Napoleon.", difficulty: 2, answer: "What is the French Revolution" },
      { question_id: 34, question: "This line of demarcation divided the New World between Spain and Portugal.", difficulty: 3, answer: "What is the Treaty of Tordesillas" },
      { question_id: 35, question: "This Chinese dynasty was overthrown in the 1911 Revolution.", difficulty: 3, answer: "What is the Qing dynasty" },
      { question_id: 36, question: "This conflict from 1618–1648 devastated Central Europe.", difficulty: 3, answer: "What is the Thirty Years' War" }
    ]
  },

  {
    category_id: 5,
    category: "Geography",
    questions: [
      { question_id: 37, question: "This is the largest ocean on Earth.", difficulty: 1, answer: "What is the Pacific Ocean" },
      { question_id: 38, question: "This country is shaped like a boot.", difficulty: 1, answer: "What is Italy" },
      { question_id: 39, question: "This continent is home to the Sahara Desert.", difficulty: 1, answer: "What is Africa" },
      { question_id: 40, question: "This is the longest river in the world.", difficulty: 2, answer: "What is the Nile" },
      { question_id: 41, question: "This mountain range forms a natural border between Europe and Asia.", difficulty: 2, answer: "What are the Ural Mountains" },
      { question_id: 42, question: "This country has the largest population in the world.", difficulty: 2, answer: "What is China" },
      { question_id: 43, question: "This strait separates Asia from North America.", difficulty: 3, answer: "What is the Bering Strait" },
      { question_id: 44, question: "This microstate is the smallest country in the world.", difficulty: 3, answer: "What is Vatican City" },
      { question_id: 45, question: "This sea is the saltiest large body of water on Earth.", difficulty: 3, answer: "What is the Dead Sea" }
    ]
  },

  {
    category_id: 6,
    category: "Music",
    questions: [
      { question_id: 46, question: "This is the musical alphabet (A through G).", difficulty: 1, answer: "What are musical notes" },
      { question_id: 47, question: "This section of an orchestra often includes violins and cellos.", difficulty: 1, answer: "What is the string section" },
      { question_id: 48, question: "This device keeps a steady tempo for musicians.", difficulty: 1, answer: "What is a metronome" },
      { question_id: 49, question: "This composer wrote the Fifth Symphony with the iconic four-note motif.", difficulty: 2, answer: "Who is Beethoven" },
      { question_id: 50, question: "This musical scale contains five notes.", difficulty: 2, answer: "What is the pentatonic scale" },
      { question_id: 51, question: "This term describes the speed of a piece of music.", difficulty: 2, answer: "What is tempo" },
      { question_id: 52, question: "This Russian composer created the ballet 'The Firebird.'", difficulty: 3, answer: "Who is Igor Stravinsky" },
      { question_id: 53, question: "This term refers to a chord that contains notes outside the key signature.", difficulty: 3, answer: "What is an altered chord" },
      { question_id: 54, question: "This medieval system preceded modern musical notation.", difficulty: 3, answer: "What is neume notation" }
    ]
  },

  {
    category_id: 7,
    category: "Movies & TV",
    questions: [
      { question_id: 55, question: "This movie series features a boy wizard named Harry.", difficulty: 1, answer: "What is Harry Potter" },
      { question_id: 56, question: "This sci-fi franchise features the USS Enterprise.", difficulty: 1, answer: "What is Star Trek" },
      { question_id: 57, question: "This green ogre stars in a 2001 DreamWorks film.", difficulty: 1, answer: "Who is Shrek" },
      { question_id: 58, question: "This director created 'Inception' and 'The Dark Knight.'", difficulty: 2, answer: "Who is Christopher Nolan" },
      { question_id: 59, question: "This TV series follows the lives of the Stark family in Westeros.", difficulty: 2, answer: "What is Game of Thrones" },
      { question_id: 60, question: "This 1977 film introduced the character Darth Vader.", difficulty: 2, answer: "What is Star Wars: A New Hope" },
      { question_id: 61, question: "This expressionist 1920 film features twisted sets and a somnambulist.", difficulty: 3, answer: "What is The Cabinet of Dr. Caligari" },
      { question_id: 62, question: "This Japanese director created 'Ran' and 'Seven Samurai.'", difficulty: 3, answer: "Who is Akira Kurosawa" },
      { question_id: 63, question: "This French New Wave icon directed 'Breathless.'", difficulty: 3, answer: "Who is Jean-Luc Godard" }
    ]
  },

  {
    category_id: 8,
    category: "Religion",
    questions: [
      { question_id: 64, question: "This book is the central scripture of Christianity.", difficulty: 1, answer: "What is the Bible" },
      { question_id: 65, question: "This monotheistic religion follows the teachings of Muhammad.", difficulty: 1, answer: "What is Islam" },
      { question_id: 66, question: "This religion includes the Four Noble Truths.", difficulty: 1, answer: "What is Buddhism" },
      { question_id: 67, question: "This is the Jewish day of rest.", difficulty: 2, answer: "What is the Sabbath" },
      { question_id: 68, question: "This branch of Christianity split from Rome in 1054.", difficulty: 2, answer: "What is Eastern Orthodoxy" },
      { question_id: 69, question: "This Hindu scripture is a dialogue between Arjuna and Krishna.", difficulty: 2, answer: "What is the Bhagavad Gita" },
      { question_id: 70, question: "This Christian council in 325 AD produced the original Nicene Creed.", difficulty: 3, answer: "What is the Council of Nicaea" },
      { question_id: 71, question: "This term means the study of end times.", difficulty: 3, answer: "What is eschatology" },
      { question_id: 72, question: "This founder of Sikhism was born in 1469.", difficulty: 3, answer: "Who is Guru Nanak" }
    ]
  },

  {
    category_id: 9,
    category: "Computers & Tech",
    questions: [
      { question_id: 73, question: "This device displays the visual output of a computer.", difficulty: 1, answer: "What is a monitor" },
      { question_id: 74, question: "This storage device uses spinning magnetic disks.", difficulty: 1, answer: "What is an HDD" },
      { question_id: 75, question: "This port type is commonly used to charge smartphones.", difficulty: 1, answer: "What is USB" },
      { question_id: 76, question: "This part of the computer acts as the 'brain' that performs calculations.", difficulty: 2, answer: "What is the CPU" },
      { question_id: 77, question: "This company created the Windows operating system.", difficulty: 2, answer: "What is Microsoft" },
      { question_id: 78, question: "This network device forwards data packets between networks.", difficulty: 2, answer: "What is a router" },
      { question_id: 79, question: "This protocol secures web traffic with encryption.", difficulty: 3, answer: "What is HTTPS" },
      { question_id: 80, question: "This type of database stores data as documents rather than tables.", difficulty: 3, answer: "What is a NoSQL database" },
      { question_id: 81, question: "This scheduling algorithm selects the process with the smallest next CPU burst.", difficulty: 3, answer: "What is Shortest Job Next" }
    ]
  },

  {
    category_id: 10,
    category: "General Knowledge",
    questions: [
      { question_id: 82, question: "This animal is known as the king of the jungle.", difficulty: 1, answer: "What is the lion" },
      { question_id: 83, question: "This planet is known as the Red Planet.", difficulty: 1, answer: "What is Mars" },
      { question_id: 84, question: "This is the largest mammal on Earth.", difficulty: 1, answer: "What is the blue whale" },
      { question_id: 85, question: "This language has the most native speakers worldwide.", difficulty: 2, answer: "What is Mandarin Chinese" },
      { question_id: 86, question: "This Italian city is famous for its canals.", difficulty: 2, answer: "What is Venice" },
      { question_id: 87, question: "This fruit was the first to be genetically modified for commercial sale.", difficulty: 2, answer: "What is the Flavr Savr tomato" },
      { question_id: 88, question: "This philosopher wrote 'The Republic.'", difficulty: 3, answer: "Who is Plato" },
      { question_id: 89, question: "This chemical element has the highest melting point.", difficulty: 3, answer: "What is tungsten" },
      { question_id: 90, question: "This desert is the coldest in the world.", difficulty: 3, answer: "What is the Antarctic Desert" }
    ]
  }
];

function getRandomInt(min, max) {
    min = Math.ceil(min); // Ensure min is an integer
    max = Math.floor(max); // Ensure max is an integer
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example: pick `rows` distinct random elements safely
function fetchCategories(questionsPool, rows) {
    if (!Array.isArray(questionsPool) || questionsPool.length === 0 || rows <= 0) return [];
    const n = Math.min(rows, questionsPool.length);
    // Fisher-Yates shuffle copy and slice
    const pool = questionsPool.slice();
    for (let i = pool.length - 1; i > 0; i--) {
        const j = getRandomInt(0, i);
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, n);
}

function getQuestions(category, difficulty) {
    let eligibleQuestions = [];
    for (let i = 0; i < category.questions.length; i++) {
        if (category.questions[i].difficulty == difficulty) {
            eligibleQuestions.push(category.questions[i])
        }
    }
    
}

function generateBoard(rows, columns, increment, questionsArr) {
    const table = document.createElement("table");
    let money = 0; // Changed from var to let
    
    const headRow = table.insertRow();
    for (let j = 0; j < columns; j++) {
        const th = document.createElement('th');
        if (!Array.isArray(questionsArr) || questionsArr.length === 0) {
        // defensive fallback: show empty header if something is wrong
            th.textContent = "";
            headRow.appendChild(th);
            continue;
        }

        let chosenCategory = getRandomInt(0, questionsArr.length - 1);
        // defensive check in case chosenCategory is out-of-range
        if (chosenCategory < 0 || chosenCategory >= questionsArr.length) {
            th.textContent = "";
        } else {
            th.textContent = questionsArr[chosenCategory].category;
            // remove the chosen category so headers are unique
            questionsArr.splice(chosenCategory, 1);
        }
        headRow.appendChild(th);
    }
    
    
    for (let i = 0; i < rows; i++) { // Added 'let' before i
        const row = table.insertRow();
        money += increment;
        for (let j = 0; j < columns; j++) { // Added 'let' before j
            const cell = row.insertCell();
            const question = document.createElement('a');
            question.classList.add("questionBox");
            question.href = "#";
            question.textContent = money;
            if (Math.floor(rows / 3) >= 1) {
                question.
            }
            cell.appendChild(question);
            
        }
    } 
    
    document.getElementById("gameboard").appendChild(table);
    return table;
}

function startGame(rows, columns, increment) {
  const gameboard = document.getElementById("gameboard");
  if (!gameboard) {
    console.warn("startGame: no #gameboard element found in DOM");
    return;
  }

  // clear previous board contents
  while (gameboard.firstChild) {
    gameboard.removeChild(gameboard.firstChild);
  }
    // We need exactly 'columns' categories for the header, not 'rows'
    let availableQuestions = fetchCategories(questionsPile, columns);
    // quick debug: show what categories were picked
    console.debug('startGame: selected categories', availableQuestions.map(c => c && c.category));

    generateBoard(rows, columns, increment, availableQuestions);
}