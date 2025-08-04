CREATE TABLE "favorites" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"recipeId" integer NOT NULL,
	"title" text NOT NULL,
	"image" text,
	"cooktime" text,
	"servings" text,
	"createdAt" timestamp DEFAULT now()
);
