import sortHeroes from '../app';

test('sortHeroes should return sorted Array', () => {
	const incommingArray = [
		{ name: 'мечник', health: 10 },
		{ name: 'маг', health: 100 },
		{ name: 'лучник', health: 80 },
	];
	const result = sortHeroes(incommingArray);

	expect(result).toEqual([
		{ name: 'маг', health: 100 },
		{ name: 'лучник', health: 80 },
		{ name: 'мечник', health: 10 },
	]);
});