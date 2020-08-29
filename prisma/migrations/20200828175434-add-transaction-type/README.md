# Migration `20200828175434-add-transaction-type`

This migration has been generated by Amin Mushehid at 8/28/2020, 7:54:34 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TYPE "TransactionType" AS ENUM ('buy', 'sell');

ALTER TABLE "public"."Transaction" ADD COLUMN "TransactionType" "TransactionType" NOT NULL ;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200825204237-user-portfolio-asset-hard-relations..20200828175434-add-transaction-type
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
@@ -52,5 +52,11 @@
   totalPrice    Int
   assetQuantity Int
   asset         Asset    @relation(fields: [assetId], references: [id])
   assetId       Int
+  TransactionType TransactionType
 }
+
+enum TransactionType {
+  buy
+  sell
+}
```

