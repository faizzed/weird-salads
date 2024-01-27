Rails.application.routes.draw do
  root "salads#index"

  resources :salads, only: [:index, :create]
end
