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