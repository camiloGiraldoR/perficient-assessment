import { useState, useEffect, useMemo } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { questions } from './data';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

// ---------------------------------------------
// Constantes (config, estilos, textos)
// ---------------------------------------------
// Configuración de EmailJS (mueve estos IDs a variables de entorno en producción)
const EMAILJS_SERVICE_ID = 'service_aipxqje';
const EMAILJS_TEMPLATE_ID = 'template_e40pgr7';
const EMAILJS_PUBLIC_KEY = 'I4kH_mUf_ybh1i4qz';

// Bandera para pruebas: desactivar envío de correo al comenzar la valoración
// Cambia a `true` si quieres que se envíe la notificación de inicio.
const SEND_START_EMAIL = true;

const UI = {
  colors: {
    primary: '#E4002B',
    muted: '#E0E0E0',
    text: '#231F20',
    disabledText: '#6D6E71',
  },
  classes: {
    modal: 'perf-modal',
    modalBtn: 'perf-modal-btn',
    correct: 'perf-correct',
    wrong: 'perf-wrong',
    btn: 'perf-btn',
    btnSelected: 'perf-btn-selected',
    next: 'perf-next',
    card: 'perf-card',
    title: 'perf-title',
    question: 'perf-question',
    options: 'perf-options',
    progress: 'perf-progress',
    challengeRow: 'perf-challenge-row',
    challengeCode: 'perf-challenge-code',
    challengeSelected: 'perf-challenge-selected',
    resultLayout: 'perf-result-layout',
    resultHeader: 'perf-result-header',
    resultTitle: 'perf-result-title',
    resultScroll: 'perf-result-scroll',
    resultCard: 'perf-result-card',
    topic: 'perf-topic',
    sendEmail: 'perf-send-email',
    restart: 'perf-restart',
    resultFooter: 'perf-result-footer',
  }
};

// ---------------------------------------------
// Utilidades puras (sin efectos)
// ---------------------------------------------
/**
 * Mezcla las opciones de una pregunta y devuelve el nuevo array y el índice de la respuesta correcta
 */
function shuffleQuestionOptions(options, correctIdx) {
  const arr = options.map((opt, idx) => ({ opt, isCorrect: idx === correctIdx }));
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return {
    shuffledOptions: arr.map(x => x.opt),
    newCorrectIdx: arr.findIndex(x => x.isCorrect),
  };
}

// ---------------------------------------------
// Funciones con efectos (helpers de UI, envío correo)
// ---------------------------------------------
async function alertAnswerResult(isCorrect, description) {
  await Swal.fire({
    title: isCorrect ? '¡Correcto!' : 'Incorrecto',
    text: description,
    icon: isCorrect ? 'success' : 'error',
    confirmButtonText: 'Continuar',
    customClass: {
      popup: UI.classes.modal,
      confirmButton: UI.classes.modalBtn,
    },
    allowOutsideClick: false,
  });
}

function sendResultsEmail({ resumen, detalle, recomendaciones, participantEmail = '' }) {
  const participantLine = participantEmail ? `El correo ${participantEmail} realizó una valoración y este fue su resultado:\n\n` : '';
  const templateParams = {
    name: 'Usuario',
    title: 'Resultado Valoracion',
    message: `${participantLine}${resumen}\n\n${detalle}\n\nRecomendaciones:\n${recomendaciones}`,
    email: 'cagiraldo88@gmail.com',
    time: new Date().toLocaleString(),
  };
  return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
}

// Enviar notificación de inicio de valoración (destinatario fijo)
function sendStartEmail(participantEmail = '') {
  const message = participantEmail
    ? `El correo ${participantEmail} ha comenzado una valoración en la plataforma.`
    : 'Se ha iniciado una valoración (correo de participante no proporcionado).';
  const templateParams = {
    name: 'Sistema',
    title: 'Inicio de valoración',
    message: `${message}\nHora: ${new Date().toLocaleString()}`,
    email: 'cagiraldo88@gmail.com',
    time: new Date().toLocaleString(),
  };
  return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
}

