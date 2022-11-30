import { useState, useEffect } from "react";
import Tour from "./components/Tour";
import "./App.css";
const url = "https://jsonplaceholder.typicode.com/comments";
const App = () => {
	const [tours, setTours] = useState([]);
	const [loading, setLoading] = useState(true);

	const getTours = async () => {
		const response = await fetch(url);
		const data = await response.json();
		setTours(data);
		setLoading(false);
	};
	useEffect(() => {
		getTours();
	}, []);

	const handleDelete = (id) => {
    console.log(id);
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours)
	};

	return (
		<div className="App">
			<h1>Our Tours</h1>
			{loading && (
				<div>
					<h2>LOADING...</h2>
				</div>
			)}
			{!loading &&
				tours.map((tour) => {
					return (
						<section key={tour.id}>
              
							<Tour {...tour} handleDelete={handleDelete} />
              </section>
					);
				})}
		</div>
	);
};

export default App;
