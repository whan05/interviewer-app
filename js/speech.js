// --- RECONOCIMIENTO DE VOZ CONTINUO A PRUEBA DE CORTES ---
let recognition = null;
let isRecording = false;
let fullTranscript = '';
let finalAccumulatedText = '';
let restartTimer = null;

const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;

function buildSpeechEngine() {
  if (!SpeechRec) return null;
  const rec = new SpeechRec();
  rec.continuous = true;
  rec.interimResults = true;
  rec.lang = 'en-US';

  rec.onresult = (event) => {
    let interimTranscript = '';
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      const piece = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        finalAccumulatedText += (finalAccumulatedText ? ' ' : '') + piece.trim();
      } else {
        interimTranscript += piece;
      }
    }
    fullTranscript = (finalAccumulatedText + ' ' + interimTranscript).trim();
    const transcriptEl = document.getElementById('speechTranscript');
    transcriptEl.textContent = `Dijiste: "${fullTranscript}"`;
    transcriptEl.classList.add('show');
  };

  rec.onerror = (event) => {
    if (event.error === 'no-speech' || event.error === 'network') return;
    console.warn('SpeechRecognition error:', event.error);
  };

  rec.onend = () => {
    if (isRecording) {
      clearTimeout(restartTimer);
      restartTimer = setTimeout(() => {
        if (isRecording) {
          try {
            recognition = buildSpeechEngine();
            recognition.start();
          } catch (e) {
            console.log('Error al reanudar rec:', e);
          }
        }
      }, 60);
    }
  };

  return rec;
}

// --- SÍNTESIS DE VOZ NATURAL (PRIORIDAD VOCES NEURAL / NATURAL / ENHANCED) ---
let isSpeaking = false;
let selectedVoice = null;

function getBestAmericanVoice() {
  if (!('speechSynthesis' in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  let voice = voices.find(v => (v.lang === 'en-US' || v.lang === 'en_US') &&
    (v.name.includes('Natural') || v.name.includes('Online (Natural)')));

  if (!voice) {
    voice = voices.find(v => (v.lang === 'en-US' || v.lang === 'en_US') &&
      (v.name.includes('Enhanced') || v.name.includes('Premium') || v.name.includes('Ava') || v.name.includes('Allison')));
  }

  if (!voice) {
    voice = voices.find(v => (v.lang === 'en-US' || v.lang === 'en_US') && v.name.includes('Google US English'));
  }

  if (!voice) {
    voice = voices.find(v => (v.lang === 'en-US' || v.lang === 'en_US') && (v.name.includes('Samantha') || v.name.includes('David')));
  }

  if (!voice) {
    voice = voices.find(v => v.lang === 'en-US' || v.lang === 'en_US' || v.lang.startsWith('en'));
  }

  return voice;
}

function updateVoiceSelection() {
  selectedVoice = getBestAmericanVoice();
  const badge = document.getElementById('voiceBadge');
  if (!badge) return;
  if (selectedVoice) {
    const cleanName = selectedVoice.name
      .replace('Microsoft ', '')
      .replace('Online (Natural) - ', '')
      .replace('English (United States)', '')
      .trim();
    badge.textContent = `Voz activa: ${cleanName} (en-US)`;
  } else {
    badge.textContent = 'Voz activa: Estándar (en-US)';
  }
}

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = updateVoiceSelection;
}

function toggleSpeech() {
  if (!('speechSynthesis' in window)) {
    alert('La síntesis de voz no está soportada en tu navegador.');
    return;
  }
  if (isSpeaking) {
    stopSpeech();
  } else {
    startSpeech();
  }
}

function startSpeech() {
  window.speechSynthesis.cancel();
  if (isRecording) stopRecording();

  const textToRead = cards[currentIndex].respuesta;
  const utterance = new SpeechSynthesisUtterance(textToRead);
  utterance.lang = 'en-US';
  utterance.rate = 0.94;
  utterance.pitch = 1.0;

  if (!selectedVoice) updateVoiceSelection();
  if (selectedVoice) utterance.voice = selectedVoice;

  utterance.onstart = () => {
    isSpeaking = true;
    const btn = document.getElementById('btnSpeak');
    btn.classList.add('speaking');
    document.getElementById('speakerIcon').textContent = '⏹️';
    document.getElementById('speakerLabel').textContent = 'Pausar';
  };

  utterance.onend = () => {
    stopSpeechUI();
  };

  utterance.onerror = () => {
    stopSpeechUI();
  };

  if (!showingAnswer) {
    toggleAnswer();
  }

  window.speechSynthesis.speak(utterance);
}

function stopSpeech() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  stopSpeechUI();
}

