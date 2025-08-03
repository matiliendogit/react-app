import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/jsx-runtime.js"; // Para React 17+ JSX transform
import eslintConfigPrettier from "eslint-config-prettier"; // Para evitar conflictos con Prettier si lo usas
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginStandard from "eslint-plugin-standard"; // Nuevo plugin para Standard

export default [
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"], // Archivos a lintar
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true // Habilita el soporte JSX
        },
        ecmaVersion: "latest", // La última versión de ECMAScript
        sourceType: "module" // Módulos ES
      },
      // Define los entornos globales
      globals: {
        ...globals.browser, // Variables globales del navegador (window, document, etc.)
        ...globals.node // Variables globales de Node.js (process, module, require)
      }
    },
  },
  pluginJs.configs.recommended, // Reglas recomendadas de ESLint
  {
    // Configuración específica de eslint-plugin-react
    plugins: {
      react: eslintPluginReact,
      "react-hooks": eslintPluginReactHooks,
      standard: eslintPluginStandard // Agrega el plugin de Standard
    },
    rules: {
      // Reglas de Standard JS (puedes personalizar aquí)
      // Asegúrate de que las reglas de Standard se apliquen
      "standard/array-bracket-even-spacing": ["error", "either"],
      "standard/computed-property-even-spacing": ["error", "even"],
      "standard/no-callback-literal": ["error"],
      "standard/object-curly-even-spacing": ["error", "either"],

      // Reglas de React (ajusta según tus necesidades)
      "react/react-in-jsx-scope": "off", // Necesario para React 17+ con JSX transform
      "react/jsx-uses-react": "off", // Idem anterior
      "react/prop-types": "off", // Deshabilita prop-types si usas TypeScript o validación de runtime
      "react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }], // Ej. forzar comillas en props string

      // Reglas de React Hooks
      "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
      "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies

      // Reglas adicionales o anulaciones de Standard o ESLint si lo necesitas
      "indent": ["error", 2], // Forzar indentación de 2 espacios (Standard usa 2)
      "semi": ["error", "never"], // Forzar la ausencia de punto y coma (Standard)
      "quotes": ["error", "single"], // Forzar comillas simples (Standard)
      "no-trailing-spaces": "error", // No espacios al final de línea
      "comma-dangle": ["error", "never"], // No comas colgantes (Standard)
      "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }], // Una línea vacía máxima, no al final del archivo
      "space-before-function-paren": ["error", "always"], // Espacio antes de paréntesis de función (Standard)
    },
  },
  pluginReactConfig, // Configuración de React para JSX
  eslintConfigPrettier, // Asegura que ESLint y Prettier (si lo usas) no choquen
];
