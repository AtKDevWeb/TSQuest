function add(param1: string, param2: string): string;
function add(param1: number, param2: number): number;
function add(param1: any, param2: any): any {
    return param1 + param2
}

console.log(add(5, 10))