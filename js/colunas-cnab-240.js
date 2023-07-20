
// Definição das colunas para cada tipo de arquivo CNAB240
const colunasCNAB240 = {
  headerArquivo: [
    [1, 3, "    | 001 a 003 | G001 | Controle          | Código do Banco na Compensação    |"],
    [4, 7, "    | 004 a 007 | G002 | Controle          | Lote de Serviço                   |"],
    [8, 8, "    | 008 a 008 | G003 | Controle          | Tipo de Registro                  |"],
    [9, 17, "   | 009 a 017 | G004 | CNAB              |  Uso Exclusivo FEBRABAN / CNAB    |"],
    [18, 18, "  | 018 a 018 | G005 | Empresa           | Tipo de Inscrição da Empresa      |"],
    [19, 32, "  | 019 a 032 | G006 | Empresa           | Número de Inscrição da Empresa    |"],
    [33, 52, "  | 033 a 052 | G007 | Empresa           | Código do Convênio no Banco       |"],
    [53, 57, "  | 053 a 057 | G008 | Empresa           | Agência Mantenedora da Conta      |"],
    [58, 58, "  | 058 a 058 | G009 | Empresa           | Dígito Verificador da Agência     |"],
    [59, 70, "  | 059 a 070 | G010 | Empresa           | Número da Conta Corrente          |"],
    [71, 71, "  | 071 a 071 | G011 | Empresa           | Dígito Verificador da Conta       |"],
    [72, 72, "  | 072 a 072 | G012 | Empresa           | Dígito Verificador da Ag/Conta    |"],
    [73, 102, " | 073 a 102 | G013 | Empresa           | Nome da Empresa                   |"],
    [103, 132, "| 103 a 132 | G014 | Banco             | Nome do Banco                     |"],
    [133, 142, "| 133 a 142 | G004 | CNAB              | Uso Exclusivo FEBRABAN / CNAB     |"],
    [143, 143, "| 143 a 143 | G015 | Arquivo           | Código Remessa / Retorno          |"],
    [144, 151, "| 144 a 151 | G016 | Arquivo           | Data de Geração do Arquivo        |"],
    [152, 157, "| 152 a 157 | G017 | Arquivo           | Hora de Geração do Arquivo        |"],
    [158, 163, "| 158 a 163 | G018 | Arquivo           | Número Sequencial do Arquivo      |"],
    [164, 166, "| 164 a 166 | G019 | Arquivo           | No da Versão do Layout do Arquivo |"],
    [167, 171, "| 167 a 171 | G020 | Arquivo           | Densidade de Gravação do Arquivo  |"],
    [172, 191, "| 172 a 191 | G021 | Reservado Banco   | Para Uso Reservado do Banco       |"],
    [192, 211, "| 192 a 211 | G022 | Reservado Empresa | Para Uso Reservado da Empresa     |"],
    [212, 240, "| 212 a 240 | G004 | CNAB              | Uso Exclusivo FEBRABAN / CNAB     |"]
  ],
  headerLote: [
    [1, 3, "001 a 003 - Controle - Código do Banco na Compensação"],
    [4, 7, "004 a 007 - Controle - Lote de Serviço"],
    [8, 8, "008 a 008 - Controle - Tipo de Registro"],
    [9, 9, "009 a 009 -  - Tipo da Operação"],
    [10, 11, "010 a 011 -  - Tipo do Serviço"],
    [12, 13, "012 a 013 -  - Forma de Lançamento"],
    [14, 16, "014 a 016 -  - Nº da Versão do Layout do Lote"],
    [17, 17, "017 a 017 -  - Uso Exclusivo da FEBRABAN/CNAB"],
    [18, 18, "018 a 018 -  - Tipo de Inscrição da Empresa"],
    [19, 32, "019 a 032 -  - Número de Inscrição da Empresa"],
    [33, 52, "033 a 052 -  - Código do Convênio no Banco"],
    [53, 57, "053 a 057 -  - Agência Mantenedora da Conta"],
    [58, 58, "058 a 058 -  - Dígito Verificador da Agência"],
    [59, 70, "059 a 070 -  - Número da Conta Corrente"],
    [71, 71, "071 a 071 -  - Dígito Verificador da Conta"],
    [72, 72, "072 a 072 -  - Dígito Verificador da Ag/Conta"],
    [73, 102, "073 a 102 -  - Nome da Empresa"],
    [103, 142, "103 a 142 -  - Mensagem"],
    [143, 172, "143 a 172 -  - Nome da Rua, Av, Pça, Etc"],
    [173, 177, "173 a 177 -  - Número do Local"],
    [178, 192, "178 a 192 -  - Casa, Apto, Sala, Etc"],
    [193, 212, "193 a 212 -  - Nome da Cidade"],
    [213, 217, "213 a 217 -  - CEP"],
    [218, 220, "218 a 220 -  - Complemento do CEP"],
    [221, 222, "221 a 222 -  - Sigla do Estado"],
    [223, 224, "223 a 224 -  - Indicativo de Forma de Pagamento do Serviço"],
    [225, 230, "225 a 230 -  - Uso Exclusivo FEBRABAN/CNAB"],
    [231, 240, "231 a 240 -  - Códigos das Ocorrências p/ Retorno "]
  ],
  segmentoA: [
    [1, 3, "001 a 003 - Código do Banco na Compensação"],
    [4, 7, "004 a 007 - Lote de Serviço"],
    [8, 8, "008 a 008 - Tipo de Registro"],
    [9, 13, "009 a 013 - Nº Seqüencial do Registro no Lote"],
    [14, 14, "014 a 014 - Código de Segmento do Reg. Detalhe"],
    [15, 15, "015 a 015 - Tipo de Movimento"],
    [16, 17, "016 a 017 - Código da Instrução p/ Movimento"],
    [18, 20, "018 a 020 - Código da Câmara Centralizadora"],
    [21, 23, "021 a 023 - Código do Banco do Favorecido"],
    [24, 28, "024 a 028 - Ag. Mantenedora da Cta do Favor."],
    [29, 29, "029 a 029 - Dígito Verificador da Agência"],
    [30, 41, "030 a 041 - Número da Conta Corrente"],
    [42, 42, "042 a 042 - Dígito Verificador da Conta"],
    [43, 43, "043 a 043 - Dígito Verificador da AG/Conta"],
    [44, 73, "044 a 073 - Nome do Favorecido"],
    [74, 93, "074 a 093 - Nº do Docum. Atribuído p/ Empresa"],
    [94, 101, "094 a 101 Data do Pagamento"],
    [102, 104, "102 a 104 - Tipo da Moeda"],
    [105, 119, "105 a 119 - Quantidade da Moeda"],
    [120, 134, "120 a 134 - Valor do Pagamento"],
    [135, 154, "135 a 154 - Nº do Docum. Atribuído pelo Banco"],
    [155, 162, "155 a 162 - Data Real da Efetivação Pagto"],
    [163, 177, "163 a 177 - Valor Real da Efetivação do Pagto"],
    [178, 217, "178 a 217 - Outras Informações"],
    [218, 219, "218 a 219 - Compl. Tipo Serviço"],
    [220, 224, "220 a 224 - Codigo finalidade da TED"],
    [225, 226, "225 a 226 - Compl. Finalidade de Pagamento"],
    [227, 229, "227 a 229 - Uso Exclusivo FEBRABAN/CNAB"],
    [230, 230, "230 a 230 - Aviso ao Favorecido"],
    [231, 240, "231 a 240 - Códigos das Ocorrências p/ Retorno "]
  ],
  segmentoB: [
    [1, 3, "001, 003 - Código do Banco na Compensação"],
    [4, 7, "004, 007 - Lote de Serviço"],
    [8, 8, "008, 008 - Tipo do Registro"],
    [9, 13, "009, 013 - Nº Seqüencial do Registro no Lote"],
    [14, 14, "014, 014 - Código de Segmento do Reg. Detalhe"],
    [15, 17, "015, 017 - Uso Exclusivo FEBRABAN/CNAB"],
    [18, 18, "018, 018 - Tipo de Inscrição do Favorecido"],
    [19, 32, "019, 032 - Nº de Inscrição do Favorecido"],
    [33, 62, "033, 062 - Nome da Rua, Av, Pça, Etc"],
    [63, 67, "063, 067 - Nº do Local"],
    [68, 82, "068, 082 - Casa, Apto, Etc"],
    [83, 97, "083, 097 - Bairro"],
    [98, 117, "098, 117 - Nome da Cidade"],
    [118, 122, "118, 122 - CEP"],
    [123, 125, "123, 125 - Complemento do CEP"],
    [126, 127, "126, 127 - Sigla do Estado"],
    [128, 135, "128, 135 - Data do Vencimento (Nominal)"],
    [136, 150, "136, 150 - Valor do Documento (Nominal)"],
    [151, 165, "151, 165 - Valor do Abatimento"],
    [166, 180, "166, 180 - Valor do Desconto"],
    [181, 195, "181, 195 - Valor da Mora"],
    [196, 210, "196, 210 - Valor da Multa"],
    [211, 225, "211, 225 - Código/Documento do Favorecido"],
    [226, 226, "226, 226 - Aviso ao Favorecido"],
    [227, 232, "227, 232 - Uso Exclusivo para o SIAPE"],
    [233, 240, "233, 240 - Código ISPB "]
  ],
  segmentoJ: [
    [1, 3, "001 a 003 - Código no Banco da Compensação"],
    [4, 7, "004 a 007 - Lote de Serviço"],
    [8, 8, "008 a 008 - Tipo de Registro"],
    [9, 13, "009 a 013 - Nº Seqüencial do Registro no Lote"],
    [14, 14, "014 a 014 - Código de Segmento no Reg. Detalhe"],
    [15, 15, "015 a 015 - Tipo de Movimento"],
    [16, 17, "016 a 017 - Código da Instrução p/ Movimento"],
    [18, 61, "018 a 061 - Código de Barras"],
    [62, 91, "062 a 091 - Nome do Cedente"],
    [92, 99, "092 a 099 - Data do Vencimento (Nominal)"],
    [100, 114, "100 a 114 - Valor do Título (Nominal)"],
    [115, 129, "115 a 129 - Valor do Desconto + Abatimento"],
    [130, 144, "130 a 144 - Valor da Mora + Multa"],
    [145, 152, "145 a 152 - Data do Pagamento"],
    [153, 167, "153 a 167 - Valor do Pagamento"],
    [168, 182, "168 a 182 - Quantidade da Moeda"],
    [183, 202, "183 a 202 - Nº do Docto Atribuído pela Empresa"],
    [203, 222, "203 a 222 - Nº do Docto Atribuído pelo Banco"],
    [223, 224, "223 a 224 - Código de Moeda"],
    [225, 230, "225 a 230 - Uso Exclusivo FEBRABAN/CNAB"],
    [231, 240, "231 a 240 - Códigos das Ocorrências p/ Retorno"],
  ],
  segmentoJ52: [
    [1, 3, "001 a 003 - Código do Banco na Compensação"],
    [4, 7, "004 a 007 - Lote de Serviço"],
    [8, 8, "008 a 008 - Tipo de Registro"],
    [9, 13, "009 a 013 - Nº Sequencial do Registro no Lote"],
    [14, 14, "014 a 014 - Cód. Segmento do Registro Detalhe"],
    [15, 15, "015 a 015 - Uso Exclusivo FEBRABAN/CNAB"],
    [16, 17, "016 a 017 - Código de Movimento Remessa"],
    [18, 19, "018 a 019 - Identificação Registro Opcional"],
    [20, 20, "020 a 020 - Tipo de Inscrição"],
    [21, 35, "021 a 035 - Número de Inscrição"],
    [36, 75, "036 a 075 - Nome"],
    [76, 76, "076 a 076 - Tipo de Inscrição"],
    [77, 91, "077 a 091 - Número de Inscrição"],
    [92, 131, "092 a 131 - Nome"],
    [132, 132, "132 a 132 - Tipo de Inscrição"],
    [133, 147, "133 a 147 - Número de Inscrição"],
    [148, 187, "148 a 187 - Nome"],
    [188, 240, "188 a 240 - Uso Exclusivo FEBRABAN/CNAB"],
  ],
  segmentoZ: [
    [1, 3, "001 a 003 - Código no Banco da Compensação"],
    [4, 7, "004 a 007 - Lote de Serviço"],
    [8, 8, "008 a 008 - Registro Detalhe de Lote"],
    [9, 13, "009 a 013 - Nº Seqüencial do Registro no Lote"],
    [14, 14, "014 a 014 - Código de Segmento no Reg. Detalhe"],
    [15, 78, "015 a 078 - Autenticação para atender Legislação"],
    [79, 103, "079 a 103 - Autenticação Bancária / Protocolo"],
    [104, 230, "104 a 230 - Uso CNAB/FEBRABAN"],
    [231, 240, "231 a 240 - Códigos das Ocorrências p/ Retorno"],
  ],
  trailerLote: [
    [1, 3, "001, 003 - Código do Banco na Compensação"],
    [4, 7, "004, 007 - Lote de Serviço"],
    [8, 8, "008, 008 - Tipo de Registro"],
    [9, 17, "009, 017 - Uso Exclusivo FEBRABAN/CNAB"],
    [18, 23, "018, 023 - Quantidade de Registros do Lote"],
    [24, 41, "024, 041 - Somatória de Valores"],
    [42, 59, "042, 059 - Somatória de Quantidade de Moedas"],
    [60, 65, "060, 065 - Número Aviso de Débito"],
    [66, 230, "066, 230 - Uso Exclusivo FEBRABAN/CNAB"],
    [231, 240, "231, 240 - Códigos das Ocorrências p/ Retorno "]
  ],
  trailerArquivo: [
    [1, 3, "001, 003 - Código do Banco na Compensação"],
    [4, 7, "004, 007 - Lote de Serviço"],
    [8, 8, "008, 008 - Tipo de Registro"],
    [9, 17, "009, 017 - Uso Exclusivo FEBRABAN/CNAB"],
    [18, 23, "018, 023 - Quantidade de Lotes do Arquivo"],
    [24, 29, "024, 029 - Quantidade de Registros do Arquivo"],
    [30, 35, "030, 035 - Qtde de Contas p/ Conc. (Lotes)"],
    [36, 240, "036, 240 - Uso Exclusivo FEBRABAN/CNAB"]
  ],
}