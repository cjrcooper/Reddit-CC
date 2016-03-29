# == Schema Information
#
# Table name: links
#
#  id          :integer          not null, primary key
#  title       :string
#  url         :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :integer
#  category_id :integer
#

class Link < ActiveRecord::Base
  acts_as_votable
  belongs_to :user
  belongs_to :category
  has_many :comments
end
