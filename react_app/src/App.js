import "./App.css";
import Intro from "./components/Intro";
import ProfileSection from "./components/Profile/Profile-Section";
import Benchmark from "./components/Benchmark";
import Jobs from "./components/Jobs";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Intro />
            <ProfileSection />
            <Benchmark />
            <Jobs />
            <Subscribe />
            <Footer />
        </div>
    );
}

export default App;
