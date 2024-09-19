import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Layouts/Navbar";
import Footer from "./Component/Layouts/Footer";
import Homes from "./Pages/Homes";
import About from "./Pages/About";
import Notfound from "./Pages/Notfound";
// import Counter from "./Component/Layouts/Counter"
import { GithubProvider } from "./Context/GithubContext"
import UserProfile from "./Pages/UserProfile"
// import Reducers from "./reducer/Reducers"

function App() {
  return (
    <>
      <GithubProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container mx-auto px-3 pb-12  ">
              <Routes>
                <Route path="/" element={<Homes />} />
                <Route path="/about" element={<About />} />
                <Route path="/userprofile" element={<UserProfile />} />
                <Route path="/notfound" element={<Notfound />} />
                <Route path="/*" element={<Notfound />} />
              </Routes>
              
            </main>
            <Footer />
          </div>
        </Router>
      </GithubProvider>
    </>
  );
}

export default App;
