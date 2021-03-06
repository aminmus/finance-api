# Migration `20200829222359-privately-and-publicly-traded-assets`

This migration has been generated by Amin Mushehid at 8/30/2020, 12:23:59 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."CustomAsset" DROP CONSTRAINT "CustomAsset_id_fkey"

ALTER TABLE "public"."HistoricalValue" DROP CONSTRAINT "HistoricalValue_assetId_fkey"

CREATE TABLE "public"."PubliclyTradedAsset" (
"id" integer  NOT NULL ,
"symbol" text   ,
"market" text   )

CREATE TABLE "public"."PrivatelyTradedAsset" (
"id" integer  NOT NULL )

ALTER TABLE "public"."Asset" DROP COLUMN "symbol";

CREATE UNIQUE INDEX "PubliclyTradedAsset.id_unique" ON "public"."PubliclyTradedAsset"("id")

CREATE UNIQUE INDEX "PrivatelyTradedAsset.id_unique" ON "public"."PrivatelyTradedAsset"("id")

ALTER TABLE "public"."PubliclyTradedAsset" ADD FOREIGN KEY ("id")REFERENCES "public"."Asset"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."PrivatelyTradedAsset" ADD FOREIGN KEY ("id")REFERENCES "public"."Asset"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."HistoricalValue" ADD FOREIGN KEY ("assetId")REFERENCES "public"."PrivatelyTradedAsset"("id") ON DELETE CASCADE ON UPDATE CASCADE

DROP TABLE "public"."CustomAsset";
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200829220940-change-name-from-ticker-to-symbol..20200829222359-privately-and-publicly-traded-assets
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
@@ -17,34 +17,41 @@
   portfolios Portfolio[]
 }
 model Asset {
-  id          Int           @id @default(autoincrement())
-  updatedAt   DateTime      @updatedAt @default(now())
-  createdAt   DateTime      @default(now())
-  name        String
-  symbol      String?
-  description String?
-  quantity    Int           @default(0)
-  Portfolio   Portfolio     @relation(fields: [portfolioId], references: [id])
-  portfolioId Int
-  Transaction Transaction[]
-  CustomAsset CustomAsset
+  id                   Int                  @id @default(autoincrement())
+  updatedAt            DateTime             @updatedAt @default(now())
+  createdAt            DateTime             @default(now())
+  name                 String
+  description          String?
+  quantity             Int                  @default(0)
+  portfolio            Portfolio            @relation(fields: [portfolioId], references: [id])
+  portfolioId          Int
+  transaction          Transaction[]
+  privatelyTradedAsset PrivatelyTradedAsset
+  publiclyTradedAsset  PubliclyTradedAsset
 }
-model CustomAsset {
+model PubliclyTradedAsset {
+  id     Int     @unique
+  asset  Asset   @relation(fields: [id], references: [id])
+  symbol String?
+  market String?
+}
+
+model PrivatelyTradedAsset {
   id               Int               @unique
   asset            Asset             @relation(fields: [id], references: [id])
   historicalValues HistoricalValue[]
 }
 model HistoricalValue {
-  id        Int         @id @default(autoincrement())
-  updatedAt DateTime    @updatedAt @default(now())
-  createdAt DateTime    @default(now())
-  date      DateTime    @default(now())
+  id        Int                  @id @default(autoincrement())
+  updatedAt DateTime             @updatedAt @default(now())
+  createdAt DateTime             @default(now())
+  date      DateTime             @default(now())
   unitPrice Int
-  asset     CustomAsset @relation(fields: [assetId], references: [id])
+  asset     PrivatelyTradedAsset @relation(fields: [assetId], references: [id])
   assetId   Int
 }
 model Portfolio {
```


