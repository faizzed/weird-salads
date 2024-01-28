require "test_helper"

class SaladTest < ActiveSupport::TestCase
  test "should not save salad without name" do
    salad = Salad.new
    assert_not salad.save
  end

  test "should save salad with name" do
    salad = Salad.new
    salad.name = "Test Salad"
    assert salad.save
  end
end
