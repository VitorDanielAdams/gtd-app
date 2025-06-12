# GTD App

Um aplicativo de gerenciamento de tarefas baseado na metodologia GTD (Getting Things Done), desenvolvido com React Native e Expo.

## 🚀 Tecnologias

- React Native
- Expo
- TypeScript
- React Navigation
- React Redux
- Lucide React Native (para ícones)

## 📋 Pré-requisitos

- Node.js (versão LTS recomendada)
- npm ou yarn
- Expo CLI
- Android Studio (para desenvolvimento Android)
- Xcode (para desenvolvimento iOS, apenas em macOS)

## 🔧 Instalação

1. Clone o repositório:

```bash
git clone [URL_DO_REPOSITÓRIO]
cd gtd-app
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Inicie o projeto:

```bash
npx expo start
```

## 📱 Executando o App

- Pressione `a` para abrir no Android
- Pressione `i` para abrir no iOS (apenas em macOS)
- Escaneie o QR Code com o app Expo Go (disponível na [Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) e [App Store](https://apps.apple.com/app/apple-store/id982107779))

## 📐 Arquitetura do Aplicativo

O aplicativo GTD é construído seguindo os princípios da Arquitetura Limpa (Clean Architecture), o que garante uma separação clara de responsabilidades, testabilidade e manutenibilidade. A arquitetura é dividida em quatro camadas principais:

### Camada de Apresentação (Presentation Layer)
Responsável pela interface do usuário (UI) e pela interação com o Redux para gerenciamento de estado.
- **Exemplos**: `InboxScreen`, Navegação, `taskSlice`

### Camada de Domínio (Domain Layer)
Contém a lógica de negócio central e as regras da aplicação. É independente de qualquer framework ou banco de dados.
- **Exemplos**: `AddTaskUseCase`, `Task`

### Camada de Dados (Data Layer)
Implementa os repositórios definidos na camada de domínio. Lida com a persistência e recuperação de dados.
- **Exemplos**: `TaskRepository`, `ProjectRepository`

### Camada de Infraestrutura (Infrastructure Layer)
Gerencia a implementação de detalhes técnicos, como Realm (banco de dados), serviços externos e utilitários.
- **Exemplos**: `RealmDataSource`, `notificationService`

Aqui está um diagrama visual da arquitetura:

![Clean Architecture for GTD App](assets/clean-architecture.png)

## 🛠️ Configuração do Ambiente

O projeto utiliza aliases para importações, configurados em:

- `tsconfig.json` - Configuração do TypeScript
- `metro.config.js` - Configuração do Metro bundler

## 📝 Funcionalidades

- [ ] Gerenciamento de tarefas
- [ ] Sistema de categorização
- [ ] Interface intuitiva
- [ ] Sincronização de dados