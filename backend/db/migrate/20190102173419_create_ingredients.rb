class CreateIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :ingredients do |t|
      t.string :name
      t.string :part
      t.string :imgUrl
      t.integer :price
      t.timestamps
    end
  end
end
