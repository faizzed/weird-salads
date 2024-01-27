class Salad < ApplicationRecord

  include ActiveModel::Serialization

  has_many :salad_ingredients, class_name: "SaladIngredients", foreign_key: "salad_id"
  has_many :ingredients, through: :salad_ingredients

  validates :name, presence: true

  def price
    ingredients.sum(:price)
  end

  def serializable_hash(options = nil)
    super(options).merge({
      price: price,
      ingredients: ingredients.map(&:serializable_hash)
    })
  end
end
