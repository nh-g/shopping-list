// Project files
import Placeholder from "../assets/images/image-placeholder.png";
import firebase from '../scripts/upload-image/firebase';
import readFile from '../scripts/upload-image/readFile';
import resizeImage from '../scripts/upload-image/resizeImage'
import dataURLToFile from "../scripts/upload-image/dataURLToFile";
import uploadFileToFirebase from "../scripts/upload-image/uploadFileToFilebase";

export default function ImageChooser({imageURL, editItem}) {
    // Constants
    const Image = imageURL === undefined ? Placeholder : imageURL;
    console.log("PlaceHolder", Placeholder);

    // Methods
    async function uploadImage(event, editItem, key) {
        const file = event.target.files[0];
        const filename = `image-${new Date().getTime()}.png`;
        const originalImage = await readFile(file);
        const resizedImage = await resizeImage(originalImage, 80, 80);
        const imageToFirebase = await dataURLToFile(resizedImage,filename);
        const newImageURL = await uploadFileToFirebase(
          firebase,
          imageToFirebase
        );

        editItem(key, newImageURL)
    }

    return (
      <label className="custom-file-chooser">
        <input
          onChange={(event) => uploadImage(event, editItem, "imageURL")}
          type="file"
        />
        <img src={Image} alt="User generated content" />
      </label>
    );
}
