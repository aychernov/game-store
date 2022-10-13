import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Provider} from "react-redux";
import {store} from "./redux";
import {Header} from "./components/header";
import {HomePage} from "./pages/home-page";
import {GamePage} from "./pages/game-page";
import {OrderPage} from "./pages/order-page";
import {AboutPage} from "./pages/about-page";

function App() {
  return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Routes>
            <Route index path='/' element={ <HomePage/> }/>
            <Route index path='/about' element={ <AboutPage/> }/>
            <Route path="/app/:title" element={<GamePage/> }/>
            <Route path="/order" element={<OrderPage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      </Provider>
  );
}

export default App;
