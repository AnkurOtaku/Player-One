import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main"
import Cafeteria from "./components/Cafeteria"
import Shop from "./components/Shop"
import ContactUs from "./components/ContactUs";
import Profile from "./components/Profile"
import Carousel from "./components/Carousel";

function App() {

//   <about>
// Player One is the ultimate destination for gaming enthusiasts. Whether you're a PC, Xbox, PlayStation or Nintendo fan, we've got you covered. Enjoy solo or multiplayer games, both offline and online, with our state-of-the-art gaming PCs. Our selection of story-based games will keep you engaged for hours. We offer budget-friendly prices so you can game without breaking the bank. Maintaining proper hygiene is our top priority, so you can play in a clean and safe environment. Relax on our comfortable couches and chairs during your long gaming sessions. Come and join the fun at Player One.
// </about>

  return (
    <Router>
      <Navbar/>
      <Carousel/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/Cafeteria" element={<Cafeteria/>}/>
        <Route path="/Shop" element={<Shop/>}/>
        <Route path="/Profile" element={<Profile/>}/>
      </Routes>
      <ContactUs/>
    </Router>
  );
}

export default App;
// npm run start