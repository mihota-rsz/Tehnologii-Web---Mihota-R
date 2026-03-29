const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        if (btn.dataset.value) {
            Model.inputNumber(btn.dataset.value);
            View.update(Model.displayValue);
        }

        if (btn.dataset.op) {
            Model.setOperator(btn.dataset.op);
        }

        if (btn.id === "equals") {
            Model.calculate();
            View.update(Model.displayValue);
        }

        if (btn.id === "clear") {
            Model.clear();
            View.update(Model.displayValue);
        }

    });
});