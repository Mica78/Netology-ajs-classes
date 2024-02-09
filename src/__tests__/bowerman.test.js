import Bowerman from '../bowerman';

test('Bowerman type', () => {
  const bowerman = new Bowerman('Bob');
  expect(bowerman.type).toBe('Bowerman');
});

test('Bowerman name', () => {
  const bowerman = new Bowerman('Bob');
  expect(bowerman.name).toBe('Bob');
});

test('Bowerman health', () => {
  const bowerman = new Bowerman('Bob');
  expect(bowerman.health).toEqual(100);
});

test('Bowerman level', () => {
  const bowerman = new Bowerman('Bob');
  expect(bowerman.level).toEqual(1);
});

test('Bowerman attack', () => {
  const bowerman = new Bowerman('Bob');
  expect(bowerman.attack).toEqual(25);
});

test('Bowerman defence', () => {
  const bowerman = new Bowerman('Bob');
  expect(bowerman.defence).toEqual(25);
});
