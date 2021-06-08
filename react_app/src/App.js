import "./App.css";
import Intro from "./components/Intro";
import ProfileSection from "./components/Profile/ProfileSection";
import Benchmark from "./components/Benchmark/Benchmark";
import JobList from "./components/Job/JobList";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Intro />
            <ProfileSection />
            <Benchmark />
            <JobList />
            <Subscribe />
            <Footer />
        </div>
    );
}

export default App;
