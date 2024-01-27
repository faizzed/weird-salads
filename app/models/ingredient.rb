class Ingredient < ApplicationRecord
  include ActiveModel::Serialization

  validates :name, presence: true, uniqueness: true
  validates :quantity, presence: true, numericality: { greater_than: 0 }
  validates :price, presence: true, numericality: { greater_than: 0 }
end
