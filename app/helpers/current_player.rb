helpers do

  def current_player
    if session[:player_id]
      @current_player = Player.find(session[:player_id])
    end
    @current_player
  end

end
