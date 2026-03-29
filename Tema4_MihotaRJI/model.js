const Model = {
    operand1: null,
    operand2: null,
    operator: null,
    displayValue: "0",

    inputNumber(num) {
        if (this.displayValue === "0") {
            this.displayValue = num;
        } else {
            this.displayValue += num;
        }
    },

    setOperator(op) {
        this.operand1 = parseFloat(this.displayValue);
        this.operator = op;
        this.displayValue = "0";
    },

    calculate() {
        this.operand2 = parseFloat(this.displayValue);

        if (this.operator === "/" && this.operand2 === 0) {
            this.displayValue = "Eroare";
            return;
        }

        let result = 0;

        switch (this.operator) {
            case "+": result = this.operand1 + this.operand2; break;
            case "-": result = this.operand1 - this.operand2; break;
            case "*": result = this.operand1 * this.operand2; break;
            case "/": result = this.operand1 / this.operand2; break;
        }

        this.displayValue = result.toString();
        this.operand1 = null;
        this.operator = null;
    },

    clear() {
        this.operand1 = null;
        this.operand2 = null;
        this.operator = null;
        this.displayValue = "0";
    }
};