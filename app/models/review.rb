class Review < ApplicationRecord
  validates :name, presence: true
  validates :email, presence: true
  validates :comment, presence: true
  validates :stars, presence: true

  # def average_rating
  #   average = reviews.sum(:stars).round(2)
  # end

end
