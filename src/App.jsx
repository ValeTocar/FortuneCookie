import { useState } from 'react';
import phrases from './data/phrases.json';
import { getRandomElement } from './assets/lib/utills';
import './App.css';
import { img1, img2, img3, img4 } from './assets/images';
const getImage = [img1, img2, img3, img4];

function App() {
	const [phrase, setPhrases] = useState(getRandomElement(phrases));
	const [img, setImg] = useState(getRandomElement(getImage));
	const handleClick = () => {
		setPhrases(getRandomElement(phrases));
		setImg(getRandomElement(getImage));
	};
	const urlImage = `url(${img})`;
	return (
		<div
			className="container"
			style={{
				backgroundImage: urlImage,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundAttachment: 'fixed',
				filter: 'blur(0px)',
				transition: 'background-image 0.5s ease-in-out',
				filter: 'blur(0px)',
			}}
		>
			<div className="card">
				<h1>🥠Galleta de la Fortuna🥠</h1>
				<h2>{phrase.phrase}</h2>
				<p>{phrase.author}</p>
				<button className="button" onClick={handleClick}>
					<strong>Abrir Galleta</strong>
				</button>
				
			</div>

		</div>
		
	);
}

export default App;
