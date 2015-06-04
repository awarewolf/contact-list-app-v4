 class Email < ActiveRecord::Base

  belongs_to :contact
  has_one :location, as: :locatable

  validates :address, presence: true, format: {with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i, message: "format is not valid"}

end
