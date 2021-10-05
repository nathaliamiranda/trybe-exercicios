const wakingUp = () => {
  const message = "Acordando!!";
  return message;
}
console.log(wakingUp());

const breakfast = () => {
  const message2 = "Bora tomar café!!";
  return message2;
}
console.log(breakfast());

const sleep = () => {
  const message3 = "Partiu dormir!!";
  return message3;
}
console.log(sleep());

const doingThings = (action) => {
  console.log(action);
  return action;
}
doingThings(sleep());
