import { notFound } from "next/navigation";
import Image from "next/image";
import { products } from "@/data/products";

type Props = {
  params: { id: string };
};

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.id === params.id);

  if (!product) return notFound();

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <Image
        src={product.image}
        alt={product.name}
        width={600}
        height={400}
        className="rounded-md"
      />
      <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
      <p className="text-lg text-gray-700 mt-2">{product.description}</p>
      <p className="text-xl font-semibold mt-4">{product.price}</p>
    </main>
  );
}
