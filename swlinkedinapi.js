// Importa a classe `Client` da biblioteca `linkedin-private-api`
// Essa API não é oficial e usa engenharia reversa para interagir com o LinkedIn.
// ⚠️ Uso sujeito a bloqueio de conta (não é permitido pela política da plataforma).
const { Client } = require('linkedin-private-api');

// Credenciais do usuário — email e senha usados para autenticação. 
const usr = "****";
const psw = "***";
 
// Inicia uma IIFE (Immediately Invoked Function Expression)
// para usar `await` no escopo global de forma assíncrona.
(async () => {

    // Instancia o cliente LinkedIn
    const client = new Client();

    // Realiza login usando e-mail e senha fornecidos.
    // A função envia requisição simulando o login via navegador. 
    await client.login.userPass({
        username: usr,
        password: psw
    });

    // Cria um "scroller" (iterador paginado) para convites recebidos.
    // O método retorna um objeto que permite navegar em lotes de resultados (scrollNext).
    const receivedScroller = client.invitation.getReceivedInvitations();

    // Faz a primeira chamada para buscar o primeiro conjunto de convites recebidos.
    const receivedInvitations = await receivedScroller.scrollNext();

    // Faz o mesmo para convites enviados.
    const sentScroller = client.invitation.getSentInvitations();
    const sentInvitations = await sentScroller.scrollNext();

    // Realiza uma busca de perfis com palavra-chave "teste".
    // O método retorna um iterador com resultados de busca de pessoas.
    const peopleScroller = client.search.searchPeople({ keywords: 'teste' });
    
    // Obtém a primeira página de resultados.
    const people = await peopleScroller.scrollNext();

    // Seleciona o primeiro resultado (esperando ser o perfil do teste).
    // Cada item contém `profileId` e `trackingId` necessários para convites.
    const testePerfil = people[0].profile;

    // Envia um convite de conexão para o perfil identificado.
    // Envia a requisição ao LinkedIn simulando um clique em "Conectar".
    const sentInvitation = await client.invitation.sendInvitation({
        profileId: testePerfil.profileId,  // ID único do perfil de destino
        trackingId: testePerfil.trackingId // ID usado internamente pelo LinkedIn para rastrear buscas
    });
  
    // Exibe no console os resultados obtidos:
    // - convites recebidos
    // - convites enviados
    // - convite recém-enviado
    console.log(receivedInvitations, sentInvitations, sentInvitation);

})(); // Executa a função imediatamente
