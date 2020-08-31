import React from 'react';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../state/state';
import { clearMyAnswers, setStatistics } from '../state/actions';
import answerService from '../services/answers';

const Footer: React.FC = () => {
  const [{ currentUser, answers }, dispatch] = useStateValue();
  const history = useHistory();

  const choices = Object.values(answers).map((a) => a.choice);

  const allNotAnswered = choices.some((choice) => isNaN(Number(choice)));

  const handleSubmit = async () => {
    await answerService.sendAnswers(currentUser.userId, answers);

    const { data } = await answerService.fetchAnswers();
    dispatch(setStatistics(data));
    history.push('/bye');
  };

  const handleClear = () => {
    dispatch(clearMyAnswers());
  };

  return (
    <div>
      <p>Please answer all questions before submitting</p>
      <button disabled={allNotAnswered} onClick={handleSubmit}>
        submit
      </button>
      <button style={{ margin: '10px' }} onClick={handleClear}>
        clear all answers
      </button>
    </div>
  );
};

export default Footer;
