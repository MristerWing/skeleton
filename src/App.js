import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Skeletion from './Skeletion';

const tmp = new Array(6).fill(0);

function App() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);

		new Promise((res) => {
			setTimeout(() => {
				res();
			}, 3000);
		}).then(() => {
			axios.get('https://reqres.in/api/users?page=2').then((res) => {
				setData(res.data.data);
				setLoading(false);
			});
		});
	}, []);

	return (
		<div className="App">
			<main>
				{loading
					? tmp.map((_, index) => (
							<Skeletion key={`skeleton${index}`} />
					  ))
					: data.map((item, index) => (
							<div
								className="container"
								key={`container${index}`}
							>
								<img
									className="tmnail"
									src={item.avatar}
									alt="아바타 이미지"
								></img>
								<div className="info-layer">
									<div className="item">
										<strong>
											{item.first_name} {item.last_name}
										</strong>
									</div>
									<div className="item">{item.email}</div>
								</div>
							</div>
					  ))}
			</main>
		</div>
	);
}

export default App;
