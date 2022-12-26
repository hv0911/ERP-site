import "./App.css";
import Sideview from "./components/Side/Sideview";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from './components/Contact/Contact'
import Product from './components/Product/Product'
import Service from "./components/Service/Service"
import ProductList from "./components/Product/ProductList";
import ServiceList from "./components/Product/ServiceList.jsx"

function App() {
	return (

		<Router>
				<Sideview />

			<Routes>
    
			<Route
			 path='/contact' 
			 element= {<Contact />}
			 />
			<Route
			 path='/product' 
			 element= {<Product />}
			 />
			<Route
			 path='/service' 
			 element= {<Service />}
			 />
			<Route
			 path='/products' 
			 element= {<ProductList />}
			 />
			<Route
			 path='/services' 
			 element= {<ServiceList />}
			 />

			</Routes>
        
	
	

		</Router>
	);
}

export default App;
