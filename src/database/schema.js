import {pgTable, serial, text, timestamp, integer} from "drizzle-orm/pg-core";

export const favoritesTable = pgTable("favorites", {
    id: serial("id").primaryKey(),
    userId: text("userId").notNull(),
    recipeId: integer("recipeId").notNull(),
    title: text("title").notNull(),
    image: text("image"),
    cookTime: text("cooktime"),
    servings: text("servings"),
    createdAt: timestamp("createdAt").defaultNow(),
});