class WelcomeController < ApplicationController
  include AngularSprinkles::Controller

  def index
    @todos = bindable_collection(Todo.order('created_at DESC').all)
  end
end
