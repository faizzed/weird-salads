require "test_helper"

class IngredientsControllerTest < ActionDispatch::IntegrationTest

  setup do
    Ingredient.create(name: "Test Ingredient", quantity: 1, price: 1)
  end

  teardown do
    Ingredient.destroy_all
  end

  test "should get index" do
    get ingredients_url
    assert_response :success
  end

  test "should create ingredient" do
    post ingredients_url, params: { name: "Test Ingredient", quantity: 1, price: 1 }
    assert_response :success
  end

  test "should update ingredient" do
    ingredient = Ingredient.first
    patch ingredient_url(ingredient), params: { name: "Test Ingredient", quantity: 2, price: 2 }
    assert_response :success
  end

  test "should list options" do
    get "/api/ingredients/list"
    assert_response :success
  end

end
