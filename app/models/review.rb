class Review < ApplicationRecord
  validates :name, presence: true
  validates :comment, presence: true
end
