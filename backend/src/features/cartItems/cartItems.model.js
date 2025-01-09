export default class CartItemsModel {
  constructor(productID, userID, quantity, id) {
    this.productID = productID;
    this.userID = userID;
    this.quantity = quantity;
    this.id = id;
  }
  static add(productID, userID, quantity) {
    const newItems = CartItemsModel(productID, userID, quantity);
    newItems.id = cartItems.length + 1;
    cartItems.push(newItems);
    return newItems;
  }
  static get(userID) {
    const items = cartItems.filter((u) => u.userID === userID);
    return items;
  }
  static delete(cartItemsID, userID) {
    const cartIndex = cartItems.findIndex(
      (i) => i.id == cartItemsID && i.userID == userID
    );
    if (cartIndex == -1) {
      return "Items not found";
    } else {
      cartItems.splice(cartIndex, 1);
    }
  }
}
var cartItems = [
  new CartItemsModel(1, 2, 1, 1),
  new CartItemsModel(1, 1, 2, 2),
  new CartItemsModel(1, 3, 1, 3),
];
