class CreateOrder

  def initialize(salad:)
    @salad = salad
  end

  def execute
    salad_ingredients = @salad.salad_ingredients.sum(:quantity)
    ingredients_in_stock = @salad.ingredients.sum(:quantity)

    if ingredients_in_stock < salad_ingredients
      raise "Not enough ingredients"
    end

    ActiveRecord::Base.transaction do

      @order = Order.create!(salad: @salad, price: @salad.price)

      # @salad.salad_ingredients.each { |si| si.ingredient.update!(quantity: si.ingredient.quantity - si.quantity) }
    end
  end
end