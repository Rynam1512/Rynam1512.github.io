// Je récupèree le bouton du menu et le menu mobile dans le HTML !!!!!!!!
var menuBtn = document.getElementById('menuBtn');
var mobileMenu = document.getElementById('mobileMenu');

// qd on clique sur le bouton du menu, ça affiche ou cache le menu mobile
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden'); // toggle = si c'est caché on l'affiche, sinon on cache
});

// Je sélectionne tous les liens à l’int de menu mobile
var mobileLinks = mobileMenu.querySelectorAll('a');

// qq je clique sur un lien du menu mobile ça doit refermerr le menu
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden'); // ça cache le menu après le clic
  });
});

// Je sélectionne toutes les sections de la page 
var sections = document.querySelectorAll('section');

// Je sélectionne tous les liens de navigation 
var navLinks = document.querySelectorAll('.nav-link');

// Quand je scroll sur la page je dois détecteer dans quelle section je suis
window.addEventListener('scroll', () => {
  var current = ''; //  variable  qui va contenir id de la section actuelle

  // Je parcours toutes les sections pour voir laquelle est visible !!!! important pour la suite 
  sections.forEach(section => {
    var sectionTop = section.offsetTop; // distance entre le haut de la page et le début de la section
    var sectionHeight = section.clientHeight; // hauteur de la section

    // sii on a scrollé assez bas pour entrer ds la section je la note comme : active
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id'); // je récupère l'id de la section visible
    }
  });

  // Je mets à jour les liens du menu pour indiquer celui qui est actif (en surbrillance !!!!!!!!!!!!!)
  navLinks.forEach(link => {
    link.classList.remove('active'); // j'enlève la classe active de tous les liens
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active'); // j’ajoute la classe active au lien qui correspond à la section visible
    }
  });
});



// Je récupère le formulaire de contact dans la page
var contactForm = document.querySelector('form');

// Je vérifie que le formulaire existe bien avant d'ajouter l'événement
if (contactForm) {
  // Quand on soumet le formulaire...
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // j'empêche l'envoi réel du formulaire (sinon la page se recharge)

    // Je récupère les champs du formulaire (nom, email et message)
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');

    // Je vérifie que tous les champs ont été remplis
    if (nameInput.value && emailInput.value && messageInput.value) {
      // Si oui, j'affiche un message de remerciement (dans un vrai site, le message serait envoyé à Dalila)
      alert('Merci pour votre message ! Dans un environnement réel, ce message serait envoyé à Dalila.');

      // Je réinitialise le formulaire pour qu’il soit vide
      contactForm.reset();
    } else {
      // Si un champ est vide, j’affiche un message d’erreur
      alert('Veuillez remplir tous les champs du formulaire.');
    }
  });
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Données du quiz (liste de questions-réponses)


// J’ai d’abord mis un exemple de question (mais je l’ai remplacée ensuite par plusieurs questions)
var quizData = [
  {
    category: "🦠 Maladies Infectieuses : Mythe ou Réalité ?",
    question: "Quel est le mode principal de transmission du VIH ?",
    options: [
      "Par les moustiques",
      "Par les gouttelettes respiratoires",
      "Par le lait maternel",
      "Par les rapports sexuels non protégés",
      "Par contact cutané"
    ],
    correctAnswer: 3, // la bonne réponse est l'option 4 (index 3)
    explanation: "Le VIH se transmet par le sang, les sécrétions sexuelles et le lait maternel, principalement via les rapports sexuels non protégés."
  },
  {
    category: "🦠 Maladies Infectieuses : Mythe ou Réalité ?",
    question: "Comment se transmet le paludisme ?",
    options: [
      "Par les rapports sexuels",
      "Par contact avec un animal contaminé",
      "Par les moustiques infectés",
      "Par l'eau potable",
      "Par contact avec une plaie"
    ],
    correctAnswer: 2, // la bonne réponse est l'option 3 (index 2)
    explanation: "Le paludisme est transmis par la piqûre de moustiques anophèles infectés."
  },
  {
    category: "🦠 Maladies Infectieuses : Mythe ou Réalité ?",
    question: "Quelle est la voie de transmission principale du COVID-19 ?",
    options: [
      "Par l'eau du robinet",
      "Par des aliments",
      "Par des gouttelettes respiratoires",
      "Par le sang",
      "Par les moustiques"
    ],
    correctAnswer: 2, // la bonne réponse est l'option 3 (index 2)
    explanation: "Le COVID-19 se transmet principalement par voie respiratoire, via des gouttelettes et aérosols émis lorsqu'une personne parle, tousse ou éternue."
  },
];

  
  
 // icii je vais définir une quest° sur les chromosomes pour le thème de la génétique 
{
  category: "🧬 Génétique & Constitution du corps humain",
  question: "Combien de chromosomes contient une cellule humaine ?",
  options: [
    "23",
    "44",
    "46",  // → c’est la bonne réponse, les cellules humaines en ont 46 en tt
    "92",
    "22"
  ],
  correctAnswer: 2,
  explanation: "Une cellule humaine contient 46 chromosomes, dont 2 chromosomes sexuels (gonosomes)."
}

