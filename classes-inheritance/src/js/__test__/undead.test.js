import Undead from '../Undead';

test('Created Undead class', () => {
	expect(new Undead('Undead')).toEqual({
		name: 'Undead',
		type: 'Undead',
		health: 100,
		level: 1,
		attack: 25,
		defence: 25,
	});
});