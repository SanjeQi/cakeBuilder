class CakeIngredientSerializer < ActiveModel::Serializer
  attributes :id

  has_one :cake
  has_one :ingredient
end
