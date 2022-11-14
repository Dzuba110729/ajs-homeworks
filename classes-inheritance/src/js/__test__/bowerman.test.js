import Bowerman from '../Bowerman';

test('Created Bowerman class', () => {
  expect(new Bowerman('Bower')).toEqual({
    name: 'Bower',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});