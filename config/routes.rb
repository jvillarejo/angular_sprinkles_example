Rails.application.routes.draw do
  root 'todos#index'

  resources :todos do
    collection do 
      delete :destroy_many
      put :all_completed
    end
  end

end
