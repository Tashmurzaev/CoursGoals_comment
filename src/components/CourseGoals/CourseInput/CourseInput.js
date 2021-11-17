import React, { useState } from 'react';
import styled from 'styled-components'
import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

// const FormControl = styled.div `
//   margin: 0.5rem 0;

// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color: ${props => (props.invalid ? 'red' : '#8b005d')}
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
//   background: ${props => (props.invalid ? 'rgb(197, 155, 155)' : '#transparent')};
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }

// `;

const CourseInput = props => { //пропс придут с апп.жс
  const [enteredValue, setEnteredValue] = useState('');//сохраняет значение инпута
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => { // fun будет записывать в enteredValue значение инпута
    if(event.target.value.trim().length > 0) {
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => { //срабатывает при нажатии баттн
    event.preventDefault(); //останавливает перезапуск страницу
    if(enteredValue.trim().length === 0) {
      setIsValid(false)
      return;
    }
    props.onAddGoal(enteredValue); //lifting-up(добавляем в data у значения инпута)
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl invalid={!isValid} /> */}
      <div className={styles['form-control']}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
