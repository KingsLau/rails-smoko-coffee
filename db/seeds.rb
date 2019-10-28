# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "destroying all reviews"

Review.destroy_all

puts "creating new reviews"

Review.create(name: "User 1", comment: "Review 1")
Review.create(name: "User 2", comment: "Review 2")
Review.create(name: "User 3", comment: "Review 3")
