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
    if params[:name].blank? || params[:ingredients].blank?
      render json: { error: "Name and ingredients cannot be blank" }, status: 422
      return
    end

    ActiveRecord::Base.transaction do
      salad = Salad.create!(name: params[:name])
      params[:ingredients].each do |ingredient|
        salad.salad_ingredients.create!(ingredient_id: ingredient[:id], quantity: ingredient[:quantity])
      end
    end

    render json: { success: true }, status: 200
  rescue StandardError
    render json: { error: "Something went wrong!" }, status: 422
  end

end
