require "test_helper"

class IngredientTest < ActiveSupport::TestCase
  test "should not save ingredient without name" do
    ingredient = Ingredient.new
    assert_not ingredient.save
  end

  test "should not save ingredient without quantity" do
    ingredient = Ingredient.new
    ingredient.name = "Test Ingredient"
    assert_not ingredient.save
  end

  test "should not save ingredient without price" do
    ingredient = Ingredient.new
    ingredient.name = "Test Ingredient"
    ingredient.quantity = 1
    assert_not ingredient.save
  end

  test "should save ingredient with name, quantity and price" do
    ingredient = Ingredient.new
    ingredient.name = "Test Ingredient"
    ingredient.quantity = 1
    ingredient.price = 1
    assert ingredient.save
  end
end
