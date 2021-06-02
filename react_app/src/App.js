import "./App.css";
import Intro from "./components/Intro";
import Profile from "./components/Profile";
import Benchmark from "./components/Benchmark";
import Jobs from "./components/Jobs";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Intro />
            <Profile />
            <Profile />
            <Benchmark />
            <Jobs />
            <Subscribe />
            <Footer />
        </div>
    );
}

export default App;
