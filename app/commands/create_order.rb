class CreateOrder

  def initialize(salad:)
    @salad = salad
  end

  def execute
    # how many ingredients salad require?
    salad_ingredients = @salad.salad_ingredients.sum(:quantity)
    # how many are in stock?
    ingredients_in_stock = @salad.ingredients.sum(:quantity)

    if ingredients_in_stock < salad_ingredients
      raise "Not enough ingredients"
    end

    @order = Order.create!(salad: @salad)

    # reduce stock
    @salad.salad_ingredients.each do |si|
      si.ingredient.update!(quantity: si.ingredient.quantity - si.quantity)
    end
  end
end