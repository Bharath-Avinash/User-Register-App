import { Hobby } from "./hobby";

export class User { 
    username !: string;
    age !:number;
gender !: string;
hobbies !: Hobby[] ;
address!:string;



    constructor() {
    }
}