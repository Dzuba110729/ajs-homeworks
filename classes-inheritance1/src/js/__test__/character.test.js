import Character from '../Character';

test('Created Character class', () => {
	expect(new Character('Bower', 'Bowerman')).toEqual({
		name: 'Bower',
		type: 'Bowerman',
		health: 100,
		level: 1,
	});
});

test('Created Character class', () => {
	expect(() => new Character('B', 'Bowerman')).toThrowError(new Error('Длина переменной name должна быть в проделах от 2 до 10'));
});

test('Created Character class', () => {
	expect(() => new Character('Bower', 8)).toThrowError(new Error('Тип переменной не строка'));
});

test('Created Character class', () => {
	expect(() => new Character(8, 'Bowerman')).toThrowError(new Error('Тип переменной не строка'));
});