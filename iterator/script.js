// function makeIterator(start = 0, end = Infinity, step = 1){
//     let nextStart = start;
//     let iterationCount = 0;

//     return {
//         next() {
//             let result;
//             if (iterationCount < end) {
//                 result = { value: nextStart, done: false };
//                 nextStart += step;
//                 iterationCount++;
//                 return result;
//             }
//             return { value: iterationCount, done: true };
//         },
//     };
// }
// const myIterator = makeIterator(1, 19); // start = 1, up to 10 values

// let result = myIterator.next();

// while (!result.done) {
//   console.log(result.value);
//   result = myIterator.next();
// }

// function* count(){
//     yield 2;
//       yield 4;
//         yield 6;
//           yield 8;
//             yield 10;
//               yield 12;

// }
// const even  = count();
// for(const v  of even){
//      console.log(v);
// }
function* makeIteratorNew(start,end){
    for( let i = start; i<=end; i++){
        yield i;
    }
}
const one  = makeIteratorNew(1,20);
for( const  val of one ){
    console.log(val);
}