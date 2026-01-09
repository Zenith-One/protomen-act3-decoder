const plaintextArray = 'ACT3ZKWF1XGQEOJLD9BVS57IP206UM4RHNYB'.split('');
const ciphertextArray = [ '2', '28', '21', '34', '7', '16', '30', '5', '1', '22', '13', '10', '18', '26', '31', '24', '17', '4', '29', '12', '8', '35', '6', '23', '15', '9', '33', '3', '20', '11', '36', '27', '14', '25', '19', '32' ];

type CipherPermutation = {
  key: string;
  [key: string]: string
}
let permutations: CipherPermutation[] = []

for (let i = 0; i < ciphertextArray.length; i += 1) {
  let ciphertext = ciphertextArray.slice()
  for (let x = 0; x < i; x += 1) {
    let head:string = ciphertext.shift() as string
    ciphertext.push(head)
  }
  let p: CipherPermutation = {
    key: ciphertext[0]
  }
  for (let x = 0; x < ciphertext.length; x += 1){
    let k:string = ciphertext[x];
    p[k] = plaintextArray[x]
  }
  permutations.push(p);
}

permutations = permutations.sort((a,b) => {
  if (Number(a.key) < Number(b.key)) {
    return -1;
  }
  return 1;
});

export function getSolutions(ciphertext: string): string[] {
  let output: string[] = [];
  let cipherArr = ciphertext.replace(/\W+/g,'-').split('-');
  for (let p of permutations) {
    let pStr = cipherArr.map(k => p[k] ? p[k] : '#').join('');
    output.push(`[A = ${p.key}] - ${pStr}`);
  }

  return output;
}

