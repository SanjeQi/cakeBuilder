module Api
  module V1
    class IngredientsController < ApplicationController

      def index
        # render json: Ingredient.includes(:cakes), include:
        #   ['cakes']
        render json: Ingredient.all.to_json(only: [:id, :name, :part, :imgUrl, :price],
                            include: [cakes: { only: [:name]}])

      end
    end
  end
end
