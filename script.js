const codes = document.querySelectorAll(".code");

    codes[0].focus(); // Focus first box on page load

    codes.forEach((input, index) => {
      input.addEventListener("input", (e) => {
        const value = e.target.value;
        if (/^[0-9]$/.test(value)) {
          if (index < codes.length - 1) {
            codes[index + 1].focus();
          } else {
            input.blur(); // Last box loses focus
          }
        } else {
          e.target.value = ""; // Clear non-digit input
        }
      });

      input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
          if (input.value === "") {
            if (index > 0) {
              codes[index - 1].focus();
              codes[index - 1].value = "";
            }
          } else {
            input.value = "";
          }
        }
      });
    });