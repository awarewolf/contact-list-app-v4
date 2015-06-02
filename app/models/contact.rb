class Contact < ActiveRecord::Base

  has_many :emails
  has_many :phone_numbers

  validates :firstname, presence: true
  validates :lastname, presence: true

end
