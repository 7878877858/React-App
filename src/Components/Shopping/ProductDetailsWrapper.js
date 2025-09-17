import { useParams } from "react-router-dom";
import ProductDetails from "./Section/ProductDetails";
import productData from "./Section/ProductListData"; // or from API

export default function ProductDetailsWrapper() {
  const { productId, combinationId } = useParams();

  // Make sure productData contains the product
  const product = productData.find(
    (p) =>
      String(p.product_id) === String(productId) &&
      String(p.combination_id) === String(combinationId)
  );

  // Optional fallback
  if (!product) {
    return <p>Product not found</p>;
  }

  return <ProductDetails product={product} />;
}
