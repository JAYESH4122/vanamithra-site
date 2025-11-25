// /products/page.tsx
import { Suspense } from "react";
import ProductsPageClient from "./product-page-client";

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <ProductsPageClient />
    </Suspense>
  );
}
