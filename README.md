# Validador de número de Cartão de Crédito

**Esta biblioteca se destina à validação de números de Cartão de Crédito.**

Na versão atual é possível validar o número, de um possível cartão de crédito, através de cálculos, não havendo confirmação se o cartão é realmente existente.

## Como instalar:

```bash

$  npm install card-validator-gtech

```

## Como utilizar:

```javascript

> const isValidCpf = require("cpf-validator-gtech");
> console.log(isValidCpf.cpfValidator("4539983237489397"))
> // returns true

```

## Roadmap oficial do projeto


#### versão 1.0.0
- validação de número de possível cartão de crédito, através de:
 - checagem de quantidade de dígitos (funciona apenas com cartões de 16 digítos);
 - checagem de digítos repetidos sequenciais (exemplo: 1111111111111111);
 - validação através de cálculos que retornam true ou false de acordo com resultado.