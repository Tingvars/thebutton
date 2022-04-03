let displayNum = Number(document.getElementById('displayNum').textContent);

const changeNum = (operator) =>  {
  if (operator === "plus") {
    newNum = displayNum + Number(document.getElementById('inputthing').value);
  } else if (operator === "minus") {
    newNum = displayNum - Number(document.getElementById('inputthing').value);
  } 
    localStorage.setItem('displayNum', newNum);
    const setNum = Number(localStorage.getItem('displayNum'));
    document.getElementById('displayNum').textContent = setNum;
    displayNum = setNum;
    checkIfBust();
  };
  
  const checkIfBust = () =>   {
    const currNum = document.getElementById('displayNum').textContent;
    if (currNum > Number(document.getElementById('limitthing').value)) {
    document.getElementById('result').textContent = "BOOM";
    } else if (currNum < -Number(document.getElementById('limitthing').value))  {
    document.getElementById('result').textContent = "BOOM";
    } else  {
      document.getElementById('result').textContent = "";
      } 
  };  

const changeInputNum = () =>  {
  const inputNum = Number(document.getElementById('inputthing').value);
    localStorage.setItem('inputNum', inputNum);
    const setNum = Number(localStorage.getItem('inputNum'));
    document.getElementById('inputthing').value = setNum;
  };

  const changeLimitNum = () =>  {
    const limitNum = Number(document.getElementById('limitthing').value);
      localStorage.setItem('limitNum', limitNum);
      const setNum = Number(localStorage.getItem('limitNum'));
      document.getElementById('limitthing').value = setNum;
      checkIfBust();
    };