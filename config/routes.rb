Rails.application.routes.draw do
  root "salads#index"

  resources :salads, only: [:index, :create]
  resources :ingredients, only: [:index, :create, :update]
  resources :orders, only: [:index, :create]

  scope :api do
    get "ingredients", to: "ingredients#list_ingredients"
    post "salads", to: "salads#create"
  end
end
