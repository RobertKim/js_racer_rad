get '/' do
  @player1 = Player.where('id = ?', session[:player1_id])
  @player2 = Player.where('id = ?', session[:player2_id])
  erb :index
end

post '/signup' do
  @player1 = Player.create(username: params[:username1])
  session[:player1_id] = @player1.id

  @player2 = Player.create(username: params[:username2])
  session[:player2_id] = @player2.id

  @game = Game.create 
  @game.players << @player1
  @game.players << @player2
  @game.save

  content_type :json

  {player1: @player1.username, player2: @player2.username, game: @game}.to_json
  
  # redirect '/game'
end

get '/game' do
	@player1 = Player.find(session[:player1_id])
	@player2 = Player.find(session[:player2_id])
  @game = Game.find(@player1.games.last.id)

	erb :index

end


get '/endgame' do
  session.clear

  redirect '/'
end
