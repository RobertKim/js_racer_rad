class Game < ActiveRecord::Base
  has_and_belongs_to_many :players

  validates :player1, :player2, :presence => true
  
end
