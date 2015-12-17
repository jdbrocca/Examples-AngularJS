var app = angular.module("TodoModule", [])

app.controller("TodoController", function() {
	var todoCtrl = this

	todoCtrl.todos = [
		{
			text: "learn angular",
			state: true
		},
		{
			text: "build an angular app",
			state: false
		},
	]

	todoCtrl.AddTodo = function() {
		todoCtrl.todos.push({ text: todoCtrl.todoText, state: false })
		todoCtrl.todoText = ''
	}

	todoCtrl.remaining = function() {
		var count = 0
		angular.forEach(todoCtrl.todos, function(todo) {
			count += todo.state ? 0 : 1
		})
		return count
	}

	todoCtrl.archive = function() {
		var oldTodos = todoCtrl.todos
		todoCtrl.todos = []
		angular.forEach(oldTodos, function(todo) {
			if (!todo.state) todoCtrl.todos.push(todo)
		})
	}
})