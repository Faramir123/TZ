import React from 'react';

function Input({onSubmit}) {
    const [inputValue, setInputValue] = React.useState('')

    const handleThemeChange = (e) => {
         setInputValue(e.target.value)   
    }
    const handleThemeSubmit = (event) => {
        event.preventDefault()

        if (onSubmit) {
            onSubmit(inputValue)
            setInputValue('')
        }
    }
  

    return (
        <div className="Input" onSubmit={handleThemeSubmit}>
            <form>
                <input
                    required
                    value={inputValue}
                    type="text"
                    placeholder='Добавьте новую позицию'
                    autoFocus
                    onChange={handleThemeChange}/>
              <button type="submit">Добавить</button>  
        </form>
      
  </div>)
}

export default Input;
