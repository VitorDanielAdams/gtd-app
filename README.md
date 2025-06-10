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

## 📁 Estrutura do Projeto

```
src/
├── presentation/
│   ├── navigation/
│   │   └── MenuBottomTabs/
│   │       └── MenuBottomTabs.tsx
│   │
│   ├── screens/
│   │   └── Inbox/
│   │       └── InboxScreen.tsx
│   └── components/
├── domain/
└── data/
```

## 🛠️ Configuração do Ambiente

O projeto utiliza aliases para importações, configurados em:

- `tsconfig.json` - Configuração do TypeScript
- `metro.config.js` - Configuração do Metro bundler

## 📝 Funcionalidades

- [ ] Gerenciamento de tarefas
- [ ] Sistema de categorização
- [ ] Interface intuitiva
- [ ] Sincronização de dados
