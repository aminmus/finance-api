# Migration `20200909183050-rename-transaction-to-transaction-record`

This migration has been generated by Amin Mushehid at 9/9/2020, 8:30:50 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Transaction" DROP CONSTRAINT "Transaction_assetId_fkey"

CREATE TABLE "public"."TransactionRecord" (
"id" SERIAL,
"updatedAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"date" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"note" text   ,
"currency" text   NOT NULL ,
"unitPrice" integer   NOT NULL ,
"assetQuantity" integer   NOT NULL ,
"assetId" integer   NOT NULL ,
"transactionType" "TransactionType"  NOT NULL ,
PRIMARY KEY ("id")
)

ALTER TABLE "public"."TransactionRecord" ADD FOREIGN KEY ("assetId")REFERENCES "public"."Asset"("id") ON DELETE CASCADE ON UPDATE CASCADE

DROP TABLE "public"."Transaction"
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200909181444-correct-transaction-feature-config..20200909183050-rename-transaction-to-transaction-record
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator prisma_client {
   provider        = "prisma-client-js"
@@ -26,9 +26,9 @@
   description  String?
   quantity     Int           @default(0)
   portfolio    Portfolio     @relation(fields: [portfolioId], references: [id])
   portfolioId  Int
-  transaction  Transaction[]
+  transactions  TransactionRecord[]
   privateAsset PrivateAsset?
   publicAsset  PublicAsset?
 }
@@ -65,9 +65,9 @@
   owner       User     @relation(fields: [userId], references: [id])
   userId      Int
 }
-model Transaction {
+model TransactionRecord {
   id              Int             @id @default(autoincrement())
   updatedAt       DateTime        @updatedAt @default(now())
   createdAt       DateTime        @default(now())
   date            DateTime        @default(now())
```

