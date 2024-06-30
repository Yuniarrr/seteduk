// import { useState } from 'react';
import Navbar from './components/Navbar';
import Beranda from './pages/Beranda';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="w-full">
      <Navbar />
      {/* <Beranda /> */}
      <div className="mt-16">
        <Routes>
          <Route
            path="/"
            element={<Beranda />}
          />
          <Route
            path="/profile"
            element={<Profile />}
          />
        </Routes>
      </div>
      <Footer />
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
    </div>
  );
}

export default App;
