require 'test_helper'
 
class TodosControllerTest < ActionController::TestCase

  def setup
    @completed = [todos(:one), todos(:two), todos(:three)]

    @incomplete = todos(:incomplete)
  end

  test 'destroy should delete todo' do 
    assert_difference('Todo.count', -1) do
      delete :destroy, format: :json, id: @completed.first.id
    end
  
    assert_response :no_content    
  end

  test 'destroy_completed should delete all completed todos' do
    assert_difference('Todo.count', -3) do 
      delete :destroy_completed, format: :json
    end

    assert_response :no_content
    
    assert_not Todo.all.include?(@completed)
    assert @incomplete.persisted?
  end

end