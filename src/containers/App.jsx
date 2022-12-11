
import Button from '../components/Button/Button';
import Loader from '../components/Loader/Loader';
import News from '../components/News/News';
import './App.css';

function App() {
  return (
    <div className="App">
        <h2>React with Redux Saga</h2>
         <Button />
         <Loader/>
         <News />
    </div>
  );
}

export default App;
