import "./App.css";
import Sideview from "./components/Side/Sideview";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from './components/Contact/Contact'

function App() {
	return (

		<Router>
				<Sideview />

			<Routes>
    
			<Route
			 path='/contact' 
			 element= {<Contact />}
			 />

			</Routes>
        
	
	

		</Router>
	);
}

export default App;
