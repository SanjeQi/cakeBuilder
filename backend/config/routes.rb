Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :cake_ingredients
      resources :ingredients
      resources :cakes
    end
  end
end

# Rails.application.routes.draw do
#   namespace :api do
#     namespace :v1 do
#       resources :cats, except: [:new, :edit]
#       resources :hobbies, except: [:new, :edit]
#     end
#   end
# end
