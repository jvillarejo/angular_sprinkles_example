class TodosController < ApplicationController
  def index
    @todos = bindable(Todo.order('created_at DESC').all)

    respond_with(@todos)
  end

  def create
    @todo = Todo.create(create_params)
    
    respond_with(@todo)
  end

  def update
    @todo = Todo.find(params[:id])
    @todo.update_attributes(update_params)
    
    respond_with(@todo)
  end

  def all_completed
    @todos = Todo.all
    @todos.update_all(complete: true)
    respond_with(@todos)
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy
    respond_with(@todo)
  end

  def destroy_completed
    @todos = Todo.where(complete: true)

    @todos.destroy_all

    respond_with(@todos)
  end

  private
  def create_params
    params.require(:todo).permit(:title)
  end

  def update_params
    params.require(:todo).permit(:complete, :title)
  end
end
