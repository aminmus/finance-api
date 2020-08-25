# Migration `20200825191918-add-transaction`

This migration has been generated by Amin Mushehid at 8/25/2020, 9:19:18 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Transaction" (
"id" SERIAL,
"updatedAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
"date" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
"note" text   ,
"currency" text  NOT NULL ,
"unitPrice" integer  NOT NULL ,
"totalPrice" integer  NOT NULL ,
"assetQuantity" integer  NOT NULL ,
"assetId" integer  NOT NULL ,
PRIMARY KEY ("id"))

ALTER TABLE "public"."Transaction" ADD FOREIGN KEY ("assetId")REFERENCES "public"."Asset"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200825184919-add-portfolio..20200825191918-add-transaction
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator prisma_client {
   provider = "prisma-client-js"
@@ -23,17 +23,18 @@
   portfolios Portfolio[]
 }
 model Asset {
-  id          Int        @id @default(autoincrement())
-  updatedAt   DateTime   @updatedAt @default(now())
-  createdAt   DateTime   @default(now())
+  id          Int           @id @default(autoincrement())
+  updatedAt   DateTime      @updatedAt @default(now())
+  createdAt   DateTime      @default(now())
   name        String
   ticker      String?
   description String?
-  quantity    Int        @default(0)
-  Portfolio   Portfolio? @relation(fields: [portfolioId], references: [id])
+  quantity    Int           @default(0)
+  Portfolio   Portfolio?    @relation(fields: [portfolioId], references: [id])
   portfolioId Int?
+  Transaction Transaction[]
 }
 model Portfolio {
   id          Int      @id @default(autoincrement())
@@ -44,4 +45,18 @@
   assets      Asset[]
   User        User?    @relation(fields: [userId], references: [id])
   userId      Int?
 }
+
+model Transaction {
+  id            Int      @id @default(autoincrement())
+  updatedAt     DateTime @updatedAt @default(now())
+  createdAt     DateTime @default(now())
+  date          DateTime @default(now())
+  note          String?
+  currency      String
+  unitPrice     Int
+  totalPrice    Int
+  assetQuantity Int
+  asset         Asset    @relation(fields: [assetId], references: [id])
+  assetId       Int
+}
```

