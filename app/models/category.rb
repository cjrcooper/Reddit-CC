# == Schema Information
#
# Table name: categories
#
#  id         :integer          not null, primary key
#  cat_name   :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Category < ActiveRecord::Base
  has_and_belongs_to_many :users
  has_many :links
  has_many :comments, :through => :links
end
