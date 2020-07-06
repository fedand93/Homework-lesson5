// What does the following code show to user?

const person = {
  name: 'Joe Camel',
  age: 42,
  status: 'dead'
}
alert(typeof person);

// ------------------------------------

const hat = {
  size: 'large',
  color: 'orange'
}
alert(hat.size);

// ------------------------------------

const teddy_bear = {
  texture: 'fluffy'
}
alert(teddy_bear['texture']);

// ------------------------------------

const fat_joe = {
  crew: 'Terror Squad'
}
fat_joe.crew = 'something';
alert(fat_joe.crew);

// ------------------------------------

const pen = {};
pen.ink = 'blue';
alert(pen.ink);

// ------------------------------------

const walking_dead = {
  topic: 'zombie apocalypse'
}
alert(walking_dead['main_character']);

// ------------------------------------

const john = {
  age: 32,
  address: {
    city: 'New York',
    state: 'NY'
  }
}
alert(john.address.city);

// ------------------------------------

const golf = {
  type: 'sport',
  clubs: {
    high_end: 'taylor made',
    low_end: 'rusty basement clubs'
  }
}
golf.clubs.high_end = 'callaway';
alert(golf.clubs.high_end);

// ------------------------------------

const ideal_scene = {
  status: 'chilling',
  location: 'somewhere with good waves',
  thoughts: 'bling bling'
}
delete ideal_scene.thoughts
alert(ideal_scene.thoughts);