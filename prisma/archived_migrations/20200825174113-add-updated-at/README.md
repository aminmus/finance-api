# Migration `20200825174113-add-updated-at`

This migration has been generated by Amin Mushehid at 8/25/2020, 7:41:13 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Asset" ADD COLUMN "updatedAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN "createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE "public"."User" ADD COLUMN "updatedAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN "createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200825022741-add-asset..20200825174113-add-updated-at
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
@@ -13,17 +13,21 @@
   population Float
 }
 model User {
-  id    Int    @id @default(autoincrement())
-  name  String
-  email String @unique
-  password String
+  id        Int      @id @default(autoincrement())
+  name      String
+  email     String   @unique
+  password  String
+  updatedAt DateTime @updatedAt @default(now())
+  createdAt DateTime @default(now())
 }
 model Asset {
-    id Int @id @default(autoincrement())
-    name String
-    ticker String?
-    description String?
-    quantity Int @default(0)
+  id          Int      @id @default(autoincrement())
+  name        String
+  ticker      String?
+  description String?
+  quantity    Int      @default(0)
+  updatedAt   DateTime @updatedAt @default(now())
+  createdAt   DateTime @default(now())
 }
```
