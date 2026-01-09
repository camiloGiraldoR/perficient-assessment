import { useState, useEffect, useMemo } from "react";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { questions } from "./data";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Quiz() {
    
  const [topicIdx, setTopicIdx] = useState(0);
  const [qIdx, setQIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  // Guardar respuestas seleccionadas: [{topic, qIdx, selected, correctIdx}]
  const [answers, setAnswers] = useState([]);
  const topic = questions[topicIdx];
  const q = topic.items[qIdx];
  // Calcular el número absoluto de la pregunta actual
  const totalQuestions = questions.reduce((a, t) => a + t.items.length, 0);
  let absoluteIdx = 0;
  for (let i = 0; i < topicIdx; i++) {
    absoluteIdx += questions[i].items.length;
  }
  absoluteIdx += qIdx + 1;

  const [selectedOpt, setSelectedOpt] = useState(null);

  // Mezclar opciones y calcular el índice correcto solo cuando cambia la pregunta
  const { shuffledOptions, newCorrectIdx } = useMemo(() => {
    return shuffleQuestionOption(q.options, q.answer);
  }, [q.options, q.answer, topicIdx, qIdx]);

  // Mezclar opciones cada vez que cambie la pregunta
  useEffect(() => {
    setSelectedOpt(null);
  }, [topicIdx, qIdx]);

  function handleSelect(optIdx) {
    setSelectedOpt(optIdx);
  }

  async function handleNext() {
    if (selectedOpt === null) return;
    const isCorrect = selectedOpt === newCorrectIdx;
    await Swal.fire({
      title: isCorrect ? '¡Correcto!' : 'Incorrecto',
      text: q.descripcion,
      icon: isCorrect ? 'success' : 'error',
      confirmButtonText: 'Continuar',
      customClass: {
        popup: 'perf-modal',
        confirmButton: 'perf-modal-btn'
      }
    });
    setAnswers((prev) => [
      ...prev,
      {
        topic: topic.topic,
        question: q.question,
        options: shuffledOptions,
        selected: selectedOpt,
        correctIdx: newCorrectIdx
      }
    ]);
    if (isCorrect) setScore((s) => s + 1);
    setSelectedOpt(null);
    if (qIdx < topic.items.length - 1) {
      setQIdx(qIdx + 1);
    } else if (topicIdx < questions.length - 1) {
      setTopicIdx(topicIdx + 1);
      setQIdx(0);
    } else {
      setShowResult(true);
    }
  }

  if (showResult) {
    // Generar resumen de resultados y recomendaciones
    const buenas = answers.filter(a => a.selected === a.correctIdx);
    const malas = answers.filter(a => a.selected !== a.correctIdx);
    const resumen = `Respuestas correctas: ${buenas.length} de ${totalQuestions}`;
    const detalle = answers.map((a, i) => `Pregunta ${i + 1}: ${a.question}\nTu respuesta: ${a.options[a.selected]}\nRespuesta correcta: ${a.options[a.correctIdx]}\n`).join('\n');
    const recomendaciones = malas.map((a, i) => `Pregunta: ${a.question}\nRecomendación: ${a.options[a.correctIdx]}\n`).join('\n');

    // Enviar correo solo una vez al mostrar el resultado
    useEffect(() => {
      // Puedes pedir el nombre/email al usuario si lo deseas
      const templateParams = {
        name: 'Usuario',
        title: 'Resultado Quiz',
        message: `${resumen}\n\n${detalle}\n\nRecomendaciones:\n${recomendaciones}`,
        email: 'cagiraldo88@gmail.com',
        time: new Date().toLocaleString()
      };
      emailjs.send(
        'service_aipxqje',
        'template_e40pgr7',
        templateParams,
        'I4kH_mUf_ybh1i4qz'
      ).then(
        (result) => {
          // Opcional: mostrar confirmación
          console.log('Correo enviado', result.text);
        },
        (error) => {
          console.error('Error al enviar correo', error.text);
        }
      );
    }, []); // Solo una vez

    const handleRestart = () => {
      setTopicIdx(0);
      setQIdx(0);
      setScore(0);
      setShowResult(false);
      setAnswers([]);
    };
    return (
      <div className="perf-result-layout">
        {/* Sección 1: Título y puntaje */}
        <div className="perf-result-header">
          <h2 className="perf-result-title">¡Quiz finalizado!</h2>
          <p className="mb-6" style={{ color: '#231F20', fontSize: '1.1rem' }}>
            {resumen}
          </p>
        </div>
        {/* Sección 2: Resumen de respuestas con scroll infinito */}
        <div className="perf-result-scroll">
          {answers.map((a, idx) => (
            <div key={idx} className="perf-result-card">
              <div className="perf-topic">{a.topic}</div>
              <div style={{ color: '#231F20', fontWeight: 500, marginBottom: 8 }}>{a.question}</div>
              <div>
                <span className={a.selected === a.correctIdx ? 'perf-correct' : 'perf-wrong'}>
                  Tu respuesta: {a.options[a.selected]}
                </span>
                {a.selected !== a.correctIdx && (
                  <div style={{ marginTop: 4, fontSize: '0.97rem' }}>
                    <span className="perf-correct">
                      Respuesta correcta: {a.options[a.correctIdx]}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Sección 3: Recomendaciones */}
        {malas.length > 0 && (
          <div className="perf-result-recomendaciones" style={{marginTop: '2rem'}}>
            <h3 style={{color:'#E4002B'}}>Recomendaciones</h3>
            <ul>
              {malas.map((a, i) => (
                <li key={i} style={{marginBottom:8}}>
                  <strong>{a.question}</strong>: {a.options[a.correctIdx]}
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* Sección 4: Botón de reinicio */}
        <div className="perf-result-footer">
          <button className="perf-restart" onClick={handleRestart}>
            Reiniciar prueba
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="perf-card">
        <h2 className="perf-title">{topic.topic}</h2>
        <div className="perf-question">{q.question}</div>
        {q.type === 'CHALLENGE' ? (
          <div className="perf-challenge-row">
            {shuffledOptions.map((opt, i) => (
              <div
                key={i}
                className={`perf-challenge-code${selectedOpt === i ? ' perf-challenge-selected' : ''}`}
                onClick={() => handleSelect(i)}
                style={{ cursor: 'pointer', borderColor: selectedOpt === i ? '#E4002B' : '#E0E0E0', padding: 0 }}
              >
                <SyntaxHighlighter language="java" style={darcula} customStyle={{ margin: 0, borderRadius: '8px', fontSize: '1em', minHeight: '100%', height: '100%' }}>
                  {opt}
                </SyntaxHighlighter>
              </div>
            ))}
          </div>
        ) : (
          <div className="perf-options">
            {shuffledOptions.map((opt, i) => (
              <button
                key={i}
                className={`perf-btn${selectedOpt === i ? ' perf-btn-selected' : ''}`}
                onClick={() => handleSelect(i)}
                style={{ borderColor: selectedOpt === i ? '#E4002B' : undefined }}
              >
                {opt}
              </button>
            ))}
          </div>
        )}
        <button
          className="perf-next"
          onClick={handleNext}
          disabled={selectedOpt === null}
          style={{ marginTop: '2rem', background: selectedOpt !== null ? '#E4002B' : '#E0E0E0', color: selectedOpt !== null ? '#fff' : '#6D6E71', border: 'none', borderRadius: '2rem', fontSize: '1.1rem', fontWeight: 700, padding: '0.9rem 2.2rem', cursor: selectedOpt !== null ? 'pointer' : 'not-allowed', boxShadow: '0 2px 8px 0 rgba(36,36,36,0.07)' }}
        >
          Siguiente
        </button>
        <div className="perf-progress">Pregunta {absoluteIdx} de {totalQuestions}</div>
      </div>
    </div>
  );
}

// Mezcla las opciones de una pregunta y devuelve el nuevo array y el índice de la respuesta correcta
function shuffleQuestionOption(options, correctIdx) {
  const arr = options.map((opt, idx) => ({ opt, isCorrect: idx === correctIdx }));
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  const shuffledOptions = arr.map(x => x.opt);
  const newCorrectIdx = arr.findIndex(x => x.isCorrect);
  return { shuffledOptions, newCorrectIdx };
}
