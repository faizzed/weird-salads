require "test_helper"

class SaladsControllerTest < ActionDispatch::IntegrationTest

  setup do
    Ingredient.create(name: "Test Ingredient", quantity: 1, price: 1)
  end

  teardown do
    SaladIngredients.destroy_all
    Salad.destroy_all
    Ingredient.destroy_all
  end

  test "should get index" do
    get salads_url
    assert_response :success
  end

  test "should create salad" do
    ingredient = Ingredient.first
    post salads_url, params: { name: "Test Salad", ingredients: [{ id: ingredient.id, quantity: 2 }] }
    assert_response :success
  end

end
