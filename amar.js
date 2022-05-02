let Amar={
    name: 'Amar',
    location : 'Goa'
}
let Akbar={
    name : 'Akbar',
    location : 'Mumbai'
}
let Anthony={
    name : 'Anthony',
    location : 'Kashmir'
}

function cook(){
    console.log(this.name +"  Cook");
}
function sing(){
    console.log(this.name +"  Sing");
}
function magic(){
    console.log(this.name +" do Magic");
}

cook.call(Amar);
cook.call(Anthony);
sing.call(Akbar);
magic.call(Amar);