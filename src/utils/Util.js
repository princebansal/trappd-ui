export function getRegionName(obj) {
  console.log("getRegionName", obj);
  if (obj != null) {
    switch (obj.geographyType) {
      case "CITY":
        return obj.city.name;
      case "STATE":
        return obj.state.name;
      case "COUNTRY":
        return obj.country.name;
      default:
        return "";
    }
  } else {
    return "";
  }
}
