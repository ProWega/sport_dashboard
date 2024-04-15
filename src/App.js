import logo from './logo.svg';
import './App.css';
import Dashboard from "./comoponents/Dashboard";
import DetailPage from "./comoponents/DetailPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MetricDetail from "./comoponents/MetricDetail";

function App() {
  return (


        <Router>

            <Routes>
                {/* ... другие маршруты */}
                <Route path="/" element={<Dashboard />} />
                <Route path='/test' element={<DetailPage />} />
                <Route
                    path="/metric-detail/:metricName"
                    element={<MetricDetail metricName />}
                    loader={({ params }) => {
                        console.log(params.metricName); // "hotspur"
                        alert(params.metricName)
                    }}
                />
            </Routes>


        </Router>

  );
}

export default App;
