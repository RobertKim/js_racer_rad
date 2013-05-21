class AddIndexToPlayers < ActiveRecord::Migration
  def change
    add_index(:players, [:username], :unique => true)
  end
end
