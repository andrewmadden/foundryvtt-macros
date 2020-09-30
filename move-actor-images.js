let oldpath = "shared/images/tokens/";
let newpath  = "tokens/"
game.actors.forEach((actor) => {
  let profileImage = actor.img;
  let newProfileImage = profileImage.replace(oldpath, newpath);
  if (profileImage !== newProfileImage) {
    const updatedData = {img: newProfileImage};
    const updated = actor.update(updatedData);
    window.console.log("Updated actor '" + actor.name + "'");
    updated.then((result) => {
        window.console.log(result);
    })
  }
  let tokenImage = actor.data.token.img;
  let newTokenImage = tokenImage.replace(oldpath, newpath);
  let newToken = actor.data.token;
  newToken.img = newTokenImage;
  if (tokenImage !== newTokenImage) {
    const updatedData = {token: newToken};
    const updated = actor.update(updatedData);
    window.console.log("Updated token '" + actor.name + "'");
    updated.then((result) => {
        window.console.log(result);
    })
  }
});