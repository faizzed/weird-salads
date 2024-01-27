class Salad < ApplicationRecord
  has_many :salad_ingredients, class_name: "SaladIngredients", foreign_key: "salad_id"
  has_many :ingredients, through: :salad_ingredients
end
