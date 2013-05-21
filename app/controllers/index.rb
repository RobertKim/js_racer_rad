get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/signup' do
  @player1 = Player.create(username: params[:username1])
  @player2 = Player.create(username: params[:username2])

  session[:player1_id] = @player1.id
  session[:player2_id] = @player2.id

  redirect '/'
end

# get '/player/profile' do
#   current_player
#   erb :player_profile
# end

get '/game' do

end


get '/endgame' do
  session.clear

  erb :index
end
