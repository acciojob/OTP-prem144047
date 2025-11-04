document.querySelectorAll('.code').forEach((input, index, inputs) => {
    input.addEventListener('input', (e) => {
        // Move to the next field if the current field is filled
        if (e.target.value.length === 1) {
            if (index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        }
    });

    input.addEventListener('keydown', (e) => {
        // Move to the previous field if backspace is pressed and the current field is empty
        if (e.key === 'Backspace' && input.value === '') {
            if (index > 0) {
                inputs[index - 1].focus();
            }
        }
    });

    // Automatically focus the previous field if a number is typed in the current field
    input.addEventListener('input', (e) => {
        if (e.target.value.length === 1 && index > 0) {
            inputs[index - 1].focus();
        }
    });
});