// ↓ Je redéclare quizData pr ajouter les questions suivantes (faudra merger si y en avait déjà !!!!!! ok)
var quizData = [
  {
    category: "🧬 Génétique & Constitution du corps humain",
    question: "Quel est le rôle de la mitose ?",
    options: [
      "Créer des cellules sexuelles",  // Faux → ça c’est la méiose
      "Réduire le nombre de chromosomes", // Faux aussi
      "Produire deux cellules filles identiques",  //  C’est ça
      "Mélanger le matériel génétique",
      "Créer la diversité génétique"
    ],
    correctAnswer: 2,
    explanation: "La mitose permet de produire deux cellules filles identiques à la cellule mère, pour la croissance ou le renouvellement cellulaire."
  },
  {
    category: "🧬 Génétique & Constitution du corps humain",
    question: "Quels sont les macronutriments essentiels pour l'organisme humain?",
    options: [
      "Vitamines, sels minéraux et eau", //  ça c’est des micronutriments
      "Protéines, glucides et lipides",  // les bons macronutriments
      "Calcium, fer et magnésium", // idem micronutriments
      "ADN, ARN et enzymes", // pas des nutriments du tout
      "Eau, fibres et cholestérol"
    ],
    correctAnswer: 1,
    explanation: "Les macronutriments sont les protéines, glucides et lipides, indispensables au bon fonctionnement de l'organisme."
  }
];

// ------------------------------------------------------
//  Variables globales pr gérer le quiz !!!!

// Pour savoir à quelle quest° on est (départ = 0)
var currentQuestion = 0;

// Score de l'utilisateur (0 au début)
var score = 0;

// Tableau pr stocker les réponses de l'utilisateur (rempli + tard)
var userAnswers = [];


// --------------------------------------------------------------------------------------------------------------------------------------
//  Je récupère les éléments HTML dont j’ai besoin ds la page !!!!

var startQuizBtn = document.getElementById('start-quiz'); // le bouton pour commencer
var quizIntro = document.getElementById('quiz-intro'); // intro du quiz (au début)
var quizContainer = document.getElementById('quiz-container'); // la partie quiz (questions/réponses)
var resultsContainer = document.getElementById('results-container'); // les résultats à la fin

// Eléments pr afficher la Q° actuelle + caté
var questionCategory = document.getElementById('question-category');
var questionText = document.getElementById('question-text');

// Là où j’affiche les choix de réponses
var optionsContainer = document.getElementById('options-container');

// Affiche n° de Q° en cours + total
var currentQuestionEl = document.getElementById('current-question');
var totalQuestionsEl = document.getElementById('total-questions');

// Pr afficher le score en cours (optionnel)
var currentScoreEl = document.getElementById('current-score');

// Barre de progression du quiz
var progressBar = document.getElementById('progress-bar');

// Boutons pour passer à la Q° suivante ou revenir
var nextBtn = document.getElementById('next-btn');
var prevBtn = document.getElementById('prev-btn');

// Eléments pr afficher le score final
var finalScoreEl = document.getElementById('final-score');
var scoreMessageEl = document.getElementById('score-message');

// Zone où s’affichent toutes les réponses à la fin
var answersContainer = document.getElementById('answers-container');

// Bouton pr recommencer le quiz
var restartQuizBtn = document.getElementById('restart-quiz');


// --------------------------------------------------------------------------------------------------------------------------------------------
// ↓↓↓ Fct° pour le quiz !!!!!!!!!!!!!!!


