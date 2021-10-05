import Image from "../assets/images/shopping.jpg";

export default function WelcomeScreen() {
  return (
    <div id="welcome-page">
      <h3> Welcome to EIKA’s shopping list</h3>
      <img src={Image} alt="Couple Shopping" />
      <p>
        Here you can create a todo list for the products you want to
        buy.
      </p>
      <p>
        To get started, press the blue Add button. Then a popup will appear
        asking you name, price and quantity of the item you want to add. You can
        also add a picture for it by pressing on the camera icon.
      </p>
    </div>
  );
}
