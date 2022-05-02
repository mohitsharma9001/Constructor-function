var a1 = [1,2,3,4];

function myArray(){
Object.defineProperty(this, "length", {
enumerable: false,
writable: true,
})
for(let i = 0;i<arguments.length;i++){
  this[i] = arguments[i];
  
 
}
this.length = arguments.length;
}
myArray.prototype.push = function(ele){
let index = this.length
this[index]  = ele;
this.length++
}
myArray.prototype.pop = function(){
let index = this.length-1;
let popped = this[index];
delete this[index];
this.length--;
return popped

}

myArray.prototype.top = function(){
return this[this.length-1]
}
myArray.prototype.size = function(){
return this.length;
}
myArray.prototype.print = function(){
let output = []
for(let i = 0;i<this.length;i++){
    output.push(this[i])
}
console.log(output)
}
myArray.prototype.reverse = function(){
let bag = "";
for(let i = this.length-1;i>=0;i--){
bag +=this[i]+" "
}console.log(bag)
}

var a2 = new myArray(7,8,9,10);
a2.print()
a2.reverse()
// a2.push(15)
// a2.pop()
// console.log("a2 :",a2)
// console.log("a1:",a1)
// console.log()