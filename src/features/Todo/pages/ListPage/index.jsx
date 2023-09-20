import React, { useState } from 'react';
import TodoList from '../../components/TodoList';

ListPage.propTypes = {

};

function ListPage(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed',
        },
        {
            id: 3,
            title: 'Code',
            status: 'new',
        }
    ];

    const [todoList, setTodoList] = useState(initTodoList);
    
    const [filteredStatuses, setFilteredStatuses] = useState('all');

    const handleTodoList = (todo, idx) => {
        //clone current array to the new one
        const newTodoList = [...todoList];


        console.log(todo, idx);
        //toggle state
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        }
        //newTodoList[idx] = newTodo;

        //update todo list
        setTodoList(newTodoList);
    }

    const handleShowAllClick = () => {
        setFilteredStatuses('all')
    }

    const handleShowCompletedClick = () => {
        setFilteredStatuses('completed')
    }

    const handleShowNewClick = () => {
        setFilteredStatuses('new')
    }

    const renderTodoList = todoList.filter(todo => filteredStatuses === ('all') || filteredStatuses === todo.status)
    console.log(renderTodoList)

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={renderTodoList} onTodoClick={handleTodoList} />

            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>

        
    );
}

export default ListPage;