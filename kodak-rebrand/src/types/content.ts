// src/types/content.ts

// Firestore document types
export interface FirestoreTimestamp {
  seconds: number;
  nanoseconds: number;
}

export interface BaseDocument {
  id: string;
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}

export interface ContentDocument extends BaseDocument {
  type: "hero" | "feature" | "product" | "testimonial";
  data: Record<string, unknown>;
  isActive: boolean;
  order: number;
}
