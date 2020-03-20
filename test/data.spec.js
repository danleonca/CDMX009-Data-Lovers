import {
  candys, findYourPokemon, filterData, filterWeak, printData, printInfoPokemon,
}
  from '../src/data.js';
// import data from '../src/data/pokemon/pokemon.js';

describe('candys', () => {
  it('should be a function', () => {
    expect(typeof candys).toBe('function');
  });
  it('should return candy_count from the array when you type the pokemons name', () => {
    expect(typeof candys()).toBe('object');
  });
});

describe('findYourPokemon', () => {
  it('should be a function', () => {
    expect(typeof findYourPokemon).toBe('function');
  });
  it('should return the pokemons info', () => {
    expect(typeof findYourPokemon()).toBe('object');
  });
});

describe('filterData', () => {
  it('should filter the pokemons of the selected element', () => {
    expect(filterData('Water')).toBeTruthy();
  });
  it('should show me all fire pokemons when I select the elemnt fire', () => {
    expect(filterData('Fire')).toEqual([{
      avg_spawns: 25.3, candy: 'Charmander Candy', candy_count: 25, egg: '2 km', height: '0.61 m', id: 4, img: 'http://www.serebii.net/pokemongo/pokemon/004.png', multipliers: [1.65], name: 'Charmander', next_evolution: [{ name: 'Charmeleon', num: '005' }, { name: 'Charizard', num: '006' }], num: '004', spawn_chance: 0.253, spawn_time: '08:45', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock'], weight: '8.5 kg',
    }, {
      avg_spawns: 1.2, candy: 'Charmander Candy', candy_count: 100, egg: 'Not in Eggs', height: '1.09 m', id: 5, img: 'http://www.serebii.net/pokemongo/pokemon/005.png', multipliers: [1.79], name: 'Charmeleon', next_evolution: [{ name: 'Charizard', num: '006' }], num: '005', prev_evolution: [{ name: 'Charmander', num: '004' }], spawn_chance: 0.012, spawn_time: '19:00', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock'], weight: '19.0 kg',
    }, {
      avg_spawns: 0.31, candy: 'Charmander Candy', egg: 'Not in Eggs', height: '1.70 m', id: 6, img: 'http://www.serebii.net/pokemongo/pokemon/006.png', multipliers: null, name: 'Charizard', num: '006', prev_evolution: [{ name: 'Charmander', num: '004' }, { name: 'Charmeleon', num: '005' }], spawn_chance: 0.0031, spawn_time: '13:34', type: ['Fire', 'Flying'], weaknesses: ['Water', 'Electric', 'Rock'], weight: '90.5 kg',
    }, {
      avg_spawns: 22, candy: 'Vulpix Candy', candy_count: 50, egg: '5 km', height: '0.61 m', id: 37, img: 'http://www.serebii.net/pokemongo/pokemon/037.png', multipliers: [2.74, 2.81], name: 'Vulpix', next_evolution: [{ name: 'Ninetales', num: '038' }], num: '037', spawn_chance: 0.22, spawn_time: '13:43', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock'], weight: '9.9 kg',
    }, {
      avg_spawns: 0.77, candy: 'Vulpix Candy', egg: 'Not in Eggs', height: '1.09 m', id: 38, img: 'http://www.serebii.net/pokemongo/pokemon/038.png', multipliers: null, name: 'Ninetales', num: '038', prev_evolution: [{ name: 'Vulpix', num: '037' }], spawn_chance: 0.0077, spawn_time: '01:32', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock'], weight: '19.9 kg',
    }, {
      avg_spawns: 92, candy: 'Growlithe Candy', candy_count: 50, egg: '5 km', height: '0.71 m', id: 58, img: 'http://www.serebii.net/pokemongo/pokemon/058.png', multipliers: [2.31, 2.36], name: 'Growlithe', next_evolution: [{ name: 'Arcanine', num: '059' }], num: '058', spawn_chance: 0.92, spawn_time: '03:57', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock'], weight: '19.0 kg',
    }, {
      avg_spawns: 1.7, candy: 'Growlithe Candy', egg: 'Not in Eggs', height: '1.91 m', id: 59, img: 'http://www.serebii.net/pokemongo/pokemon/059.png', multipliers: null, name: 'Arcanine', num: '059', prev_evolution: [{ name: 'Growlithe', num: '058' }], spawn_chance: 0.017, spawn_time: '03:11', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock'], weight: '155.0 kg',
    }, {
      avg_spawns: 51, candy: 'Ponyta Candy', candy_count: 50, egg: '5 km', height: '0.99 m', id: 77, img: 'http://www.serebii.net/pokemongo/pokemon/077.png', multipliers: [1.48, 1.5], name: 'Ponyta', next_evolution: [{ name: 'Rapidash', num: '078' }], num: '077', spawn_chance: 0.51, spawn_time: '02:50', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock'], weight: '30.0 kg',
    }, {
      avg_spawns: 1.1, candy: 'Ponyta Candy', egg: 'Not in Eggs', height: '1.70 m', id: 78, img: 'http://www.serebii.net/pokemongo/pokemon/078.png', multipliers: null, name: 'Rapidash', num: '078', prev_evolution: [{ name: 'Ponyta', num: '077' }], spawn_chance: 0.011, spawn_time: '04:00', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock'], weight: '95.0 kg',
    }, {
      avg_spawns: 10, candy: 'None', egg: '10 km', height: '1.30 m', id: 126, img: 'http://www.serebii.net/pokemongo/pokemon/126.png', multipliers: null, name: 'Magmar', num: '126', spawn_chance: 0.1, spawn_time: '20:36', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock'], weight: '44.5 kg',
    }, {
      avg_spawns: 1.7, candy: 'Eevee Candy', egg: 'Not in Eggs', height: '0.89 m', id: 136, img: 'http://www.serebii.net/pokemongo/pokemon/136.png', multipliers: null, name: 'Flareon', num: '136', prev_evolution: [{ name: 'Eevee', num: '133' }], spawn_chance: 0.017, spawn_time: '07:02', type: ['Fire'], weaknesses: ['Water', 'Ground', 'Rock'], weight: '25.0 kg',
    }, {
      avg_spawns: 0, candy: 'None', egg: 'Not in Eggs', height: '2.01 m', id: 146, img: 'http://www.serebii.net/pokemongo/pokemon/146.png', multipliers: null, name: 'Moltres', num: '146', spawn_chance: 0, spawn_time: 'N/A', type: ['Fire', 'Flying'], weaknesses: ['Water', 'Electric', 'Rock'], weight: '60.0 kg',
    }]);
  });
});
describe('filterWeak', () => {
  it('should filter the pokemons and return a new array', () => {
    expect(filterWeak('Water')).toBeTruthy();
  });
  it('should filter the pokemons that are weak against the poison pokemons', () => {
    expect(filterWeak('Poison')).toEqual([{
      avg_spawns: 236, candy: 'Paras Candy', candy_count: 50, egg: '5 km', height: '0.30 m', id: 46, img: 'http://www.serebii.net/pokemongo/pokemon/046.png', multipliers: [2.02], name: 'Paras', next_evolution: [{ name: 'Parasect', num: '047' }], num: '046', spawn_chance: 2.36, spawn_time: '01:42', type: ['Bug', 'Grass'], weaknesses: ['Fire', 'Ice', 'Poison', 'Flying', 'Bug', 'Rock'], weight: '5.4 kg',
    }, {
      avg_spawns: 7.4, candy: 'Paras Candy', egg: 'Not in Eggs', height: '0.99 m', id: 47, img: 'http://www.serebii.net/pokemongo/pokemon/047.png', multipliers: null, name: 'Parasect', num: '047', prev_evolution: [{ name: 'Paras', num: '046' }], spawn_chance: 0.074, spawn_time: '01:22', type: ['Bug', 'Grass'], weaknesses: ['Fire', 'Ice', 'Poison', 'Flying', 'Bug', 'Rock'], weight: '29.5 kg',
    }, {
      avg_spawns: 78, candy: 'Exeggcute Candy', candy_count: 50, egg: '5 km', height: '0.41 m', id: 102, img: 'http://www.serebii.net/pokemongo/pokemon/102.png', multipliers: [2.7, 3.18], name: 'Exeggcute', next_evolution: [{ name: 'Exeggutor', num: '103' }], num: '102', spawn_chance: 0.78, spawn_time: '09:09', type: ['Grass', 'Psychic'], weaknesses: ['Fire', 'Ice', 'Poison', 'Flying', 'Bug', 'Ghost', 'Dark'], weight: '2.5 kg',
    }, {
      avg_spawns: 1.4, candy: 'Exeggcute Candy', egg: 'Not in Eggs', height: '2.01 m', id: 103, img: 'http://www.serebii.net/pokemongo/pokemon/103.png', multipliers: null, name: 'Exeggutor', num: '103', prev_evolution: [{ name: 'Exeggcute', num: '102' }], spawn_chance: 0.014, spawn_time: '12:34', type: ['Grass', 'Psychic'], weaknesses: ['Fire', 'Ice', 'Poison', 'Flying', 'Bug', 'Ghost', 'Dark'], weight: '120.0 kg',
    }, {
      avg_spawns: 22.8, candy: 'None', egg: '5 km', height: '0.99 m', id: 114, img: 'http://www.serebii.net/pokemongo/pokemon/114.png', multipliers: null, name: 'Tangela', num: '114', spawn_chance: 0.228, spawn_time: '23:13', type: ['Grass'], weaknesses: ['Fire', 'Ice', 'Poison', 'Flying', 'Bug'], weight: '35.0 kg',
    }]);
  });
});
describe('printData', () => {
  it('should be a function', () => {
    expect(typeof printData).toBe('function');
  });

});

describe('printInfoPokemon', () => {
  it('should be a function', () => {
    expect(typeof printInfoPokemon).toBe('function');
  });
  const toTest = findYourPokemon('Charmander');
  it('should return the pokemons info', () => {
    expect(typeof printInfoPokemon(toTest)).toContain({ name: 'Charmander', num: '004' });
  });
});
