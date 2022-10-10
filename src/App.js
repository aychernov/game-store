import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import {HomePage} from "./pages/home-page";
import {Header} from "./components/header";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Routes>
            <Route path='/' element={ <HomePage/> }/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
