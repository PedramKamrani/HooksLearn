import { memo } from "react";
import Card from './../UI/Card'
const ProductForm = memo((props) => {
  const subitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <section>
      <Card>
        <form>
          <div>
            <label for="input"></label>
            <input type="text" />
            <label for="Amount"></label>
            <input type="Amount" />
            <button type="submit">Add To Form</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default ProductForm;
