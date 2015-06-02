 class PhoneNumber < ActiveRecord::Base

  belongs_to :contact
  has_one :locatation, as: :locatable

  validates :number, presence: true, format: {with: /\A\d{3}-\d{3}-\d{4}\Z/i, message: "format is not valid"}

end
