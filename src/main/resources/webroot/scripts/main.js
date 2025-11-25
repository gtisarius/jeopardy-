//const gameboard = document.getElementById("gameboard");

const questionsPile = [ // Don't freak out, this is temporary to get the question system working
  {
    category: "Programming",
    questions: [
      { question: "This markup language is behind every webpage.", difficulty: 1, answer: "What is HTML" },
      { question: "This language is commonly used to style webpages.", difficulty: 1, answer: "What is CSS" },
      { question: "This language runs in the browser and adds interactivity.", difficulty: 1, answer: "What is JavaScript" },
      { question: "This programming paradigm focuses on objects containing data and methods.", difficulty: 2, answer: "What is object-oriented programming" },
      { question: "This version control system is the most widely used today.", difficulty: 2, answer: "What is Git" },
      { question: "This keyword in JavaScript declares a block-scoped variable.", difficulty: 2, answer: "What is let" },
      { question: "This algorithmic notation expresses time complexity for worst-case performance.", difficulty: 3, answer: "What is Big O notation" },
      { question: "This data structure follows FIFO ordering.", difficulty: 3, answer: "What is a queue" },
      { question: "This design pattern ensures a class has only one instance.", difficulty: 3, answer: "What is the Singleton pattern" }
    ]
  },

  {
    category: "Math",
    questions: [
      { question: "This number is known as the additive identity.", difficulty: 1, answer: "What is zero" },
      { question: "This branch of math studies shapes and sizes.", difficulty: 1, answer: "What is geometry" },
      { question: "This symbol represents subtraction.", difficulty: 1, answer: "What is the minus sign" },
      { question: "This constant is approximately equal to 3.14159.", difficulty: 2, answer: "What is pi" },
      { question: "This algebraic concept represents an unknown value.", difficulty: 2, answer: "What is a variable" },
      { question: "This type of triangle has all sides equal.", difficulty: 2, answer: "What is equilateral" },
      { question: "This theorem relates the sides of a right triangle.", difficulty: 3, answer: "What is the Pythagorean theorem" },
      { question: "This rule determines the derivative of a composite function.", difficulty: 3, answer: "What is the chain rule" },
      { question: "This branch of math deals with abstract structures such as groups and rings.", difficulty: 3, answer: "What is abstract algebra" }
    ]
  },

  {
    category: "Science",
    questions: [
      { question: "This force keeps you on the ground.", difficulty: 1, answer: "What is gravity" },
      { question: "This organ pumps blood through the body.", difficulty: 1, answer: "What is the heart" },
      { question: "This state of matter has a definite shape and volume.", difficulty: 1, answer: "What is a solid" },
      { question: "This scientist proposed the theory of general relativity.", difficulty: 2, answer: "Who is Albert Einstein" },
      { question: "This gas makes up most of Earth's atmosphere.", difficulty: 2, answer: "What is nitrogen" },
      { question: "This cell structure contains DNA in eukaryotes.", difficulty: 2, answer: "What is the nucleus" },
      { question: "This law states that entropy in a closed system never decreases.", difficulty: 3, answer: "What is the second law of thermodynamics" },
      { question: "This type of bond forms when electrons are shared.", difficulty: 3, answer: "What is a covalent bond" },
      { question: "This particle is exchanged to produce the electromagnetic force.", difficulty: 3, answer: "What is the photon" }
    ]
  },

  {
    category: "History",
    questions: [
      { question: "This war ended with the Treaty of Versailles in 1919.", difficulty: 1, answer: "What is World War I" },
      { question: "This ancient civilization built the pyramids of Giza.", difficulty: 1, answer: "What is Egypt" },
      { question: "He was the first President of the United States.", difficulty: 1, answer: "Who is George Washington" },
      { question: "This empire was ruled by Genghis Khan.", difficulty: 2, answer: "What is the Mongol Empire" },
      { question: "This war occurred between the North and South United States from 1861–1865.", difficulty: 2, answer: "What is the American Civil War" },
      { question: "This revolution began in 1789 and led to the rise of Napoleon.", difficulty: 2, answer: "What is the French Revolution" },
      { question: "This line of demarcation divided the New World between Spain and Portugal.", difficulty: 3, answer: "What is the Treaty of Tordesillas" },
      { question: "This Chinese dynasty was overthrown in the 1911 Revolution.", difficulty: 3, answer: "What is the Qing dynasty" },
      { question: "This conflict from 1618–1648 devastated Central Europe.", difficulty: 3, answer: "What is the Thirty Years' War" }
    ]
  },

  {
    category: "Geography",
    questions: [
      { question: "This is the largest ocean on Earth.", difficulty: 1, answer: "What is the Pacific Ocean" },
      { question: "This country is shaped like a boot.", difficulty: 1, answer: "What is Italy" },
      { question: "This continent is home to the Sahara Desert.", difficulty: 1, answer: "What is Africa" },
      { question: "This is the longest river in the world.", difficulty: 2, answer: "What is the Nile" },
      { question: "This mountain range forms a natural border between Europe and Asia.", difficulty: 2, answer: "What are the Ural Mountains" },
      { question: "This country has the largest population in the world.", difficulty: 2, answer: "What is China" },
      { question: "This strait separates Asia from North America.", difficulty: 3, answer: "What is the Bering Strait" },
      { question: "This microstate is the smallest country in the world.", difficulty: 3, answer: "What is Vatican City" },
      { question: "This sea is the saltiest large body of water on Earth.", difficulty: 3, answer: "What is the Dead Sea" }
    ]
  },

  {
    category: "Music",
    questions: [
      { question: "This is the musical alphabet (A through G).", difficulty: 1, answer: "What are musical notes" },
      { question: "This section of an orchestra often includes violins and cellos.", difficulty: 1, answer: "What is the string section" },
      { question: "This device keeps a steady tempo for musicians.", difficulty: 1, answer: "What is a metronome" },
      { question: "This composer wrote the Fifth Symphony with the iconic four-note motif.", difficulty: 2, answer: "Who is Beethoven" },
      { question: "This musical scale contains five notes.", difficulty: 2, answer: "What is the pentatonic scale" },
      { question: "This term describes the speed of a piece of music.", difficulty: 2, answer: "What is tempo" },
      { question: "This Russian composer created the ballet 'The Firebird.'", difficulty: 3, answer: "Who is Igor Stravinsky" },
      { question: "This term refers to a chord that contains notes outside the key signature.", difficulty: 3, answer: "What is an altered chord" },
      { question: "This medieval system preceded modern musical notation.", difficulty: 3, answer: "What is neume notation" }
    ]
  },

  {
    category: "Movies & TV",
    questions: [
      { question: "This movie series features a boy wizard named Harry.", difficulty: 1, answer: "What is Harry Potter" },
      { question: "This sci-fi franchise features the USS Enterprise.", difficulty: 1, answer: "What is Star Trek" },
      { question: "This green ogre stars in a 2001 DreamWorks film.", difficulty: 1, answer: "Who is Shrek" },
      { question: "This director created 'Inception' and 'The Dark Knight.'", difficulty: 2, answer: "Who is Christopher Nolan" },
      { question: "This TV series follows the lives of the Stark family in Westeros.", difficulty: 2, answer: "What is Game of Thrones" },
      { question: "This 1977 film introduced the character Darth Vader.", difficulty: 2, answer: "What is Star Wars: A New Hope" },
      { question: "This expressionist 1920 film features twisted sets and a somnambulist.", difficulty: 3, answer: "What is The Cabinet of Dr. Caligari" },
      { question: "This Japanese director created 'Ran' and 'Seven Samurai.'", difficulty: 3, answer: "Who is Akira Kurosawa" },
      { question: "This French New Wave icon directed 'Breathless.'", difficulty: 3, answer: "Who is Jean-Luc Godard" }
    ]
  },

  {
    category: "Religion",
    questions: [
      { question: "This book is the central scripture of Christianity.", difficulty: 1, answer: "What is the Bible" },
      { question: "This monotheistic religion follows the teachings of Muhammad.", difficulty: 1, answer: "What is Islam" },
      { question: "This religion includes the Four Noble Truths.", difficulty: 1, answer: "What is Buddhism" },
      { question: "This is the Jewish day of rest.", difficulty: 2, answer: "What is the Sabbath" },
      { question: "This branch of Christianity split from Rome in 1054.", difficulty: 2, answer: "What is Eastern Orthodoxy" },
      { question: "This Hindu scripture is a dialogue between Arjuna and Krishna.", difficulty: 2, answer: "What is the Bhagavad Gita" },
      { question: "This Christian council in 325 AD produced the original Nicene Creed.", difficulty: 3, answer: "What is the Council of Nicaea" },
      { question: "This term means the study of end times.", difficulty: 3, answer: "What is eschatology" },
      { question: "This founder of Sikhism was born in 1469.", difficulty: 3, answer: "Who is Guru Nanak" }
    ]
  },

  {
    category: "Computers & Tech",
    questions: [
      { question: "This device displays the visual output of a computer.", difficulty: 1, answer: "What is a monitor" },
      { question: "This storage device uses spinning magnetic disks.", difficulty: 1, answer: "What is an HDD" },
      { question: "This port type is commonly used to charge smartphones.", difficulty: 1, answer: "What is USB" },
      { question: "This part of the computer acts as the 'brain' that performs calculations.", difficulty: 2, answer: "What is the CPU" },
      { question: "This company created the Windows operating system.", difficulty: 2, answer: "What is Microsoft" },
      { question: "This network device forwards data packets between networks.", difficulty: 2, answer: "What is a router" },
      { question: "This protocol secures web traffic with encryption.", difficulty: 3, answer: "What is HTTPS" },
      { question: "This type of database stores data as documents rather than tables.", difficulty: 3, answer: "What is a NoSQL database" },
      { question: "This scheduling algorithm selects the process with the smallest next CPU burst.", difficulty: 3, answer: "What is Shortest Job Next" }
    ]
  },

  {
    category: "General Knowledge",
    questions: [
      { question: "This animal is known as the king of the jungle.", difficulty: 1, answer: "What is the lion" },
      { question: "This planet is known as the Red Planet.", difficulty: 1, answer: "What is Mars" },
      { question: "This is the largest mammal on Earth.", difficulty: 1, answer: "What is the blue whale" },
      { question: "This language has the most native speakers worldwide.", difficulty: 2, answer: "What is Mandarin Chinese" },
      { question: "This Italian city is famous for its canals.", difficulty: 2, answer: "What is Venice" },
      { question: "This fruit was the first to be genetically modified for commercial sale.", difficulty: 2, answer: "What is the Flavr Savr tomato" },
      { question: "This philosopher wrote 'The Republic.'", difficulty: 3, answer: "Who is Plato" },
      { question: "This chemical element has the highest melting point.", difficulty: 3, answer: "What is tungsten" },
      { question: "This desert is the coldest in the world.", difficulty: 3, answer: "What is the Antarctic Desert" }
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

function getQuestions(category, difficulty, chooseOne) {
    let eligibleQuestions = [];
    if (!category || !Array.isArray(category.questions)) return chooseOne ? null : [];
    for (let i = 0; i < category.questions.length; i++) {
        if (category.questions[i].difficulty == difficulty) {
            eligibleQuestions.push(category.questions[i]);
        }
    }

    if (chooseOne) {
      if (eligibleQuestions.length === 0) return null;
      // fix: pick a valid index (0..length-1)
      const rand = getRandomInt(0, eligibleQuestions.length - 1);
      return eligibleQuestions[rand];
    } else {
      return eligibleQuestions;
    }
}

function generateBoard(rows, columns, increment, questionsArr) {
    const table = document.createElement("table");
    let money = 0;
    
    // Store categories for each column
    const columnCategories = [];
    // Track used questions per column
    const usedQuestions = []; // Array of arrays
    
    const headRow = table.insertRow();
    for (let j = 0; j < columns; j++) {
        const th = document.createElement('th');
        if (!Array.isArray(questionsArr) || questionsArr.length === 0) {
            th.textContent = "";
            headRow.appendChild(th);
            columnCategories.push(null);
            usedQuestions.push([]);
            continue;
        }

        let chosenCategory = getRandomInt(0, questionsArr.length - 1);
        if (chosenCategory < 0 || chosenCategory >= questionsArr.length) {
            th.textContent = "";
            columnCategories.push(null);
            usedQuestions.push([]);
        } else {
            th.textContent = questionsArr[chosenCategory].category;
            columnCategories.push(questionsArr[chosenCategory]);
            usedQuestions.push([]); // Initialize empty array for this column
            questionsArr.splice(chosenCategory, 1);
        }
        headRow.appendChild(th);
    }
    
    for (let i = 0; i < rows; i++) {
        const row = table.insertRow();
        money += increment;
        const difficulty = i + 1;
        
        for (let j = 0; j < columns; j++) {
            const cell = row.insertCell();
            
            // Get all eligible questions for this difficulty
            const eligibleQuestions = getQuestions(columnCategories[j], difficulty, false);
            
            // Filter out already used questions
            const availableQuestions = eligibleQuestions.filter(q => 
                !usedQuestions[j].includes(q.question)
            );
            
            let chosenQuestion = null;
            if (availableQuestions.length > 0) {
                const randomIndex = getRandomInt(0, availableQuestions.length - 1);
                chosenQuestion = availableQuestions[randomIndex];
                usedQuestions[j].push(chosenQuestion.question); // Mark as used
            }
            
            const questionAnchor = document.createElement('a');
            questionAnchor.classList.add("questionBox");
            questionAnchor.href = "#";
            questionAnchor.textContent = money;
            
            if (chosenQuestion) {
                questionAnchor.onclick = function() {
                    window.alert(chosenQuestion.question);
                };
            } else {
                questionAnchor.onclick = function() {
                    window.alert("No question available");
                };
            }
            
            cell.appendChild(questionAnchor);
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