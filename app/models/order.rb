class Order < ApplicationRecord
  include ActiveModel::Serialization

  belongs_to :salad

  def ingredients
    salad.ingredients
  end

  def serializable_hash(options = nil)
    super(options).merge({
       salad: salad.serializable_hash
     })
  end
end
