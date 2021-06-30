/*
const SearchJob = () => {
    const [job, setJob] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    const searchJob = () => {
        fetch("https://landing.jobs/api/v1/jobs")
            .then((res) => res.json())
            .then((data) => setSearchResult(data.image));
    }

    useEffect(searchJob, [job]);

    console.log(searchJob);

    return (
        <>
            <input
                type="text"
                value={job}
                onChange={(e) => setJob(e.target.value)}
            />
            <p>search food</p>
            {searchResult && <img src={searchResult} alt="job" />}
        </>
    );
};



 u render() {
        const { jobInfo } = this.props;
        return (
                        <img src={jobInfo.jobLogo_url} alt="" />
                    </div>
                        <h3>
                            {jobInfo.jobName}
                        </h3>
                        <p>

URL: https://landing.jobs/api/v1/jobs

URL: https://landing.jobs/api/v1/companies // URL: https://landing.jobs/api/v1/companies/[id]

"id": 
"city": 
"name": 
"logo_url": "https://example1.jpg",






export default SearchJob;
*/