# React + TypeScript + Vite

Ce modèle fournit une configuration minimale pour faire fonctionner React dans Vite avec HMR et quelques règles ESLint.

Actuellement, deux plugins officiels sont disponibles :

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) utilise [Babel](https://babeljs.io/) (ou [oxc](https://oxc.rs) lorsqu'utilisé dans [rolldown-vite](https://vite.dev/guide/rolldown)) pour le Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) utilise [SWC](https://swc.rs/) pour le Fast Refresh

## Compilateur React

Le Compilateur React n'est pas activé dans ce modèle en raison de son impact sur les performances de développement et de construction. Pour l'ajouter, consultez [cette documentation](https://react.dev/learn/react-compiler/installation).

## Extension de la configuration ESLint

Si vous développez une application de production, nous recommandons de mettre à jour la configuration pour activer les règles de lint conscientes des types :

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Autres configurations...

      // Supprimer tseslint.configs.recommended et remplacer par ceci
      tseslint.configs.recommendedTypeChecked,
      // Alternativement, utiliser ceci pour des règles plus strictes
      tseslint.configs.strictTypeChecked,
      // Optionnellement, ajouter ceci pour des règles stylistiques
      tseslint.configs.stylisticTypeChecked,

      // Autres configurations...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // autres options...
    },
  },
]);
```

Vous pouvez également installer [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) et [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) pour des règles de lint spécifiques à React :

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Autres configurations
      // Activer les règles de lint pour React
      reactX.configs["recommended-typescript"],
      // Activer les règles de lint pour React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // autres options...
    },
  },
]);
```
