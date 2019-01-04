class CakeSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :ingredients
  class IngredientSerializer < ActiveModel::Serializer
    attributes :name, :part
  end

end
