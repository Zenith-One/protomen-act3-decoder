import { bgColor, iconColor } from "./config";

export function shuffle(arrIn: any[]) {
  let newArr = arrIn.slice();
  for (let i = 0; i < newArr.length; i += 1){
    let newPos = Math.floor(Math.random() * (newArr.length - i)) + i;
    let temp = newArr[i];
    newArr[i] = newArr[newPos];
    newArr[newPos] = temp;
  }
  return newArr;
}

export function shuffleX(arrIn: any[], iterations: number) {
  let out = arrIn;
  for (let i = 0; i < iterations; i += 1) {
    out = shuffle(out);
  }
  return out;
}

export function zeroPad(str: any, minLength: number): string {
  let out = str+'';
  while (out.length < minLength) {
    out = '0' + out;
  }
  return out;
}

export function fill<A>(arr: Array<A>, targetLength: number): Array<A> {
  let out = arr;
  while (out.length < targetLength) {
    out = [...out, ...arr];
  }
  return out;
}

export function capitalize(str: string): string {
  if (!str) { return str; }
  return str[0].toUpperCase() + str.slice(1);
}

export function recolor(b64: string) {
  let prefix = b64.substring(0, 26);
  let recolored = atob(b64.substring(26))
    .replace(/#ffffff/g, iconColor)
    .replace(/#fff/g, iconColor)
    .replace(/#000000/g, bgColor)
    .replace(/#000/g, bgColor);
  return prefix+btoa(recolored);
}

export function breakString(str: string, n: number): string[] {
  // return an array of strings, each of which is no longer than n characters
  let out: string[] = [];
  let words = str.split(' ');
  let line = '';
  for (let i = 0; i < words.length; i += 1) {
    if (line.length + words[i].length < n) {
      line += words[i] + ' ';
    } else {
      out.push(line);
      line = words[i] + ' ';
    }
  }
  return [...out, line];
}

export function getLongest(arr: string[]): string {
  return arr.reduce((acc, cur) => cur.length > acc.length ? cur : acc, '');
}

export function getCombinations(a: number[], b:number[]):number[] {
  let out: number[] = [];
  console.log('getCombinations');
  for (let i = 0; i < a.length; i += 1) {
    for (let j = i+1; j < b.length; j += 1) {
      // console.log([a[i], b[j], a[i] + b[j]]);
      out.push(a[i] + b[j]);
    }
  }
  return out;
}

/**
 * Converts a 0-indexed row number to a d66 string/number.
 * @param {number} index - The row index (0-35)
 * @returns {number} - The d66 value (11-66)
 */
export function getD66(index:number) {
  const tens = Math.floor(index / 6) + 1;
  const ones = (index % 6) + 1;
  
  // Return as a number: (1 * 10) + 1 = 11
  return (tens * 10) + ones;
}