// ---------------------------------------------
// Componente principal
// ---------------------------------------------
export default function Quiz() {
  // Estado
  // Pantalla de inicio
  const [showStart, setShowStart] = useState(true);
  const [userEmail, setUserEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [emailSent, setEmailSent] = useState(false);
  const [topicIdx, setTopicIdx] = useState(0);
  const [qIdx, setQIdx] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [startNotified, setStartNotified] = useState(false);

  // Derivados
  const topic = questions[topicIdx];
  const q = topic.items[qIdx];
  const totalQuestions = questions.reduce((a, t) => a + t.items.length, 0);
  const absoluteIdx = questions.slice(0, topicIdx).reduce((acc, t) => acc + t.items.length, 0) + (qIdx + 1);

  // Mezclar opciones sólo cuando cambia la pregunta
  const { shuffledOptions, newCorrectIdx } = useMemo(() => {
    return shuffleQuestionOptions(q.options, q.answer);
  }, [q.options, q.answer, topicIdx, qIdx]);

  // Reset selección al cambiar de pregunta
  useEffect(() => { setSelectedOpt(null); }, [topicIdx, qIdx]);

  // Handlers
  const handleSelect = (optIdx) => setSelectedOpt(optIdx);

  const handleNext = async () => {
    if (selectedOpt === null) return;
    const isCorrect = selectedOpt === newCorrectIdx;
    await alertAnswerResult(isCorrect, q.descripcion);

    setAnswers(prev => ([
      ...prev,
      {
        topic: topic.topic,
        question: q.question,
        options: shuffledOptions,
        selected: selectedOpt,
        correctIdx: newCorrectIdx,
        recomendacion: q.recomendacion || q.recomendation || ''
      }
    ]));

    setSelectedOpt(null);

    if (qIdx < topic.items.length - 1) {
      setQIdx(qIdx + 1);
    } else if (topicIdx < questions.length - 1) {
      setTopicIdx(topicIdx + 1);
      setQIdx(0);
    } else {
      setShowResult(true);
    }
  };

  // --- Inicio: validación correo y control de pantalla inicial ---
  function validateEmail(email) {
    return /^([a-zA-Z0-9_.+-]+)@perficient\.com$/.test(email);
  }

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
    setEmailError(validateEmail(e.target.value) ? '' : 'El correo debe ser @perficient.com');
  };

  

  const handleStart = async () => {
    if (!validateEmail(userEmail)) {
      setEmailError('El correo debe ser @perficient.com');
      return;
    }
    // Intentar notificar el inicio (no bloquear si falla).
    // Para pruebas locales podemos desactivar este envío con la bandera `SEND_START_EMAIL`.
    if (SEND_START_EMAIL && !startNotified) {
      try {
        await sendStartEmail(userEmail);
        setStartNotified(true);
      } catch (err) {
        console.error('Error enviando notificación de inicio', err);
      }
    }
    setShowStart(false);
  };

  // Resultados
  const buenas = answers.filter(a => a.selected === a.correctIdx);
  const malas = answers.filter(a => a.selected !== a.correctIdx);
  const resumen = `Respuestas correctas: ${buenas.length} de ${totalQuestions}`;
  const detalle = answers
    .map((a, i) => `Pregunta ${i + 1}: ${a.question}\nTu respuesta: ${a.options[a.selected]}\nRespuesta correcta: ${a.options[a.correctIdx]}\n`)
    .join('\n');
  const recomendaciones = malas
    .map(a => `Pregunta: ${a.question}\nRecomendación: ${a.options[a.correctIdx]}\n`)
    .join('\n');

  // Generar contenido TXT con el detalle de buenas, malas y recomendaciones
  function generateResultsText() {
    const lines = [];
    lines.push('Resultado de la valoración - ' + new Date().toLocaleString());
    if (userEmail) lines.push('Participante: ' + userEmail);
    lines.push('');
    lines.push(resumen);
    lines.push('');

    lines.push('--- Preguntas correctas ---');
    if (buenas.length === 0) {
      lines.push('Ninguna pregunta correcta.');
    } else {
      buenas.forEach((a, i) => {
        lines.push(`${i + 1}. [${a.topic}] ${a.question}`);
        lines.push(`Respuesta: ${a.options[a.correctIdx]}`);
        lines.push('');
      });
    }

    lines.push('--- Preguntas incorrectas ---');
    if (malas.length === 0) {
      lines.push('Ninguna pregunta incorrecta.');
    } else {
      malas.forEach((a, i) => {
        lines.push(`${i + 1}. [${a.topic}] ${a.question}`);
        lines.push(`Tu respuesta: ${a.options[a.selected] || 'No respondida'}`);
        lines.push(`Respuesta correcta: ${a.options[a.correctIdx]}`);
        if (a.recomendacion) {
          lines.push(`Recomendación: ${a.recomendacion}`);
        }
        lines.push('');
      });
    }

    // Añadir bloque final de recomendaciones resumidas
    lines.push('--- Recomendaciones (resumen) ---');
    if (malas.length === 0) {
      lines.push('No hay recomendaciones, todas las preguntas fueron correctas.');
    } else {
      malas.forEach((a, i) => {
        if (a.recomendacion) {
          lines.push(`${i + 1}. ${a.recomendacion}`);
        }
      });
    }

    return lines.join('\n');
  }

  function downloadResults() {
    try {
      const text = generateResultsText();
      const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const safeEmail = (userEmail || 'participante').replace(/[^a-z0-9_\-@.]/gi, '_');
      const filename = `resultado_${safeEmail}_${Date.now()}.txt`;
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Error generando archivo de resultados', err);
      Swal.fire({ title: 'Error', text: 'No se pudo generar el archivo de resultados.', icon: 'error', confirmButtonText: 'OK' });
    }
  }

  // Render de pantalla de resultados
  // Pantalla de inicio: reglas y recolección de correo
  if (showStart) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#fff' }}>
        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1548 348" style={{ width: 180, marginBottom: 24 }}>
          <title>perfi-svg</title>
          <style>{`.s0 { fill: #cb2027 } .s1 { fill: #231f20 }`}</style>
          <path id="Layer" className="s0" d="m0 347.9v-347.9h202.2c83.6 0 123.2 48.6 123.2 114.1 0 69.4-44.8 116.7-142.5 116.7h-46v-12.4h34.8c67.4 0 98.9-36.8 98.9-91 0-51.1-27.5-89.7-85.6-89.7h-140.2v272.1h92.8v38.1z"/>
          <path id="Layer" className="s1" d="m136.9 156.8v-56.9h10c20.8 0 28.8 8.2 28.8 27.5 0 19.3-9.4 30-34 30z"/>
          <path id="Layer" fillRule="evenodd" className="s1" d="m365.9 65.5h92.8v28.7h-58.7v77.2h55.4v28.7h-55.4v84.1h58.7v28.6h-92.8zm134.2 0h52.8c49.7 0 55 13.3 55 67.3 0 33.2-4.5 47.6-32.5 56.1 23.2 2.4 31.1 14.9 31.1 37.7v53.5q-0.1 4 0 7.9 0 3.9 0.3 7.9 0.2 3.9 0.6 7.8 0.5 3.9 1.1 7.8h-31.9q-1.2-2.5-2.1-5.2-1-2.7-1.5-5.5-0.5-2.8-0.7-5.7-0.1-2.8 0.1-5.7v-55c0-23.4-4-30-26.6-30h-11.6v107.3h-34.1zm34.1 110.7h9c26.8 0 29.8-5.1 29.8-42 0-37-1.2-40-22.4-40h-16.4zm120.1-110.7h92.8v28.7h-58.7v77.2h55.3v28.7h-55.3v112.1h-34.1zm133.6 0h33.9v246.6h-33.9zm78.8 62.9c0-34.4 11.2-64.9 57.6-64.9 33.8 0 49.5 17 49.5 44.8v24.6h-32.4v-17.1c0-15-5.4-25.7-19.8-25.7-17.7 0-21.2 12.7-21.2 42.5v120.8c0 29.2 9.3 34.3 20.2 34.3 10.9 0 20.8-8.8 20.8-29.9v-16.6h32.1v28.1c0 26-10.6 45.8-50.2 45.8-43-0.9-56.6-23.7-56.6-62zm148.5-62.8h34v246.7h-34zm80.2 0h92.8v28.7h-58.6v77.2h55.3v28.7h-55.3v84.1h58.6v28.5h-92.8zm134.2 0h47.1l40.3 205.1v-205.1h32.1v246.7h-49.1l-39.6-210.5v210.5h-29.9zm161.5 0h116v28.7h-41v217.9h-34v-217.9h-41zm135.8 27.4c-1.8-0.7-3.4-1.8-4.8-3.2-1.4-1.4-2.5-3-3.3-4.9-0.7-1.8-1.1-3.7-1.1-5.7 0-6 3.6-11.5 9.2-13.8 5.6-2.3 12-1 16.3 3.2 4.3 4.3 5.5 10.8 3.2 16.3-2.3 5.6-7.7 9.3-13.8 9.3-1.9 0-3.9-0.4-5.7-1.2zm10.2-2.3c1.4-0.6 2.7-1.5 3.8-2.6 1.1-1.1 1.9-2.4 2.5-3.8 0.6-1.4 0.9-2.9 0.9-4.5 0-4.8-2.9-9.1-7.3-10.9-4.5-1.8-9.6-0.8-12.9 2.6-3.4 3.4-4.4 8.5-2.5 12.9 1.9 4.5 6.2 7.3 11 7.2 1.6 0 3.1-0.3 4.5-0.9zm-7.5-9.8v7.1h-2.6v-17.3h5.3c3.2 0 6.3 0.7 6.3 4.6q0 0.7-0.2 1.4-0.3 0.7-0.8 1.2-0.4 0.6-1.1 0.9-0.6 0.3-1.3 0.4c3 0.5 3 1.5 3 3.5q0 0.6 0.1 1.2 0 0.6 0.1 1.2 0.2 0.6 0.3 1.2 0.2 0.6 0.4 1.1h-3.9c0-0.9 0.9-1.4 0-2.9-0.9-1.5-0.7-3.6-0.9-3.6q-0.3-0.1-0.7-0.2-0.3-0.1-0.6-0.1-0.3 0-0.6 0.1-0.4 0.1-0.7 0.2zm2.7-2.7c3.2-0.2 3.2-1.2 3.2-2.4 0-1.2-0.6-2-2.7-2h-3.2v4.4z"/>
        </svg>
        <div style={{ maxWidth: 560, background: '#f8f8f8', borderRadius: 12, padding: 28, boxShadow: '0 2px 12px rgba(0,0,0,0.05)', textAlign: 'left' }}>
          <h2 style={{ color: UI.colors.primary, marginBottom: 12, textAlign: 'left' }}>
            ¡Bienvenido a tu Valoración Perficient Developer!</h2>
          <p style={{ marginBottom: 16, color: UI.colors.text }}>
            Una oportunidad para mostrar tu talento y seguir creciendo.
          </p>
          <h3>Antes de comenzar</h3>
            <ul>
              <li>Responde con tu conocimiento actual, sin usar internet ni herramientas de IA.</li>
              <li>La prueba incluye preguntas teóricas y ejercicios prácticos donde elegirás la estructura de código correcta.</li>
              <li>No hay límite de tiempo: tómalo con calma y concéntrate.</li>
            </ul>

            <h3>Importante</h3>
            <ul>
              <li>Si cierras o refrescas la página, la valoración se anulará.</li>
              <li>No podrás volver atrás: cada respuesta te lleva a la siguiente pregunta y no se puede editar la anterior.</li>
            </ul>

            <h3>Al finalizar</h3>
            <ul>
              <li>Verás tu resultado de la valoración.</li>
              <li>Para concluir, presiona “Enviar resultado”.</li>
            </ul>
            <p>Esta valoración no afecta tu rol ni posición. Nos ayuda a identificar tus fortalezas y áreas de mejora para acompañarte en tu crecimiento profesional.</p>
          <div style={{ marginBottom: 8, color: UI.colors.text }}>Ingresa tu correo corporativo <strong>@perficient.com</strong>:</div>
          <input
            type="email"
            value={userEmail}
            onChange={handleEmailChange}
            placeholder="correo@perficient.com"
            style={{ display: 'block', width: '70%', maxWidth: 420, padding: '0.7rem', borderRadius: 8, border: '1px solid #E0E0E0', margin: '0 auto 8px auto', fontSize: '1rem' }}
          />
          {emailError && <div style={{ color: UI.colors.primary, marginBottom: 8 }}>{emailError}</div>}
          <div style={{ display: 'flex', gap: 12, marginTop: 8, justifyContent: 'center' }}>
            <button
              onClick={handleStart}
              disabled={!validateEmail(userEmail)}
              style={{
                background: validateEmail(userEmail) ? UI.colors.primary : UI.colors.muted,
                color: validateEmail(userEmail) ? '#fff' : UI.colors.disabledText,
                border: 'none', borderRadius: 24, padding: '0.7rem 1.6rem', fontWeight: 700, cursor: validateEmail(userEmail) ? 'pointer' : 'not-allowed'
              }}
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showResult) {
    const handleRestart = () => {
      setTopicIdx(0);
      setQIdx(0);
      setShowResult(false);
      setAnswers([]);
      setEmailSent(false);
    };

    const onSendEmail = async () => {
      if (emailSent) return;
      try {
        const result = await sendResultsEmail({ resumen, detalle, recomendaciones, participantEmail: userEmail });
        await Swal.fire({
          title: 'Correo enviado',
          text: 'El resumen de tu prueba ha sido enviado correctamente.',
          icon: 'success',
          confirmButtonText: 'OK',
          customClass: { popup: UI.classes.modal, confirmButton: UI.classes.modalBtn },
        });
        console.log('Correo enviado', result.text);
        setEmailSent(true);
      } catch (error) {
        await Swal.fire({
          title: 'Error',
          text: 'Hubo un error al enviar el correo.',
          icon: 'error',
          confirmButtonText: 'OK',
          customClass: { popup: UI.classes.modal, confirmButton: UI.classes.modalBtn },
        });
        console.error('Error al enviar correo', error?.text || error);
      }
    };

    return (
      <div className={UI.classes.resultLayout}>
        {/* Sección 1: Título y puntaje */}
        <div className={UI.classes.resultHeader}>
          <h2 className={UI.classes.resultTitle}>¡Quiz finalizado!</h2>
          <p className="mb-6" style={{ color: UI.colors.text, fontSize: '1.1rem' }}>{resumen}</p>
          <p className="mb-6" style={{ color: UI.colors.text, fontSize: '1.1rem', fontWeight: 700 }}>
            Preguntas correctas: <span style={{ color: UI.colors.primary }}>{buenas.length}</span> de {totalQuestions}
          </p>
        </div>

        {/* Sección 2: Resumen de respuestas */}
        <div className={UI.classes.resultScroll}>
          {answers.map((a, idx) => (
            <div key={idx} className={UI.classes.resultCard}>
              <div className={UI.classes.topic}>{a.topic}</div>
              <div style={{ color: UI.colors.text, fontWeight: 500, marginBottom: 8 }}>{a.question}</div>
              <div>
                <span className={a.selected === a.correctIdx ? UI.classes.correct : UI.classes.wrong}>
                  Tu respuesta: {a.options[a.selected]}
                </span>
                {a.selected !== a.correctIdx && (
                  <div style={{ marginTop: 4, fontSize: '0.97rem' }}>
                    <span className={UI.classes.correct}>
                      Respuesta correcta: {a.options[a.correctIdx]}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Sección 3: Acciones */}
        <div className={UI.classes.resultFooter} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <button
            className={UI.classes.sendEmail}
            onClick={onSendEmail}
            disabled={emailSent}
            style={{
              background: emailSent ? UI.colors.muted : UI.colors.primary,
              color: emailSent ? UI.colors.disabledText : '#fff',
              border: 'none', borderRadius: '2rem', fontSize: '1.1rem', fontWeight: 700,
              padding: '0.9rem 2.2rem', cursor: emailSent ? 'not-allowed' : 'pointer',
              boxShadow: '0 2px 8px 0 rgba(36,36,36,0.07)'
            }}
          >
            {emailSent ? 'Correo enviado' : 'Enviar resultados por correo'}
          </button>

          <button
            className={UI.classes.sendEmail}
            onClick={downloadResults}
            style={{
              background: '#fff',
              color: UI.colors.primary,
              border: `1px solid ${UI.colors.primary}`,
              borderRadius: '2rem',
              fontSize: '1.1rem',
              fontWeight: 700,
              padding: '0.9rem 2.2rem',
              cursor: 'pointer'
            }}
          >
            Descargar resultados (TXT)
          </button>

          <button className={UI.classes.restart} onClick={handleRestart}>Reiniciar prueba</button>
        </div>
      </div>
    );
  }

  // Render del Quiz en curso
  return (
    <div>
      <div className={UI.classes.card}>
        <h2 className={UI.classes.title}>{topic.topic}</h2>
        <div className={UI.classes.question}>{q.question}</div>

        {q.type === 'CHALLENGE' ? (
          <div className={UI.classes.challengeRow}>
            {shuffledOptions.map((opt, i) => (
              <div
                key={i}
                className={`${UI.classes.challengeCode}${selectedOpt === i ? ' ' + UI.classes.challengeSelected : ''}`}
                onClick={() => handleSelect(i)}
                style={{ cursor: 'pointer', borderColor: selectedOpt === i ? UI.colors.primary : UI.colors.muted, padding: 0 }}
              >
                <SyntaxHighlighter language="java" style={darcula} customStyle={{ margin: 0, borderRadius: '8px', fontSize: '1em', minHeight: '100%', height: '100%' }}>
                  {opt}
                </SyntaxHighlighter>
              </div>
            ))}
          </div>
        ) : (
          <div className={UI.classes.options}>
            {shuffledOptions.map((opt, i) => (
              <button
                key={i}
                className={`${UI.classes.btn}${selectedOpt === i ? ' ' + UI.classes.btnSelected : ''}`}
                onClick={() => handleSelect(i)}
                style={{ borderColor: selectedOpt === i ? UI.colors.primary : undefined }}
              >
                {opt}
              </button>
            ))}
          </div>
        )}

        <button
          className={UI.classes.next}
          onClick={handleNext}
          disabled={selectedOpt === null}
          style={{
            marginTop: '2rem',
            background: selectedOpt !== null ? UI.colors.primary : UI.colors.muted,
            color: selectedOpt !== null ? '#fff' : UI.colors.disabledText,
            border: 'none', borderRadius: '2rem', fontSize: '1.1rem', fontWeight: 700,
            padding: '0.9rem 2.2rem', cursor: selectedOpt !== null ? 'pointer' : 'not-allowed',
            boxShadow: '0 2px 8px 0 rgba(36,36,36,0.07)'
          }}
        >
          Siguiente
        </button>

        <div className={UI.classes.progress}>Pregunta {absoluteIdx} de {totalQuestions}</div>
      </div>
    </div>
  );
}
