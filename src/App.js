import Navbar from "./components/Navbar";
import ContactUs from "./components/ContactUs";
import Carousel from "./components/Carousel";
import Pricing from "./components/Pricing";
import Facilities from "./components/Facilities";

function App() {
  return (
    <div className="md:font-kalam">
      <Navbar />
      <h1 className="mx-auto max-w-[1440px] py-3 px-12 font-semibold text-center md:text-xl">
        " Player One is the ultimate destination for gaming enthusiasts. Whether
        you're a PC, Xbox, PlayStation or Nintendo fan, we've got you covered. "
        <br/>
        " Come and join the fun at Player One. "
      </h1>
      <Carousel />
      <Pricing />
      <Facilities />
      <ContactUs />
    </div>
  );
}

export default App;
// npm run start
