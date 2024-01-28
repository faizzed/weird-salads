class IngredientsController < ApplicationController

  before_action :setup_controller_data

  def setup_controller_data
    @data.merge!({
       title: "Weird Salads - Ingredients"
    })
  end

  def index
    @data.merge!({
      ingredients: Ingredient.all.map(&:serializable_hash)
    })
  end

  def list_options
    render json: {
      ingredients: Ingredient.all.map(&:serializable_hash)
    }
  end

  def create
    ingredient = Ingredient.create!(name: params[:name], quantity: params[:quantity], price: params[:price])
    render json: ingredient
  rescue StandardError
    render json: { error: "Something went wrong!" }, status: 422
  end

  def update
    ingredient = Ingredient.find(params[:id])
    ingredient.update!(name: params[:name], quantity: params[:quantity], price: params[:price])
    render json: ingredient
  rescue StandardError
    render json: { error: "Something went wrong!" }, status: 422
  end

end
