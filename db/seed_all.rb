tables_empty = Salad.count == 0 && Ingredient.count == 0 && Order.count == 0

unless tables_empty
  puts "Database already seeded"
  exit
end

1.times do
  Salad.create(name: Faker::Food.dish)
end

puts "Created salads"

5.times do
  Ingredient.create(name: Faker::Food.ingredient, quantity: Faker::Number.decimal(l_digits: 2), price: Faker::Number.decimal(l_digits: 2))
end

puts "Created ingredients"

Salad.all.each do |salad|
  Ingredient.all.sample(5).each do |ingredient|
    salad.ingredients << ingredient
    salad.salad_ingredients.find_by(ingredient: ingredient).update(quantity: Faker::Number.decimal(l_digits: 2))
  end
end

puts "Added ingredients to salads"

1.times do
  Order.create(salad: Salad.all.sample, price: Faker::Number.decimal(l_digits: 2))
end

puts "Created orders"