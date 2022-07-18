## QrCodeApp
<h4 align="center">
  QrCodeApp é uma aplicação criada para ler qrcodes e barcodes e enviar uma requisição junto do status do produto e a localização a um endpoint
</h4>

# 💻 Começando

### Requisitos

- Você precisa instalar [Node.js](https://nodejs.org/en/download/) e [Yarn](https://yarnpkg.com/) e ter um ambiente android configurado na sua maquina para rodar este projeto ou instalar o apk disponibilizado.


**Baixe o Apk**
[Apk-release](https://drive.google.com/file/d/1C7adyXL2fzU7UDfHOL24glz-woha8d9K/view?usp=sharing)

**Webhook.site**

https://webhook.site/#!/58b60c64-04e9-45e5-a467-05ceada83ff0

**Clone o projeto e acesse a pasta:**

```bash
$ git clone https://github.com/MiDrAjX/QrCodeApp.git && cd QrCodeApp
```

**Siga os passos a seguir:**

```bash
# Instale as dependencias
$ yarn || npm install

## React native lançou uma atualização que tornou depracated o ViewPropTypes que é necessario para utilização react-native-camera,
## como a biblioteca react-native-camera não lança mais atualizações, e a opção que a substitui deixa muitos celulares antigos de fora
## adicionei um passo extra aqui para que possa funcionar a aplicação
$ entre na pasta node_modules busque pela pasta react-native abra seu arquivo index.js e busque esse trecho de codigo
// Deprecated Prop Types
  get ColorPropType(): $FlowFixMe {
    invariant(
      false,
      'ColorPropType has been removed from React Native. Migrate to ' +
        "ColorPropType exported from 'deprecated-react-native-prop-types'.",
    );
  },
  get EdgeInsetsPropType(): $FlowFixMe {
    invariant(
      false,
      'EdgeInsetsPropType has been removed from React Native. Migrate to ' +
        "EdgeInsetsPropType exported from 'deprecated-react-native-prop-types'.",
    );
  },
  get PointPropType(): $FlowFixMe {
    invariant(
      false,
      'PointPropType has been removed from React Native. Migrate to ' +
        "PointPropType exported from 'deprecated-react-native-prop-types'.",
    );
  },
  get ViewPropTypes(): $FlowFixMe {
    invariant(
      false,
      'ViewPropTypes has been removed from React Native. Migrate to ' +
        "ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
    );
  },

  $ e o substitua por:

   get ColorPropType(): $FlowFixMe {
    console.warn('ColorPropType has been removed from React Native. Migrate to ' +
    "ColorPropType exported from 'deprecated-react-native-prop-types'.",)
   return require('deprecated-react-native-prop-types').ColorPropType;
  },
  get EdgeInsetsPropType(): $FlowFixMe {
    console.warn('ColorPropType has been removed from React Native. Migrate to ' +
    "ColorPropType exported from 'deprecated-react-native-prop-types'.",)
   return require('deprecated-react-native-prop-types').EdgeInsetsPropType;
  },
  get PointPropType(): $FlowFixMe {
    console.warn('ColorPropType has been removed from React Native. Migrate to ' +
    "ColorPropType exported from 'deprecated-react-native-prop-types'.",)
   return require('deprecated-react-native-prop-types').PointPropType;
  },
  get ViewPropTypes(): $FlowFixMe {
    console.warn('ColorPropType has been removed from React Native. Migrate to ' +
    "ColorPropType exported from 'deprecated-react-native-prop-types'.",)
   return require('deprecated-react-native-prop-types').ViewPropTypes;
  },

$ pronto, agora voçe pode rodar em seu dispositivo||emulador

# para gerar o apk use esse comando no windows não é necessario o ./
$ cd android
$ ./gradlew assembleRelease

# Inicie o Metro
$ yarn start || npm start

# Com o emulador ou celular conectado use o comando para instalar o aplicativo no dispositvo:
$ npx react-native run-android
```

O aplicativo vai estar disponível na tela do seu dispositivo.