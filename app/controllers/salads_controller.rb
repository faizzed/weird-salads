class SaladsController < ApplicationController

  before_action :setup_controller_data

  def setup_controller_data
    @data.merge!({
      title: "Weird Salads - Home!"
    })
  end

  def index
    @data.merge!({
      salads: Salad.all.map(&:serializable_hash),
      ingredients: Ingredient.all.map(&:serializable_hash)
    })
  end

  def create
    salad = Salad.create!(name: params[:name])
    render json: salad
  end
end
