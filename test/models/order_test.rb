require "test_helper"

class OrderTest < ActiveSupport::TestCase
  test "should not save order without salad" do
    order = Order.new
    assert_not order.save
  end

  test "should save order with salad" do
    order = Order.new
    order.salad = Salad.first
    assert order.save
  end
end
