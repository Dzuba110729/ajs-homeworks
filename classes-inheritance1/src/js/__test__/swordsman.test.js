import Swordsman from '../Swordsman';

test('Created Swordsman class', () => {
	expect(new Swordsman('Swords')).toEqual({
		name: 'Swords',
		type: 'Swordsman',
		health: 100,
		level: 1,
		attack: 40,
		defence: 10,
	});
});