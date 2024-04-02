export function onInputButtonClick(){
    //  Запрос ввода значения для добавления в список
    let val = prompt("Введите значение");
    
    if (val.length < 3)
        setError("введенное значение должно быть более 3 символов");
    else 
        return val;  
};

