class Sandwich < ApplicationRecord

  has_many :orders

  has_one_attached :photo

end
