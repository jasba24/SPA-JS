import getData from "../utils/getData"
import "../styles/main.css"

const About = async () => {
	const character = await getData()
	const view = `
		<div class="Characters-outer">
		<article class="Characters-card">
				<img src="${character.image}" alt="${character.name}">
					<h2>${character.name}</h2>
				</img>
			</article>
			<article class="Characters-card">
				<h3>Episodes: <span>${character.episode.length}</span></h3>
				<h3>Status: <span>${character.status}</span></h3>
				<h3>Species: <span>${character.species}</span></h3>
				<h3>Gender: <span>${character.gender}</span></h3>
				<h3>Origin: <span>${character.origin.name}</span></h3>
				<h3>Last location: ${character.location.name}</h3>
			</article>
		</div>
	`
	return view
}

export default About