import { pgTable, text, timestamp, uuid, varchar, pgEnum } from "drizzle-orm/pg-core";

// User roles enum
export const userRoleEnum = pgEnum("user_role", ["admin", "user"]);

// Content status enum
export const contentStatusEnum = pgEnum("content_status", ["draft", "published", "archived"]);

// Users table
export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name"),
  email: varchar("email", { length: 320 }).notNull().unique(),
  emailVerified: timestamp("email_verified"),
  image: text("image"),
  role: userRoleEnum("role").default("user").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Categories table
export const categories = pgTable("categories", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 100 }).notNull(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Content table (for blog posts and pages)
export const content = pgTable("content", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  excerpt: text("excerpt"),
  body: text("body").notNull(),
  featuredImage: text("featured_image"),
  status: contentStatusEnum("status").default("draft").notNull(),
  type: varchar("type", { length: 50 }).notNull(), // 'post' or 'page'
  authorId: uuid("author_id").references(() => users.id),
  categoryId: uuid("category_id").references(() => categories.id),
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Export types
export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
export type Category = typeof categories.$inferSelect;
export type InsertCategory = typeof categories.$inferInsert;
export type Content = typeof content.$inferSelect;
export type InsertContent = typeof content.$inferInsert;
