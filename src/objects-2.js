const createPerson = (name, age) => {
  const person = {
    name: `${name}`,
    age
  };
  return person;
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return Object.hasOwn(object, property);
};

const isOver65 = person => {
  const over65 = person.age > 65;
  return over65;
};

const getAges = people => {
  const age = people.map(person => person.age);
  return age;
};

const findByName = (name, people) => {
  const personName = people.find(obj => obj.name === name);
  return personName;
};

const findHondas = cars => {
  const honda = cars.filter(car => car.manufacturer === 'Honda');
  return honda;
};

const averageAge = people => {
  const totalAge = people.reduce((age, person) => {
    return age + person.age;
  }, 0);

  const average = totalAge / people.length;
  return average;
};

const createTalkingPerson = (name, age) => {
  const personObj = {
    name: `${name}`,
    age: age,
    introduce: friendName => {
      return `Hi ${friendName}, my name is ${name} and I am ${age}!`;
    }
  };
  return personObj;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
