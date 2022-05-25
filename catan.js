//write a function that finds the longest length of touching roads
// and returns the number of that length
// the path cannot go back over roads that have already been counted

// when graph1 is passed to your function, it should return 3
let graph1 = [
    {type:'road', id:'1-4', touching:[['1-6'],['2-4']]},
    {type:'road', id:'1-6', touching:[['1-4']]},
    {type:'road', id:'2-4', touching:[['1-4']]},
];

let graph2 = [
    {type:'road', id:'a', touching:[['b'],['f']]},
    {type:'road', id:'b', touching:[['a'],['c']]},
    {type:'road', id:'c', touching:[['b'],['d']]},
    {type:'road', id:'d', touching:[['e'],['c']]},
    {type:'road', id:'e', touching:[['f'],['d']]},
    {type:'road', id:'f', touching:[['a'],['e']]},
    {type:'road', id:'g', touching:[['a']]},
    {type:'road', id:'h', touching:[['f']]},
];

//I'll have more graphs to test this if you think you've got it down