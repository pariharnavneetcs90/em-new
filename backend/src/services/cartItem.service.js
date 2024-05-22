const CartItem = require("../models/cartItem.model.js");
const userService = require("./user.service.js");

// // Create a new cart item
// async function createCartItem(cartItemData) {
//   const cartItem = new CartItem(cartItemData);
//   cartItem.quantity = 1;
//   cartItem.price = cartItem.product.price * cartItem.quantity;
//   cartItem.discountedPrice = cartItem.product.discountedPrice * cartItem.quantity;
//   cartItem.userId = cartItemData.userId; // Assign user ID to the cart item

//   const createdCartItem = await cartItem.save();
//   return createdCartItem;
// }

// // Update an existing cart item
async function updateCartItem(userId, cartItemId, cartItemData) {
  const cartItem = await findCartItemById(cartItemId);

  if (!cartItem) {
    throw new Error("Cart item not found: " + cartItemId);
  }

  if (cartItem.userId.toString() !== userId.toString()) {
    throw new Error("Unauthorized action");
  }

  cartItem.quantity = cartItemData.quantity;
  cartItem.price = cartItem.quantity * cartItem.product.price;
  cartItem.discountedPrice = cartItem.quantity * cartItem.product.discountedPrice;

  const updatedCartItem = await cartItem.save();
  return updatedCartItem;
}

// // Check if a cart item already exists in the user's cart
// async function isCartItemExist(cart, product, size, userId) {
//   const cartItem = await CartItem.findOne({ cart, product, size, userId });
//   return cartItem;
// }

// // Remove a cart item
async function removeCartItem(userId, cartItemId) {
  console.log("console at cartItem.service", cartItemId);
  const cartItem = await findCartItemById(cartItemId);

  if (!cartItem) {
    throw new Error("Cart item not found: " + cartItemId);
  }

  // Convert userId to string if it's an object
  const userIdString = typeof userId === 'object' ? userId.toString() : userId;

  console.log("userIdString:", userIdString);
  console.log("cartItem.userId:", cartItem.userId);

  if (cartItem.userId.toString() !== userIdString) {
    throw new Error("Unauthorized action");
  }

  await CartItem.findByIdAndDelete(cartItemId);
}



// Find a cart item by its ID
async function findCartItemById(cartItemId) {
  const cartItem = await CartItem.findById(cartItemId).populate("product");
  if (cartItem) {
    return cartItem;
  } else {
    throw new Error(`CartItem not found with id: ${cartItemId}`);
  }
}

module.exports = {
//   createCartItem,
  updateCartItem,
//   isCartItemExist,
  removeCartItem,
  findCartItemById,
};
