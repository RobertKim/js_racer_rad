get '/' do
  @player1 = Player.where('id = ?', session[:player1_id].to_a[0])
  @player2 = Player.where('id = ?', session[:player2_id].to_a[0])
  erb :index
end

post '/signup' do
  @player1 = Player.create(username: params[:username1])

  @player2 = Player.create(username: params[:username2])


  session[:player1_id] = @player1.id

  session[:player2_id] = @player2.id


  redirect '/game'
end

get '/game' do
	@player1 = Player.find(session[:player1_id])
	@player2 = Player.find(session[:player2_id])
	@game = Game.create(player1: @player1.username, player2: @player2.username)

	erb :game

end


get '/endgame' do
  session.clear

  redirect '/'
end