function stopSpeechUI() {
  isSpeaking = false;
  const btn = document.getElementById('btnSpeak');
  if (!btn) return;
  btn.classList.remove('speaking');
  document.getElementById('speakerIcon').textContent = '🔊';
  document.getElementById('speakerLabel').textContent = 'Escuchar';
}

function resetSpeechFeedback() {
  if (isRecording) stopRecording();
  fullTranscript = '';
  finalAccumulatedText = '';
  document.getElementById('scoreBanner').classList.remove('show');
  document.getElementById('speechTranscript').classList.remove('show');
}

function toggleRecording() {
  if (!SpeechRec) {
    alert('Usa Google Chrome o Microsoft Edge para soporte completo de micrófono.');
    return;
  }
  stopSpeech();
  if (isRecording) stopRecording();
  else startRecording();
}

function startRecording() {
  fullTranscript = '';
  finalAccumulatedText = '';
  document.getElementById('speechTranscript').classList.remove('show');
  document.getElementById('scoreBanner').classList.remove('show');

  isRecording = true;
  const btn = document.getElementById('btnMic');
  btn.classList.add('recording');
  document.getElementById('micLabel').textContent = 'Detener';
  document.getElementById('micIcon').textContent = '⏹️';

  try {
    if (recognition) {
      try { recognition.abort(); } catch (e) {}
    }
    recognition = buildSpeechEngine();
    recognition.start();
  } catch (err) {
    console.warn('Error al iniciar micrófono:', err);
  }
}

function stopRecording() {
  isRecording = false;
  clearTimeout(restartTimer);

  const btn = document.getElementById('btnMic');
  btn.classList.remove('recording');
  document.getElementById('micLabel').textContent = 'Grabar';
  document.getElementById('micIcon').textContent = '🎙️';

  if (recognition) {
    try { recognition.stop(); } catch (e) {}
  }

  setTimeout(() => {
    evaluateAccuracy(fullTranscript, cards[currentIndex].respuesta);
  }, 500);
}

function evaluateAccuracy(userSpeech, targetAnswer) {
  if (!userSpeech || userSpeech.trim().length === 0) {
    alert('No se detectaron palabras en inglés. Asegúrate de hablar claro y probar nuevamente.');
    return;
  }

  const clean = (text) => text.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter(w => w.length > 2);
  const userWords = new Set(clean(userSpeech));
  const targetWords = clean(targetAnswer);

  if (targetWords.length === 0) return;

  let matches = 0;
  targetWords.forEach(word => {
    if (userWords.has(word)) matches++;
  });

  let coverage = (matches / targetWords.length) * 100;
  let score = Math.min(100, Math.round(coverage * 1.35));
  if (userWords.size >= 8 && score < 40) score = 45;

  const banner = document.getElementById('scoreBanner');
  const scoreVal = document.getElementById('scoreVal');
  const scoreGrade = document.getElementById('scoreGrade');

  scoreVal.textContent = `${score}%`;

  if (score >= 80) {
    scoreGrade.textContent = '🌟 ¡Excelente dominio!';
    scoreVal.style.color = '#4CAF50';
  } else if (score >= 55) {
    scoreGrade.textContent = '👍 Buena respuesta, cubre los puntos clave';
    scoreVal.style.color = '#FFCA28';
  } else {
    scoreGrade.textContent = '💡 Puedes detallar más conceptos técnicos';
    scoreVal.style.color = '#FF8A65';
  }

  banner.classList.add('show');
  if (!showingAnswer) toggleAnswer();
}
