import Daemon from '../deamon';

test('Daemon type', () => {
  const obj = new Daemon('Bob');
  expect(obj.type).toBe('Daemon');
});

test('Daemon name', () => {
  const obj = new Daemon('Bob');
  expect(obj.name).toBe('Bob');
});

test('Daemon health', () => {
  const obj = new Daemon('Bob');
  expect(obj.health).toEqual(100);
});

test('Daemon level', () => {
  const obj = new Daemon('Bob');
  expect(obj.level).toEqual(1);
});

test('Daemon attack', () => {
  const obj = new Daemon('Bob');
  expect(obj.attack).toEqual(10);
});

test('Daemon defence', () => {
  const obj = new Daemon('Bob');
  expect(obj.defence).toEqual(40);
});
