import styles from './App.module.css';
export function AddButton(props){
    
    if (props.val !== '') {
        return <button className={styles.button} enabled>Добавить в список</button>;
    }    
    else {
        return <button className={styles.button} disabled>Добавить в список</button> ;  
    }     
}