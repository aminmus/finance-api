# Migration `20200825022741-add-asset`

This migration has been generated by Amin Mushehid at 8/25/2020, 4:27:41 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Asset" (
"id" SERIAL,
"name" text  NOT NULL ,
"ticker" text   ,
"description" text   ,
"quantity" integer  NOT NULL DEFAULT 0,
PRIMARY KEY ("id"))
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200821165629-add-user..20200825022741-add-asset
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
@@ -18,4 +18,12 @@
   name  String
   email String @unique
   password String
 }
+
+model Asset {
+    id Int @id @default(autoincrement())
+    name String
+    ticker String?
+    description String?
+    quantity Int @default(0)
+}
```