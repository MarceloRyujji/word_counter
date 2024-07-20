export default function trataErro(err){
    if(err.code == 'ENOENT'){
        throw new Error('Arquivo nao encontrado');
    } else {
        return 'Erro na aplicacao';
    }
}
