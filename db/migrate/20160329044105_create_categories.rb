class CreateCategories < ActiveRecord::Migration
  def change
    create_table :categories do |t|

      t.text :cat_name

      t.timestamps null: false
    end
  end
end
