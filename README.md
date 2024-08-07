# word_counter
README file for the project:

```markdown
# Word Counter Project

This project is a simple Node.js application that reads a text file, counts the words, and saves the results to a new file.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Error Handling](#error-handling)
- [Contributing](#contributing)

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/word-counter.git
   cd word-counter
   ```

2. Install the necessary dependencies:

   ```bash
   npm install
   ```

## Usage

To run the project, use the following command:

```bash
node index.js <inputFilePath> <outputDirectory>
```

- `<inputFilePath>`: The path to the text file you want to read.
- `<outputDirectory>`: The directory where you want to save the result file.

Example:

```bash
node index.js input.txt ./output
```

## Project Structure

- `index.js`: The main entry point of the application.
- `errors/funcErr.js`: Custom error handling functions.
- `resultados/`: Directory where the result file (`result.txt`) will be saved.
- `README.md`: Project documentation file.

## Error Handling

The project includes error handling to manage common issues such as file not found errors (`ENOENT`). If an error occurs, it is handled by the `trataErros` function in `errors/funcErr.js`.

## Example Code

```javascript
import fs from 'fs';
import trataErros from './errors/funcErr.js';
import { countWords } from './index.js';

const archiveWay = process.argv;
const link = archiveWay[2];
const direction = archiveWay[3];

fs.readFile(link, 'utf-8', (err, text) => {
    try {
        if (err) throw err;
        const result = countWords(text);
        createAndSaveArchive(result, direction);
    } catch (err) {
        trataErros(err);
    }
});

function createAndSaveArchive(listWords, direction) {
    const newArchive = `${direction}/result.txt`;
    const textWords = JSON.stringify(listWords);

    fs.promises.writeFile(newArchive, textWords)
        .then(() => {
            console.log('arquivo criado');
        }).catch((err) => {
            throw err;
        }).finally(() => {
            console.log('operacao finalizada');
        });
}
```

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. We welcome all improvements and suggestions.


Feel free to modify the content as per your project's specifics and requirements.