function initQuiz() {
  // On remet à 0 au début
  currentQuestion = 0;
  score = 0;

  // On crée un tableau vide avec autant d'éléments que de Q°, remplis avec null (rien répondu)
  userAnswers = Array(quizData.length).fill(null);

  // Affiche le nb total de questions
  totalQuestionsEl.textContent = quizData.length;

  // Charge la 1ère Q°
  loadQuestion();

  // Cache l’intro du quiz et affiche la partie Q°
  quizIntro.classList.add('hidden');
  quizContainer.classList.remove('hidden');

  // Cache les résultats (au cas où on relance le quiz)
  resultsContainer.classList.add('hidden');
}



// Fonction pr afficher la q° actuelle (titre, texte, options, etc.)
function loadQuestion() {
  // On récupère la q° actuelle dans le tableau quizData
  var question = quizData[currentQuestion];

  // Affiche la catégorie de la q°
  questionCategory.textContent = question.category;

  // Affiche le texte de la q°
  questionText.textContent = question.question;

  // Affiche le n° actuel de la q°
  currentQuestionEl.textContent = currentQuestion + 1;

  // Affiche le score actuel en live
  currentScoreEl.textContent = score;

  // Calcule la progression (en %)
  var progress = ((currentQuestion + 1) / quizData.length) * 100;

  // Met à jour la barre de progression (visuelle)
  progressBar.style.width = `${progress}%`;

  // Si on est à la 1ère q°, on désactive le bouton "Précédent"
  prevBtn.disabled = currentQuestion === 0;

  // Si on est à la dernière q°, on change le texte du btn
  nextBtn.textContent = currentQuestion === quizData.length - 1 ? "Voir les résultats" : "Question suivante";

  // On vide les options pr éviter les doublons
  optionsContainer.innerHTML = '';

  //  Boucle sur chaque option pr créer dynamiquement les boutons
  question.options.forEach(function(option, index) {
    // On crée une div pr chaque option
    var optionDiv = document.createElement('div');

    // Classe CSS pr l'apparence + sélection si déjà choisie
    optionDiv.className = `quiz-option p-4 rounded-xl border border-primary/30 ${userAnswers[currentQuestion] === index ? 'selected' : ''}`;

    // Ajout du contenu de l'option (A. B. C. etc + texte)
    optionDiv.innerHTML = `
      <div class="flex items-center">
        <span class="mr-3 text-primary font-medium">${String.fromCharCode(65 + index)}.</span>
        <span>${option}</span>
      </div>
    `;

    // Qd on clique sur l’option, on l’enregistre
    optionDiv.addEventListener('click', function() {
      selectOption(index);
    });

    // On ajoute la div dans le conteneur principal
    optionsContainer.appendChild(optionDiv);
  });
}


// Qd un·e utilisateur·ice clique sur une option
function selectOption(index) {
  // On stocke la réponse choisie pr cette q°
  userAnswers[currentQuestion] = index;

  // On récup toutes les options affichées
  var options = optionsContainer.querySelectorAll('.quiz-option');

  // On boucle pr cocher/décocher selon l’option cliquée
  options.forEach(function(option, i) {
    option.classList.toggle('selected', i === index);
  });
}


// Qd on clique sur "Suivant"
function nextQuestion() {
  // Si c’est pas encore la fin du quiz, on passe à la q° suivante
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    loadQuestion(); // recharge la q° suivante
  } else {
    // Sinon on affiche les résultats finaux
    showResults();
  }
}


// Qd on clique sur "Précédent"
function prevQuestion() {
  // On vérifie qu’on est pas déjà à la première q°
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion(); // recharge la q° précédente
  }
}


// Calcule le score final (nb de bonnes réponses)
function calculateScore() {
  score = 0;

  // On parcourt les réponses pr vérifier les bonnes
  userAnswers.forEach(function(answer, index) {
    if (answer === quizData[index].correctAnswer) {
      score++; // +1 si la réponse est bonne
    }
  });

  return score;
}


