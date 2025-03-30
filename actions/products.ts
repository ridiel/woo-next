"use server";

import WooCommerceRestApi, { WooRestApiOptions } from "woocommerce-rest-ts-api";

const wcOptions: WooRestApiOptions = {
  url: process.env.NEXT_PUBLIC_WOOCOMMERCE_STORE_URL as string,
  consumerKey: process.env.WC_CONSUMER_KEY as string,
  consumerSecret: process.env.WC_CONSUMER_SECRET as string,
  version: "wc/v3",
};

const WooCommerce = new WooCommerceRestApi(wcOptions);

export const getProducts = async () => {
  try {
    const products = await WooCommerce.get("products");
    return products.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getProduct = async (id: string) => {
  try {
    const product = await WooCommerce.get("products", {
      id: parseInt(id),
    });

    return product.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
