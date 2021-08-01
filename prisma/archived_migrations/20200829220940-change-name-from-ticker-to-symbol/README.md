# Migration `20200829220940-change-name-from-ticker-to-symbol`

This migration has been generated by Amin Mushehid at 8/30/2020, 12:09:40 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Asset" DROP COLUMN "ticker",
ADD COLUMN "symbol" text   ;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200829214526-change-transaction-type-casing..20200829220940-change-name-from-ticker-to-symbol
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
@@ -21,9 +21,9 @@
   id          Int           @id @default(autoincrement())
   updatedAt   DateTime      @updatedAt @default(now())
   createdAt   DateTime      @default(now())
   name        String
-  ticker      String?
+  symbol      String?
   description String?
   quantity    Int           @default(0)
   Portfolio   Portfolio     @relation(fields: [portfolioId], references: [id])
   portfolioId Int
```

