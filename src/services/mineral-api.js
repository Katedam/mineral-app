export const getMinerals = async () => {
  const result = await fetch('http://minerals-api.herokuapp.com/minerals');
  const json = await result.json();
  return json
}


