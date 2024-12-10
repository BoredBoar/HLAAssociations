import { parse } from 'csv-parse/sync';
import * as fs from 'fs'

const data = fs.readFileSync('./B>C.txt',
    { encoding: 'utf8', flag: 'r' });

const output = parse(data, {
    delimiter: ['::','\t'],
    trim: true,
    columns: true,
    })

    console.log(JSON.stringify(output))