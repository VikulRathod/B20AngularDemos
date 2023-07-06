
function sample({ p1, p2, p3 }: { p1: number, p2: string, p3: string }): void {
    console.log(`Number : ${p1} First String : ${p2} Second String : ${p3}`)
}

let a1 = { p1: 10, p2: 'A', p3: 'B' };
sample(a1);

let a2 = { p2: 'A', p1: 10, p3: 'B' };
sample(a2);