// Quiz Data
const quizData = {
  HTML: [
    {
      q: "What does HTML stand for?",
      options: [
        "Hypertext Markup Language",
        "High Tech Modern Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
      ],
      correct: 0,
    },
    { q: "Which tag is used for the largest heading?", options: ["<h6>", "<h3>", "<h1>", "<heading>"], correct: 2 },
    {
      q: "What is the correct way to comment in HTML?",
      options: ["// comment", "/* comment */", "<!-- comment -->", "# comment"],
      correct: 2,
    },
    {
      q: "Which tag is used to define a form input field?",
      options: ["<input>", "<form>", "<input-field>", "<field>"],
      correct: 0,
    },
    {
      q: "What does the <meta> tag do?",
      options: ["Defines styles", "Provides metadata about the document", "Creates links", "Displays images"],
      correct: 1,
    },
    {
      q: "Which tag is used to link an external CSS file?",
      options: ["<style>", "<link>", "<css>", "<stylesheet>"],
      correct: 1,
    },
    {
      q: "What is the purpose of the <alt> attribute?",
      options: ["Alternative text for images", "Alternate styling", "Alternative links", "Alternative colors"],
      correct: 0,
    },
    { q: "Which tag is used for line breaks?", options: ["<br>", "<break>", "<lb>", "<newline>"], correct: 0 },
    {
      q: "What does the semantic tag <article> represent?",
      options: [
        "A list of articles",
        "Independent content that can stand alone",
        "An article title",
        "An article comment",
      ],
      correct: 1,
    },
    {
      q: "Which HTML5 feature allows offline functionality?",
      options: ["Local Storage", "Session Storage", "Service Workers", "All of the above"],
      correct: 3,
    },
  ],
  CSS: [
    {
      q: "What does CSS stand for?",
      options: ["Computer Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets", "Creative Style Sheets"],
      correct: 1,
    },
    {
      q: "Which property is used to change the text color?",
      options: ["font-color", "text-color", "color", "text-style"],
      correct: 2,
    },
    {
      q: "How do you select an element with id 'header'?",
      options: [".header", "#header", "*header", "header#"],
      correct: 1,
    },
    {
      q: "Which property is used to add space outside an element?",
      options: ["padding", "margin", "border", "outline"],
      correct: 1,
    },
    {
      q: "What is the default value of the position property?",
      options: ["absolute", "relative", "static", "fixed"],
      correct: 2,
    },
    {
      q: "Which CSS property controls text alignment?",
      options: ["text-align", "alignment", "align-text", "text-position"],
      correct: 0,
    },
    {
      q: "How do you make a rounded corner with CSS?",
      options: ["border-radius", "corner-radius", "rounded-border", "border-round"],
      correct: 0,
    },
    {
      q: "What does 'box-sizing: border-box' do?",
      options: [
        "Adds a box around elements",
        "Includes padding and border in element's total width and height",
        "Changes border style",
        "Creates a shadow box",
      ],
      correct: 1,
    },
    {
      q: "Which property is used to create a shadow effect?",
      options: ["shadow", "box-shadow", "text-shadow", "All of the above"],
      correct: 3,
    },
    {
      q: "What is the CSS specificity of an element selector?",
      options: ["0,0,1", "0,1,0", "1,0,0", "1,1,1"],
      correct: 0,
    },
  ],
  JavaScript: [
    {
      q: "What does JavaScript stand for?",
      options: [
        "Java Source Code",
        "JavaScript Programming",
        "A scripting language for web browsers",
        "Java Script Language",
      ],
      correct: 2,
    },
    {
      q: "Which method is used to find an element by its id?",
      options: ["getElementById()", "getElement()", "getElementById", "query()"],
      correct: 0,
    },
    {
      q: "What is the output of typeof undefined?",
      options: ["'undefined'", "'null'", "'object'", "'empty'"],
      correct: 0,
    },
    {
      q: "How do you declare a variable in JavaScript?",
      options: ["variable name = 5", "var name = 5", "declare name = 5", "name = 5"],
      correct: 1,
    },
    {
      q: "Which array method adds an element to the end?",
      options: ["pop()", "push()", "shift()", "unshift()"],
      correct: 1,
    },
    {
      q: "What is the correct way to write a comment in JavaScript?",
      options: ["// This is a comment", "<!-- This is a comment -->", "** This is a comment **", "# This is a comment"],
      correct: 0,
    },
    {
      q: "What does the 'return' statement do?",
      options: [
        "Stops the function and returns a value",
        "Continues the function",
        "Breaks the loop",
        "Exits the program",
      ],
      correct: 0,
    },
    {
      q: "How do you create a function in JavaScript?",
      options: ["function myFunc() {}", "def myFunc():", "function: myFunc() {}", "func myFunc() {}"],
      correct: 0,
    },
    {
      q: "What is the difference between '==' and '==='?",
      options: [
        "'==' is faster",
        "'===' checks type and value, '==' only checks value",
        "'==' checks type and value, '===' only checks value",
        "No difference",
      ],
      correct: 1,
    },
    {
      q: "Which object is used for timing events?",
      options: ["Date object", "Time object", "Event object", "setTimeout/setInterval"],
      correct: 3,
    },
  ],
  Python: [
    {
      q: "What does Python stand for?",
      options: [
        "Programming Young Language",
        "A high-level programming language",
        "Python Upgrade Technology",
        "Program Yield Language",
      ],
      correct: 1,
    },
    {
      q: "Which keyword is used to define a function in Python?",
      options: ["function", "def", "func", "define"],
      correct: 1,
    },
    { q: "How do you create a list in Python?", options: ["list()", "[]", "Both A and B", "{1, 2, 3}"], correct: 2 },
    {
      q: "What is the correct way to comment in Python?",
      options: ["// comment", "/* comment */", "# comment", "<!-- comment -->"],
      correct: 2,
    },
    {
      q: "Which method is used to add an element to a list?",
      options: ["add()", "append()", "insert()", "push()"],
      correct: 1,
    },
    { q: "What is the output of len('hello')?", options: ["4", "5", "6", "'hello'"], correct: 1 },
    { q: "Which data type is immutable in Python?", options: ["List", "Dictionary", "Tuple", "Set"], correct: 2 },
    {
      q: "How do you import a module in Python?",
      options: ["include module", "import module", "require module", "load module"],
      correct: 1,
    },
    {
      q: "What is the range of a slice [1:4]?",
      options: ["Indices 1, 2, 3, 4", "Indices 1, 2, 3", "Indices 0, 1, 2, 3", "Indices 2, 3, 4"],
      correct: 1,
    },
    {
      q: "Which library is commonly used for numerical computing?",
      options: ["Pandas", "NumPy", "Matplotlib", "Django"],
      correct: 1,
    },
  ],
  "C++": [
    {
      q: "What does C++ stand for?",
      options: ["C Plus Plus", "An extension of C", "A programming language", "All of the above"],
      correct: 3,
    },
    {
      q: "Which keyword is used to declare a variable in C++?",
      options: ["var", "let", "int/double/string etc.", "declare"],
      correct: 2,
    },
    {
      q: "How do you create a function in C++?",
      options: ["function name() {}", "name() {}", "returnType name() {}", "func name() {}"],
      correct: 2,
    },
    {
      q: "What is the correct way to comment in C++?",
      options: ["# comment", "<!-- comment -->", "// comment or /* comment */", "-- comment"],
      correct: 2,
    },
    { q: "Which symbol is used to access members of a struct?", options: ["-", "->", ".", "Both B and C"], correct: 3 },
    {
      q: "What is the purpose of 'std::cout'?",
      options: ["Input data", "Output data", "Store data", "Process data"],
      correct: 1,
    },
    {
      q: "How do you declare an array in C++?",
      options: ["array[10]", "int arr[10]", "new array[10]", "create array[10]"],
      correct: 1,
    },
    {
      q: "What is a pointer in C++?",
      options: ["A function", "A variable that stores memory address", "A data type", "An operator"],
      correct: 1,
    },
    {
      q: "Which keyword is used for inheritance?",
      options: ["extend", "inherits", "inherit", "public/private/protected"],
      correct: 3,
    },
    {
      q: "What is the purpose of a constructor?",
      options: ["Destroy objects", "Initialize objects", "Copy objects", "Delete objects"],
      correct: 1,
    },
  ],
  general: [
    { q: "What is the capital of France?", options: ["London", "Berlin", "Paris", "Madrid"], correct: 2 },
    {
      q: "Who invented the telephone?",
      options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Benjamin Franklin"],
      correct: 1,
    },
    {
      q: "What is the largest planet in our solar system?",
      options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
      correct: 1,
    },
    { q: "In which year did the Titanic sink?", options: ["1912", "1920", "1905", "1925"], correct: 0 },
    {
      q: "What is the smallest country in the world?",
      options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
      correct: 2,
    },
    {
      q: "Who wrote 'Romeo and Juliet'?",
      options: ["Jane Austen", "William Shakespeare", "Charles Dickens", "Mark Twain"],
      correct: 1,
    },
    { q: "What is the chemical symbol for Gold?", options: ["Go", "Gd", "Au", "Ag"], correct: 2 },
    { q: "Which country has the most populous city?", options: ["China", "India", "Japan", "Russia"], correct: 0 },
    {
      q: "What is the speed of light?",
      options: ["3 x 10^8 m/s", "2 x 10^8 m/s", "5 x 10^8 m/s", "1 x 10^8 m/s"],
      correct: 0,
    },
    {
      q: "Who painted the Mona Lisa?",
      options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
      correct: 2,
    },
    { q: "What is the currency of Japan?", options: ["Won", "Yuan", "Yen", "Rupee"], correct: 2 },
    {
      q: "Which is the longest river in the world?",
      options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
      correct: 1,
    },
  ],
}

