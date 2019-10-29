# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'destroying all reviews'

Review.destroy_all

puts 'creating new reviews'

Review.create(name: 'Andrew', email: 'andrew@gmail.com', comment: "Best coffee I've ever had", stars: 5)
Review.create(name: 'Bill', email: 'bill@gmail.com', comment: 'Great coffee, fresh food, good vibes', stars: 4)
Review.create(name: 'Cassie', email: 'Cassie@gmail.com', comment: 'Awesome', stars: 3)

puts 'created new reviews'
