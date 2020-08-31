import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../state/state';

const QuestionsListView: React.FC = () => {
  const [{ currentUser, questions, answers }, dispatch] = useStateValue();

  if (!currentUser || !questions) return null;

  const history = useHistory();

  const handleStart = () => {
    history.push(`/questions/${questions[0].id}`);
  };

  interface Style {
    color: string;
    margin: string;
  }

  const style = (answered: boolean): Style => {
    return answered
      ? { color: 'green', margin: '5px' }
      : { color: 'red', margin: '5px' };
  };

  return (
    <>
      <h4>All Questions</h4>
      {questions.map((q) => (
        <p key={q.id}>
          <Link to={`/questions/${q.id}`}>{q.label}</Link>
          {answers[q.id] && answers[q.id].choice ? (
            <span
              style={style(
                answers[q.id] !== undefined &&
                  answers[q.id].choice !== undefined
              )}
            >
              answered
            </span>
          ) : (
            <span
              style={style(
                answers[q.id] !== undefined &&
                  answers[q.id].choice !== undefined
              )}
            >
              not answered
            </span>
          )}{' '}
          {}
        </p>
      ))}
      <button onClick={handleStart}>start</button>
    </>
  );
};

export default QuestionsListView;
