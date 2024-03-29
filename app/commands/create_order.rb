class CreateOrder

  def initialize(salad:)
    @salad = salad
  end

  def execute
    @salad.salad_ingredients.each do |salad_ingredient|
      ingredient = salad_ingredient.ingredient
      if ingredient.quantity < salad_ingredient.quantity
        raise NotEnoughIngredientsException
      end
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