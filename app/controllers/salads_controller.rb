class SaladsController < ApplicationController
  def index
    @props = {
      title: "Weird Salads - Home",
      appName: "Weird Salads",
    }
  end

  def create
    salad = Salad.create!(name: params[:name])
    render json: salad
  end
end
