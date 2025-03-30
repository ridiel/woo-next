import { getProduct } from "@/actions/products";
import { ProductAction } from "@/components/product/product-action";
import { ProductQuantity } from "@/components/product/product-quantity";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const product = await getProduct(id);

  console.log(product);

  const description = product.description.replace(/<[^>]*>?/g, "");

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-6">
        <Link
          href="/"
          className="inline-flex gap-x-2 items-center text-lg font-medium mb-6 hover:text-gray-600"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 flex flex-col gap-6">
            {product.images[0] && (
              <div className="aspect-auto overflow-hidden rounded-lg border flex items-center justify-center h-[80vh]">
                <Image
                  src={product.images[0].src}
                  alt={product.images[0].alt}
                  width={600}
                  height={480}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 items-center justify-between sm:flex-row">
                <h1 className="text-2xl font-bold">{product.name}</h1>
                <div className="text-2xl font-bold">{product.price}</div>
              </div>

              <ProductQuantity product={product} />

              <div className="text-grey-700">{description}</div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <ProductAction />
          </div>
        </div>
      </div>
    </div>
  );
}
