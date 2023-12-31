import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import {GitProvider} from './context/github/GitContext'
import User from "./pages/User";




function App() {
  return (
    <GitProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Nav />
          <main className="container mx-auto px-3 pb-12">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/user/:login" element={<User />}/>
              <Route path="/notfound" element={<NotFound />}/>
              <Route path="/*" element={<NotFound />}/>
            </Routes>
          </main>
          <Footer />
        </div>

      
        
      </Router>
    </GitProvider>
  );
}

export default App;
