class Api::TodosController < ApplicationController
  def create
    todo = Todo.create(create_params)
    render json: todo
  end

  def update
    todo = Todo.find(params[:id])
    todo.update_attributes(update_params)
    render json: todo
  end

  def all_completed
    todos = Todo.all
    todos.update_all(complete: true)
    render json: todos
  end

  def destroy
    todo = Todo.find(params[:id])
    todo.destroy
    render json: todo
  end

  def destroy_many
    todos = Todo.where(id: params[:ids])
    todos.destroy_all
    render json: todos
  end

  private

  def create_params
    params.require(:todo).permit(:title)
  end

  def update_params
    params.require(:todo).permit(:complete, :title)
  end
end
