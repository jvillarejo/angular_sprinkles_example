class TodoController < ApplicationController
  def index
    @todos = bindable(Todo.order('created_at DESC').all)
  end
end
