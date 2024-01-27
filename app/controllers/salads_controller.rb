class SaladsController < ApplicationController
  def index
    @props = {
      title: "Weird Salads - Home",
      appName: "Weird Salads",
    }
  end
end
