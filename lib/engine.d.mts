export function todayKey(date?:Date):string;
export function hash(s:string):number;
export function accuracy(attempts:{correct:boolean}[]):number;
export function score(q:{inputType:string;answer:string},answer:string|number|null|undefined):boolean;
export function schedule(prev:{successes?:number}|null|undefined,correct:boolean,day:string):{successes:number;interval:number;due:string;mastered:boolean};
export function selectQuestions<T extends {id:string;category:string;difficulty:string}>(bank:T[],history:Record<string,{mastered?:boolean;lastCorrect?:boolean;due?:string;attempts?:number;correct?:number}>,count:number,seed:string,previousIds?:string[],category?:string,difficulty?:string):T[];
