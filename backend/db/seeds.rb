# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
CakeIngredient.destroy_all
Cake.destroy_all
Ingredient.destroy_all


c1 = Cake.create(name: "Cake One")
c2 = Cake.create(name: "Cake Two")

# Ingredients (extra toppings)
e1 = Ingredient.create(name: "Chocolates", part: "Extra Topping", imgUrl: "https://www.tasteofhome.com/wp-content/uploads/2017/10/Banana-Cake-with-Chocolate-Frosting_exps40685_TH2237243A11_01_9b_RMS.jpg", price: rand(1..50))
e2 = Ingredient.create(name: "Strawberries", part: "Extra Topping", imgUrl: "https://www.chowstatic.com/assets/2014/09/30430_strawberry_cheesecake_3000.jpg", price: rand(1..50))
e3 = Ingredient.create(name: "Sprinkles", part: "Extra Topping", imgUrl: "https://previews.123rf.com/images/zolomos9/zolomos91507/zolomos9150700130/43132182-rainbow-sprinkles-for-topping-ice-cream-and-cake.jpg", price: rand(1..50))
e4 = Ingredient.create(name: "Marshmallows", part: "Extra Topping", imgUrl: "http://livforcake.com/wp-content/uploads/2015/10/smores_cake-10.jpg", price: rand(1..50))
e5 = Ingredient.create(name: "Blackberries", part: "Extra Topping", imgUrl: "https://sifu.unileversolutions.com/image/en-GB/recipe-topvisual/2/1260-709/summer-berry-naked-cake-50229797.jpg", price: rand(1..50))

i1 = Ingredient.create(name: "Red", part: "Icing", imgUrl: "http://cakedecorgroup.com/wp-content/uploads/2013/12/IMG_7117.jpg", price: rand(1..50))
i2 = Ingredient.create(name: "White", part: "Icing", imgUrl:"http://cakedecorgroup.com/wp-content/uploads/2013/10/IMG_7072.jpg", price: rand(1..50))
i3 = Ingredient.create(name: "Purple", part: "Icing", imgUrl:"http://cakedecorgroup.com/wp-content/uploads/2013/10/IMG_7075.jpg", price: rand(1..50))
i4= Ingredient.create(name: "Orange", part: "Icing", imgUrl:"http://cakedecorgroup.com/wp-content/uploads/2013/12/IMG_7078.jpg", price: rand(1..50))
i5 = Ingredient.create(name: "Black", part: "Icing", imgUrl:"http://cakedecorgroup.com/wp-content/uploads/2013/12/IMG_7067.jpg", price: rand(1..50))

b1 = Ingredient.create(name: "Sponge", part: "Base", imgUrl: "https://www.cjnews.com/wp-content/uploads/2016/04/maxresdefault-51.jpg", price: rand(1..50))
b2 = Ingredient.create(name: "Chocolate", part: "Base", imgUrl: "https://sweets.seriouseats.com/images/2013/07/20130716-259586-BonBonerie-Opera-Cream-Cake-JRaposo-2.jpg", price: rand(1..50))
b3 = Ingredient.create(name: "Digestive Biscuits", part: "Base", imgUrl: "https://www.elmundoeats.com/wp-content/uploads/2017/08/Mango-Cheesecake-Biscuit-Base.jpg", price: rand(1..50))
b4 = Ingredient.create(name: "Salted Chocolate", part: "Base", imgUrl: "https://www.nigella.com/assets/uploads/recipes/public-thumbnail/salted-chocolate-tart-56ce263312dc0.jpg", price: rand(1..50))
b5 = Ingredient.create(name: "Fruit Base", part: "Base", imgUrl: "http://hungryrabbitnyc.com/wp-content/uploads/2012/12/cake_fruit_main.jpg", price: rand(1..50))



# CHange ALLL THIS     SS
CakeIngredient.create(cake: c1, ingredient: b5)
CakeIngredient.create(cake: c2, ingredient: e1)
CakeIngredient.create(cake: c2, ingredient: i1)
CakeIngredient.create(cake: c2, ingredient: b4)
