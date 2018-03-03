var Correios = require('node-correios'),
    correios = new Correios();
 
var args = {
    nCdServico: '40010,41106,40215',

    
}

correios.consultaCEP({ cep: '000000000' }, function(err, result) {
  console.log(result)
});


correios.calcPreco(args, function (err, result) {
    console.log(result);
});
 

[{
    Codigo: 40010,
    Valor: '24,10',
    ValorMaoPropria: '0,00',
    ValorAvisoRecebimento: '0,00',
    ValorValorDeclarado: '0,00',
    Erro: {},
    MsgErro: {},
    ValorSemAdicionais: '24,10'
},{
    Codigo: 41106,
    Valor: '16,80',
    ValorMaoPropria: '0,00',
    ValorAvisoRecebimento: '0,00',
    ValorValorDeclarado: '0,00',
    Erro: {},
    MsgErro: {},
    ValorSemAdicionais: '16,80'
},{
    Codigo: 40215,
    Valor: '0',
    ValorMaoPropria: '0',
    ValorAvisoRecebimento: '0',
    ValorValorDeclarado: '0',
    Erro: '008',
    MsgErro: 'Serviço indisponível.',
    ValorSemAdicionais: '0'
}]
