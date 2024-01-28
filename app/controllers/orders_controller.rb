class OrdersController < ApplicationController

    before_action :setup_controller_data

    def setup_controller_data
      @data.merge!({
        title: "Weird Salads - Orders"
      })
    end

    def index
      @data.merge!({
        orders: Order.all.map(&:serializable_hash)
      })
    end

    def create
      CreateOrder.new(salad: Salad.find(params[:salad][:id])).execute

      render json: { message: "Order created" }
    rescue NotEnoughIngredientsException => e
      render json: { error: e.message }, status: 422
    rescue StandardError
      render json: { error: "Something went wrong!" }, status: 422
    end
end
