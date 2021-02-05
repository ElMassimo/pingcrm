Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  devise_for :users, skip: [ :sessions, :passwords, :registrations ]
  as :user do
    get 'login', to: 'users/sessions#new', as: :new_user_session, export: :true
    post 'login', to: 'users/sessions#create', as: :user_session, export: :true
    match 'logout', to: 'users/sessions#destroy', as: :destroy_user_session, via: Devise.mappings[:user].sign_out_via, export: :true
  end

  resources :reports, only: [ :index ], export: :true
  resources :users, except: [ :show ], export: :true do
    member do
      put 'restore'
    end
  end
  resources :organizations, except: [ :show, :new ], export: :true do
    member do
      put 'restore'
    end
  end
  resources :contacts, except: [ :update, :show, :destroy ], export: :true do
    member do
      delete :destroy, export: true
      patch :update, export: true
      put :restore, export: true
    end
  end

  get '/error-500' => 'dashboard#example_exception', export: :true

  root 'dashboard#index', export: :true
end
