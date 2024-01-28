class NotEnoughIngredientsException < StandardError
  def initialize(msg = 'Not enough ingredients')
    super
  end
end