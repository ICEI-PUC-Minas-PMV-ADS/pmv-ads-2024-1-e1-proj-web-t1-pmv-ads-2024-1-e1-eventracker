
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
    <td>CT-01: O website deverá ser responsivo e permitir a visualização em dispositivos diversos de forma satisfatória.</td>
    <td>RNF-02: A aplicação deverá ser responsiva permitindo a visualização em dispositivos diversos de forma adequada.</td>
    <td>• Garantir a boa usabilidade do conteúdo de uma página, quando o usuário interagir, independentemente do dispositivo tecnológico o website deve ser adaptado.</td>
    <td>• Deve-se abrir o website, testar no computador e no dispositivo móvel. Dessa forma, irá observar se o website está em conformidade e com as funcionalidades adequadas dos aparelhos utilizados.</td>
    <td>• O website deve adaptar-se e garantir boa usuabilidade ao usuário quando utilizado no dispositivo móvel e no computador.</td>  
 <td>• A combinar. (próxima etapa)</td>     
  <tr>
   </td>
   
</table>

<hr>

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
    <td>RF-02: A aplicação deve permitir que o usuário faça login em sua conta</td>
    <td> <p>• Certificar se o button "Entrar" da página login esta funcionando corretamente e o button Cadastrar-se direciona o usuário na página Cadastrar.</p></td>
    <td><p> 01) Deve-se abrir o website, os campos de formulário e-mail e senha deve ser preenchido, dessa forma deve-se analisar ao preencher se aparecerá a mensagem: "Login realizado com Sucesso". </p>
    <p> 02) Deve-se abrir o website, preencher apenas o campo de formulário "email" ou apenas a "senha" e outro deverá ficar em branco. Dessa forma, ao clicar no button "Entrar" deve-se visualizar a mensagem: "Os campos de e-mail e senha são obrigatórios" </p>
    <p> 03) Deve-se se clicar no button "Cadastrar-se e avaliar se a página será direcionada para a página de Cadastro </p>
     </td>
    <td> <p>• O website deve aparecer as mensagens quando for testado todos os formulários e quando um campo formulário for deixado em branco intencionalmente.</p>
     <p>· O button "Cadastrar-se" deve direcionar a página almejada.</p>
    </td>  
 <td>• A combinar. (próxima etapa)</td>     
  <tr>
   </td> 
</table>

<hr>

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
    <td>CT-03: Verificar o funcionamento do filtro de pesquisa na página Buscar Eventos.</td>
    <td>RF-03: A aplicação deve possuir uma função de filtro/pesquisa.</td>
    <td>• Analisar se o filtro de pesquisa está recuperando os dados acrescentados pelo usuário</td>
    <td>• 
     <p>01)Deve-se abrir o website pelo navegador escolhido.</p>
     <p>02)Digitar o endereço do site.</p>
     <p>03)Visualizar a página "Home".</p>
     <p>04)Clicar no button "Buscar Eventos" para ser direcionado na página almejada. </p>
      <p>05)Digitar no filtro de pesquisa algum elemento específico da página "Buscar Eventos" e verificar se o resultado é exibido na página.</p> 
    </td>
    <td> Os elementos digitados no filtro de pesquisa devem mostrar aonde tem a informação na página referida.</td>  
 <td>• Juliana M.</td>     
  <tr>
   </td>
   </table>
  
<hr>
    <table>
   <td>CT-04: Verificar a possibilidade do usuário Cadastrar seu Evento </td>
    <td><p>RF-04: A aplicação deve permitir ao usuário que crie seu próprio evento.</p>
    <p> RF-08 A aplicação deve separar os eventos por categorias.</p>  
    </td>
    <td>• Analisar se o website disponibiliza do usuário Cadastrar seu próprio Evento.</td>
    <td> 
     <p>01)Deve-se abrir o website pelo navegador escolhido.</p>
     <p>02)Digitar o endereço do site.</p>
     <p>03)Visualizar a página "Crie seu Evento, digitar as informações fornecidas nos campos de formulário, selecionar os arquivos pedidos e clicar no button "Criar".</p>
     <p>04) Deve-se deixar de forma intencional algumas informações sem o devido preenchimento e observar se o usuário será reletado sobre as informações que devem ser digitadas.</p> 
    </td>
    <td> O usuário deve finalizar o Cadastro de seu Evento de forma compreensível.</td>  
 <td>• A combinar. (próxima etapa)</td>     
  <tr>
   </td>   
</table>

<hr>

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
    <td>CT-05: Verificar a possibilidade do usuário criar seu cadastro no website.</td>
    <td>RF-01: A aplicação deve permitir ao organizador cadastrar uma conta.</td>
     <td> Avaliar se a página Cadastre-se esta conforme o objetivo funcional almejado</td>
   <td>
       <p>01)Deve-se abrir o website pelo navegador escolhido.</p>
     <p>02)Digitar o endereço do site.</p>
     <p>03)Visualizar a página "Menu".</p>
     <p>04)Clicar no button "Cadastre-se" no cabeçalho para ser direcionado na página almejada. </p>
     <p>05)Preencher todas as informações do formulário e clicar no button “Cadastrar”</p>
     <p> 06) Não preencher todas as informações pedidas e analisar se será mostrado alguma mensagem informando sobre 
      o campo de formulário em branco ou preenchido incorretamente. </p>
   </td>      
     <td> As informações de preenchimento devem estar disponíveis ao usuário e, caso algum campo não seja preenchido, deve-se ter uma mensagem orientada ao usuário para preencher os campos</td>
     <td> João Victor </td>
