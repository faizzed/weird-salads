class SaladIngredients < ApplicationRecord
  belongs_to :salad
  belongs_to :ingredient
end
