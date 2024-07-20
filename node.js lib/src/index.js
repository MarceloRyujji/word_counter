// ALT + seta para cima move a linha de codigo!!
function countWords(text){
    const paragrafos = extractParagrafos(text);
    const contagem = paragrafos.flatMap((paragrafo) => {
        if (!paragrafo) return [];
        return verifyDoubleWords(paragrafo);
    })
    return contagem
}

export{ countWords };

function extractParagrafos(text){
    return text.toLowerCase().split('\n');
}

//process.argv: vai buscar o caminho dos arquivos, 
// a const link vai me retornar o resultado do process.argv como ela e um array eu posso informar a posicao do arquivo que eu quero
// para eu chamar um arquvivo que eu quero devo passar o caminho FOLDER/ARCHIVE, caso ele esteja na mesma pasta ./ARCHIVE
//----------------------------------------------------------------------------------------------------------------------------------------

//PARA ESTA FUNCTION: 
// Criar um array de palavras
// Contas as ocorrencias (contas quantas vezes a palavra aparece no text)
//montar um OBJECT com o resultado

function cleanWords(word){
    return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function verifyDoubleWords(text){
    const listWords = text.split(' ');
    const result = {};
    //object[propriety] = valor;
    listWords.forEach(word => {
        if(word.length >= 3) {
        const wordCleaned = cleanWords(word)
        result[wordCleaned] = (result[wordCleaned] || 0) + 1
        }
    })
    return result;
};