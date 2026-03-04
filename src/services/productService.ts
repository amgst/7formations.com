export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  created_at?: string;
};

export type ProductInput = {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

export async function getProducts(): Promise<Product[]> {
  const res = await fetch("/api/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function addProduct(input: ProductInput): Promise<{ id: number }> {
  const payload = {
    ...input,
    image: input.image ?? "",
  };
  const res = await fetch("/api/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to add product");
  return res.json();
}

export async function updateProduct(id: number, input: ProductInput): Promise<void> {
  const payload = {
    ...input,
    image: input.image ?? "",
  };
  const res = await fetch(`/api/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to update product");
}

export async function deleteProduct(id: number): Promise<void> {
  const res = await fetch(`/api/products/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete product");
}
