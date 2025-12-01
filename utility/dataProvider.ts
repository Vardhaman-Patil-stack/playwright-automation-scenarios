import fs from 'fs';
import { parse } from 'csv-parse/sync';

export class DataProvider {

    static getTestDataFromJson(filePath: string) {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        return data;
    }

    

static getTestDataFromCsv(filePath:string)
{
     let data:any= parse(fs.readFileSync(filePath),{columns:true,skip_empty_lines:true})
    return data;
    }


}

/* 🧩 What is fs?

fs stands for File System.
It’s a core Node.js module that lets you interact with files and directories — reading, writing, updating, deleting, etc.
 */
//So this line:
/* Concept	Explanation
fs	Node.js File System module for reading/writing files
static	Allows method calls without class instantiation
parse	Function from csv-parse that converts CSV text → JS objects
JSON.parse(...)	Converts JSON text → JS objects
Best practice	Static is fine here; add error handling and common helper methods */