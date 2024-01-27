require "test_helper"

class OrdersControllerTest < ActionDispatch::IntegrationTest

  private def clear_db
    Order.destroy_all
    SaladIngredients.destroy_all
    Salad.destroy_all
    Ingredient.destroy_all
  end

  setup do
    clear_db

    ingredient = Ingredient.create(name: "Test Ingredient", quantity: 1000, price: 1)
    salad = Salad.create(name: "Test Salad")
    salad.salad_ingredients.create!(ingredient_id: ingredient.id, quantity: 10)
    salad.save!

    CreateOrder.new(salad: salad).execute
  end

  test "should get index" do
    get orders_url
    assert_response :success
  end

  test "should create order" do
    salad = Salad.all.sample.serializable_hash
    post "/api/orders", params: { salad: salad }
    assert_response :success
  end

end
