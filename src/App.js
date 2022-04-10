import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import Start from './pages/Start';
import Events from './pages/Events';
import BookEvent from './pages/BookEvent';
import Cart from './pages/Cart';
import Tickets from './pages/Tickets';


export const GlobalContext = createContext();

function App() {

  const [globalData, setGlobalData] = useState([]);

  useEffect(() => {
    // console.log(globalData)
  }, [globalData])

  return (
    <GlobalContext.Provider value={[globalData, setGlobalData]}>
      <Router>
        <main className="App">
          {/* Empty */}
        </main>
        <Routes>
          <Route exact path="/" element={<Start />} />
          <Route exact path="/events" element={<Events />} />
          <Route path="/events/:id" element={<BookEvent />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/tickets" element={<Tickets />} />
        </Routes>
      </Router>
    </GlobalContext.Provider>
  );
}

export default App;