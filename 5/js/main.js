function submitForm(event) {
    event.preventDefault();

    const firstNameValue = document.getElementById('firstName').value;
    const lastNameValue = document.getElementById('lastName').value;
    const phoneNumberValue = document.getElementById('phoneNumber').value;
    const result = document.getElementById('result');

    let resultText = "Спасибо за отправку формы, ваши данные:\n";
    resultText += "First Name: " + firstNameValue + "\n";
    resultText += "Last Name: " + lastNameValue + "\n";
    resultText += "Phone Number: " + phoneNumberValue + "";

    result.innerText = resultText;
}