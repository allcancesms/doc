import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // https://vitepress.dev/reference/default-theme-config
  lang: 'pt-BR',
  base: "/doc",
  title: "Allcance SMS - Documentação do Painel",
  description: "Documentação oficial do painel da AllcanceSMS. Encontre guias detalhados, instruções de realização de tarefas e melhores práticas para utilizar nossos serviços de envio de SMS de forma eficiente e segura.",
  head: [['link', {rel: 'icon', href: 'favicon.ico'}]],
  themeConfig: {
    siteTitle: "Allcance SMS",
    titleTemplate: ":title - Documentação",

    logo: "favicon.ico",
    outlineTitle: 'Nesta página',

    nav: [
      {text: 'Suporte', link: 'https://wa.me/553132311301'},
      {text: 'Começar', link: '/get-started'},
      {text: 'Campanha', link: '/create-campaign'},
    ],

    sidebar: [
      {
        text: 'Comece por aqui',
        items: [
          {text: 'Criando uma conta gratuita', link: '#'},
          {text: 'Completando o cadastro', link: '#'},
          {text: 'Criando a primeira campanha', link: '#'},
        ]
      },
      {
        text: 'Campanhas',
        items: [
          {text: 'Campanhas SMS', link: '#'},
          {text: 'Whatshapp', link: '#'},
          {text: 'Torpedo Interativo', link: '#'},
        ]
      },
      {
        text: 'Ferramentas',
        items: [
          {text: 'Rastreadores', link: '#'},
          {text: 'Resposta automática', link: '#'},
          {text: 'Contatos', link: '#'},
          {text: 'Lista Negra', link: '#'},
          {text: 'Créditos', link: '#'},
        ]
      },
      {
        text: 'Controle e administração',
        items: [
          {text: 'Entendendo o dashboard', link: '#'},
          {text: 'Financeiro', link: '#'},
        ]
      },
      {
        text: 'Relatórios',
        items: [
          {text: 'Descomplicando o relátorio analítico', link: '#'},
          {text: 'Gerando um relatório por período', link: '#'},
        ]
      }
    ],

    socialLinks: [
      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-speedometer" viewBox="0 0 16 16"><path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2M3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.39.39 0 0 0-.029-.518z"/><title>Painel</title><path fill-rule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.95 11.95 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0"/></svg>`
        }, link: 'https://painel.allcancesms.com.br/app/'
      },
      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-justify-left" viewBox="0 0 16 16"><title>Blog</title><path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/></svg>`
        }, link: 'https://allcancesms.com.br/blog/'
      }
    ],

    footer: {
      message: '<div style="display: flex; align-items: flex-start; justify-content: flex-start; flex-direction: column; gap: 0.25rem"><img src="./allcance-logo.png" width="100" alt="Logo da Allcance"/><span>Allcance pessoas importantes com SMS.</span></div>',
      copyright: `<div style="display: flex; align-items: flex-start; justify-content: flex-start; flex-direction: column; gap: 0.25rem"><span>${new Date().getFullYear() || '2025'} © Todos os direitos reservados.</span></div>`
    },

    editLink: {
      pattern: 'https://github.com/XXXX/XXXX/edit/master/docs/:path'
    },

    lastUpdated: {
      text: 'Modificado em',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },
  }
})