function showResults() {
  // On calcule le score final en appelant la fct qui check les bonnes réponses
  var finalScore = calculateScore();

  // On affiche le score final dans la page : ça depend des question
  finalScoreEl.textContent = finalScore;

  // On prépare le msg à afficher selon le % de bonnes réponses
  var message = '';
  var percentage = (finalScore / quizData.length) * 100;

  // Selon le pourcentage on donne un msg + ou - encourageant
  if (percentage >= 90) {
    message = "Excellent ! Vous avez une connaissance approfondie des sujets abordés.";
  } else if (percentage >= 70) {
    message = "Très bien ! Vous maîtrisez bien ces concepts scientifiques.";
  } else if (percentage >= 50) {
    message = "Bien ! Vous avez des connaissances solides mais quelques points à approfondir.";
  } else {
    message = "Continuez à apprendre ! Ces sujets sont complexes et méritent d'être explorés davantage.";
  }

  // On affiche le msg de résultat
  scoreMessageEl.textContent = message;

  // On vide le conteneur des réponses (juste au cas où)
  answersContainer.innerHTML = '';

  // On parcourt toutes les questions pour afficher les réponses
  quizData.forEach(function(question, index) {
    // On vérifie si la réponse est bonne
    var isCorrect = userAnswers[index] === question.correctAnswer;

    // On récup la réponse donnée par l'utilisateur ou un msg s’il a rien mis
    var userAnswer = userAnswers[index] !== null ? question.options[userAnswers[index]] : "Pas de réponse";

    // On récup la bonne réponse
    var correctAnswer = question.options[question.correctAnswer];

    // On crée une div pr afficher le résultat de chaque question
    var answerDiv = document.createElement('div');
    answerDiv.className = `p-4 rounded-xl border ${isCorrect ? 'border-success bg-success/10' : 'border-error bg-error/10'} mb-4`;

    // On affiche la question, la réponse donnée et la bonne (si nécessaire), + une explication
    answerDiv.innerHTML = `
      <div class="flex items-start mb-2">
        <div class="mr-3 text-xl mt-1">${isCorrect ? '✅' : '❌'}</div>
        <div>
          <h4 class="font-medium">${question.question}</h4>
          <p class="text-sm ${isCorrect ? 'text-success' : 'text-error'}">
            Votre réponse: ${userAnswer}
            ${!isCorrect ? `<br>Réponse correcte: ${correctAnswer}` : ''}
          </p>
        </div>
      </div>
      <div class="ml-8 mt-2 p-3 bg-white/70 rounded-lg">
        <div class="flex items-center">
          <span class="mr-2 text-lg">🧠</span>
          <span>${question.explanation}</span>
        </div>
      </div>
    `;

    // On ajoute cette div ds le conteneur principal
    answersContainer.appendChild(answerDiv);
  });
}

// On cache le quiz qd les résultats sont affichés
quizContainer.classList.add('hidden');
resultsContainer.classList.remove('hidden');

// Si le score est >= 70%, on déclenche les confettis 🎉
if (percentage >= 70) {
  createConfetti();
}

function createConfetti() {
  // On crée un conteneur pr les confettis
  var confettiContainer = document.createElement('div');
  confettiContainer.style.position = 'absolute';
  confettiContainer.style.top = '0';
  confettiContainer.style.left = '0';
  confettiContainer.style.width = '100%';
  confettiContainer.style.height = '100%';
  confettiContainer.style.pointerEvents = 'none'; // pr pas gêner les clics
  confettiContainer.style.zIndex = '10';

  // On l'ajoute dans la page
  resultsContainer.appendChild(confettiContainer);

  // Définition des couleurs de confettis (trop stylé 😎)
  var colors = ['#4361ee', '#4cc9f0', '#7209b7', '#3a0ca3', '#2ec4b6'];

  // On crée 100 confettis avec couleurs et positions random
  for (var i = 0; i < 100; i++) {
    var confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = -10 + 'px'; // ils partent du haut
    confettiContainer.appendChild(confetti);
  }
}

// Listeners : qd on clique sur les boutons, on appelle les fct adaptées

// Qd on clique sur "suivant", on passe à la question suivante
if (nextBtn) {
  nextBtn.addEventListener('click', nextQuestion);
}

// Qd on clique sur "précédent", on revient à la question d’avant
if (prevBtn) {
  prevBtn.addEventListener('click', prevQuestion);
}

// Qd on commence le quiz
if (startQuizBtn) {
  startQuizBtn.addEventListener('click', initQuiz);
}

// Qd on veut recommencer (relancer depuis le début)
if (restartQuizBtn) {
  restartQuizBtn.addEventListener('click', initQuiz);
}
