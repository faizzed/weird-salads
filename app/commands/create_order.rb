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

      @salad.salad_ingredients.each do |salad_ingredient|
        ingredient = salad_ingredient.ingredient
        ingredient.update!(quantity: ingredient.quantity - salad_ingredient.quantity)
      end
    end
  end
end