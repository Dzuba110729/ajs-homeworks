import Magician from '../Magician';

test('Created Magician class', () => {
	expect(new Magician('Magician')).toEqual({
		name: 'Magician',
		type: 'Magician',
		health: 100,
		level: 1,
		attack: 10,
		defence: 40,
	});
});