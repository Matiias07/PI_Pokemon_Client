import './App.css';
import { Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store'
import LandingPage from './components/LandingPage/LandingPage';
import HomePage from './components/Home/HomePage';
import NotFound from './components/NotFound/NotFound';
import DetailPage from './components/DetailPage/DetailPage';
import FormPage from './components/FormPage/FormPage';

function App() {
  return (
    <Provider store={store}>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/pokemons" element={<HomePage />} />
      <Route path="/pokemons/:id" element={<DetailPage />} />
      <Route path="/form" element={<FormPage />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
    </Provider>
  );
}

export default App;
