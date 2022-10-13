import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {HomePage} from "./pages/home-page";

import {Header} from "./components/header";
import {Provider} from "react-redux";
import {store} from "./redux";
import {GamePage} from "./pages/game-page";
import {OrderPage} from "./pages/order-page";

function App() {
  return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Routes>
            <Route index path='/' element={ <HomePage/> }/>
            <Route path="/app/:title" element={<GamePage/> }/>
            <Route path="/order" element={<OrderPage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      </Provider>
  );
}

export default App;
