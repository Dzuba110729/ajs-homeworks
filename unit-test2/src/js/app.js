export default function sortHeroes(incommingData) {
	return incommingData.sort((prev, next) => next.health - prev.health);
}