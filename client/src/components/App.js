import { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

function App({ fetchUser }) {
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/surveys' element={<Dashboard />} />
          <Route path='/surveys/new' element={<SurveyNew />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default connect(null, actions)(App);
