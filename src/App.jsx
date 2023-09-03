import Header from "./component/Header/Header";
import Hero from "./component/Hero";
import './App.css';
import Company from "./component/Companies/Company"
import Journal from "./component/Journals/Journal";
import Value from "./component/About/Value";
import Contact from "./component/Contact/Contacts";
import GetStart from "./component/GetStarted/GetStart";
import Footer from "./component/Footer/Footer";
// the main show of the page  
function App() {
  return (
    <div className="App">
      <div>

      <div className="white-gradient" />
      <Header />
      <Hero/>
      </div>
      <Company />
      <Journal />
      <Value />
      <Contact />
      <GetStart />
      <Footer />

      </div>
  );
}

export default App;
