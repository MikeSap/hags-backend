class Admin < ApplicationRecord

  has_many :sandwiches
  has_many :orders, through: :sandwiches

end
