import Image from "../assets/images/shopping.jpg";

export default function WelcomeScreen() {
  return (
    <div id="welcome-page">
      <img src={Image} alt="Couple Shopping" />
      <p>
        Welcome to EIKA’s shopping list. Here you will be able to create a todo
        list with for the products you want to buy.
      </p>
      <p>
        To get started press the blue Add items button and a popup will ask you
        the name and the price and the quantity of the item you want to add. 
        You can also and an image after the item is added by touching the camera icon.
      </p>
    </div>
  );
}
