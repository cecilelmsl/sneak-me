const chatbotMessages = document.getElementById("chatbot-messages");
const chatbotInputText = document.getElementById("chatbot-input-text");
const chatbotInputButton = document.getElementById("chatbot-input-button");
// liste des reponse aléatoire  
const responses = [
  "Bonjour ! Comment puis-je vous aider aujourd'hui ?",
  "Désolé, je ne suis pas sûr de comprendre. Pouvez-vous reformuler votre question ?",
  "Je suis en train de rechercher une réponse à votre question. Veuillez patienter quelques instants.",
  "Pouvez-vous me donner plus de détails sur votre problème ?",
  "Je suis désolé, mais je n'ai pas la réponse à votre question pour le moment.",
  "Je crois que je peux vous aider avec ça. Pouvez-vous me dire plus sur votre situation ?",
  "42"
];


/*Cette fonction prend deux paramètres : message et sender. message est le message que l'utilisateur a envoyé et sender est le nom de l'expéditeur, qui peut être "Helpeur" ou "utilisateur".
La fonction commence par créer un nouvel élément p en utilisant document.createElement("p").
 Ensuite, elle définit le contenu textuel de cet élément p en utilisant la syntaxe de modèle de chaîne de caractères pour inclure le nom de l'expéditeur et le message.
Ensuite, la fonction ajoute une classe chatbot-messages à l'élément p en utilisant p.classList.add("chatbot-messages").
 Cette classe est utilisée pour styliser tous les messages du chatbot avec un style CSS spécifique.
Ensuite, la fonction utilise une instruction conditionnelle pour déterminer si le message a été envoyé par le chatbot ou l'utilisateur. 
Si le message a été envoyé par le chatbot, la fonction ajoute une classe bot-messages à l'élément p, sinon elle ajoute une classe user-messages.
Finalement, la fonction ajoute l'élément p au conteneur chatbotMessages en utilisant chatbotMessages.appendChild(p).
 Ensuite, elle définit la propriété scrollTop du conteneur chatbotMessages sur scrollHeight pour faire défiler automatiquement 
 la fenêtre de chatbot vers le bas afin que le dernier message soit toujours visible.
En somme, cette fonction permet d'ajouter les messages envoyés par l'utilisateur et le chatbot au conteneur de messages du chatbot,
 en leur appliquant une classe CSS appropriée en fonction de l'expéditeur du message.*/ 

function addMessageToChatbot(message, sender) {
  const p = document.createElement("p");
  p.innerText = `${sender}: ${message}`;
  p.classList.add("chatbot-messages");
  if (sender === "Helpeur") {
    p.classList.add("bot-messages");
  } else {
    p.classList.add("user-messages");
  }
  chatbotMessages.appendChild(p);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}


// envoyer un msg avec le button 
function sendMessageToChatbot() {
  const message = chatbotInputText.value;
  if (!message) {
    return;
  }
  addMessageToChatbot(message, "User");
  chatbotInputText.value = "";

  // Ajouter une réponse aléatoire à l'affichage des messages
  const randomIndex = Math.floor(Math.random() * responses.length);
  const randomResponse = responses[randomIndex];
  addMessageToChatbot(randomResponse, "Helpeur");
}

// envoyer le msg avec la tuche "entrée"
chatbotInputButton.addEventListener("click", sendMessageToChatbot);

chatbotInputText.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) { // 13 correspond à la touche "Entrée"
    event.preventDefault();
    sendMessageToChatbot();
  }
});

// test de la bulle

const chatbotBulle = document.querySelector('.chatbot-bulle');
const chatbotContainer = document.querySelector('.chatbot-container');
//quand je click sur ma bulle AJOUTE la classe visible as on block
chatbotBulle.addEventListener('click', () => {
  chatbotContainer.classList.toggle('visible');
});

const closeChatbotBtn = document.querySelector("#close-chatbot-btn");
closeChatbotBtn.addEventListener("click", function() {
  chatbotContainer.classList.remove('visible');
});
