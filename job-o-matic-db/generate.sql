-- Adminer 5.3.0 PostgreSQL 17.5 dump

DROP TABLE IF EXISTS "application";
DROP SEQUENCE IF EXISTS "Application_id_seq";
CREATE SEQUENCE "Application_id_seq" INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."application" (
    "id" integer DEFAULT nextval('"Application_id_seq"') NOT NULL,
    "title" text NOT NULL,
    "description" text,
    "url" text,
    "company" integer NOT NULL,
    "user" integer NOT NULL,
    "status" integer,
    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
)
WITH (oids = false);


DROP TABLE IF EXISTS "application_status";
DROP SEQUENCE IF EXISTS "ApplicationStatus_id_seq";
CREATE SEQUENCE "ApplicationStatus_id_seq" INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."application_status" (
    "id" integer DEFAULT nextval('"ApplicationStatus_id_seq"') NOT NULL,
    "status" integer NOT NULL,
    CONSTRAINT "ApplicationStatus_pkey" PRIMARY KEY ("id")
)
WITH (oids = false);


DROP TABLE IF EXISTS "company";
DROP SEQUENCE IF EXISTS "Company_id_seq";
CREATE SEQUENCE "Company_id_seq" INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."company" (
    "id" integer DEFAULT nextval('"Company_id_seq"') NOT NULL,
    "name" text NOT NULL,
    "website" text,
    "domain" integer NOT NULL,
    "size" integer,
    "logo" text,
    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
)
WITH (oids = false);

DROP TABLE IF EXISTS "domain";
DROP SEQUENCE IF EXISTS "Domain_id_seq";
CREATE SEQUENCE "Domain_id_seq" INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."domain" (
    "id" integer DEFAULT nextval('"Domain_id_seq"') NOT NULL,
    "name" text NOT NULL,
    CONSTRAINT "Domain_pkey" PRIMARY KEY ("id")
)
WITH (oids = false);


DROP TABLE IF EXISTS "user";
DROP SEQUENCE IF EXISTS "User_id_seq";
CREATE SEQUENCE "User_id_seq" INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."user" (
    "id" integer DEFAULT nextval('"User_id_seq"') NOT NULL,
    "firstName" text NOT NULL,
    "lastName" text NOT NULL,
    "resume" text,
    "phoneNumber" integer,
    "email" time without time zone NOT NULL,
    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
)
WITH (oids = false);


ALTER TABLE ONLY "public"."application" ADD CONSTRAINT "Application_company_fkey" FOREIGN KEY (company) REFERENCES company(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;
ALTER TABLE ONLY "public"."application" ADD CONSTRAINT "Application_status_fkey" FOREIGN KEY (status) REFERENCES application_status(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;

ALTER TABLE ONLY "public"."company" ADD CONSTRAINT "Company_domain_fkey" FOREIGN KEY (domain) REFERENCES domain(id) ON UPDATE CASCADE ON DELETE RESTRICT NOT DEFERRABLE;

-- 2025-08-14 16:41:16 UTC
