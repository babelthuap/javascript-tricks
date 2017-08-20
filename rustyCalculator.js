// function answer(str) {
//   var terms = str.split('+');

//   var shifted = terms.map(term => {
//     return term.replace(/\*/g, '') + '*'.repeat(term.length / 2);
//   });

//   return shifted.join('') + '+'.repeat(terms.length - 1);
// }

// function answer(s) {
//   t = s.split('+');
//   return t.map(function(m) {
//     return m.replace(/\*/g, '') + '*'.repeat(m.length / 2)
//   }).join('') + '+'.repeat(t.length - 1);
// }

// 116 characters!
answer=e=>e.split('+').map(e=>e.replace(/\*/g,'')+'*'.repeat(e.length/2)).join('')+'+'.repeat(e.split('+').length-1)

// function answer(str) {
//   var mult = str.replace(/\d(\*\d)+/g, m => m.replace(/\*/g, '') + '*'.repeat(m.length / 2));
//   return mult.replace(/\+/g, '') + '+'.repeat(mult.replace(/[^+]/g, '').length);
// }

// var answer = s => s.replace(/\d(\*\d)+/g, m => m.replace(/\*/g, '') + '*'.repeat(m.length / 2)).replace(/\+/g, '') + '+'.repeat(s.replace(/[^+]/g, '').length);

console.log(answer('3+4*5*6+2*4+6+8*8*8*8'));
console.log(answer('3+4*5*6+2*4+6+8*8*8*8') === '3456**24*68888***++++');
