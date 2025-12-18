# Labvilas - Site Institucional

Site moderno e responsivo para o Laboratório Labvilas, desenvolvido com Nuxt 3, Vue 3 e Tailwind CSS.

## Características

- Design moderno e responsivo
- Animações suaves e interativas
- Otimizado para todos os dispositivos (mobile, tablet, desktop)
- Componentes reutilizáveis
- Performance otimizada
- SEO-friendly

## Tecnologias Utilizadas

- **Nuxt 3** - Framework Vue.js para aplicações web
- **Vue 3** - Framework JavaScript progressivo
- **Tailwind CSS** - Framework CSS utility-first
- **Nuxt Icon** - Biblioteca de ícones

## Seções do Site

1. **Header** - Navegação fixa com menu responsivo
2. **Hero** - Banner principal com call-to-actions
3. **Serviços** - Grid de serviços com cards interativos
4. **Localização** - Informações de contato e horários
5. **Footer** - Informações institucionais e links úteis

## Instalação

Instale as dependências:

```bash
npm install
```

## Desenvolvimento

Inicie o servidor de desenvolvimento em `http://localhost:3000`:

```bash
npm run dev
```

## Produção

Gere a build de produção:

```bash
npm run build
```

Visualize a build de produção localmente:

```bash
npm run preview
```

## Estrutura do Projeto

```
labvilas/
├── app/
│   ├── assets/
│   │   └── css/
│   │       └── main.css          # Estilos globais e Tailwind
│   ├── components/
│   │   ├── Header.vue            # Componente de cabeçalho
│   │   ├── Hero.vue              # Banner principal
│   │   ├── Services.vue          # Seção de serviços
│   │   ├── Location.vue          # Localização e contato
│   │   └── Footer.vue            # Rodapé
│   ├── layouts/
│   │   └── default.vue           # Layout padrão
│   ├── pages/
│   │   └── index.vue             # Página inicial
│   └── app.vue                   # Componente raiz
├── public/                       # Arquivos estáticos
├── nuxt.config.ts               # Configuração do Nuxt
├── tailwind.config.js           # Configuração do Tailwind
└── package.json                 # Dependências do projeto
```

## Customização

### Cores

As cores principais podem ser ajustadas no arquivo `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Customize aqui
  }
}
```

### Conteúdo

Os textos e informações podem ser editados diretamente nos componentes dentro de `app/components/`.

## Deploy

Para deploy em produção, consulte a [documentação oficial do Nuxt](https://nuxt.com/docs/getting-started/deployment).

## Licença

Todos os direitos reservados - Labvilas
