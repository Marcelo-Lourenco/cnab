// Definição das colunas para cada tipo de arquivo CNAB240
const colunasCNAB240 = {
  headerArquivo: [
    [1, 3, "    | 001 a 003 | G001  | Controle          | Código do Banco na Compensação    |"],
    [4, 7, "    | 004 a 007 | *G002 | Controle          | Lote de Serviço                   |"],
    [8, 8, "    | 008 a 008 | *G003 | Controle          | Tipo de Registro                  |"],
    [9, 17, "   | 009 a 017 | G004  | CNAB              |  Uso Exclusivo FEBRABAN / CNAB    |"],
    [18, 18, "  | 018 a 018 | *G005 | Empresa           | Tipo de Inscrição da Empresa      |"],
    [19, 32, "  | 019 a 032 | *G006 | Empresa           | Número de Inscrição da Empresa    |"],
    [33, 52, "  | 033 a 052 | *G007 | Empresa           | Código do Convênio no Banco       |"],
    [53, 57, "  | 053 a 057 | *G008 | Empresa           | Agência Mantenedora da Conta      |"],
    [58, 58, "  | 058 a 058 | *G009 | Empresa           | Dígito Verificador da Agência     |"],
    [59, 70, "  | 059 a 070 | *G010 | Empresa           | Número da Conta Corrente          |"],
    [71, 71, "  | 071 a 071 | *G011 | Empresa           | Dígito Verificador da Conta       |"],
    [72, 72, "  | 072 a 072 | *G012 | Empresa           | Dígito Verificador da Ag/Conta    |"],
    [73, 102, " | 073 a 102 | G013  | Empresa           | Nome da Empresa                   |"],
    [103, 132, "| 103 a 132 | G014  | Banco             | Nome do Banco                     |"],
    [133, 142, "| 133 a 142 | G004  | CNAB              | Uso Exclusivo FEBRABAN / CNAB     |"],
    [143, 143, "| 143 a 143 | G015  | Arquivo           | Código Remessa / Retorno          |"],
    [144, 151, "| 144 a 151 | G016  | Arquivo           | Data de Geração do Arquivo        |"],
    [152, 157, "| 152 a 157 | G017  | Arquivo           | Hora de Geração do Arquivo        |"],
    [158, 163, "| 158 a 163 | *G018 | Arquivo           | Número Sequencial do Arquivo      |"],
    [164, 166, "| 164 a 166 | *G019 | Arquivo           | No da Versão do Layout do Arquivo |"],
    [167, 171, "| 167 a 171 | G020  | Arquivo           | Densidade de Gravação do Arquivo  |"],
    [172, 191, "| 172 a 191 | G021  | Reservado Banco   | Para Uso Reservado do Banco       |"],
    [192, 211, "| 192 a 211 | G022  | Reservado Empresa | Para Uso Reservado da Empresa     |"],
    [212, 240, "| 212 a 240 | G004  | CNAB              | Uso Exclusivo FEBRABAN / CNAB     |"]
  ],
  headerLote: [
    [1, 3, "    | 001 a 003 | G001  | Controle               | Código do Banco na Compensação"],
    [4, 7, "    | 004 a 007 | *G002 | Controle               | Lote de Serviço"],
    [8, 8, "    | 008 a 008 | *G003 | Controle               | Tipo de Registro"],
    [9, 9, "    | 009 a 009 | *G028 | Serviço                | Tipo da Operação"],
    [10, 11, "  | 010 a 011 | *G025 | Serviço                | Tipo do Serviço"],
    [12, 13, "  | 012 a 013 | *G029 | Serviço                | Forma de Lançamento"],
    [14, 16, "  | 014 a 016 | *G030 | Serviço                | Nº da Versão do Layout do Lote"],
    [17, 17, "  | 017 a 017 | G004  | CNAB                   | Uso Exclusivo da FEBRABAN/CNAB"],
    [18, 18, "  | 018 a 018 | *G005 | Empresa                | Tipo de Inscrição da Empresa"],
    [19, 32, "  | 019 a 032 | *G006 | Empresa                | Número de Inscrição da Empresa"],
    [33, 52, "  | 033 a 052 | *G007 | Empresa                | Código do Convênio no Banco"],
    [53, 57, "  | 053 a 057 | *G008 | Empresa                | Agência Mantenedora da Conta"],
    [58, 58, "  | 058 a 058 | *G009 | Empresa                | Dígito Verificador da Agência"],
    [59, 70, "  | 059 a 070 | *G010 | Empresa                | Número da Conta Corrente"],
    [71, 71, "  | 071 a 071 | *G011 | Empresa                | Dígito Verificador da Conta"],
    [72, 72, "  | 072 a 072 | *G012 | Empresa                | Dígito Verificador da Ag/Conta"],
    [73, 102, " | 073 a 102 | G013  | Empresa                | Nome da Empresa"],
    [103, 142, "| 103 a 142 | *G031 | Informação 1           | Mensagem"],
    [143, 172, "| 143 a 172 | G032  | Endereço da Empresa    | Nome da Rua, Av, Pça, Etc"],
    [173, 177, "| 173 a 177 | G032  | Endereço da Empresa    | Número do Local"],
    [178, 192, "| 178 a 192 | G032  | Endereço da Empresa    | Casa, Apto, Sala, Etc"],
    [193, 212, "| 193 a 212 | G033  | Endereço da Empresa    | Nome da Cidade"],
    [213, 217, "| 213 a 217 | G034  | Endereço da Empresa    | CEP"],
    [218, 220, "| 218 a 220 | G035  | Endereço da Empresa    | Complemento do CEP"],
    [221, 222, "| 221 a 222 | G036  | Endereço da Empresa    | Sigla do Estado"],
    [223, 224, "| 223 a 224 | P014  | Indicativo de Form Pag | Indicativo de Forma de Pagamento do Serviço"],
    [225, 230, "| 225 a 230 | G004  | CNAB                   | Uso Exclusivo FEBRABAN/CNAB"],
    [231, 240, "| 231 a 240 | *     | Ocorrências            | Códigos das Ocorrências p/ Retorno "]
  ],
  segmentoA: [
    [1, 3, "    001 a 003 | G001  | Controle      | Código do Banco na Compensação"],
    [4, 7, "    004 a 007 | *G002 | Controle      | Lote de Serviço"],
    [8, 8, "    008 a 008 | *G003 | Controle      | Tipo de Registro"],
    [9, 13, "   009 a 013 | *G038 | Serviço       | Nº Seqüencial do Registro no Lote"],
    [14, 14, "  014 a 014 | *G039 | Serviço       | Código de Segmento do Reg. Detalhe"],
    [15, 15, "  015 a 015 | *G060 | Serviço       | Tipo de Movimento"],
    [16, 17, "  016 a 017 | G061  | Serviço       | Código da Instrução p/ Movimento"],
    [18, 20, "  018 a 020 | *P001 | Favorecido    | Código da Câmara Centralizadora"],
    [21, 23, "  021 a 023 | P002  | Favorecido    | Código do Banco do Favorecido"],
    [24, 28, "  024 a 028 | *G008 | Favorecido    | Ag. Mantenedora da Cta do Favor."],
    [29, 29, "  029 a 029 | *G009 | Favorecido    | Dígito Verificador da Agência"],
    [30, 41, "  030 a 041 | *G010 | Favorecido    | Número da Conta Corrente"],
    [42, 42, "  042 a 042 | *G011 | Favorecido    | Dígito Verificador da Conta"],
    [43, 43, "  043 a 043 | *G012 | Favorecido    | Dígito Verificador da AG/Conta"],
    [44, 73, "  044 a 073 | G013  | Favorecido    | Nome do Favorecido"],
    [74, 93, "  074 a 093 | G064  | Crédito       | Nº do Docum. Atribuído p/ Empresa"],
    [94, 101, " 094 a 101 | P009  | Crédito       | Data do Pagamento"],
    [102, 104, "102 a 104 | *G040 | Crédito       | Tipo da Moeda"],
    [105, 119, "105 a 119 | G041  | Crédito       | Quantidade da Moeda"],
    [120, 134, "120 a 134 | P010  | Crédito       | Valor do Pagamento"],
    [135, 154, "135 a 154 | *G043 | Crédito       | Nº do Docum. Atribuído pelo Banco"],
    [155, 162, "155 a 162 | P003  | Crédito       | Data Real da Efetivação Pagto"],
    [163, 177, "163 a 177 | P004  | Crédito       | Valor Real da Efetivação do Pagto"],
    [178, 217, "178 a 217 | *G031 | Informação 2  | Outras Informações"],
    [218, 219, "218 a 219 | *P005 | Informação 2  | Compl. Tipo Serviço"],
    [220, 224, "220 a 224 | *P011 | Cód Fin Doc   | Codigo finalidade da TED"],
    [225, 226, "225 a 226 | P013  | Cód Fin TED   | Compl. Finalidade de Pagamento"],
    [227, 229, "227 a 229 | G004  | Cód Fin Compl | Uso Exclusivo FEBRABAN/CNAB"],
    [230, 230, "230 a 230 | *P006 | CNAB          | Aviso ao Favorecido"],
    [231, 240, "231 a 240 | *G059 | Aviso         | Códigos das Ocorrências p/ Retorno "]
  ],
  segmentoB: [
    [1, 3, "    001 a 003 | G001  | Controle         | Código do Banco na Compensação"],
    [4, 7, "    004 a 007 | *G002 | Controle         | Lote de Serviço"],
    [8, 8, "    008 a 008 | *G003 | Controle         | Tipo do Registro"],
    [9, 13, "   009 a 013 | *G038 | Serviço          | Nº Seqüencial do Registro no Lote"],
    [14, 14, "  014 a 014 | *G039 | Serviço          | Código de Segmento do Reg. Detalhe"],
    [15, 17, "  015 a 017 | G004  | CNAB             | Uso Exclusivo FEBRABAN/CNAB"],
    [18, 18, "  018 a 018 | *G005 | Dados Compl      | Tipo de Inscrição do Favorecido"],
    [19, 32, "  019 a 032 | *G006 | Dados Compl      | Nº de Inscrição do Favorecido"],
    [33, 62, "  033 a 062 | G032  | Dados Compl      | Nome da Rua, Av, Pça, Etc"],
    [63, 67, "  063 a 067 | G032  | Dados Compl      | Nº do Local"],
    [68, 82, "  068 a 082 | G032  | Dados Compl      | Casa, Apto, Etc"],
    [83, 97, "  083 a 097 | G032  | Dados Compl      | Bairro"],
    [98, 117, " 098 a 117 | G033  | Dados Compl      | Nome da Cidade"],
    [118, 122, "118 a 122 | G034  | Dados Compl      | CEP"],
    [123, 125, "123 a 125 | G035  | Dados Compl      | Complemento do CEP"],
    [126, 127, "126 a 127 | G036  | Dados Compl      | Sigla do Estado"],
    [128, 135, "128 a 135 | G044  | Dados Compl      | Data do Vencimento (Nominal)"],
    [136, 150, "136 a 150 | G042  | Dados Compl      | Valor do Documento (Nominal)"],
    [151, 165, "151 a 165 | G045  | Dados Compl      | Valor do Abatimento"],
    [166, 180, "166 a 180 | G046  | Dados Compl      | Valor do Desconto"],
    [181, 195, "181 a 195 | G047  | Dados Compl      | Valor da Mora"],
    [196, 210, "196 a 210 | G048  | Dados Compl      | Valor da Multa"],
    [211, 225, "211 a 225 | P008  | Dados Compl      | Código/Documento do Favorecido"],
    [226, 226, "226 a 226 | P006  | Aviso            | Aviso ao Favorecido"],
    [227, 232, "227 a 232 | P012  | Cód UG Centraliz | Uso Exclusivo para o SIAPE"],
    [233, 240, "233 a 240 | P015  | Ident Banco SPB  | Código ISPB "]
  ],
  segmentoJ: [
    [1, 3, "    001 a 003 | G001  | Controle     |  Código no Banco da Compensação"],
    [4, 7, "    004 a 007 | *G002 | Controle     |  Lote de Serviço"],
    [8, 8, "    008 a 008 | *G003 | Controle     |  Tipo de Registro"],
    [9, 13, "   009 a 013 | *G038 | Serviço      |  Nº Seqüencial do Registro no Lote"],
    [14, 14, "  014 a 014 | *G039 | Serviço      |  Código de Segmento no Reg. Detalhe"],
    [15, 15, "  015 a 015 | *G060 | Serviço      |  Tipo de Movimento"],
    [16, 17, "  016 a 017 | G061  | Serviço      |  Código da Instrução p/ Movimento"],
    [18, 61, "  018 a 061 | *G063 | Pagamento    |  Código de Barras"],
    [62, 91, "  062 a 091 | G013  | Pagamento    |  Nome do Cedente"],
    [92, 99, "  092 a 099 | G044  | Pagamento    |  Data do Vencimento (Nominal)"],
    [100, 114, "100 a 114 | G042  | Pagamento    |  Valor do Título (Nominal)"],
    [115, 129, "115 a 129 | L002  | Pagamento    |  Valor do Desconto + Abatimento"],
    [130, 144, "130 a 144 | L003  | Pagamento    |  Valor da Mora + Multa"],
    [145, 152, "145 a 152 | P009  | Pagamento    |  Data do Pagamento"],
    [153, 167, "153 a 167 | P010  | Pagamento    |  Valor do Pagamento"],
    [168, 182, "168 a 182 | G041  | Pagamento    |  Quantidade da Moeda"],
    [183, 202, "183 a 202 | G064  | Pagamento    |  Nº do Docto Atribuído pela Empresa"],
    [203, 222, "203 a 222 | *G043 | Nosso Número |  Nº do Docto Atribuído pelo Banco"],
    [223, 224, "223 a 224 | *G065 | Código Moeda |  Código de Moeda"],
    [225, 230, "225 a 230 | G004  | CNAB         |  Uso Exclusivo FEBRABAN/CNAB"],
    [231, 240, "231 a 240 | *G059 | Ocorrências  |  Códigos das Ocorrências p/ Retorno"],
  ],
  segmentoJ52: [
    [1, 3, "    001 a 003 | G001  | Controle      | Código do Banco na Compensação"],
    [4, 7, "    004 a 007 | *G002 | Controle      | Lote de Serviço"],
    [8, 8, "    008 a 008 | *G003 | Controle      | Tipo de Registro"],
    [9, 13, "   009 a 013 | *G038 | Serviço       | Nº Sequencial do Registro no Lote"],
    [14, 14, "  014 a 014 | *G039 | Serviço       | Cód. Segmento do Registro Detalhe"],
    [15, 15, "  015 a 015 | G004  | Serviço       | Uso Exclusivo FEBRABAN/CNAB"],
    [16, 17, "  016 a 017 | *C004 | Serviço       | Código de Movimento Remessa"],
    [18, 19, "  018 a 019 | G067  | Cód Reg       | Identificação Registro Opcional"],
    [20, 20, "  020 a 020 | *G005 | Dados Sacado  | Tipo de Inscrição"],
    [21, 35, "  021 a 035 | *G006 | Dados Sacado  | Número de Inscrição"],
    [36, 75, "  036 a 075 | G013  | Dados Sacado  | Nome"],
    [76, 76, "  076 a 076 | *G005 | Dados Cedente | Tipo de Inscrição"],
    [77, 91, "  077 a 091 | *G006 | Dados Cedente | Número de Inscrição"],
    [92, 131, " 092 a 131 | G013  | Dados Cedente | Nome"],
    [132, 132, "132 a 132 | *G005 | Dados Sacador | Tipo de Inscrição"],
    [133, 147, "133 a 147 | *G006 | Dados Sacador | Número de Inscrição"],
    [148, 187, "148 a 187 | G013  | Dados Sacador | Nome"],
    [188, 240, "188 a 240 | G004  | CNAB          | Uso Exclusivo FEBRABAN/CNAB"],
  ],
  segmentoZ: [
    [1, 3, "    001 a 003 | G001  | Controle          | Código no Banco da Compensação"],
    [4, 7, "    004 a 007 | G002  | Controle          | Lote de Serviço"],
    [8, 8, "    008 a 008 | G003  | Controle          | Registro Detalhe de Lote"],
    [9, 13, "   009 a 013 | G038  | Serviço           | Nº Seqüencial do Registro no Lote"],
    [14, 14, "  014 a 014 | G039  | Serviço           | Código de Segmento no Reg. Detalhe"],
    [15, 78, "  015 a 078 | Z001  | Autenticação      | Autenticação para atender Legislação"],
    [79, 103, " 079 a 103 | Z002  | Controle Bancário | Autenticação Bancária / Protocolo"],
    [104, 230, "104 a 230 | G004  | Reservado         | Uso CNAB/FEBRABAN"],
    [231, 240, "231 a 240 | *G059 | Ocorrências       | Códigos das Ocorrências p/ Retorno"],
  ],
  trailerLote: [
    [1, 3, "    001 a 003 | G001  | Controle         | Código do Banco na Compensação"],
    [4, 7, "    004 a 007 | *G002 | Controle         | Lote de Serviço"],
    [8, 8, "    008 a 008 | *G003 | Controle         | Tipo de Registro"],
    [9, 17, "   009 a 017 | G004  | CNAB             | Uso Exclusivo FEBRABAN/CNAB"],
    [18, 23, "  018 a 023 | *G057 | Totais           | Quantidade de Registros do Lote"],
    [24, 41, "  024 a 041 | P007  | Totais           | Somatória de Valores"],
    [42, 59, "  042 a 059 | G058  | Totais           | Somatória de Quantidade de Moedas"],
    [60, 65, "  060 a 065 | G066  | Núm Aviso Débito | Número Aviso de Débito"],
    [66, 230, " 066 a 230 | G004  | CNAB             | Uso Exclusivo FEBRABAN/CNAB"],
    [231, 240, "231 a 240 | *G059 | Ocorrências      | Códigos das Ocorrências p/ Retorno "]
  ],
  trailerArquivo: [
    [1, 3, "   001 a 003 | G001  | Controle | Código do Banco na Compensação"],
    [4, 7, "   004 a 007 | *G002 | Controle | Lote de Serviço"],
    [8, 8, "   008 a 008 | *G003 | Controle | Tipo de Registro"],
    [9, 17, "  009 a 017 | G004  | CNAB     | Uso Exclusivo FEBRABAN/CNAB"],
    [18, 23, " 018 a 023 | G049  | Totais   | Quantidade de Lotes do Arquivo"],
    [24, 29, " 024 a 029 | G056  | Totais   | Quantidade de Registros do Arquivo"],
    [30, 35, " 030 a 035 | *G037 | Totais   | Qtde de Contas p/ Conc. (Lotes)"],
    [36, 240, "036 a 240 | G004  | CNAB     | Uso Exclusivo FEBRABAN/CNAB"]
  ],
}
