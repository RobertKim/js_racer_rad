class Player < ActiveRecord::Base
  # include BCrypt

  has_and_belongs_to_many :games

  validates :username, :uniqueness => true
  validates :username, :presence => true
  # validates :password_hash, :presence => true 



  # def password
  #   @password ||= Password.new(password_hash)
  # end

  # def password=(new_password)
  #   @password = Password.create(new_password)
  #   self.password_hash = @password
  # end

  
end
