(em construção)

# Plano de Testes de Software


Pré-requisitos: 
<p><a href=https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-eventracker/blob/main/documentos/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md> Especificação do Projeto</a></p>

<p><a href= https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-eventracker/blob/main/documentos/04-Projeto%20de%20Interface.md> Projeto de Interface</a></p>

<p>Os requisitos para realização dos testes de software são:</p>
<ul>
<li>Navegador da internet: - Chrome, - Firefox ou - Edge.</li>
</ul>

<table border="1">
    <col>
  <tr>
    <th>Caso de Teste</th>
    <th>Requisitos associados</th>
    <th>Objetivos dos Testes</th>
   <th>Passos</th>
   <th>Critérios de Êxito</th>  
   <th>Responsável</th>  
  </tr>
    <td>CT-01: O web site deverá ser responsivo e permitir a visualização em dispositivos diversos de forma satisfatória.</td>
    <td>RNF-02: A aplicação deverá ser responsiva permitindo a visualização em dispositivos diversos de forma adequada.</td>
    <td>• Garantir a boa usabilidade do conteúdo de uma página, quando o usuário interagir,independentemente do dispositivo tecnológico o web site deve ser adaptado.</td>
    <td>• Deve-se abrir o web site, testar no computador e no dispositivo móvel. Dessa forma, irá observar se o website esta em conformidade e com as funcionalidades adequadas dos aparelhos utilizados.</td>
    <td>• O web site deve adaptar-se e garantir boa usuabilidade ao usuário quando utilizado no dispositivo móvel e no computador.</td>  
 <td>• A combinar. (próxima etapa)</td>     
  <tr>
   </td>
   
</table>

<br>

<table border="1">
    <col>
  <tr>
    <th>Caso de Teste</th>
    <th>Requisitos associados</th>
    <th>Objetivos dos Testes</th>
   <th>Passos</th>
   <th>Critérios de Êxito</th>  
   <th>Responsável</th>  
  </tr>
    <td>CT-02: Verificar o Login de usuários.</td>
    <td>RF-02:A aplicação deve permitir que o usuário faça login em sua conta</td>
    <td> <p>• Certificar se o button "Entrar" da página login esta funcionando corretamente e o button Cadastrar-se direciona o usuário na página Cadastrar.</p></td>
    <td><p> 01) Deve-se abrir o web site, os campos de formulário e-mail e senha deve ser preechido, dessa forma deve-se analisar ao preencher se aparecerá a mensagem: "Login realizado com Sucesso". </p>
    <p> 02) Deve-se abrir o web site, preencher apenas o campo de formulário "email" ou apenas a "senha" e outro deverá ficar em branco. Dessa forma, ao clicar no button "Entrar" deve-se visualizar a mensagem: "Os campos de e-mail e senha são obrigatórios" </p>
    <p>03) Deve-se se clicar no button "Cadastrar-se e avaliar se a página será direcionada para a página de Cadastro </p>
   
</td>
    <td> <p>• O web site deve aparecer as mensagens quando for testado todos os formulários e quando um campo formulário for deixado em branco intencionalmente.</p>
     <p>· O button "Cadastrar-se" deve direcionar a página almejada.</p>
    </td>  
 <td>• A combinar. (próxima etapa)</td>     
  <tr>
   </td> 
</table>

<br>

<table border="1">
    <col>
  <tr>
    <th>Caso de Teste</th>
    <th>Requisitos associados</th>
    <th>Objetivos dos Testes</th>
   <th>Passos</th>
   <th>Critérios de Êxito</th>  
   <th>Responsável</th>  
  </tr>
    <td>CT-03:Verificar o funcionamento do filtro de pesquisa</td>
    <td>RF-03:A aplicação deve possuir uma função de filtro/pesquisa de eventos.</td>
    <td>• Analisar se o filtro de pesquisa está recuperando os dados acrescentados pelo usuário</td>
    <td>• 
     <p>01)Deve-se abrir o web site pelo navegador escolhido.</p>
     <p>02)Digitar o endereço do site.</p>
     <p>03)Visualizar a página "Home".</p>
     <p>04)Clicar no button "Buscar Eventos" para ser direcionado na página almejada. </p>
      <p>05)Digitar no filtro de pesquisa algum elemento específico da página "Buscar Eventos" e verificar se o resultado é exibido na página.</p>
    </td>
    <td> Os elementos digitados no filtro de pesquisa devem mostrar aonde tem a informação na página referida.</td>  
 <td>• A combinar. (próxima etapa)</td>     
  <tr>
   </td>

   <td>CT-04:Verificar o funcionamento do filtro de pesquisa</td>
    <td>RF-03:A aplicação deve possuir uma função de filtro/pesquisa de eventos.</td>
    <td>• Analisar se o filtro de pesquisa está recuperando os dados acrescentados pelo usuário</td>
    <td>• 
     <p>01)Deve-se abrir o web site pelo navegador escolhido.</p>
     <p>02)Digitar o endereço do site.</p>
     <p>03)Visualizar a página "Home".</p>
     <p>04)Clicar no button "Buscar Eventos" para ser direcionado na página almejada. </p>
      <p>05)Digitar no filtro de pesquisa algum elemento específico da página "Buscar Eventos" e verificar se o resultado é exibido na página.</p>
    </td>
    <td> Os elementos digitados no filtro de pesquisa devem mostrar aonde tem a informação na página referida.</td>  
 <td>• A combinar. (próxima etapa)</td>     
  <tr>
   </td>   
</table>


> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
