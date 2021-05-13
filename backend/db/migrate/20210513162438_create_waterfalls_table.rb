class CreateWaterfallsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :waterfalls do |t|
      t.string :name
      t.string :location
      t.string :state
      t.string :county
      t.integer :height
      t.string :photo
    end
  end
end
