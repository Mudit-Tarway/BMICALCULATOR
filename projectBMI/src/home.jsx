import './home.css'; 

function Home() {
  return (
    <div className="home-section">
      <h1>Welcome to the BMI Calculator</h1>

      <p>
        Body Mass Index (BMI) is a simple number used to categorize individuals based on their weight relative to their height. It helps determine if a person is underweight, normal weight, overweight, or obese.
      </p>

      <h2>📐 BMI Formula</h2>
      <p className="formula">
        <strong>BMI = weight (kg) / [height (m)]²</strong>
      </p>

      <h3>🧮 Example Calculation</h3>
      <p>
        Suppose your weight is <strong>70 kg</strong> and your height is <strong>1.75 m</strong>.
      </p>
      <p>
        BMI = 70 / (1.75 x 1.75) = 70 / 3.0625 = <strong>22.86</strong>
      </p>

      <h3>📊 BMI Categories</h3>
      <ul>
        <li><strong>Below 18.5</strong> - Underweight</li>
        <li><strong>18.5 - 24.9</strong> - Normal weight</li>
        <li><strong>25 - 29.9</strong> - Overweight</li>
        <li><strong>30 and above</strong> - Obese</li>
      </ul>

      <p>
        Use the <strong>Calculate</strong> section to input your height and weight to check your BMI.
      </p>
    </div>
  );
}

export default Home;
