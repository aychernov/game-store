import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Provider} from "react-redux";
import {store} from "./redux";
import {Header} from "./components/header";
import {HomePage} from "./pages/home-page";
import {GamePage} from "./pages/game-page";
import {OrderPage} from "./pages/order-page";
import {AboutPage} from "./pages/about-page";
import {NotFoundPage} from "./pages/not-found-page";
import {LoginPage} from "./pages/login-page";

function App() {
  return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Routes>
            <Route index path='/login' element={ <LoginPage/> }/>
            <Route index path='/' element={ <HomePage/> }/>
            <Route index path='/about' element={ <AboutPage/> }/>
            <Route path="/game/:title" element={<GamePage/> }/>
            <Route path="/order" element={<OrderPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      </Provider>
  );
}

export default App;
