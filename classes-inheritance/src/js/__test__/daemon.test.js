import Daemon from '../Daemon';

test('Created Daemon class', () => {
	expect(new Daemon('Daemon')).toEqual({
		name: 'Daemon',
		type: 'Daemon',
		health: 100,
		level: 1,
		attack: 10,
		defence: 40,
	});
});