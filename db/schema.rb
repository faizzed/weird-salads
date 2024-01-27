# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2024_01_27_094821) do
  create_table "ingredients", charset: "utf8mb4", force: :cascade do |t|
    t.string "name"
    t.float "quantity"
    t.float "price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "orders", charset: "utf8mb4", force: :cascade do |t|
    t.bigint "salad_id"
    t.float "price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["salad_id"], name: "index_orders_on_salad_id"
  end

  create_table "salad_ingredients", charset: "utf8mb4", force: :cascade do |t|
    t.bigint "salad_id"
    t.bigint "ingredient_id"
    t.float "quantity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["ingredient_id"], name: "index_salad_ingredients_on_ingredient_id"
    t.index ["salad_id", "ingredient_id"], name: "index_salad_ingredients_on_salad_id_and_ingredient_id", unique: true
    t.index ["salad_id"], name: "index_salad_ingredients_on_salad_id"
  end

  create_table "salads", charset: "utf8mb4", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "salad_ingredients", "ingredients"
  add_foreign_key "salad_ingredients", "salads"
end
