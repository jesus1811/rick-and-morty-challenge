export const getURLVideoFirebase = (name: string): string => {
  return `https://firebasestorage.googleapis.com/v0/b/rick-morty-72941.appspot.com/o/${name}?alt=media&token=fa4dd492-52a1-4dfc-9508-f89d01d2c3e3`;
};
