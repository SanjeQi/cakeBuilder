
module Api
  module V1
    class CakeIngredientsController < ApplicationController

      def index

        render json: CakeIngredient.all.to_json(only: [:id, :cake_id, :ingredient_id])

      end

    end
  end
end
