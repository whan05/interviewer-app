let currentIndex = 0;
let showingAnswer = false;

function applyPalette(index) {
  const p = palettes[index % palettes.length];
  const root = document.documentElement;
  root.style.setProperty('--bg-gradient', p.bg);
  root.style.setProperty('--watermark', p.watermark);
  root.style.setProperty('--glow', p.glow);
  root.style.setProperty('--theme-accent', p.modeColor);
  document.getElementById('modeTag').style.color = p.modeColor;
}

function formatAnswerHTML(text) {
  return text
    .replace(/\bSituation:/g, '<strong>Situation:</strong>')
    .replace(/\bTask:/g, '<strong>Task:</strong>')
    .replace(/\bAction:/g, '<strong>Action:</strong>')
    .replace(/\bResult:/g, '<strong>Result:</strong>');
}

function renderCard() {
  stopSpeech();
  const card = cards[currentIndex];
  const displayNum = String(currentIndex + 1).padStart(2, '0');

  applyPalette(currentIndex);

  document.getElementById('watermark').textContent = displayNum;
  document.getElementById('counterLabel').textContent = `${displayNum} / ${String(cards.length).padStart(2, '0')}`;
  document.getElementById('questionText').textContent = card.pregunta;
  document.getElementById('answerText').innerHTML = formatAnswerHTML(card.respuesta);

  resetSpeechFeedback();
  showingAnswer = false;
  showQuestionView();
}

function showQuestionView() {
  const q = document.getElementById('questionText');
  const a = document.getElementById('answerText');
  const btn = document.getElementById('btnReveal');
  const tag = document.getElementById('modeTag');

  a.classList.remove('visible');
  setTimeout(() => {
    a.style.display = 'none';
    q.style.display = 'block';
    setTimeout(() => q.classList.remove('hidden'), 20);
  }, 150);

  btn.textContent = 'Ver respuesta';
  tag.textContent = 'PREGUNTA';
}

function showAnswerView() {
  const q = document.getElementById('questionText');
  const a = document.getElementById('answerText');
  const btn = document.getElementById('btnReveal');
  const tag = document.getElementById('modeTag');

  q.classList.add('hidden');
  setTimeout(() => {
    q.style.display = 'none';
    a.style.display = 'block';
    setTimeout(() => a.classList.add('visible'), 20);
  }, 150);

  btn.textContent = 'Ver pregunta';
  tag.textContent = 'RESPUESTA';
}

function toggleAnswer() {
  showingAnswer = !showingAnswer;
  if (showingAnswer) showAnswerView();
  else showQuestionView();
}

function prevCard() {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  renderCard();
}

function nextCard() {
  currentIndex = (currentIndex + 1) % cards.length;
  renderCard();
}

function bindEvents() {
  document.getElementById('cardArea').addEventListener('click', toggleAnswer);
  document.getElementById('btnPrev').addEventListener('click', prevCard);
  document.getElementById('btnSpeak').addEventListener('click', toggleSpeech);
  document.getElementById('btnMic').addEventListener('click', toggleRecording);
  document.getElementById('btnReveal').addEventListener('click', toggleAnswer);
  document.getElementById('btnNext').addEventListener('click', nextCard);

  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key === 'ArrowLeft') {
      prevCard();
    } else if (e.key === 'ArrowRight') {
      nextCard();
    } else if (e.code === 'Space') {
      e.preventDefault();
      toggleAnswer();
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  bindEvents();
  renderCard();
  updateVoiceSelection();
  setTimeout(updateVoiceSelection, 300);
});
