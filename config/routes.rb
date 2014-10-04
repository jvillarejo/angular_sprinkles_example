Rails.application.routes.draw do
  root 'todos#index'

  resources :todos do
    collection do 
      delete :destroy_completed
      put :all_completed
    end
  end

end
