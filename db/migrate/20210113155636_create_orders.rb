class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.integer :quantity
      t.string :order_type
      t.datetime :date
      t.string :name
      t.string :phone

      t.timestamps
    end
  end
end
