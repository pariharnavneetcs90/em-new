const Category = require("../models/category.model");
const Product = require("../models/product.model");

async function createProduct(reqData) {
  try {
    let level = await Category.findOne({ name: reqData.productCategory });
    if (!level) {
      const newLevel = new Category({
        name: reqData.productCategory,
      });
      level = await newLevel.save();
    }

    
    const product = new Product({
      title: reqData.title,
      color: reqData.color,
      description: reqData.description,
      discountedPrice: reqData.discountedPrice,
      // discountPercent: reqData.discountPercent,
      imageUrl: reqData.imageUrl,
      brand: reqData.brand,
      price: reqData.price,
      sizes: reqData.size,
      quantity: reqData.quantity,
      category: level._id,
    });
    const savedProduct = await product.save();
    return savedProduct;
  } catch (error) {
    throw new Error("Error creating product: " + error.message);
  }
}

// Delete a product by ID
async function deleteProduct(productId) {
  try {
    const product = await findProductById(productId);
    if (!product) {
      throw new Error("Product not found with id: " + productId);
    }
    await Product.findByIdAndDelete(productId);
    return "Product deleted successfully";
  } catch (error) {
    throw new Error("Error deleting product: " + error.message);
  }
}


// Update a product by ID
async function updateProduct(productId, reqData) {
  const updatedProduct = await Product.findByIdAndUpdate(productId, reqData);
  return updatedProduct;
}

// Find a product by ID
async function findProductById(id) {
  const product = await Product.findById(id).populate("category").exec();

  if (!product) {
    throw new Error("Product not found with id " + id);
  }
  return product;
}

async function getAllProducts() {
  try {
    const query = await Product.find({}).exec();
    console.log("The query result:", query);  
    return query;
  } catch (error) {
    console.error("Error occurred while executing the query:", error);
  }
}

// Get all products with filtering and pagination
async function getAllProducts_Old(reqQuery) {
  let {
    category,
    color,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    sort,
    stock,
    pageNumber,
    pageSize,
  } = reqQuery;
  (pageSize = pageSize || 10), (pageNumber = pageNumber || 1);
  // let query = Product.find().populate("category");

let query = await Product.find({}).exec();
    console.log("The query result:", query);

  // if (!category == undefined && !category == null) {
  //   const existCategory = await Category.findOne({ name: category });
  //   console.log("category ...",existCategory,category )
  //   if (existCategory)
  //     query = query.where("category").equals(existCategory._id);
  //   else return { content: [], currentPage: 1, totalPages:1 };
  // }

  if (color) {
    const colorSet = new Set(color.split(",").map(color => color.trim().toLowerCase()));
    const colorRegex = colorSet.size > 0 ? new RegExp([...colorSet].join("|"), "i") : null;
    query = query.where("color").regex(colorRegex);
    // query = query.where("color").in([...colorSet]);
  }

  if (sizes) {
    const sizesSet = new Set(sizes);
    
    query = query.where("sizes.name").in([...sizesSet]);
  }

  if (minPrice && maxPrice) {
    query = query.where("discountedPrice").gte(minPrice).lte(maxPrice);
  }

  if (minDiscount) {
    query = query.where("discountPersent").gt(minDiscount);
  }

  if (stock) {
    if (stock === "in_stock") {
      query = query.where("quantity").gt(0);
    } else if (stock === "out_of_stock") {
      query = query.where("quantity").lte(0);
    }
  }

  if (sort) {
    const sortDirection = sort === "price_high" ? -1 : 1;
    query = query.sort({ discountedPrice: sortDirection });
  }

  // Apply pagination
  const totalProducts = await Product.countDocuments(query);

  const skip = (pageNumber - 1) * pageSize;

  query = query.skip(skip).limit(pageSize);

  const products = await query.exec();

  const totalPages = Math.ceil(totalProducts / pageSize);


  return { content: products, currentPage: pageNumber, totalPages:totalPages };
}

async function createMultipleProduct(products) {
  for (let product of products) {
    await createProduct(product);
  }
}

module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
  findProductById,
  createMultipleProduct,
};
