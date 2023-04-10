import Navbar from "./components/Navbar";
import ContactUs from "./components/ContactUs";
import Carousel from "./components/Carousel";
import Pricing from "./components/Pricing";
import Facilities from "./components/Facilities";

function App() {
  return (
    <>
      <Navbar />
      <h1 className="mx-auto max-w-[1440px] py-3 px-12 font-semibold italic text-center md:text-xl">
        " Player One is the ultimate destination for gaming enthusiasts. Whether
        you're a PC, Xbox, PlayStation or Nintendo fan, we've got you covered.
        state-of-the-art gaming PCs. "
      </h1>
      <p className="hidden">
        Whether you're a PC, Xbox, PlayStation or Nintendo fan, we've got you covered. 
        Our selection of story-based games will keep you engaged for hours. We
        offer super-budget-friendly prices so you can game without breaking the
        bank. Maintaining proper hygiene is our top priority, so you can play in
        a clean and safe environment. Relax on our comfortable couches and
        chairs during your long gaming sessions. Come and join the fun at Player
        One.
      </p>
      <Carousel />
      <Pricing />
      <Facilities />
      <ContactUs />
    </>
  );
}

export default App;
// npm run start
