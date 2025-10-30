import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increaseQty, decreaseQty } from '../store/cartSlice';
import { toggleWishlist } from '../store/wishlistSlice';
import { FiHeart } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ProductCard({ product, onEdit, onDelete }) {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false); // ✅ Animation feedback for Add to Cart

  // Cart quantity check
  const itemInCart = useSelector((state) =>
    state.cart.items.find((item) => item.id === product.id)
  );
  const quantity = itemInCart ? itemInCart.quantity : 0;

  // Wishlist check
  const wishlist = useSelector((state) => state.wishlist.items);
  const isWishlisted = wishlist.some((item) => item.id === product.id);

  // --- Event Handlers ---
  const handleAdd = () => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart!`, {
      style: { background: '#fef7f5', color: '#f06b3a' },
    });

    // Trigger quick animation feedback
    setAdded(true);
    setTimeout(() => setAdded(false), 400);
  };

  const handleIncrease = () => {
    dispatch(increaseQty(product.id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQty(product.id));
  };

  const handleWishlist = () => {
    dispatch(toggleWishlist(product));
    toast.success(
      isWishlisted
        ? `${product.name} removed from wishlist`
        : `${product.name} added to wishlist`
    );
  };

  // --- Styles ---
  const qtyButtonStyle = `
    w-1/3 h-10 flex items-center justify-center 
    border border-gray-300 dark:border-gray-600 rounded-lg 
    font-semibold text-xl text-gray-700 dark:text-gray-300 
    hover:bg-gray-100 dark:hover:bg-gray-700 
    transition-colors duration-200`;

  const addButtonFull = `
    w-full bg-gray-900 text-white px-5 py-2.5 rounded-lg 
    font-poppins font-semibold text-sm h-10
    hover:bg-gray-700 dark:bg-white dark:text-gray-900 
    dark:hover:bg-gray-200
    transition-all duration-300 transform`;

  // --- Animation variants ---
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    hover: { scale: 1.03 },
    tap: { scale: 0.97 },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      className="relative bg-white border border-gray-200 rounded-xl p-6 shadow-lg overflow-hidden
                 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between
                 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* ❤️ Wishlist Button */}
      <motion.button
        onClick={handleWishlist}
        whileTap={{ scale: 0.8 }}
        animate={
          isWishlisted
            ? { rotate: [0, 10, -10, 0], scale: [1, 1.3, 1] }
            : {}
        }
        transition={{ duration: 0.3 }}
        className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
          isWishlisted
            ? 'bg-red-100 text-red-500 hover:bg-red-200'
            : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
        }`}
      >
        <FiHeart
          size={18}
          className={isWishlisted ? 'fill-red-500' : 'fill-none'}
        />
      </motion.button>

      {/* Product Info */}
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={product.image}
          alt={product.name}
          className="rounded-lg w-full h-48 object-cover mb-5"
        />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white font-poppins">
          {product.name}
        </h3>
        <p className="mt-2 font-poppins text-gray-600 dark:text-gray-400">
          ₹{product.price} • {product.category}
        </p>
      </motion.div>

      {/* --- Action Area --- */}
      <div className="mt-4">
        {onEdit && onDelete ? (
          // --- Admin Buttons ---
          <div className="flex justify-end gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => onEdit(product)}
              className="font-poppins text-sm font-semibold text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              Edit
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => onDelete(product.id)}
              className="font-poppins text-sm font-semibold text-red-600 hover:text-red-800 dark:text-red-500 dark:hover:text-red-400 transition-colors"
            >
              Delete
            </motion.button>
          </div>
        ) : quantity === 0 ? (
          // --- Add to Cart Button ---
          <motion.button
            onClick={handleAdd}
            className={addButtonFull}
            animate={added ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.4, type: 'spring' }}
          >
            {added ? 'Added!' : 'Add to Cart'}
          </motion.button>
        ) : (
          // --- Quantity Stepper ---
          <div className="flex items-center justify-between gap-2">
            <motion.button
              onClick={handleDecrease}
              className={qtyButtonStyle}
              whileTap={{ scale: 0.8 }}
              aria-label="Decrease quantity"
            >
              −
            </motion.button>
            <motion.span
              key={quantity}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 250, damping: 10 }}
              className="font-poppins font-semibold text-lg text-gray-900 dark:text-white"
            >
              {quantity}
            </motion.span>
            <motion.button
              onClick={handleIncrease}
              className={qtyButtonStyle}
              whileTap={{ scale: 1.2 }}
              aria-label="Increase quantity"
            >
              +
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
