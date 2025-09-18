import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Teacher from "./pages/Teacher"
import Lecture from "./pages/Lecture"
import Event from "./pages/Event"
import NotFound from "./pages/NotFound"
import FooterBud from "./components/FooterBud"

function App() {
  return (
    <div className="flex flex-col min-h-screen"> {/* 👈 đảm bảo toàn màn hình */}
      <BrowserRouter>
        <Navbar />
        <main className="flex-grow"> {/* 👈 phần content chiếm hết chiều cao còn lại */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/lecture" element={<Lecture />} />
            <Route path="/event" element={<Event />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <FooterBud /> {/* 👈 Footer sẽ dính đáy */}
      </BrowserRouter>
    </div>
  )
}

export default App
