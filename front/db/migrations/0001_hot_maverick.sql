CREATE TABLE IF NOT EXISTS "feedback_issues" (
	"id" serial PRIMARY KEY NOT NULL,
	"feedback_id" integer,
	"issue_type" varchar(256) NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_feedbacks" (
	"id" serial PRIMARY KEY NOT NULL,
	"details" text NOT NULL,
	"stage_id" integer NOT NULL,
	"question_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "feedback_issues" ADD CONSTRAINT "feedback_issues_feedback_id_user_feedbacks_id_fk" FOREIGN KEY ("feedback_id") REFERENCES "user_feedbacks"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
