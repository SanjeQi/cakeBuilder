module Api
  module V1
    class CakesController < ApplicationController

      def index
        # render json: Cake.includes(:ingredients), include: ['ingredients']
        # render json: Cake.all
        # render json: Cake.all, serializer: CakeSerializer
        render json: Cake.all.to_json(only: [:name, :imgUrl],
                          include: [ingredients: { only: [:name, :part, :imgUrl]}])
      end

      def create

        @cake = Cake.create(name: params['name'])
        @cake.ingredient_ids = params['ingredient_ids']
        render json: @cake.to_json
      end

    end
  end
end
