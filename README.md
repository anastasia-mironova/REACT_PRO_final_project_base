# Структура проекта (Feature-Sliced Design)
```
├───src
│ ├───1-app
│ │ ├───router
│ │ │ └───config
│ │ ├───store
│ │ └───styles
│ │
│ ├───2-pages
│ │ ├───CartPage
│ │ │ └───ui
│ │ ├───FavoritesPage
│ │ │ └───ui
│ │ ├───HomePage
│ │ │ └───ui
│ │ ├───NotFoundPage
│ │ │ └───ui
│ │ ├───ProductPage
│ │ │ └───ui
│ │ ├───ProfilePage
│ │ │ └───ui
│ │ ├───SignInPage
│ │ │ └───ui
│ │ └───SignUpPage
│ │ └───ui
│ │
│ ├───3-widgets
│ │ ├───Card
│ │ │ └───ui
│ │ │ └───Price
│ │ │ └───ui
│ │ ├───CardList
│ │ │ └───ui
│ │ ├───FavoriteList
│ │ │ ├───model
│ │ │ └───ui
│ │ ├───Footer
│ │ │ └───ui
│ │ ├───Header
│ │ │ └───ui
│ │ ├───ProductDetails
│ │ │ ├───model
│ │ │ └───ui
│ │ ├───ReviewList
│ │ │ └───ui
│ │ │ └───ReviewForm
│ │ ├───SignInForm
│ │ │ ├───ui
│ │ │ └───utils
│ │ └───SignUpForm
│ │ ├───ui
│ │ └───utils
│ │
│ ├───4-features
│ │ ├───cart
│ │ │ ├───CartAmount
│ │ │ │ └───ui
│ │ │ └───CartItem
│ │ │ └───ui
│ │ ├───CartCounter
│ │ │ ├───hooks
│ │ │ └───ui
│ │ ├───EditProfileForm
│ │ │ └───ui
│ │ ├───LikeButton
│ │ │ └───ui
│ │ ├───LoadMore
│ │ │ ├───model
│ │ │ └───ui
│ │ ├───ProductCard
│ │ │ └───ui
│ │ │ └───ProductCartCounter
│ │ │ ├───hooks
│ │ │ └───ui
│ │ ├───ProductDelivery
│ │ │ └───ui
│ │ ├───ProductList
│ │ │ └───ui
│ │ ├───ProductSpecifications
│ │ │ └───ui
│ │ ├───Search
│ │ │ ├───model
│ │ │ └───ui
│ │ └───Sort
│ │ ├───model
│ │ └───ui
│ │
│ ├───5-entities
│ │ ├───auth
│ │ │ └───model
│ │ ├───cart
│ │ │ ├───model
│ │ │ └───ui
│ │ │ └───CartList
│ │ │ └───ui
│ │ └───product
│ │ └───model
│ │
│ └───6-shared
│ ├───assets
│ │ ├───icons
│ │ ├───images
│ │ └───readmeImages
│ ├───lib
│ │ ├───HOCs
│ │ ├───hooks
│ │ └───utils
│ ├───store
│ ├───types
│ └───ui
│ ├───ButtonBack
│ │ └───ui
│ ├───Logo
│ │ ├───assets
│ │ └───ui
│ ├───LogoutDialog
│ │ ├───hooks
│ │ ├───model
│ │ └───ui
│ ├───Rating
│ │ └───ui
│ └───Spinner
│ └───ui
│
└───webpack
```

---

## ✅ Выполненные задачи

### 1. 🏛️ Архитектурные улучшения (FSD)

- Часто используемые компоненты вынесены в `shared/ui`
- Структура приведена в соответствие с принципами FSD
- Настроены алиасы для папок
- Убраны лишние проп-пробросы

---

### 2. ⚡ Оптимизация производительности

- Часто обновляемые компоненты обернуты в `React.memo`
- Применены `useCallback` и `useMemo` там, где это требовалось
- **Результат:** `Header`, `Sort`, `Search` и другие компоненты больше не перерисовываются, время рендера уменьшилось

#### Сортировка товаров

| До оптимизации | После оптимизации |
|----------------|-------------------|
| ![noOptimizationCardList.gif](src%2F6-shared%2Fassets%2FreadmeImages%2FnoOptimizationCardList.gif) | ![OptimizationCardList.gif](src%2F6-shared%2Fassets%2FreadmeImages%2FOptimizationCardList.gif) |

#### Добавление товара в избранное

| До оптимизации | После оптимизации |
|----------------|-------------------|
| ![noOptimizationSort.gif](src%2F6-shared%2Fassets%2FreadmeImages%2FnoOptimizationSort.gif) | ![optimizationSort.gif](src%2F6-shared%2Fassets%2FreadmeImages%2FoptimizationSort.gif) |

---

### 3. 🪟 Модальное окно через React Portal

Реализовано модальное окно подтверждения выхода из магазина (`LogoutDialog`) с рендером в `#modal-root` через `React.Portal`

**Функционал:**
- Закрытие по крестику
- Закрытие по клику на overlay
- Закрытие по клавише ESC

![logoutRef.png](src%2F6-shared%2Fassets%2FreadmeImages%2FlogoutRef.png)

---

### 4. 🔢 Счётчик рендеров главной страницы

На главную страницу добавлен счётчик рендеров, выполненный через `useRef`

![renderCount.png](src%2F6-shared%2Fassets%2FreadmeImages%2FrenderCount.png)

---

### 5. 🎯 Автофокус на поля ввода

- Добавлен автофокус на поле ввода email
- Добавлен автофокус на кнопку "Отмена" при выходе из магазина

| Страница входа | Модальное окно |
|----------------|----------------|
| ![signinRef.png](src%2F6-shared%2Fassets%2FreadmeImages%2FsigninRef.png) | ![logoutRef.png](src%2F6-shared%2Fassets%2FreadmeImages%2FlogoutRef.png) |

---

### 6. Оптимистичные обновления

Реализовано добавление товаров в избранное с помощью `useOptimistic`

---

### 7. 📦 Сравнение сборщиков

Сравнение времени сборки Vite и Webpack

| Vite | Webpack |
|------|---------|
| ![vite.png](src%2F6-shared%2Fassets%2FreadmeImages%2Fvite.png) | ![webpack.png](src%2F6-shared%2Fassets%2FreadmeImages%2Fwebpack.png) |
