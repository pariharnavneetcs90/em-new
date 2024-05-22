const Cart = require("../models/cart.model.js");
const CartItem = require("../models/cartItem.model.js");
const Product = require("../models/product.model.js");
// const userService = require("./user.service.js");

// Create a new cart for a user
async function createCart(user) {
  const cart = new Cart({ user: user._id });
  const createdCart = await cart.save();
  return createdCart;
}

// Find a user's cart and update cart details
async function findUserCart(userId) {
  const cart = await Cart.findOne({ user: userId }).populate('cartItems').exec();
  if (!cart) {
    throw new Error('Cart not found for the user');
  }

  const cartItems = await CartItem.find({ cart: cart._id }).populate('product').exec();
  cart.cartItems = cartItems;

  let totalPrice = 0;
  let totalDiscountedPrice = 0;
  let totalItem = 0;

  cart.cartItems.forEach(cartItem => {
    totalPrice += cartItem.price;
    totalDiscountedPrice += cartItem.discountedPrice;
    totalItem += cartItem.quantity;
  });

  cart.totalPrice = totalPrice;
  cart.totalItem = totalItem;
  cart.totalDiscountedPrice = totalDiscountedPrice;
  cart.discounte = totalPrice - totalDiscountedPrice;

  return cart;
}

// Add an item to the user's cart
async function addCartItem(userId, itemData) {
  const cart = await Cart.findOne({ user: userId });
  if (!cart) {
    throw new Error('Cart not found for the user');
  }

  const product = await Product.findById(itemData.productId);
  if (!product) {
    throw new Error('Product not found');
  }else{
    console.log("i have product details.", product)
    const {_id, discountedPrice, price,} = product
    // console.log("do i have cart id.", userId, product._id, cart._id)
    const isPresent = await CartItem.findOne({ cart: cart._id, product: product._id, userId });
   console.log("where is cart id", isPresent );
    if (isPresent) {
      isPresent.quantity += itemData.quantity;
      isPresent.price = isPresent.quantity * product.price;
      isPresent.discountedPrice = isPresent.quantity * product.discountedPrice;
      await isPresent.save();
    } else {
      console.log("do i have itemData for product 22222", _id, discountedPrice, price,);

      const newCartItem = new CartItem({
        product: _id,
        cart: cart._id,
        quantity:  1,
        price: price ,
        discountedPrice: discountedPrice,
        userId: userId,
        size: itemData.size
      });

      // const newCartItem = new CartItem({
      //   product: product._id,
      //   cart: cart._id,
      //   quantity: itemData.quantity || 1,
      //   price: product.price * itemData.quantity,
      //   discountedPrice: product.discountedPrice * itemData.quantity,
      //   userId: userId,
      //   size: itemData.size
      // });
      await newCartItem.save();
      cart.cartItems.push(newCartItem);
      await cart.save();
    }

  }


  return 'Item added to cart';
}

// Update an existing cart item
// async function updateCartItem(userId, cartItemId, cartItemData) {
//   const cartItem = await CartItem.findById(cartItemId).populate('product');
//   if (!cartItem) {
//     throw new Error('Cart item not found');
//   }

//   if (cartItem.userId.toString() !== userId.toString()) {
//     throw new Error('Unauthorized action');
//   }

//   cartItem.quantity = cartItemData.quantity;
//   cartItem.price = cartItem.quantity * cartItem.product.price;
//   cartItem.discountedPrice = cartItem.quantity * cartItem.product.discountedPrice;
//   const updatedCartItem = await cartItem.save();

//   return updatedCartItem;
// }

// Remove a cart item
// async function removeCartItem(userId, cartItemId) {
//   const cartItem = await CartItem.findById(cartItemId);
//   if (!cartItem) {
//     throw new Error('Cart item not found');
//   }

//   if (cartItem.userId.toString() !== userId.toString()) {
//     throw new Error('Unauthorized action');
//   }

//   const cart = await Cart.findById(cartItem.cart);
//   cart.cartItems.pull(cartItemId); // Remove the item from the cart's cartItems array
//   await cart.save();

//   await CartItem.findByIdAndDelete(cartItemId);
// }

// Find a cart item by its ID
// async function findCartItemById(cartItemId) {
//   const cartItem = await CartItem.findById(cartItemId).populate('product');
//   if (cartItem) {
//     return cartItem;
//   } else {
//     throw new Error(`CartItem not found with id: ${cartItemId}`);
//   }
// }

module.exports = {
  createCart,
  findUserCart,
  addCartItem,
  // updateCartItem,
  // removeCartItem,
  // findCartItemById,
};