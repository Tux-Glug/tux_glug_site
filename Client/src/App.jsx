import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import Sessions from "./pages/Sessions";
import SessionDetails from "./pages/SessionDetails";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen px-6 sm:px-10 lg:px-24">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/sessions/:id" element={<SessionDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;