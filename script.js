const quizData = [
    { question: "What squad does Asta belong to?", options: ["Golden Dawn", "Black Bulls", "Silver Eagles", "Crimson Lion"], correct: 1 },
    { question: "Who is the Wizard King of Clover Kingdom?", options: ["Yami Sukehiro", "Nozel Silva", "Julius Novachrono", "William Vangeance"], correct: 2 },
    { question: "What is Asta's main power?", options: ["Fire Magic", "Anti-Magic", "Wind Magic", "Dark Magic"], correct: 1 },
    { question: "What type of Grimoire does Yuno have?", options: ["3-Clover", "4-Clover", "5-Clover", "No Grimoire"], correct: 1 },
    { question: "What is the name of Asta's first and heaviest sword?", options: ["Demon-Dweller", "Demon-Slayer", "Demon-Destroyer", "Demon-Slasher"], correct: 1 },
    { question: "Who is the Captain of the Black Bulls?", options: ["Fuegoleon", "Yami Sukehiro", "Jack the Ripper", "Rill Boismortier"], correct: 1 },
    { question: "What kind of magic does Noelle Silva use?", options: ["Fire Magic", "Water Magic", "Light Magic", "Spatial Magic"], correct: 1 },
    { question: "What is the name of the devil inside Asta's grimoire?", options: ["Zagred", "Liebe", "Lucifero", "Megicula"], correct: 1 },
    { question: "Where did Asta and Yuno grow up together?", options: ["Hage Village", "Royal Capital", "Heart Kingdom", "Spade Kingdom"], correct: 0 },
    { question: "What is Yami's famous catchphrase?", options: ["I will be the Wizard King", "Surpass your limits", "Give up on your dreams", "Protect the kingdom"], correct: 1 },
    { question: "What squad is led by William Vangeance?", options: ["Golden Dawn", "Aqua Deer", "Coral Peacock", "Green Praying Mantis"], correct: 0 },
    { question: "What magic attribute does Captain Yami have?", options: ["Light Magic", "Dark Magic", "Shadow Magic", "Thread Magic"], correct: 1 },
    { question: "What creature is Nero's true form?", options: ["A Dragon", "A Bird (Anti-Bird)", "A Cat", "A Fox"], correct: 1 },
    { question: "What is Nero's real human name?", options: ["Secre Swallowtail", "Acier Silva", "Lolopechika", "Vanica Zogratis"], correct: 0 },
    { question: "Who is the first Wizard King of the Clover Kingdom?", options: ["Lumiere Silvamillion Clover", "Julius Novachrono", "Conrad Leto", "Licht"], correct: 0 },
    { question: "What magic does Finral Roulacase use?", options: ["Spatial Magic", "Time Magic", "Chain Magic", "Permeation Magic"], correct: 0 },
    { question: "Who is Finral's younger brother?", options: ["Langris Vaude", "Solid Silva", "Leopold Vermillion", "Klaus Lunettes"], correct: 0 },
    { question: "What is Charmy Pappitson's favorite thing to do?", options: ["Sleeping", "Fighting", "Eating and Cooking", "Reading"], correct: 2 },
    { question: "Charmy is a hybrid of a human and what race?", options: ["Elf", "Devil", "Dwarf", "Giant"], correct: 2 },
    { question: "What magic does Luck Voltia use?", options: ["Lightning Magic", "Fire Magic", "Wind Magic", "Plant Magic"], correct: 0 },
    { question: "Who is the leader of the Midnight Sun?", options: ["Patolli (Licht)", "Rhya", "Vetto", "Fana"], correct: 0 },
    { question: "What race did the humans betray 500 years ago?", options: ["Spirits", "Dwarves", "Elves", "Giants"], correct: 2 },
    { question: "Which magic spirit does Yuno possess?", options: ["Salamander (Fire)", "Sylph (Wind)", "Undine (Water)", "Gnome (Earth)"], correct: 1 },
    { question: "Who is the Captain of the Crimson Lion Kings?", options: ["Fuegoleon Vermillion", "Mereoleona Vermillion", "Leopold Vermillion", "Both 0 and 1"], correct: 3 },
    { question: "Which spirit chose Fuegoleon Vermillion?", options: ["Sylph", "Undine", "Salamander", "Gnome"], correct: 2 },
    { question: "What magic does Magna Swing use?", options: ["Ice Magic", "Fire Magic", "Earth Magic", "Iron Magic"], correct: 1 },
    { question: "What is the name of Magna's ultimate spell developed to fight Dante?", options: ["Soul Chain Death Match", "Flame Exploding Cannon", "Soul Soul Magic", "Extreme Fire Strike"], correct: 0 },
    { question: "Who is the sister that Gauche Adlai is completely obsessed with?", options: ["Marie", "Rebecca", "Grey", "Fana"], correct: 0 },
    { question: "What magic does Gauche use?", options: ["Glass Magic", "Mirror Magic", "Crystal Magic", "Light Magic"], correct: 1 },
    { question: "What was Grey's magic thought to be before her true magic was revealed?", options: ["Transformation Magic", "Transmutation Magic", "Gel Magic", "Smoke Magic"], correct: 0 },
    { question: "What is Grey's actual true magic attribute?", options: ["Transmutation Magic", "Curse Magic", "Healing Magic", "Iron Magic"], correct: 0 },
    { question: "Gordon Agrippa specializes in what type of magic?", options: ["Poison Magic", "Curse Magic", "Shadow Magic", "Bone Magic"], correct: 0 },
    { question: "Who is the Captain of the Silver Eagles?", options: ["Nozel Silva", "Solid Silva", "Nebra Silva", "Acier Silva"], correct: 0 },
    { question: "What is the name of the captain of the Blue Rose Knights?", options: ["Charlotte Roselei", "Dorothy Unsworth", "Rill Boismortier", "Jack"], correct: 0 },
    { question: "What is the name of Dorothy Unsworth's dream world?", options: ["Glamour World", "Fantasy Zone", "Sleepy Hollow", "Nightmare Realm"], correct: 0 },
    { question: "Who is the youngest Magic Knight Captain?", options: ["Rill Boismortier", "Yuno", "Leo", "Langris"], correct: 0 },
    { question: "What magic does Rill Boismortier use?", options: ["Picture Magic", "Painting Magic", "Ink Magic", "Color Magic"], correct: 1 },
    { question: "Who is the Captain of the Green Praying Mantises?", options: ["Jack the Ripper", "En Ringard", "Sekke Bronzazza"], correct: 0 },
    { question: "What is Sekke Bronzazza's famous catchphrase?", options: ["Ha-ha!", "Ho-ho!", "Yo-yo!", "Bah-bah!"], correct: 0 },
    { question: "What group rules the Spade Kingdom?", options: ["The Dark Triad", "The Eye of the Midnight Sun", "The Diamond Generals", "The Magic Parliament"], correct: 0 },
    { question: "Who are the members of the Dark Triad?", options: ["Dante, Vanica, Zenon", "Licht, Rhya, Vetto", "Patolli, Fana, Zagred", "Lucius, Julius, Liebe"], correct: 0 },
    { question: "Who is the ruler of the Heart Kingdom?", options: ["Princess Lolopechika", "Queen Gadjah", "Undine", "Vanica"], correct: 0 },
    { question: "What magic does Zenon Zogratis use primarily?", options: ["Bone Magic", "Blood Magic", "Body Magic", "Gravity Magic"], correct: 0 },
    { question: "What devil is hosted by Vanica Zogratis?", options: ["Megicula", "Lucifero", "Beelzebub", "Belial"], correct: 0 },
    { question: "What magic does Dante Zogratis use alongside Body Magic?", options: ["Gravity Magic", "Spatial Magic", "Time Magic", "Soul Magic"], correct: 0 },
    { question: "Who is the Vice-Captain of the Black Bulls who uses Shadow Magic?", options: ["Nacht Faust", "Zora Ideale", "Henry Legolant", "Morgen Faust"], correct: 0 },
    { question: "What magic does Zora Ideale use?", options: ["Ash Trap Magic", "Fire Magic", "Poison Magic", "Creation Magic"], correct: 0 },
    { question: "Who lives inside the Black Bulls hideout and manipulates its structure?", options: ["Henry Legolant", "Nacht Faust", "Gordon", "Grey"], correct: 0 },
    { question: "What does a 5-Clover grimoire represent?", options: ["A Devil", "Good Luck", "A Noble", "Infinite Mana"], correct: 0 },
    { question: "Who is the eldest sibling of the Zogratis family and the final villain?", options: ["Lucius Zogratis", "Dante Zogratis", "Zenon Zogratis", "Julius Novachrono"], correct: 0 }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuiz() {
    if (currentQuestionIndex < quizData.length) {
        
        document.getElementById("question-number").innerText = "Question " + (currentQuestionIndex + 1) + " of " + quizData.length;

        let currentQuiz = quizData[currentQuestionIndex];
        document.getElementById("question").innerText = currentQuiz.question;
        
        let buttons = document.querySelectorAll(".option-btn");
        buttons.forEach((button, index) => {
            button.innerText = currentQuiz.options[index];
        });
    } else {
        showResult();
    }
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === quizData[currentQuestionIndex].correct) {
        score++;
    }
    currentQuestionIndex++;
    loadQuiz();
}

function showResult() {
    document.getElementById("quiz-box").classList.add("hidden");
    document.getElementById("result-box").classList.remove("hidden");
    document.getElementById("score-text").innerText = "You scored " + score + " out of " + quizData.length + "!";
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("quiz-box").classList.remove("hidden");
    document.getElementById("result-box").classList.add("hidden");
    loadQuiz();
}

loadQuiz();