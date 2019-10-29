class Review < ApplicationRecord
  validates :name, presence: true
  validates :email, presence: true
  validates :comment, presence: true
  validates :stars, presence: true
end