</table>

   <hr>

<table border="1">
  <tr>
    <th>Caso de Teste</th>
    <th>Requisitos associados</th>
    <th>Objetivos dos Testes</th>
   <th>Passos</th>
   <th>Critérios de Êxito</th>  
   <th>Responsável</th>  
  </tr>
   <td>CT-06: Verificar se a página "Detalhes de Eventos" contém informações claras aos usuários.</td>
    <td><p> RF-06: A aplicação deve apresentar os dados acerca dos eventos, bem como, local de realização, data e horário.</p>
        <p> RF-07: A aplicação deve permitir ao participante visualizar informações sobre o evento, como, imagem publicada pelo criador, descrição do evento e suas atrações, nome do criador e se o evento foi cancelado ou adiado</p>
        <p> RF:06:A aplicação deve apresentar os dados acerca dos eventos, bem como, local de realização, data e horário.</p>
    </td>
  <td>• Avaliar se a página "Detalhes de Eventos irá fornecer informações precisas quando o usuário clicar no button "Saiba Mais </td>
    <td>
     <p>01)Deve-se abrir o website pelo navegador escolhido.</p>
     <p>02)Digitar o endereço do site.</p>
     <p>03)Visualizar a página "Home".</p>
     <p>04)Clicar no button "Home" para ser direcionado na página almejada. </p>
    <p>05) Deve-se ler os eventos descritos e clicar no button "Saiba Mais", dessa forma o usuário deverá ser direcionado as informações sobre cada evento descrito.</p>
    </td>
    <td>· O button "Saiba Mais" deve direcionar na descrição dos eventos referidos com as informações necessárias ao usuário e na página "Home" deve-se ter informações como, por exemplo, Nome, Data, Acessibilidade para Cadeirantes e Intérprete de Libras Disponíveis</td>  
 <td>• Alessandro </td>     
  <tr>
   </td>   
</table>

<hr>

<table border="1">
  <tr>
    <th>Caso de Teste</th>
    <th>Requisitos associados</th>
    <th>Objetivos dos Testes</th>
   <th>Passos</th>
   <th>Critérios de Êxito</th>  
   <th>Responsável</th>  
  </tr>
   <td>CT-07: Verificar se a página "Buscar Eventos" contém informações dos eventos divididas por categorias e a página possui responsividade.</td>
    <td><p> RF-08: A aplicação deve separar os eventos por categorias.</p>
            
   
  <td>• Avaliar se a página "Buscar Eventos" irá fornecer informações dos eventos divididas por categoria, de maneira precisa aos usuários. </td>
    <td>
     <p>01)Deve-se abrir o website pelo navegador escolhido.</p>
     <p>02)Digitar o endereço do site.</p>
     <p>03)Visualizar a página "Buscar Eventos" no cabeçalho.</p>
     <p>04)Clicar no button "Buscar Eventos" para ser direcionado na página almejada. </p>
    <p>05) Deve-se verificar se todos os eventos descritos estão divididos de forma prática e acessível ao usuário.<
    </td>
    <td>· A página "Buscar Eventos" deve direcionar de forma simplificada sobre cada evento disponível dividido por categorias e página deve esta responsiva adaptando-se em dispositivos movéis e computadores.
    </td>  
 <td>• Juliana M.</td>     
  <tr>
   </td>   
</table>

<table border="1">
    
  <tr>
    <th>Caso de Teste</th>
    <th>Requisitos associados</th>
    <th>Objetivos dos Testes</th>
   <th>Passos</th>
   <th>Critérios de Êxito</th>  
   <th>Responsável</th>  
  </tr>
   <td>CT-08: Verificar se a página "Sobre Nós" contém informações explicitando o motivo do projeto e avalisar se os buttons de navegações direcionam nas páginas corretamente  dos usuários.</td>
    <td>
        <p> RNF-02A aplicação deverá ser responsiva permitindo a visualização em dispositivos diversos de forma adequada.</p>
    </td>
  <td>• Avaliar se a página "Sobre Nós" explicará o motivo que o web site foi criado e  analisar o redirecionamento de todos os buttons após clicar na página almejada.  </td>
    <td>
     <p> 01)Deve-se abrir o website pelo navegador escolhido.</p>
     <p> 02)Digitar o endereço do site.</p>
     <p> 03)Visualizar a página "Sobre Nós".</p>
     <p> 04)Clicar no button "Sobre Nós" para ser direcionado na página almejada. </p>
    <p> 05) Deve-se ler cautelosamente se o texto descrito que explica sobre o motivo do projeto criado.</p> 
    <p> 06) Deve-se testar todos os buttons e avaliar se funcionam corretamente utilizado no computador e no dispositivo móvel e se ao clicar será redirecionado a página desejada.</p>
       
 </td>
    <td>· A página "Sobre Nós" deve conter informações precisas sobre o motivo que o website foi desenvolvido e todos os buttons deve redirecionar para outras páginas de navegação.</p> 
    </td>  
 <td>• Maurício</td>     
  <tr>
   </td>   
</table>


