class Todo < ActiveRecord::Base
  scope :incomplete, -> { where(complete: false) }
end