// State Management
let currentQuiz = []
let currentQuestionIndex = 0
let correctAnswers = 0
let timerInterval = null
let timeRemaining = 1200
let quizStarted = false

// Initialize App
function init() {
  showScreen("home-screen")
}

// Show Screen
function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"))
  document.getElementById(screenId).classList.add("active")
}

// Start Quiz
function startQuiz(type) {
  if (type === "coding") {
    showScreen("category-screen")
  } else if (type === "general") {
    currentQuiz = [...quizData.general]
    currentQuestionIndex = 0
    correctAnswers = 0
    timeRemaining = 1200
    quizStarted = true
    showScreen("quiz-screen")
    displayQuestion()
    startTimer()
  }
}

function startCodingQuiz(language) {
  currentQuiz = [...quizData[language]]
  currentQuestionIndex = 0
  correctAnswers = 0
  timeRemaining = 1200
  quizStarted = true
  showScreen("quiz-screen")
  displayQuestion()
  startTimer()
}

// Timer Functions
function startTimer() {
  if (timerInterval) clearInterval(timerInterval)
  timerInterval = setInterval(() => {
    timeRemaining--
    updateTimer()
    if (timeRemaining <= 0) {
      endQuiz()
    }
  }, 1000)
}

function updateTimer() {
  const minutes = Math.floor(timeRemaining / 60)
  const seconds = timeRemaining % 60
  const timerEl = document.getElementById("timer")
  if (timerEl) {
    timerEl.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
  }
}

