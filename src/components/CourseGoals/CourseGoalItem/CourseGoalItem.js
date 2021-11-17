import React from 'react';

import './CourseGoalItem.css';

const CourseGoalItem = props => { // отвечает за удаление
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id); // удаляет по id 
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
