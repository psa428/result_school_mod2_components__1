import styles from './App.module.css';
// import { onInputButtonClick } from './utils/onInputButtonClick';

import { useState } from 'react';




function App() {
  const [val, setVal] = useState("");
  const [list, setList] = useState([]);
  const [error, setError] = useState('');
  const [isValueValid, setIsValueValid] = useState(false) ;

  function onInputButtonClick(){
    //  Запрос ввода значения для добавления в список
    let promptValue = prompt("Введите значение");
    setVal(promptValue);
    
    if (promptValue.length < 3){
      setVal(''); 
      setError("Введенное значение должно быть более 3 символов");
      setIsValueValid(false);
    
      }    
    else {
      setVal(promptValue);
      setError('');
      setIsValueValid(true);
      
    };
    
  };    
  
  function onAddButtonClick(){
    
    let id = Date.now();
    const updateList = [...list, {id, val}];
    setList(updateList);

    setVal('');
    setError('');
    

  };

 
  // console.log(${styles.button}) ; 

  return (

    <div className={styles.app}>
      <h1 className={styles['page-heading']}>Ввод значения</h1> 
      <p className={styles['no-margin-text']}>
        Текущее значение <code>value</code>: "<output class={styles['current-value']}>{val}</output>"
      </p>
      <div className={styles.error} >{error}</div>
      <div className={styles['buttons-container']}>
        <button className={styles.button} onClick={() => { onInputButtonClick() }}>Ввести новое</button>
        <button className={styles.button} disabled={!isValueValid} onClick={onAddButtonClick}>Добавить в список</button>;
        

      </div>
      <div className={styles['list-container']}>
        <h2 className={styles['list-heading']}>Список:</h2>
        <p className={styles['no-margin-text']}>{list.length ? "" : "Нет добавленных элементов" }</p>
        <ul className={styles.list}>
          
            {
              list.map(item => <li className={styles['list-item']} key={item.id}>{item.val}</li> )    
            }
          
        </ul>
      </div>
    
    </div>
  );
}

export default App;
