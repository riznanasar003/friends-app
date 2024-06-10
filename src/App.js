import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddFriend from './Components/AddFriend';
import ViewAll from './Components/ViewAll';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddFriend/>}/>
          <Route path='/viewall' element={<ViewAll/>}/>

        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
