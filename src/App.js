import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import {HomePage} from "./pages/home-page";
import {Header} from "./components/header";
import {Provider} from "react-redux";
import {store} from "./redux";

function App() {
  return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Routes>
            <Route path='/' element={ <HomePage/> }/>
          </Routes>
        </div>
      </BrowserRouter>
      </Provider>
  );
}

export default App;
