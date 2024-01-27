tables_empty = Salad.count == 0 && Ingredient.count == 0 && Order.count == 0

unless tables_empty
  puts "Database already seeded"
  exit
end

10.times do
  Salad.create(name: Faker::Food.dish)
end

puts "Created salads"

100.times do
  Ingredient.create(name: Faker::Food.ingredient, quantity: Faker::Number.decimal(l_digits: 2), price: Faker::Number.decimal(l_digits: 2))
end

puts "Created ingredients"


# for every salad add the first 10 ingredients with random quantities
Salad.all.each do |salad|
  Ingredient.all.sample(10).each do |ingredient|
    salad.ingredients << ingredient
    salad.salad_ingredients.find_by(ingredient: ingredient).update(quantity: Faker::Number.decimal(l_digits: 2))
  end
end

puts "Added ingredients to salads"

# put 10 orders for random salads
10.times do
  Order.create(salad: Salad.all.sample, price: Faker::Number.decimal(l_digits: 2))
end

puts "Created orders"