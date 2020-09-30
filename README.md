desafio_mini_youtube_privado

# Desafio do mini youtube privado

## Introdução
Este desafio foi criado utilizando ``react-native`` utilizando o framework ``expo`` para facilitar o desenvolvimento. Todas as requisições são mockadas. Este projeto possui as seguintes features: 
- Tela de login (você pode logar com qualquer combinação de usuário e senha, está sem validação de back)
- Lista de vídeos que carregam de 3 em 3 (novos vídeos carregados ao final)
- Telas de detalhes do vídeo com descrição (apenas clicar no vídeo)
- Tela de vídeos favoritos
- Tela de conta do usuário (para poder deslogar)
- Login automático
- Testes Automatizados com jest (possui apenas 1 devido ao tempo)


## Requisitos 

Para rodar este projeto é necessário ter instalado ``node versão 12.0 no mínimo`` e é recomendado ter o ``yarn`` instalado como gerenciador de pacotes. Para executar localmente é necessário ter um emulador android ou Ios (apenas para mac).

## Como executar o projeto localmente
após clonar este projeto na sua máquina, execute o comando ``yarn`` para instalar todas as dependências. em seguida apenas execute ``yarn start`` para inciar o projeto em expo. em seguida aperte a ``tecla i`` para executar no emulador de Ios (precisa de mac) ou a ``tecla a`` para executar no emulador de android.

## Dependências

o projeto possui as seguintes dependências

```
"expo": "~39.0.2",
"expo-status-bar": "~1.0.2",
"formik": "^2.1.5",
"react": "16.13.1",
"react-dom": "16.13.1",
"react-native": "https://github.com/expo/react-native/archive/sdk-39.0.2.tar.gz",
"react-native-elements": "^2.3.2",
"react-native-gesture-handler": "^1.8.0",
"react-native-reanimated": "^1.13.1",
"react-native-router-flux": "^4.2.0",
"react-native-screens": "^2.11.0",
"react-native-web": "~0.13.12",
"react-redux": "^7.2.1",
"redux": "^4.0.5",
"redux-thunk": "^2.3.0",
"yup": "^0.29.3"
```

## Problemas
Devido ao curto espaço de tempo, o projeto possui alguns problemas:
- Implementação de mais testes
- Padronização melhor do código
- Ajustar um bug onde é possível carregar os mesmos videos várias vezes
- Melhorias na interface em geral
- Testar melhor em aparelhos Android ( o desenvolvimento foi feito focado no Ios)
- Verificar maior gama de telas (como iphone 11, tablets e afins)
