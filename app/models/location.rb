 class Location < ActiveRecord::Base

  belongs_to :locatable, polymorphic: true

  validates :name, presence: true

end
