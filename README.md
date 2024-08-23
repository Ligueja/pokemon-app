## <b>PROGRAMA STARTER FULL STACK WEB - GROWDEV</b>

<b>Módulo: REACT III</b>

<b>ATIVIDADE FINAL DO MÓDULO - POKÉMON</b>

# CONSUMO DA API POKÉMON

Este é um projeto de uma aplicação web front-end para consumir a API do Pokémon, com listagem dos personagens, detalhes e uma lista Pokedex.

## Tecnologias Utilizadas

- **React**
- **Vite**
- **Axios**
- **Redux Toolkit**
- **Redux Persist**
- **Material UI (MUI)**
- **TypeScript**

## Funcionalidades

### 1. Listagem dos Personagens
- A página inicial exibe uma lista de personagens Pokémon, obtida da PokeAPI.
- A listagem inclui a imagem, nome e ID de cada Pokémon.
- A navegação entre páginas é facilitada pela funcionalidade de paginação, permitindo que o usuário veja uma quantidade limitada de Pokémon por página.

<img src="https://github.com/Ligueja/pokemon-app/blob/main/src/assets/list.jpg" width="600" height="700"/> 

### 2. Detalhes dos Personagens
- Ao clicar em um Pokémon na listagem, o usuário é redirecionado para a página de detalhes.
- A página de detalhes exibe informações mais detalhadas sobre o Pokémon selecionado, incluindo suas habilidades, tipos e estatísticas.
- Há um botão para retornar à página de listagem, proporcionando uma navegação simples e intuitiva.

<img src="https://github.com/Ligueja/pokemon-app/blob/main/src/assets/details.jpg" width="400" height="400"/> 

### 3. Pokedex (Favoritos)
- O usuário pode adicionar seus Pokémon favoritos à Pokedex diretamente da listagem principal.
- A Pokedex é acessível através de um ícone na barra de navegação e exibe apenas os Pokémon marcados como favoritos.
- Na Pokedex, o usuário verá o nome e a imagem dos seus Pokémon favoritos, facilitando a visualização e gerenciamento dos seus preferidos.

<img src="https://github.com/Ligueja/pokemon-app/blob/main/src/assets/pokedex.jpg" width="400" height="400"/> 


## Como Executar o Projeto

1. Clone o repositório:

   ```bash
   https://github.com/Ligueja/pokemon-app.git
   cd pokemon-app

   ```

2. Instale das dependências:

   ```bash
   npm install

   ```

3. Inicie o servidor:
   ```bash
   npm run dev
   ```
