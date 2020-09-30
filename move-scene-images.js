let oldpath = "shared/images/maps/";
let newpath  = "maps/"
const scenes = new SceneDirectory();
scenes.entities.forEach((scene) => {
  let backgroundImage = scene.img;
  let newBackgroundImage = backgroundImage.replace(oldpath, newpath);
  if (backgroundImage !== newBackgroundImage) {
    const updatedData = {img: newBackgroundImage};
    const updated = scene.update(updatedData);
    window.console.log("Updated scene '" + scene.name + "'");
    updated.then((result) => {
        window.console.log(result);
    })
  }
});