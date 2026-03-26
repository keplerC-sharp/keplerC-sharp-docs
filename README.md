# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
# keplerC-sharp-docs
# keplerC-sharp-docs


#### DOCUMENTATION
https://gist.github.com/andrescortesdev/6f7cf37dd45e68dac7f78248e0fffb2a

https://tutorialmarkdown.com/guia

### Execute from 0 to deplay with firebase (sudo)
1. npm 
```
npm install
```
2. First, you need to install the Firebase CLI (command-line tool) globally:
```
npm install -g firebase-tools
```

3. This command allows you to log in to Firebase using your Google account. It’s required to deploy your site to Firebase Hosting from your local machine:
```
firebase login
```

4. Construye una versión optimizada y lista para producción de tu sitio Docusaurus. El resultado se guarda en la carpeta ``build/``, que será la que Firebase publique
```.
npm run build
```

5. Start the Firebase setup in your project. It will guide you step by step to link your site with a Firebase project and prepare the deployment environment:
```
firebase init
```

6. This command deploys your site to Firebase Hosting. It takes the content from the configured folder (by default ``build/``) and publishes it to the web. Once finished, Firebase will show you the public URL where your site is available:
```
firebase deploy
```

#### Docasaurus URL
```url
https://keplerc-sharp-docs.web.app/
```
