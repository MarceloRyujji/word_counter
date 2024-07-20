import fs from 'fs';
import path from 'path';
import trataErros from './errors/funcErr.js';
import { countWords } from './index.js';
import { buildWayOutArchive } from './helpers.js';
import { Command } from 'commander';
import chalk from 'chalk';

const program = new Command();

program
    .version('0.0.1')
    .option('-t, --text <string>', 'way of the proccessed text')
    .option('-d, --destiny <string>', 'the way of the folder to save the result')
    .action((options)=> {
        const {text, destiny} = options;
        if(!text || !destiny){
            console.error(chalk.red('error: please insert the way of destiny'))
            program.help();
            return;
        }

        const textWay = path.resolve(text);
        const textDestiny =  path.resolve(destiny);

        try{
            processArchive(textWay, textDestiny);
            console.log(chalk.green('success'))
        }catch(err){
            console.log(chalk.red('happened an error in the process', err));
        }
    })

program.parse();


function processArchive(text, destiny){
    fs.readFile(text, 'utf-8', (err, text) => {
        try {
            if (err) throw err;
            const result = countWords(text);
            createAndSaveArchive(result, destiny);
        } catch (err) {
            trataErros(err);
        }
    });
}


async function createAndSaveArchive(listWords, direction) {
    const newArchive = path.join(direction, 'result.txt');
    const textWords = buildWayOutArchive(listWords);

    try {
        // Verifica se o diretório existe, se não, cria-o
        await fs.promises.mkdir(direction, { recursive: true });
        await fs.promises.writeFile(newArchive, textWords);
        console.log('Arquivo criado com sucesso');
    } catch (err) {
        trataErros(err);
    }
}