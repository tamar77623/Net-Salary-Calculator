# Net-Salary-Calculator
# 💰 Net Salary & Tax Calculator

A clean, responsive, and lightweight web application designed to calculate net salary, retirement deductions, and income taxes accurately. Built with pure HTML, CSS, and vanilla JavaScript.

---

## ✨ Features

- **Accurate Tax & Deduction Logic:** Computes retirement contributions, taxable income, and applicable income tax recursively.
- **Dynamic Calculation:** Instantly updates output metrics based on user inputs.
- **Responsive & Clean UI:** Designed with modern, card-based layout components that adapt effortlessly to desktop and mobile screens.
- **Formatted Currency Values:** Formats raw numerical inputs and results into clean, readable figure outputs.

---

## 📊 How the Calculations Work

The app follows standard financial logic to process gross-to-net income:

1. **Retirement Deduction:**
   `Retirement Amount = Gross Salary * (Retirement Rate / 100)`

2. **Taxable Amount:**
   `Taxable Amount = Gross Salary - Retirement Amount`

3. **Income Tax Amount:**
   `Tax Amount = Taxable Amount * (Tax Rate / 100)`

4. **Net Salary:**
   `Net Salary = Gross Salary - (Retirement Amount + Tax Amount)`

---

## 🛠️ Built With

* **HTML5** – Structured semantic elements
* **CSS3** – Custom styled cards, borders, shadows, and clean layout design
* **JavaScript (ES6)** – Dynamic DOM manipulation and financial calculations

---

## 🚀 Getting Started

To run this project locally:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/net-salary-calculator.git](https://github.com/your-username/net-salary-calculator.git)
