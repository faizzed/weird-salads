class Ingredient < ApplicationRecord
  include ActiveModel::Serialization

  validates :quantity, presence: true, numericality: { greater_than: 0 }
  validates :price, presence: true, numericality: { greater_than: 0 }
end
