<div align="center" width="150px">
  <img style="width: 350px; height: auto;" src="strapi-emailing.png" alt="Logo - Strapi emailing plugin" />
</div>
<div align="center">
  <p>A plugin for Strapi Headless CMS that provides end to end emailing feature with their moderation panel, usable for notifications, newsletter, custom email compose.</p>
</div>

### Table of Contents

1. [✨ Features](#-features)
2. [⏳ Installation](#-installation)
3. [🖐 Requirements](#-requirements)
4. [🔧 Configuration](#-configuration)
5. [👨‍💻 Contributors](#-Contributors)
6. [📝 License](###-license)

## ✨ Features

- **Compose Emails to users:** Elegant, entirely customizable and a fully extensible email sending.
- **Send Emails notfication to users:** Entirely send simple notfication to your users.
- **Emails traces:** Track the email if sent or not by your provider


## ⏳ Installation

### Manual install

(**Clone** this repo to /src/plugins/. [Learn more about how to use strapi plugins](https://strapi.io/blog/a-beginners-guide-on-how-to-use-a-strapi-plugin-in-your-project).)

```bash
cd /src/plugins/

git clone https://github.com/devwithmaya/strapi-plugin-emailing.git

yarn build 
or
npm run build
```

### Via command line (Comming soon)

(Use **yarn** to install this plugin within your Strapi project (recommended). [Install yarn with these docs](https://yarnpkg.com/lang/en/docs/install/).)

```bash
yarn add strapi-plugin-comments@latest
```

After successful installation you've to re-build your Strapi instance. To archive that simply use:

```bash
yarn build
yarn develop
```

or just run Strapi in the development mode with `--watch-admin` option:

```bash
yarn develop --watch-admin
```

## 🔧 Configuration

You can now enable and config the plugin by adding the following in ./config/plugins.ts
─────────────────────────────────────
```
export default {
  // ...
  'emailing': {
    enabled: true,
    resolve: './src/plugins/emailing'
  },
  // ...
}
```
─────────────────────────────────────

## 👨‍💻 Contributors

Thank you for considering contributing to this plugin The Contributors can be found below:

[Othmane N. | Senior Developer](https://github.com/iietmoon)


## 📝 License

[MIT License](LICENSE.md) Copyright (c) [MAYA AGENCY](https://maya-agency.ma/) &amp; [Strapi Solutions](https://strapi.io/).