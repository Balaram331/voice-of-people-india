const QUESTIONS = [

    // 🧠 PATTERN
  {
    q: "2, 6, 12, 20, 30, ?",
    options: ["36", "40", "42", "45"],
    ans: "42"
  },
  {
    q: "10, 20, 30, 40, 50, ?",
    options: ["55", "60", "65", "70"],
    ans: "60"
  },
  {
    q: "Z, X, V, T, ?",
    options: ["R", "S", "U", "Q"],
    ans: "R"
  },
  {
    q: "1, 8, 27, 64, ?",
    options: ["100", "121", "125", "150"],
    ans: "125"
  },

  // 🔢 MATH
  {
    q: "9 + 9 ÷ 9 + 9 × 9 - 9 = ?",
    options: ["81", "82", "72", "90"],
    ans: "82"
  },
  {
    q: "Half of 2 plus 2 is?",
    options: ["2", "3", "4", "1"],
    ans: "3"
  },
  {
    q: "If 5x = 25, then x + 10 = ?",
    options: ["10", "15", "20", "25"],
    ans: "15"
  },
  {
    q: "How many sides does a Hexagon have?",
    options: ["5", "6", "7", "8"],
    ans: "6"
  },

  // 🧠 LOGIC & RIDDLES
  {
    q: "A clock shows 3:15. If the clock is rotated 90 degrees clockwise, what is the time?",
    options: ["6:15", "6:30", "12:15", "9:15"],
    ans: "6:15"
  },
  {
    q: "Which word is spelled incorrectly in every dictionary?",
    options: ["Incorrectly", "Correctly", "Dictionary", "Mispelled"],
    ans: "Incorrectly"
  },
  {
    q: "The more you take, the more you leave behind. What am I?",
    options: ["Money", "Time", "Footsteps", "Shadow"],
    ans: "Footsteps"
  },
  {
    q: "If 1=5, 2=25, 3=125, 4=625, then 5 = ?",
    options: ["3125", "1", "5", "2500"],
    ans: "1"
  },

  // ⚡ ODD ONE OUT
  {
    q: "Find the odd one:",
    options: ["Facebook", "Instagram", "Twitter", "WhatsApp"],
    ans: "WhatsApp"
  },
  {
    q: "Which one is different?",
    options: ["Leopard", "Tiger", "Lion", "Wolf"],
    ans: "Wolf"
  },
  {
    q: "Find the odd one:",
    options: ["January", "March", "May", "June"],
    ans: "June"
  },
  {
    q: "Which one doesn't belong?",
    options: ["Piano", "Guitar", "Violin", "Flute"],
    ans: "Flute"
  },

  // 🌍 GENERAL KNOWLEDGE
  {
    q: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Saturn", "Mercury"],
    ans: "Mars"
  },
  {
    q: "What is the capital of Japan?",
    options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
    ans: "Tokyo"
  },
  {
    q: "Who painted the Mona Lisa?",
    options: ["Picasso", "Da Vinci", "Van Gogh", "Michelangelo"],
    ans: "Da Vinci"
  },
  {
    q: "Which gas do humans breathe out?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    ans: "Carbon Dioxide"
  },
    // 🧠 PATTERN
  {
    q: "2, 5, 10, 17, ?",
    options: ["24", "25", "26", "27"],
    ans: "26"
  },
  {
    q: "1000, 500, 250, ?",
    options: ["125", "100", "75", "50"],
    ans: "125"
  },
  {
    q: "J, F, M, A, M, J, ?",
    options: ["A", "S", "J", "N"],
    ans: "J" // Months: July
  },
  {
    q: "11, 22, 33, 44, ?",
    options: ["45", "55", "66", "50"],
    ans: "55"
  },

  // 🔢 MATH
  {
    q: "Which is the only even prime number?",
    options: ["0", "2", "4", "6"],
    ans: "2"
  },
  {
    q: "How many degrees are in a circle?",
    options: ["180", "270", "360", "400"],
    ans: "360"
  },
  {
    q: "7 + 7 ÷ 7 + 7 × 7 - 7 = ?",
    options: ["0", "42", "50", "56"],
    ans: "50"
  },
  {
    q: "How many zeros are in one million?",
    options: ["5", "6", "7", "8"],
    ans: "6"
  },

  // 🧠 LOGIC & RIDDLES
  {
    q: "What has keys but can't open locks?",
    options: ["Piano", "Door", "Box", "Car"],
    ans: "Piano"
  },
  {
    q: "If you're running a race and you pass the person in second place, what place are you in?",
    options: ["1st", "2nd", "3rd", "Last"],
    ans: "2nd"
  },
  {
    q: "Which month has 28 days?",
    options: ["February", "March", "All of them", "None"],
    ans: "All of them"
  },
  {
    q: "A boy has 5 apples and you take away 3. How many apples do YOU have?",
    options: ["2", "3", "5", "0"],
    ans: "3"
  },

  // ⚽ SPORTS & FUN
  {
    q: "How many players are there in a football team (on field)?",
    options: ["10", "11", "12", "9"],
    ans: "11"
  },
  {
    q: "Which sport uses the term 'LBW'?",
    options: ["Football", "Cricket", "Tennis", "Hockey"],
    ans: "Cricket"
  },
  {
    q: "What is the color of a 'Black Box' in an airplane?",
    options: ["Black", "White", "Orange", "Red"],
    ans: "Orange"
  },

  // ⚡ ODD ONE OUT
  {
    q: "Find the odd one:",
    options: ["Gold", "Silver", "Iron", "Plastic"],
    ans: "Plastic"
  },
  {
    q: "Which is different?",
    options: ["YouTube", "Netflix", "Hotstar", "Calculator"],
    ans: "Calculator"
  },

  // 🌍 GENERAL KNOWLEDGE
  {
    q: "Largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Pacific", "Arctic"],
    ans: "Pacific"
  },
  {
    q: "Which organ pumps blood in the human body?",
    options: ["Lungs", "Brain", "Liver", "Heart"],
    ans: "Heart"
  },
  {
    q: "Who is known as the 'Father of Computers'?",
    options: ["Newton", "Einstein", "Charles Babbage", "Bill Gates"],
    ans: "Charles Babbage"
  },
    // 🧠 PATTERN
  {
    q: "5, 15, 45, 135, ?",
    options: ["270", "305", "405", "500"],
    ans: "405"
  },
  {
    q: "121, 100, 81, 64, ?",
    options: ["50", "49", "48", "45"],
    ans: "49"
  },
  {
    q: "A1, B2, C3, ?",
    options: ["D3", "E5", "D4", "C4"],
    ans: "D4"
  },
  {
    q: "1, 2, 4, 7, 11, ?",
    options: ["15", "16", "17", "18"],
    ans: "16"
  },

  // 🔢 MATH
  {
    q: "What is 1/4 of 100?",
    options: ["20", "25", "50", "10"],
    ans: "25"
  },
  {
    q: "If a triangle has two equal sides, it is called...?",
    options: ["Scalene", "Equilateral", "Isosceles", "Right"],
    ans: "Isosceles"
  },
  {
    q: "99 + 11 × 0 + 1 = ?",
    options: ["0", "100", "111", "1"],
    ans: "100"
  },
  {
    q: "How many seconds are in 5 minutes?",
    options: ["200", "250", "300", "350"],
    ans: "300"
  },

  // 🧠 LOGIC & RIDDLES
  {
    q: "What comes once in a minute, twice in a moment, but never in a thousand years?",
    options: ["The letter M", "A second", "Time", "Clock"],
    ans: "The letter M"
  },
  {
    q: "I have branches, but no fruit, trunk, or leaves. What am I?",
    options: ["A Tree", "A Bank", "A House", "A River"],
    ans: "A Bank"
  },
  {
    q: "If a doctor gives you 3 pills and tells you to take one every half hour, how long will they last?",
    options: ["1 hour", "1.5 hours", "2 hours", "3 hours"],
    ans: "1 hour" // First at 0 min, second at 30, third at 60.
  },
  {
    q: "Mary’s father has 5 daughters: Nana, Nene, Nini, Nono. What is the 5th daughter's name?",
    options: ["Nunu", "Mary", "Nany", "None"],
    ans: "Mary"
  },

  // 💻 TECH & SCIENCE
  {
    q: "Which company made the iPhone?",
    options: ["Samsung", "Google", "Apple", "Microsoft"],
    ans: "Apple"
  },
  {
    q: "What does 'WWW' stand for?",
    options: ["World Wide Web", "World Wide Word", "Web World Wide", "Wrestling"],
    ans: "World Wide Web"
  },
  {
    q: "How many colors are in a rainbow?",
    options: ["5", "6", "7", "8"],
    ans: "7"
  },

  // ⚡ ODD ONE OUT
  {
    q: "Find the odd one:",
    options: ["Ear", "Eye", "Nose", "Hand"],
    ans: "Hand" // Sense organs
  },
  {
    q: "Which one is different?",
    options: ["Paper", "Wood", "Glass", "Stone"],
    ans: "Glass" // Transparent
  },

  // 🌍 GENERAL KNOWLEDGE
  {
    q: "Which is the tallest animal on Earth?",
    options: ["Elephant", "Giraffe", "Ostrich", "Whale"],
    ans: "Giraffe"
  },
  {
    q: "Who was the first man to step on the Moon?",
    options: ["Elon Musk", "Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin"],
    ans: "Neil Armstrong"
  },
  {
    q: "Which country is called the 'Land of the Rising Sun'?",
    options: ["China", "India", "Japan", "USA"],
    ans: "Japan"
  },
    // 🧠 PATTERN
  {
    q: "0, 1, 1, 2, 3, 5, 8, ?",
    options: ["10", "12", "13", "15"],
    ans: "13" // Fibonacci sequence
  },
  {
    q: "100, 95, 85, 70, ?",
    options: ["50", "60", "45", "55"],
    ans: "50"
  },
  {
    q: "A, E, I, O, ?",
    options: ["P", "U", "V", "X"],
    ans: "U"
  },
  {
    q: "3, 6, 12, 24, ?",
    options: ["36", "40", "48", "50"],
    ans: "48"
  },

  // 🔢 MATH
  {
    q: "How many degrees are in a right angle?",
    options: ["45", "90", "120", "180"],
    ans: "90"
  },
  {
    q: "Square root of 64?",
    options: ["6", "7", "8", "9"],
    ans: "8"
  },
  {
    q: "10 + 10 × 0 + 10 = ?",
    options: ["0", "10", "20", "30"],
    ans: "20"
  },
  {
    q: "How many millimeters are in 1 centimeter?",
    options: ["10", "100", "5", "50"],
    ans: "10"
  },

  // 💻 PROGRAMMING & TECH
  {
    q: "Which one is a programming language?",
    options: ["HTML", "CSS", "Python", "JPG"],
    ans: "Python"
  },
  {
    q: "What does CPU stand for?",
    options: ["Central Process Unit", "Central Processing Unit", "Computer Processing Unit", "Control Power Unit"],
    ans: "Central Processing Unit"
  },
  {
    q: "In binary, what is the value of '10'?",
    options: ["1", "2", "3", "4"],
    ans: "2"
  },
  {
    q: "Which one is a storage device?",
    options: ["RAM", "Monitor", "SSD", "Mouse"],
    ans: "SSD"
  },

  // 🧠 LOGIC & RIDDLES
  {
    q: "What has a neck but no head?",
    options: ["A Bottle", "A Shirt", "A Snake", "A Guitar"],
    ans: "A Bottle"
  },
  {
    q: "Which word becomes shorter when you add two letters to it?",
    options: ["Short", "Small", "Brief", "Long"],
    ans: "Short"
  },
  {
    q: "What gets wet while drying?",
    options: ["Rain", "A Towel", "A Cloud", "A Sponge"],
    ans: "A Towel"
  },

  // ⚡ ODD ONE OUT
  {
    q: "Find the odd one:",
    options: ["Bit", "Byte", "Kilobyte", "Meter"],
    ans: "Meter"
  },
  {
    q: "Which one is not a web browser?",
    options: ["Chrome", "Firefox", "Safari", "Facebook"],
    ans: "Facebook"
  },

  // 🌍 GENERAL KNOWLEDGE
  {
    q: "Which country has the largest population?",
    options: ["India", "China", "USA", "Russia"],
    ans: "India"
  },
  {
    q: "What is the boiling point of water (Celsius)?",
    options: ["90", "100", "110", "120"],
    ans: "100"
  },
  {
    q: "Which is the smallest country in the world?",
    options: ["Monaco", "Vatican City", "Maldives", "Malta"],
    ans: "Vatican City"
  },
    // 🧠 ADVANCED PATTERN
  {
    q: "2, 3, 5, 7, 11, 13, ?",
    options: ["15", "17", "19", "21"],
    ans: "17" // Prime numbers
  },
  {
    q: "8, 27, 64, 125, ?",
    options: ["216", "225", "250", "196"],
    ans: "216" // Cubes (2³, 3³, 4³, 5³, 6³)
  },
  {
    q: "1, 2, 6, 24, 120, ?",
    options: ["600", "720", "840", "1000"],
    ans: "720" // Factorials
  },
  {
    q: "9, 16, 25, 36, ?",
    options: ["47", "48", "49", "50"],
    ans: "49" // Squares
  },

  // 🔢 HARD MATH
  {
    q: "If 2 + 3 = 10, 7 + 2 = 63, 6 + 5 = 66, then 8 + 4 = ?",
    options: ["48", "96", "84", "12"],
    ans: "96" // (a+b)*a
  },
  {
    q: "A bat and a ball cost $1.10. The bat costs $1.00 more than the ball. How much is the ball?",
    options: ["$0.10", "$0.05", "$0.15", "$0.01"],
    ans: "$0.05"
  },
  {
    q: "What is the square root of 0.16?",
    options: ["0.4", "0.04", "4", "0.8"],
    ans: "0.4"
  },
  {
    q: "What is 2 + 2 × 2 ÷ 2 - 2?",
    options: ["0", "2", "4", "1"],
    ans: "2"
  },

  // 💻 PRO PROGRAMMING
  {
    q: "Which of these is NOT a reserved word in JavaScript?",
    options: ["interface", "throws", "program", "short"],
    ans: "program"
  },
  {
    q: "What is the output of: console.log(typeof NaN)?",
    options: ["number", "string", "undefined", "object"],
    ans: "number"
  },
  {
    q: "In CSS, what does 'RGB' stand for?",
    options: ["Red Green Blue", "Real Gold Black", "Red Gray Brown", "Run Go Back"],
    ans: "Red Green Blue"
  },
  {
    q: "Which HTTP status code means 'Not Found'?",
    options: ["200", "404", "500", "403"],
    ans: "404"
  },

  // 🧠 LOGIC & BRAIN TEASERS
  {
    q: "A man describes his daughters: 'They are all blonde, but two; all brunette, but two; and all redhead, but two.' How many daughters does he have?",
    options: ["2", "3", "4", "6"],
    ans: "3"
  },
  {
    q: "What is always coming but never arrives?",
    options: ["Yesterday", "Tomorrow", "The Train", "Death"],
    ans: "Tomorrow"
  },
  {
    q: "If you have me, you want to share me. If you share me, you haven't got me. What am I?",
    options: ["Secret", "Love", "Money", "Advice"],
    ans: "Secret"
  },

  // ⚡ ODD ONE OUT (TRICKY)
  {
    q: "Find the odd one:",
    options: ["Oxygen", "Hydrogen", "Nitrogen", "Mercury"],
    ans: "Mercury" // Only liquid metal
  },
  {
    q: "Which one doesn't belong?",
    options: ["Tokyo", "Paris", "New York", "London"],
    ans: "New York" // Not a capital city
  },

  // 🌍 SCIENCE & GK
  {
    q: "Which planet has the most moons?",
    options: ["Jupiter", "Saturn", "Mars", "Earth"],
    ans: "Saturn"
  },
  {
    q: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Graphite"],
    ans: "Diamond"
  },
  {
    q: "Which element has the symbol 'Au'?",
    options: ["Silver", "Aluminum", "Gold", "Argon"],
    ans: "Gold"
  },
    // 🔢 ADVANCED MATH (JEE LEVEL)
  {
    q: "If f(x) = x² + 2, then f(f(1)) = ?",
    options: ["3", "9", "11", "13"],
    ans: "11" // f(1)=3, f(3)=3²+2=11
  },
  {
    q: "Value of log₁₀(1000) - log₁₀(10)?",
    options: ["1", "2", "3", "100"],
    ans: "2" // 3 - 1 = 2
  },
  {
    q: "What is the derivative of sin(x)?",
    options: ["cos(x)", "-cos(x)", "tan(x)", "sec(x)"],
    ans: "cos(x)"
  },
  {
    q: "How many subsets does a set with 3 elements have?",
    options: ["3", "6", "8", "9"],
    ans: "8" // 2³ = 8
  },

  // 🧪 CHEMISTRY (MAINS LEVEL)
  {
    q: "Which of the following has a linear shape?",
    options: ["H2O", "SO2", "CO2", "NO2"],
    ans: "CO2"
  },
  {
    q: "What is the oxidation state of Oxygen in H2O2?",
    options: ["-2", "-1", "0", "+1"],
    ans: "-1"
  },
  {
    q: "The pH of a neutral solution at 25°C is?",
    options: ["0", "1", "7", "14"],
    ans: "7"
  },
  {
    q: "Which element has the electronic configuration 1s² 2s² 2p⁶?",
    options: ["Neon", "Argon", "Fluorine", "Sodium"],
    ans: "Neon"
  },

  // 🍎 PHYSICS (MAINS LEVEL)
  {
    q: "Dimension of Force is?",
    options: ["MLT⁻²", "ML²T⁻²", "MLT⁻¹", "M²LT⁻²"],
    ans: "MLT⁻²"
  },
  {
    q: "What is the escape velocity on Earth (approx)?",
    options: ["9.8 km/s", "11.2 km/s", "42 km/s", "7.5 km/s"],
    ans: "11.2 km/s"
  },
  {
    q: "Resistance of an ideal ammeter should be?",
    options: ["Zero", "Infinite", "100 Ohm", "1 Ohm"],
    ans: "Zero"
  },
  {
    q: "The focal length of a plane mirror is?",
    options: ["Zero", "1 cm", "100 cm", "Infinity"],
    ans: "Infinity"
  },

  // 🧠 LOGICAL REASONING (HIGH LEVEL)
  {
    q: "If 12th March 1986 was Wednesday, what was 12th March 1987?",
    options: ["Wednesday", "Thursday", "Friday", "Tuesday"],
    ans: "Thursday"
  },
  {
    q: "Find the missing number: 7, 26, 63, 124, ?",
    options: ["215", "217", "210", "196"],
    ans: "215" // n³ - 1 (6³ - 1)
  },
  {
    q: "A is B's sister. C is B's mother. D is C's father. E is D's mother. How is A related to D?",
    options: ["Grandmother", "Granddaughter", "Daughter", "Mother"],
    ans: "Granddaughter"
  },

  // 💻 COMPUTER SCIENCE (ALGO LEVEL)
  {
    q: "Time complexity of Binary Search?",
    options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
    ans: "O(log n)"
  },
  {
    q: "Which data structure follows LIFO?",
    options: ["Queue", "Stack", "Tree", "Array"],
    ans: "Stack"
  },

  // 🌍 SCIENTIFIC GK
  {
    q: "Speed of light in vacuum is approximately?",
    options: ["3×10⁸ m/s", "3×10⁵ m/s", "3×10⁷ m/s", "3×10⁶ m/s"],
    ans: "3×10⁸ m/s"
  },
  {
    q: "Which law states that V = IR?",
    options: ["Newton's Law", "Ohm's Law", "Boyle's Law", "Hooke's Law"],
    ans: "Ohm's Law"
  },
  {
    q: "Unit of Radioactivity?",
    options: ["Tesla", "Becquerel", "Henry", "Weber"],
    ans: "Becquerel"
  },
    // 🔢 MATHEMATICS (JEE MAINS)
  {
    q: "The value of i² + i⁴ + i⁶ + i⁸ is?",
    options: ["0", "1", "-1", "2"],
    ans: "0" // (-1 + 1 - 1 + 1)
  },
  {
    q: "If A is a square matrix of order 3 and |A| = 5, then |adj A| is?",
    options: ["5", "15", "25", "125"],
    ans: "25" // |A|^(n-1) = 5^(3-1) = 25
  },
  {
    q: "What is the probability of getting a sum of 7 when two dice are thrown?",
    options: ["1/12", "1/6", "5/36", "1/4"],
    ans: "1/6" // (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6/36
  },
  {
    q: "The slope of a line perpendicular to y = 2x + 5 is?",
    options: ["2", "-2", "1/2", "-1/2"],
    ans: "-1/2" // m1 * m2 = -1
  },

  // 🍎 PHYSICS (JEE MAINS)
  {
    q: "A body starts from rest and moves with acceleration 2 m/s². Distance in 5 seconds?",
    options: ["10m", "20m", "25m", "50m"],
    ans: "25m" // s = 0 + 1/2 * 2 * 5² = 25
  },
  {
    q: "Energy stored in a capacitor of capacitance C and voltage V is?",
    options: ["CV", "CV²", "1/2 CV²", "1/2 C²V"],
    ans: "1/2 CV²"
  },
  {
    q: "The de-Broglie wavelength is proportional to?",
    options: ["1/p", "p", "v", "1/m"],
    ans: "1/p" // λ = h/p
  },
  {
    q: "Which series of Hydrogen spectrum lies in the Visible region?",
    options: ["Lyman", "Balmer", "Paschen", "Pfund"],
    ans: "Balmer"
  },

  // 🧪 CHEMISTRY (JEE MAINS)
  {
    q: "The number of σ (sigma) and π (pi) bonds in Benzene (C6H6) is?",
    options: ["6, 3", "12, 3", "9, 3", "12, 6"],
    ans: "12, 3"
  },
  {
    q: "Which gas is responsible for the 'rotten egg' smell?",
    options: ["SO2", "CO2", "H2S", "NH3"],
    ans: "H2S"
  },
  {
    q: "Hybridization of Carbon in Diamond is?",
    options: ["sp", "sp²", "sp³", "dsp²"],
    ans: "sp³"
  },
  {
    q: "The most electronegative element in the periodic table is?",
    options: ["Oxygen", "Chlorine", "Fluorine", "Nitrogen"],
    ans: "Fluorine"
  },

  // 🧠 LOGICAL REASONING (COMPLEX)
  {
    q: "If 'LEMON' is coded as 'ELMNO', then 'APPLE' is?",
    options: ["PELPA", "AELPP", "ELPPA", "ALEPP"],
    ans: "AELPP" // Alphabetical order
  },
  {
    q: "Find the missing number: 2, 10, 30, 68, ?",
    options: ["120", "130", "150", "100"],
    ans: "130" // n³ + n (5³ + 5)
  },
  {
    q: "Pointing to a man, Zeba said, 'His only brother is the father of my daughter's father.' Who is the man?",
    options: ["Father", "Grandfather", "Uncle", "Brother"],
    ans: "Uncle"
  },

  // 🌍 SCIENTIFIC CONCEPTS
  {
    q: "What is the value of Universal Gas Constant (R)?",
    options: ["8.314 J/mol K", "0.0821 J/mol K", "1.98 J/mol K", "9.8 J/mol K"],
    ans: "8.314 J/mol K"
  },
  {
    q: "The work done in a closed loop by a conservative force is?",
    options: ["Positive", "Negative", "Zero", "Infinite"],
    ans: "Zero"
  },
  {
    q: "Which mirror is used as a rear-view mirror in vehicles?",
    options: ["Plane", "Concave", "Convex", "Bifocal"],
    ans: "Convex"
  },
  {
    q: "Unit of Magnetic Flux?",
    options: ["Tesla", "Weber", "Henry", "Farad"],
    ans: "Weber"
  },
  {
    q: "Atomic number of Gold (Au)?",
    options: ["47", "79", "82", "56"],
    ans: "79"
  },
    // 🔢 MATHEMATICS (JEE MAINS/ADVANCED)
  {
    q: "The value of ∫ sin²x dx + ∫ cos²x dx is?",
    options: ["x + C", "1 + C", "sin x + C", "0"],
    ans: "x + C" // ∫(sin²x + cos²x)dx = ∫1dx = x
  },
  {
    q: "What is the limit of (sin x / x) as x approaches 0?",
    options: ["0", "1", "Infinity", "Undefined"],
    ans: "1"
  },
  {
    q: "If z = 1 + i, then the argument of z is?",
    options: ["0°", "30°", "45°", "90°"],
    ans: "45°" // tan⁻¹(1/1)
  },
  {
    q: "The number of terms in the expansion of (x + y + z)¹⁰ is?",
    options: ["11", "55", "66", "121"],
    ans: "66" // (n+r-1)C(r-1) => (10+3-1)C(3-1) = 12C2 = 66
  },

  // 🍎 PHYSICS (JEE MAINS/ADVANCED)
  {
    q: "In an adiabatic process, which of the following remains constant?",
    options: ["Temperature", "Pressure", "Volume", "Heat Content"],
    ans: "Heat Content" // ΔQ = 0
  },
  {
    q: "The stopping potential depends on which property of incident light?",
    options: ["Intensity", "Frequency", "Velocity", "Distance"],
    ans: "Frequency"
  },
  {
    q: "What is the relation between Half-life (T) and Decay constant (λ)?",
    options: ["T = λ", "T = 0.693/λ", "T = 1/λ", "T = λ/0.693"],
    ans: "0.693/λ"
  },
  {
    q: "Total internal reflection occurs when light moves from...?",
    options: ["Rare to Dense", "Dense to Rare", "Air to Glass", "Vacuum to Water"],
    ans: "Dense to Rare"
  },

  // 🧪 CHEMISTRY (JEE MAINS/ADVANCED)
  {
    q: "Which of the following is the strongest acid?",
    options: ["HCl", "HF", "HI", "HBr"],
    ans: "HI" // Bond length is maximum, easy to release H+
  },
  {
    q: "The shape of XeF4 molecule is?",
    options: ["Tetrahedral", "Square Planar", "Pyramidal", "Linear"],
    ans: "Square Planar"
  },
  {
    q: "Which vitamin contains Cobalt?",
    options: ["Vit B1", "Vit B2", "Vit B6", "Vit B12"],
    ans: "Vit B12"
  },
  {
    q: "In the reaction: R-OH + PCl5, the main product is?",
    options: ["R-Cl", "R-H", "R-O-R", "R-CHO"],
    ans: "R-Cl"
  },

  // 🧠 LOGICAL REASONING (JEE APTITUDE)
  {
    q: "Find the odd one out among these shapes:",
    options: ["Sphere", "Circle", "Cube", "Cylinder"],
    ans: "Circle" // 2D while others are 3D
  },
  {
    q: "Complete the series: 1, 4, 27, 256, ?",
    options: ["625", "1024", "3125", "4096"],
    ans: "3125" // n^n (1¹, 2², 3³, 4⁴, 5⁵)
  },
  {
    q: "If 5 workers can build a wall in 5 days, how many days will 1 worker take?",
    options: ["1", "5", "10", "25"],
    ans: "25"
  },

  // 💻 ADVANCED TECH & CS
  {
    q: "Which sorting algorithm has the best average time complexity?",
    options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort"],
    ans: "Merge Sort"
  },
  {
    q: "What does SQL stand for?",
    options: ["Simple Query Language", "Structured Query Language", "System Query List", "Server Query Language"],
    ans: "Structured Query Language"
  },

  // 🌍 SCIENTIFIC CONSTANTS & FACTS
  {
    q: "What is the value of Avogadro's number?",
    options: ["6.022 × 10²³", "6.022 × 10²²", "1.6 × 10⁻¹⁹", "9.1 × 10⁻³¹"],
    ans: "6.022 × 10²³"
  },
  {
    q: "Which element has the highest thermal conductivity?",
    options: ["Gold", "Silver", "Copper", "Aluminum"],
    ans: "Silver"
  },
  {
    q: "The 'God Particle' is technically known as?",
    options: ["Electron", "Proton", "Higgs Boson", "Neutron"],
    ans: "Higgs Boson"
  },
    // 🔢 MATHEMATICS (JEE ADVANCED LEVEL)
  {
    q: "If sin(x) + cos(x) = √2, then x is?",
    options: ["30°", "45°", "60°", "90°"],
    ans: "45°"
  },
  {
    q: "The number of real solutions of x² + |x| - 6 = 0 is?",
    options: ["1", "2", "3", "4"],
    ans: "2" // x = 2 and x = -2
  },
  {
    q: "What is the period of sin(2x)?",
    options: ["π/2", "π", "2π", "4π"],
    ans: "π"
  },
  {
    q: "The area of a circle with diameter d is?",
    options: ["πd²", "πd²/2", "πd²/4", "2πd"],
    ans: "πd²/4"
  },

  // 🍎 PHYSICS (JEE ADVANCED CONCEPTS)
  {
    q: "At what temperature are Celsius and Fahrenheit scales equal?",
    options: ["0°", "32°", "-40°", "-100°"],
    ans: "-40°"
  },
  {
    q: "The magnetic field inside a long straight solenoid is?",
    options: ["Zero", "Uniform", "Non-uniform", "Varies with distance"],
    ans: "Uniform"
  },
  {
    q: "If the distance between two charges is doubled, the force becomes?",
    options: ["Double", "Half", "Four times", "One-fourth"],
    ans: "One-fourth" // Inverse square law
  },
  {
    q: "Which lens is used to correct Myopia?",
    options: ["Convex", "Concave", "Cylindrical", "Bifocal"],
    ans: "Concave"
  },

  // 🧪 CHEMISTRY (ORGANIC & PHYSICAL)
  {
    q: "The general formula of Alkyne is?",
    options: ["CnH2n+2", "CnH2n", "CnH2n-2", "CnHn"],
    ans: "CnH2n-2"
  },
  {
    q: "Which catalyst is used in the Haber Process?",
    options: ["Iron", "Nickel", "Platinum", "Vanadium Pentoxide"],
    ans: "Iron"
  },
  {
    q: "The bond angle in a CH4 (Methane) molecule is?",
    options: ["90°", "109.5°", "120°", "180°"],
    ans: "109.5°"
  },
  {
    q: "Which is known as 'Dry Ice'?",
    options: ["Solid Nitrogen", "Solid CO2", "Liquid Oxygen", "Frozen Water"],
    ans: "Solid CO2"
  },

  // 🧠 LOGICAL & APTITUDE (JEE/CAT LEVEL)
  {
    q: "Find the next prime number after 97?",
    options: ["99", "101", "103", "107"],
    ans: "101"
  },
  {
    q: "If 3 men build 3 houses in 3 months, how many months does 1 man take to build 1 house?",
    options: ["1", "3", "6", "9"],
    ans: "3"
  },
  {
    q: "Complete the pattern: 2, 3, 10, 15, 26, ?",
    options: ["31", "34", "35", "37"],
    ans: "35" // n² + 1 and n² - 1 alternating
  },

  // 💻 COMPUTER SCIENCE & LOGIC
  {
    q: "In Hexadecimal, what is the value of 'F'?",
    options: ["10", "14", "15", "16"],
    ans: "15"
  },
  {
    q: "Which protocol is used to transfer files over the internet?",
    options: ["HTTP", "FTP", "SMTP", "IP"],
    ans: "FTP"
  },

  // 🌍 SCIENCE & GK
  {
    q: "The chemical used in nail polish remover is?",
    options: ["Acetone", "Benzene", "Acetic Acid", "Ether"],
    ans: "Acetone"
  },
  {
    q: "What is the SI unit of Pressure?",
    options: ["Joule", "Pascal", "Newton", "Watt"],
    ans: "Pascal"
  },
  {
    q: "Who discovered Penicillin?",
    options: ["Einstein", "Newton", "Alexander Fleming", "Louis Pasteur"],
    ans: "Alexander Fleming"
  },
    // 🇮🇳 INDIAN POLITICS
  {
    q: "Who is known as the 'Father of the Indian Constitution'?",
    options: ["Mahatma Gandhi", "Jawaharlal Nehru", "B.R. Ambedkar", "Sardar Patel"],
    ans: "B.R. Ambedkar"
  },
  {
    q: "What is the minimum age to become the Prime Minister of India?",
    options: ["21", "25", "30", "35"],
    ans: "25"
  },
  {
    q: "The 'Rajya Sabha' is also known as...?",
    options: ["Lower House", "Upper House", "People's House", "Parliament House"],
    ans: "Upper House"
  },
  {
    q: "How many Fundamental Rights are currently recognized by the Indian Constitution?",
    options: ["5", "6", "7", "8"],
    ans: "6"
  },

  // 🌍 WORLD POLITICS
  {
    q: "Who is the current President of the United States?",
    options: ["Donald Trump", "Joe Biden", "Barack Obama", "Kamala Harris"],
    ans: "Joe Biden" // Note: Valid as of current general knowledge
  },
  {
    q: "What is the capital of Russia?",
    options: ["Saint Petersburg", "Kyiv", "Moscow", "Berlin"],
    ans: "Moscow"
  },
  {
    q: "The 'United Nations' (UN) was founded in which year?",
    options: ["1914", "1939", "1945", "1950"],
    ans: "1945"
  },
  {
    q: "Which country is known as the world's largest democracy?",
    options: ["USA", "India", "China", "United Kingdom"],
    ans: "India"
  },

  // 📜 POLITICAL CONCEPTS
  {
    q: "A system of government by the whole population is called...?",
    options: ["Monarchy", "Dictatorship", "Democracy", "Oligarchy"],
    ans: "Democracy"
  },
  {
    q: "What is the term length of the President of India?",
    options: ["4 years", "5 years", "6 years", "No limit"],
    ans: "5 years"
  },
  {
    q: "Who appoints the Chief Justice of India?",
    options: ["Prime Minister", "Vice President", "President", "Law Minister"],
    ans: "President"
  },
  {
    q: "The 'Right to Vote' in India is based on which principle?",
    options: ["Education", "Wealth", "Universal Adult Franchise", "Property"],
    ans: "Universal Adult Franchise"
  },

  // ⚡ TRICKY & CURRENT AFFAIRS
  {
    q: "Which Indian state has the highest number of Lok Sabha seats?",
    options: ["Maharashtra", "West Bengal", "Uttar Pradesh", "Bihar"],
    ans: "Uttar Pradesh"
  },
  {
    q: "Who was the first woman Prime Minister of India?",
    options: ["Pratibha Patil", "Indira Gandhi", "Sushma Swaraj", "Sarojini Naidu"],
    ans: "Indira Gandhi"
  },
  {
    q: "What is the full form of 'MLA'?",
    options: ["Member of Legislative Assembly", "Member of Legal Authority", "Main Legislative Area", "Member of Local Assembly"],
    ans: "Member of Legislative Assembly"
  },

  // 🏛️ INTERNATIONAL RELATIONS
  {
    q: "Where is the headquarters of the European Union located?",
    options: ["Paris", "London", "Brussels", "Geneva"],
    ans: "Brussels"
  },
  {
    q: "Which body is responsible for maintaining international peace and security?",
    options: ["WHO", "UNESCO", "Security Council", "World Bank"],
    ans: "Security Council"
  },
  {
    q: "What is the 'G20'?",
    options: ["A group of 20 banks", "A group of 20 countries", "A game", "A missile"],
    ans: "A group of 20 countries"
  },

  // 🧠 LOGIC IN POLITICS
  {
    q: "If the President and Vice President both are unavailable, who acts as the President?",
    options: ["Prime Minister", "Speaker of Lok Sabha", "Chief Justice of India", "Home Minister"],
    ans: "Chief Justice of India"
  },
  {
    q: "The age of voting in India was reduced from 21 to 18 by which amendment?",
    options: ["42nd", "44th", "61st", "73rd"],
    ans: "61st"
  },
    // 🇮🇳 INDIAN POLITY & UPDATES (2025-26)
  {
    q: "Who is the current President of India as of April 2026?",
    options: ["Jagdeep Dhankhar", "Droupadi Murmu", "Yashwant Sinha", "Narendra Modi"],
    ans: "Droupadi Murmu"
  },
  {
    q: "Which Indian state recently launched the 'Green Hydrogen Policy 2026'?",
    options: ["Gujarat", "Maharashtra", "Uttar Pradesh", "Tamil Nadu"],
    ans: "Uttar Pradesh"
  },
  {
    q: "What is the name of the AI tool proposed in the Union Budget 2026-27 for farmers?",
    options: ["Kisan-AI", "Bharat-VISTAAR", "Agri-Bot", "Digital-Kheti"],
    ans: "Bharat-VISTAAR"
  },
  {
    q: "The 'Mandal Commission' recommendations are primarily related to...?",
    options: ["Linguistic States", "Economic Reforms", "Reservation for OBCs", "Fundamental Rights"],
    ans: "Reservation for OBCs"
  },

  // 🌍 GLOBAL POLITICS & LEADERSHIP
  {
    q: "Who is the current President of the United States as of April 2026?",
    options: ["Joe Biden", "Donald Trump", "Kamala Harris", "JD Vance"],
    ans: "Donald Trump" // Assumed office Jan 20, 2025
  },
  {
    q: "Which country topped the 'Global Popularity Rating' of world leaders in early 2026?",
    options: ["USA", "India", "Germany", "Japan"],
    ans: "India" // PM Narendra Modi leads with 68%+ approval
  },
  {
    q: "Who is the current Prime Minister of Canada in 2026?",
    options: ["Justin Trudeau", "Mark Carney", "Pierre Poilievre", "Jagmeet Singh"],
    ans: "Mark Carney"
  },
  {
    q: "Which nation announced its exit from OPEC and OPEC+ effective May 1, 2026?",
    options: ["Qatar", "UAE", "Angola", "Ecuador"],
    ans: "UAE"
  },

  // 📜 CONSTITUTION & LAW
  {
    q: "Which Constitutional Amendment Act made Sikkim a full-fledged state of India?",
    options: ["35th", "36th", "42nd", "44th"],
    ans: "36th"
  },
  {
    q: "Who is the ex-officio Chairman of the Rajya Sabha?",
    options: ["President", "Prime Minister", "Vice President", "Speaker"],
    ans: "Vice President"
  },
  {
    q: "The concept of 'Non-Aligned Movement' (NAM) was co-founded by which Indian leader?",
    options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Indira Gandhi", "Lal Bahadur Shastri"],
    ans: "Jawaharlal Nehru"
  },
  {
    q: "Which article of the Indian Constitution empowers the President to impose 'Emergency'?",
    options: ["Article 352", "Article 360", "Article 370", "Article 324"],
    ans: "Article 352"
  },

  // 🏛️ INSTITUTIONS & SYMBOLS
  {
    q: "Where is the headquarters of the International Court of Justice (ICJ)?",
    options: ["Geneva", "New York", "The Hague", "Vienna"],
    ans: "The Hague"
  },
  {
    q: "What does 'DOGE' stand for in the context of the 2025-26 US Government reforms?",
    options: ["Dept of Global Economy", "Dept of Government Efficiency", "Digital Online Gov Exchange", "Dept of Green Energy"],
    ans: "Dept of Government Efficiency"
  },
  {
    q: "The 'Kyoto Protocol' is an international treaty primarily focused on...?",
    options: ["Human Rights", "Trade Tariffs", "Climate Change", "Nuclear Disarmament"],
    ans: "Climate Change"
  },

  // ⚡ QUICK TRIVIA
  {
    q: "Who is the first woman Prime Minister of Italy?",
    options: ["Giorgia Meloni", "Marine Le Pen", "Angela Merkel", "Sanae Takaichi"],
    ans: "Giorgia Meloni"
  },
  {
    q: "Which body in India has the power to resolve inter-state water disputes?",
    options: ["Supreme Court", "Parliament", "Inter-State Tribunal", "President"],
    ans: "Inter-State Tribunal"
  },
  {
    q: "In which year did the 'Green Revolution' significantly start affecting Indian politics?",
    options: ["1950s", "1960s", "1980s", "1990s"],
    ans: "1960s"
  },
  {
    q: "The term 'Coalition Government' refers to...?",
    options: ["Single party rule", "Alliance of multiple parties", "Military rule", "Dictatorship"],
    ans: "Alliance of multiple parties"
  },
  {
    q: "Who is the current leader of the Catholic Church (Pope) as of 2026?",
    options: ["Pope Francis", "Pope Benedict XVI", "Pope Leo XIV", "Pope John Paul II"],
    ans: "Pope Leo XIV"
  },
    // 🏛️ INDIAN CONSTITUTIONAL ARTICLES
  {
    q: "Which Article of the Indian Constitution is known as the 'Heart and Soul' of the Constitution?",
    options: ["Article 14", "Article 19", "Article 21", "Article 32"],
    ans: "Article 32"
  },
  {
    q: "Under which Article can the President of India be impeached?",
    options: ["Article 52", "Article 61", "Article 72", "Article 123"],
    ans: "Article 61"
  },
  {
    q: "Which Article guarantees the 'Right to Education' in India?",
    options: ["Article 19A", "Article 21A", "Article 24", "Article 45"],
    ans: "Article 21A"
  },
  {
    q: "Which Article provides for the 'Election Commission' of India?",
    options: ["Article 324", "Article 315", "Article 352", "Article 370"],
    ans: "Article 324"
  },

  // 📜 POLITICAL HISTORY & REFORMS
  {
    q: "The 'Panchayati Raj' system was first introduced in which Indian state?",
    options: ["West Bengal", "Rajasthan", "Gujarat", "Karnataka"],
    ans: "Rajasthan"
  },
  {
    q: "Who was the Prime Minister of India during the 'Emergency' (1975-1977)?",
    options: ["Morarji Desai", "Indira Gandhi", "Lal Bahadur Shastri", "Rajiv Gandhi"],
    ans: "Indira Gandhi"
  },
  {
    q: "In which year did the first General Election take place in independent India?",
    options: ["1947", "1950", "1951-52", "1955"],
    ans: "1951-52"
  },
  {
    q: "The 'Sarkaria Commission' was appointed to review which of the following?",
    options: ["Centre-State Relations", "Banking Reforms", "Electoral Reforms", "Police Reforms"],
    ans: "Centre-State Relations"
  },

  // 🌍 GLOBAL DIPLOMACY & ORGS
  {
    q: "The 'Veto Power' in the UN Security Council is held by how many permanent members?",
    options: ["3", "5", "10", "15"],
    ans: "5"
  },
  {
    q: "Which ideology is primarily associated with Karl Marx?",
    options: ["Capitalism", "Communism", "Fascism", "Liberalism"],
    ans: "Communism"
  },
  {
    q: "The 'NATO' headquarters is located in which city?",
    options: ["Washington D.C.", "London", "Brussels", "Berlin"],
    ans: "Brussels"
  },
  {
    q: "Who is the longest-serving Prime Minister of the United Kingdom in history?",
    options: ["Winston Churchill", "Margaret Thatcher", "Robert Walpole", "Tony Blair"],
    ans: "Robert Walpole"
  },

  // ⚡ QUICK POLITY TRIVIA
  {
    q: "Who is the Constitutional Head of the State Governments in India?",
    options: ["Chief Minister", "Governor", "President", "Speaker"],
    ans: "Governor"
  },
  {
    q: "How many members are nominated by the President to the Rajya Sabha?",
    options: ["2", "10", "12", "15"],
    ans: "12"
  },
  {
    q: "The concept of 'Single Citizenship' in India was borrowed from which country?",
    options: ["USA", "Canada", "Britain", "Ireland"],
    ans: "Britain"
  },
  {
    q: "Who was the first Deputy Prime Minister of India?",
    options: ["Sardar Patel", "Morarji Desai", "Charan Singh", "Lal Krishna Advani"],
    ans: "Sardar Patel"
  },

  // 🏛️ PARLIAMENTARY TERMS
  {
    q: "What is the maximum gap allowed between two sessions of Parliament?",
    options: ["3 months", "6 months", "9 months", "1 year"],
    ans: "6 months"
  },
  {
    q: "The 'Zero Hour' in the Indian Parliament starts at what time?",
    options: ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM"],
    ans: "12:00 PM"
  },
  {
    q: "What is the 'Quorum' required to hold a meeting of either House of Parliament?",
    options: ["1/5th", "1/10th", "1/4th", "1/3rd"],
    ans: "1/10th"
  },
  {
    q: "Who decides whether a bill is a 'Money Bill' or not?",
    options: ["President", "Prime Minister", "Speaker of Lok Sabha", "Finance Minister"],
    ans: "Speaker of Lok Sabha"
  },
    // ⚖️ LANDMARK JUDGMENTS (INDIA)
  {
    q: "In which case did the Supreme Court propound the 'Basic Structure Doctrine'?",
    options: ["Golaknath Case", "Kesavananda Bharati Case", "Minerva Mills Case", "Maneka Gandhi Case"],
    ans: "Kesavananda Bharati Case"
  },
  {
    q: "Which case led to the introduction of 'Public Interest Litigation' (PIL) in India?",
    options: ["S.P. Gupta Case", "Shah Bano Case", "Vishaka Case", "Indira Sawhney Case"],
    ans: "S.P. Gupta Case"
  },
  {
    q: "Which judgment declared 'Right to Privacy' as a Fundamental Right?",
    options: ["A.K. Gopalan Case", "K.S. Puttaswamy Case", "Berubari Union Case", "Golaknath Case"],
    ans: "K.S. Puttaswamy Case"
  },

  // 🏛️ POLITICAL PHILOSOPHY & SYSTEMS
  {
    q: "Who wrote the famous book 'The Republic'?",
    options: ["Aristotle", "Socrates", "Plato", "Machiavelli"],
    ans: "Plato"
  },
  {
    q: "The concept of 'Separation of Powers' was given by...?",
    options: ["Montesquieu", "Rousseau", "John Locke", "Thomas Hobbes"],
    ans: "Montesquieu"
  },
  {
    q: "Which political system is characterized by 'Rule by a few'?",
    options: ["Monarchy", "Oligarchy", "Theocracy", "Anarchy"],
    ans: "Oligarchy"
  },
  {
    q: "Who is known as the author of 'The Prince'?",
    options: ["Dante", "Machiavelli", "Karl Marx", "Engels"],
    ans: "Machiavelli"
  },

  // 🇮🇳 INDIAN POLITY - DEPTH
  {
    q: "Which schedule of the Indian Constitution contains the 'Anti-Defection Law'?",
    options: ["7th Schedule", "8th Schedule", "9th Schedule", "10th Schedule"],
    ans: "10th Schedule"
  },
  {
    q: "Who was the Chairman of the 'Drafting Committee' of the Constituent Assembly?",
    options: ["Rajendra Prasad", "B.R. Ambedkar", "Jawaharlal Nehru", "Alladi Krishnaswamy Iyer"],
    ans: "B.R. Ambedkar"
  },
  {
    q: "The 'Directive Principles of State Policy' (DPSP) were borrowed from which country?",
    options: ["USA", "Ireland", "South Africa", "Australia"],
    ans: "Ireland"
  },
  {
    q: "Which body audits the receipts and expenditure of the Government of India?",
    options: ["NITI Aayog", "CAG", "Finance Commission", "RBI"],
    ans: "CAG"
  },

  // 🌍 INTERNATIONAL RELATIONS & TREATIES
  {
    q: "The 'Geneva Convention' is primarily related to...?",
    options: ["Global Trade", "Treatment of Prisoners of War", "Climate Change", "Outer Space"],
    ans: "Treatment of Prisoners of War"
  },
  {
    q: "Which organization was the predecessor of the 'World Trade Organization' (WTO)?",
    options: ["IMF", "GATT", "World Bank", "UNCTAD"],
    ans: "GATT"
  },
  {
    q: "The 'Magna Carta', a foundation of modern democracy, was signed in which year?",
    options: ["1215", "1512", "1776", "1789"],
    ans: "1215"
  },
  {
    q: "Which country is NOT a member of the 'G7'?",
    options: ["Russia", "Canada", "Japan", "Italy"],
    ans: "Russia"
  },

  // ⚡ QUICK TRIVIA
  {
    q: "What is the maximum strength of the Lok Sabha as per the Constitution?",
    options: ["500", "545", "550", "552"],
    ans: "550" // Note: 2 Anglo-Indian seats removed by 104th Amendment
  },
  {
    q: "The 'Universal Declaration of Human Rights' was adopted in which year?",
    options: ["1945", "1948", "1950", "1960"],
    ans: "1948"
  },
  {
    q: "Who was the first woman President of India?",
    options: ["Indira Gandhi", "Pratibha Patil", "Droupadi Murmu", "Sarojini Naidu"],
    ans: "Pratibha Patil"
  },
  {
    q: "Which state in India has its own Civil Code (Uniform Civil Code)?",
    options: ["Kerala", "Goa", "Uttarakhand", "Sikkim"],
    ans: "Goa"
  },
  {
    q: "The 'NITI Aayog' replaced which of the following bodies?",
    options: ["National Development Council", "Planning Commission", "Finance Commission", "Zonal Council"],
    ans: "Planning Commission"
  }


];