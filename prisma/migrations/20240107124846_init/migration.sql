-- CreateEnum
CREATE TYPE "RolesEnum" AS ENUM ('Admin', 'Tech', 'User', 'Moderator');

-- CreateTable
CREATE TABLE "FixUser" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "roles" "RolesEnum"[] DEFAULT ARRAY['User']::"RolesEnum"[],
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "FixUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FixUser_email_key" ON "FixUser"("email");
