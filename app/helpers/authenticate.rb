helpers do

  def create_player(username, password)
    @player = Player.find_by_username(username)
    if @player
      authenticate(username, password)
    else
      @player = Player.new(username: username)
      @player.password = password
      @player.save!
      session[:player_id] = @player.id
       if @player.valid?
        redirect '/'
       else
        redirect '/'
      end
    end
  end

  def authenticate(username, password)
    if @player.password == password
      session[:player_id] = @player.id
      erb :player_profile
    else
      redirect '/'
    end
  end
end
