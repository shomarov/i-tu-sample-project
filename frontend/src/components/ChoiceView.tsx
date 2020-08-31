import React from 'react';
import { Question, ChoiceValue } from '../../../common/src/interfaces';
import { useStateValue } from '../state/state';
import { setAnswer } from '../state/actions';

const ChoiceView: React.FC<{
  question: Question;
  stats: Boolean;
}> = ({ question, stats }) => {
  const [{ answers, statistics }, dispatch] = useStateValue();

  const answer = answers[question.id];

  const questionStats = statistics[question.id];

  const handleChoice = (value: number) => {
    const newAnswer = {
      questionId: question.id,
      choice: !answer ? value : answer.choice !== value ? value : undefined
    };

    dispatch(setAnswer(newAnswer));
  };

  const style = {
    margin: '10px',
    color: 'purple',
    display: stats ? '' : 'none'
  };

  console.log(stats);

  return (
    <form>
      {question.choices.map((c) => (
        <p key={c.value}>
          <input
            type="checkbox"
            value={c.value}
            checked={(answer && answer.choice === c.value) || false}
            onChange={() => handleChoice(c.value)}
          />
          <label>{c.label}</label>
          <span style={style}>
            Total answers: {!questionStats ? 0 : questionStats[c.value]}
          </span>
        </p>
      ))}
    </form>
  );
};

export default ChoiceView;
