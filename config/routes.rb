Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root 'homes#index'
  # root 'homes#new'
  get  'homes/typing'
  resources :homes
end
