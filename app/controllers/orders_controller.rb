class OrdersController < ApplicationController
  skip_before_action :require_login, only: [:create]

end
