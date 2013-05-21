class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.string :username
      t.integer :win
      t.integer :loss
      # t.string :password_hash
    end

  end

  # add_index(:players, [:username], :unique => true)

    
  
end
