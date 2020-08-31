import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useStateValue } from './state/state';
import loginService from './services/login';
import questionService from './services/questions';
import answerService from './services/answers';
import Header from './components/Header';
import QuestionsListView from './components/QuestionsListView';
import QuestionView from './components/QuestionView';
import Footer from './components/Footer';
import ThankYou from './components/ThankYou';
import { setQuestions, setMyAnswers, setStatistics } from './state/actions';

const App: React.FC = () => {
  const [{ questions, answers, statistics }, dispatch] = useStateValue();

  useEffect(() => {
    const fetchQuestions = async () => {
      const fetchedQuestions = await questionService.fetchQuestions();
      dispatch(setQuestions(fetchedQuestions));
    };

    const login = async () => {
      const data = await loginService.login();
      dispatch(setMyAnswers(data));
    };

    const fetchStats = async () => {
      const { data } = await answerService.fetchAnswers();
      dispatch(setStatistics(data));
    };

    fetchQuestions();
    login();
    fetchStats();
  }, []);

  if (!questions) return <div>loading...</div>;

  return (
    <div>
      <div>
        <Header />
      </div>
      <Switch>
        <Route exact path="/questions/:id" render={() => <QuestionView />} />
        <Route path="/bye" render={() => <ThankYou />} />
        <Route path="/" render={() => <QuestionsListView />} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
