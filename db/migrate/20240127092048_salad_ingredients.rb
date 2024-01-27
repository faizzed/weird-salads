class SaladIngredients < ActiveRecord::Migration[7.0]
  def change
    create_table :salad_ingredients do |t|
      t.belongs_to :salad
      t.belongs_to :ingredient
      t.float :quantity

      t.index [:salad_id, :ingredient_id], unique: true
      t.foreign_key :salads
      t.foreign_key :ingredients
      t.timestamps
    end
  end
end
