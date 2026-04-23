---
title: 如何本地化 React 应用程序？
---

## TL;DR

要本地化 React 应用程序，您通常使用像 `react-i18next` 或 `react-intl` 这样的库。首先，您为不同的语言设置翻译文件。然后，您在 React 应用程序中配置本地化库。最后，您使用提供的钩子或组件在组件中显示本地化文本。

```javascript
// 使用 react-i18next 的示例
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  return <p>{t('welcome_message')}</p>;
};
```

---

## 在 React 中设置本地化

### 选择本地化库

有几个库可用于本地化 React 应用程序，其中 `react-i18next` 和 `react-intl` 是最受欢迎的。在本指南中，我们将重点介绍 `react-i18next`。

### 安装库

首先，安装必要的软件包：

```bash
npm install i18next react-i18next
```

### 设置翻译文件

为要支持的每种语言创建 JSON 文件。例如，在 `locales` 目录中创建 `en.json` 和 `fr.json`：

```json
// locales/en.json
{
  "welcome_message": "Welcome to our application!"
}
```

```json
// locales/fr.json
{
  "welcome_message": "Bienvenue dans notre application!"
}
```

### 配置本地化库

在您的应用程序中设置 `i18next` 和 `react-i18next`。创建一个 `i18n.js` 文件用于配置：

```javascript
// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import fr from './locales/fr.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
  },
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
```

### 与您的 React 应用程序集成

使用 `I18nextProvider` 包装您的应用程序并导入 `i18n` 配置：

```javascript
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>,
  document.getElementById('root'),
);
```

### 在组件中使用翻译

使用 `useTranslation` 钩子来访问用于翻译文本的 `t` 函数：

```javascript
// MyComponent.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  return <p>{t('welcome_message')}</p>;
};

export default MyComponent;
```

### 切换语言

要切换语言，请使用 `i18n.changeLanguage` 方法：

```javascript
// LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('fr')}>Français</button>
    </div>
  );
};

export default LanguageSwitcher;
```

## 延伸阅读

- [react-i18next 文档](https://react.i18next.com/)
- [i18next 文档](https://www.i18next.com/)
- [react-intl 文档](https://formatjs.io/docs/react-intl/)
