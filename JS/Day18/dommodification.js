let p= document.querySelector("p");
// p.className='demo'
// p.className='test'

p.classList.add('demo1')
p.classList.add('demo2','demo3')
p.classList.remove('demo2')
p.classList.toggle('demo3')
p.classList.toggle('demo3')

console.log(p.classList.contains('demo1'));
console.log(p.classList.contains('demo3'));

console.log(p.classList);