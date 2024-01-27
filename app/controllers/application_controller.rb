class ApplicationController < ActionController::Base
  before_action :setup_app_data

  def setup_app_data
    @data = {
      appName: "Weird Salads",
    }
  end
end
