import { createApp } from 'vue';
import WialonChatBot from './components/ChatBot.vue';
import PrimeVue from 'primevue/config';

const loadChatBot = () => {
  const chatbotContainer = document.createElement('div');
  chatbotContainer.id = 'wialon-chatbot';
  document.body.appendChild(chatbotContainer);

  const app = createApp(WialonChatBot);
  app.use(PrimeVue);
  app.mount('#wialon-chatbot');
};

const loadCSS = (href) => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
};

// Load PrimeIcons
loadCSS('https://unpkg.com/primeicons/primeicons.css');


// Automatically load the chatbot when the script is loaded
loadChatBot();
