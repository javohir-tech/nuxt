import type { Product } from "~/entities/product";

export default function useCart() {
  type ProductCartItem = Product & { count: number };
  const cart_products = useState<ProductCartItem[]>("cart_productes", () => []);
  const count = ref<number>(0);

  function add_cart(product: Product) {
    const exist = cart_products.value.some((p) => p.id === product.id);

    if (!exist) {
    //   console.log(product);
      cart_products.value.push({ ...product, count: 1 });
      count.value = 1;
    } else {
      console.log("bu qoshilgan");
    }
  }

  function increment(id: number) {
    const exist = cart_products.value.find((p) => p.id === id);

    if (!exist) {
      console.log("Bunday product topilmadi");
    } else {
      if (exist.count < 10) {
        exist.count++;
        count.value = exist.count;
      } else {
        console.log("maximum ");
      }
    }
  }

  function decrement(id: number) {
    const exist = cart_products.value.find((p) => p.id === id);

    if (!exist) {
      console.log("bunday product yoq");
    } else {
      if (exist.count > 0) {
        exist.count--;
        if (exist.count === 0) {
          cart_products.value = cart_products.value.filter(
            (p) => p.count !== 0,
          );
        }
        count.value = exist.count;
      } else {
        console.log("minimum");
      }
    }
  }

  return { cart_products, count, add_cart, increment, decrement };
}
