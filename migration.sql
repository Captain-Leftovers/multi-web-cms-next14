-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Store" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "UserStore" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "storeId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "MotoItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "make" TEXT NOT NULL,
    "model" TEXT,
    "description" TEXT,
    "price" INTEGER,
    "coverUrl" TEXT,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "sold" BOOLEAN NOT NULL DEFAULT false,
    "onHold" BOOLEAN NOT NULL DEFAULT false,
    "upcoming" BOOLEAN NOT NULL DEFAULT false,
    "addedByUserId" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "MotoItemImages" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "motoItemId" TEXT NOT NULL,
    "url" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "UserStore_storeId_userId_idx" ON "UserStore"("storeId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserStore_userId_storeId_key" ON "UserStore"("userId", "storeId");

-- CreateIndex
CREATE INDEX "MotoItem_sold_onHold_idx" ON "MotoItem"("sold", "onHold");

-- CreateIndex
CREATE INDEX "MotoItemImages_motoItemId_idx" ON "MotoItemImages"("motoItemId");

