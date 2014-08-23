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

  def destroy
    todo = Todo.find(params[:id])
    todo.destroy
    render json: todo
  end

  private

  def create_params
    params.require(:todo).permit(:title)
  end

  def update_params
    params.require(:todo).permit(:complete)
  end
end
