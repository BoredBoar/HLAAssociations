import { parse } from 'csv-parse/sync';
import * as fs from 'fs'

const data = fs.readFileSync('./Pgroups.txt',
    { encoding: 'utf8', flag: 'r' });

var Pgroups = {}

const lines = data.split("\n")
var current_group = null
lines.forEach(line => {
    var alleles = ''
    if (line[0] == '/') {
        alleles = line.slice(1).split('/')
    }
    else {
        current_group = line.split('\t')[0]
        Pgroups[current_group] = []
        alleles = line.split('\t')[1].split('/')
    }
    alleles.forEach(allele => {Pgroups[current_group].push(allele)})
});

console.log(JSON.stringify(Pgroups))

fs.writeFileSync('PgroupsJSON.txt', JSON.stringify(Pgroups))
// const output = parse(data, {
//     delimiter: ['\t'],
//     trim: true,
//     columns: true,
//     })

//     console.log(JSON.stringify(output))