Rails.application.routes.draw do
  root "salads#index"

  resources :salads, only: [:index, :create]
  resources :ingredients, only: [:index, :create, :update]
  resources :orders, only: [:index, :create]

  scope :api do
    post "salads", to: "salads#create"

    post "ingredients", to: "ingredients#create"
    put "ingredients/:id", to: "ingredients#update"
    get "ingredients/list", to: "ingredients#list_options"
  end
end
