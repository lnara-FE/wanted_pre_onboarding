import './App.css';
import Modal from './components/Modal';
import Toggle from './components/Toggle';

function App() {
  return (
    <div className="App">
      <h1>프론트엔드 코스</h1>
      <ul>
        <li className="item">
          <p>1. 토글</p>
          <Toggle />
        </li>
        <li className="item">
          <p>2. 모달</p>
          <Modal />
        </li>
      </ul>
    </div>
  );
}

export default App;
