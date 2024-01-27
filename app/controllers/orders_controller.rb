class OrdersController < ApplicationController

    before_action :setup_controller_data

    def setup_controller_data
      @data.merge!({
        title: "Weird Salads - Orders"
      })
    end

    def index
      @data.merge!({
        orders: Order.all
      })
    end

    def create
      CreateOrder.new(salad: Salad.find(params[:salad_id])).execute!

      render json: { message: "Order created" }
    rescue
      render json: { error: "Not enough ingredients" }, status: 422
    end
end
