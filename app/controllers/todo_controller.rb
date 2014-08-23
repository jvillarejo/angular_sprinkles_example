class TodoController < ApplicationController
  include AngularSprinkles::Controller

  def index
    @todos = bindable(Todo.order('created_at DESC').all)
  end
end
