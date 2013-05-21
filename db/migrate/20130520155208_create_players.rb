class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.string :username1
      t.string :username2
      t.integer :win
      t.integer :loss
      # t.string :password_hash
    end

  end

    
  
end
