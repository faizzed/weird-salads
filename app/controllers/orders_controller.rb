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
      # todo: create order
      render json: {}
    end
end
