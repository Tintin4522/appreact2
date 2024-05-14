
import { Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage";
import Services from "./pages/ServicesPage";
import Realisations from "./pages/RealisationPage";
import Blog from "./pages/BlogPage";
import About from "./pages/AboutPage";
import Mentions from "./pages/MentionsPage";

import "./index.css"
import Header from "./components/Header";
import Footer from "./components/Footer";

import GitHubProfile from "./pages/GithubProfile";


const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/ServicesPage" element={<Services></Services>}></Route>
        <Route path="/RealisationPage" element={<Realisations></Realisations>}></Route>
        <Route path="/BlogPage" element={<Blog></Blog>}></Route>
        <Route path="/AboutPage" element={<About></About>}></Route>
        <Route path="/MentionsLegales" element={<Mentions></Mentions>}></Route>
        <Route path="/GithubProfile" element={<GitHubProfile></GitHubProfile>}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
