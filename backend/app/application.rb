require 'pry'
require 'json'

class Application

  def call(env)
    response = Rack::Response.new
    request = Rack::Request.new(env)

    if request.path == '/waterfalls' && request.get?
      return [
        200,
        { 'Content-Type' => 'application/json' },
        [Waterfall.all.to_json]
      ]
    elsif request.path.match(/waterfalls/) && request.get?
      id = request.path.split('/')[2]
      waterfall = Waterfall.find(id)
      return [
        200,
        { 'Content-Type' => 'application/json' },
        [waterfall.to_json]
      ]
    elsif request.path == '/waterfalls' && request.post?
      data = JSON.parse request.body.read
      new_waterfall = Waterfall.create data
      return [
        201,
        { 'Content-Type' => 'application/json' },
        [new_waterfall.to_json]
      ]
    elsif request.path.match(/waterfalls/) && request.patch?
      id = request.path.split('/')[2]
      waterfall = Waterfall.find(id)

      data = JSON.parse request.body.read
      waterfall.update(data)

      return [
        200,
        { 'Content-Type' => 'application/json' },
        [waterfall.to_json]
      ]
    elsif request.path.match(/waterfalls/) && request.delete?
      id = request.path.split('/')[2]
      waterfall = Waterfall.find(id)
      waterfall.destroy
      return [204, {}, ['']]
    else
      return [404, {}, ['']]
    end
  end

end
