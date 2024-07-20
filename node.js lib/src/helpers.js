function filterOcorrencias(paragrafo){
    return Object.keys(paragrafo).filter(key => paragrafo[key] > 1 )
}

function buildWayOutArchive(listWords){
    let finalText = '';
    listWords.forEach((paragrafo, indice) =>{
        const double = filterOcorrencias(paragrafo).join(', ');
        finalText += `palavras duplicadas no paragrafo ${indice + 1}: ${double} \n`
    })
    return finalText;
}

export{ buildWayOutArchive};