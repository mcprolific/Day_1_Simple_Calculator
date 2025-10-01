function calculator() {
  let number_1 = parseInt(prompt("Enter your first number: "));
  let number_2 = parseInt(prompt("Enter your second number: "));

  // Using Operations methods

  // For exmple
  let sum = number_1 + number_2; // 15 + 2 = 17
  let substract = number_1 - number_2; // 15 - 3 = 12
  let multiply = number_1 * number_2; // 15 * 3 = 45
  let divide = number_1 / number_2; // 15 / 3 = 5
  let remainder = number_1 % number_2; // 15 % 3 = 0

  // SHow my result in console

  console.log("NCC Student, Please enter your two digit number!");
  console.log(`Addition: ${number_1} + ${number_2} = ${sum} `);
  console.log(`Substraction: ${number_1} - ${number_2} = ${substract} `);
  console.log(`Multiplication: ${number_1} * ${number_2} = ${multiply} `);
  console.log(`Division: ${number_1} / ${number_2} = ${divide} `);
  console.log(`Remainder: ${number_1} % ${number_2} = ${remainder} `);

  document.getElementById("show-calculator").innerHTML = `
    <div style="text-align: left; border: 1px solid blue; padding: 15px; border-radius: 8px; background-color: white;">
    <h4 style="font-weight: 700; font-size: 1.2rem; text-align: center; color: black; margin-top: 0;">A Simple Calculator </h4>
    <p><strong>Addition: </strong> ${number_1} + ${number_2} = ${sum} </p>
    <p><strong>Substraction: </strong>  ${number_1} - ${number_2} = ${substract} </p>
    <p><strong>Multiplication: </strong>  ${number_1} * ${number_2} = ${multiply} </p>
    <p><strong>Division: </strong>  ${number_1} / ${number_2} = ${divide} </p>
    <p><strong>Remainder: </strong> ${number_1} % ${number_2} = ${remainder} </p>
    </div>
    `;
}
