Rails.application.routes.draw do
  root to: 'pages#home'
  get 'contact', to: 'pages#contact'
  get 'story', to: 'pages#story'
  get 'team', to: 'pages#team'
  get 'menu', to: 'pages#menu'
  get 'responsibility', to: 'pages#responsibility'
  # resources :reviews, only: [:index, :new, :create]
  # resources :reviews, only: [:index]
  resources :reviews
  # get 'review', to: 'reviews#index'
end