// Display Question
function displayQuestion() {
  const question = currentQuiz[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / currentQuiz.length) * 100

  document.getElementById("currentQuestion").textContent = currentQuestionIndex + 1
  document.getElementById("totalQuestions").textContent = currentQuiz.length
  document.getElementById("questionText").textContent = question.q
  document.getElementById("progressFill").style.width = progress + "%"

  const optionsContainer = document.getElementById("optionsContainer")
  optionsContainer.innerHTML = ""

  question.options.forEach((option, index) => {
    const btn = document.createElement("button")
    btn.className = "option-btn"
    btn.textContent = option
    btn.onclick = () => selectAnswer(index)
    optionsContainer.appendChild(btn)
  })
}

// Select Answer
function selectAnswer(index) {
  const question = currentQuiz[currentQuestionIndex]
  const buttons = document.querySelectorAll(".option-btn")

  buttons.forEach((btn) => btn.classList.add("answered"))

  if (index === question.correct) {
    buttons[index].classList.add("correct")
    correctAnswers++
  } else {
    buttons[index].classList.add("incorrect")
    buttons[question.correct].classList.add("correct")
  }

  setTimeout(() => {
    if (currentQuestionIndex < currentQuiz.length - 1) {
      currentQuestionIndex++
      displayQuestion()
    } else {
      endQuiz()
    }
  }, 1500)
}

// End Quiz
function endQuiz() {
  clearInterval(timerInterval)
  quizStarted = false

  const total = currentQuiz.length
  const wrong = total - correctAnswers
  const percentage = Math.round((correctAnswers / total) * 100)

  document.getElementById("totalStat").textContent = total
  document.getElementById("correctStat").textContent = correctAnswers
  document.getElementById("wrongStat").textContent = wrong
  document.getElementById("percentageStat").textContent = percentage + "%"

  showScreen("result-screen")
}

// Restart Quiz
function restartQuiz() {
  currentQuestionIndex = 0
  correctAnswers = 0
  timeRemaining = 1200
  quizStarted = true
  displayQuestion()
  showScreen("quiz-screen")
  startTimer()
}

// Go Home
function goHome() {
  clearInterval(timerInterval)
  currentQuiz = []
  currentQuestionIndex = 0
  correctAnswers = 0
  timeRemaining = 1200
  quizStarted = false
  showScreen("home-screen")
}

// Initialize on page load
window.addEventListener("DOMContentLoaded", init)
