class CreateCakes < ActiveRecord::Migration[5.2]
  def change
    create_table :cakes do |t|
      t.string :name
      t.boolean :purchased, default: false
      t.string :imgUrl

      t.timestamps
    end
  end
end
