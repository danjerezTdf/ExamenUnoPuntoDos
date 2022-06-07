//let x : number[]= [1,0,2,3,8,5,6];
let x: number[] = [3, 2, 89, 50, 60, 4];

function y(a: number[]) {
  let t: number = a.length;
  let m: number = 0;
  let n: number = 0;
  if (t > 0) {
    m = a[0];
    n = a[0];
    if (t > 1) {
      for (let i: number = 1; i < t; i++) {
        if (a[i] < m) {
          m = a[i];
        } else if (a[i] > n) {
          n = a[i];
        }
      }
    }
  }
  console.log("m: " + m + " n: " + n);
}

y(x);

//console.log(`${y(x)}`);
