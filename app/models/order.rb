class Order < ApplicationRecord
  belongs_to :salad

  def ingredients
    salad.ingredients
  end
end
