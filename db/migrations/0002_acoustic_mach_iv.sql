ALTER TABLE "user_feedbacks" ALTER COLUMN "details" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "user_feedbacks" ADD COLUMN "other" varchar(256);