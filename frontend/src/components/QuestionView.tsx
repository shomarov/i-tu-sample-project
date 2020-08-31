import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useStateValue } from '../state/state';
import { ChoiceValue } from '../../../common/src/interfaces';
import ChoiceView from './ChoiceView';

const QuestionView: React.FC = () => {
  const [{ questions }, dispatch] = useStateValue();
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [stats, setStats] = useState<Boolean>(false);

  const indexOfQuestion = questions.findIndex((q) => q.id === id);

  const question = questions[indexOfQuestion];

  if (!question) return null;

  const style = { marginRight: '10px' };

  const handlePrevious = () => {
    history.push(`/questions/${questions[indexOfQuestion - 1].id}`);
  };

  const handleNext = () => {
    history.push(`/questions/${questions[indexOfQuestion + 1].id}`);
  };

  const toggleStats = () => {
    setStats(!stats);
  };

  return (
    <div>
      <h4>Question:</h4>
      <div>{question.label}</div>
      <h4>Choose your answer</h4>
      <ChoiceView question={question} stats={stats} />
      {indexOfQuestion !== 0 ? (
        <button style={style} onClick={handlePrevious}>
          previous
        </button>
      ) : null}
      {indexOfQuestion !== questions.length - 1 ? (
        <button style={style} onClick={handleNext}>
          next
        </button>
      ) : null}
      <button style={style} onClick={toggleStats}>
        {!stats ? <span>show stats</span> : <span>hide stats</span>}
      </button>
    </div>
  );
};

export default QuestionView;
