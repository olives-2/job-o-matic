# job-o-matic

## Stack

### Backend

- Bun + Elysia
- PostgreSQL

### Frontend

- React
- TanStack Router
- TanStack Query

## How to setup

### 1. Environment

In the `job-o-matic-backend` projects, add a `.env.[environment]` file with these variables:

```
POSTGRES_HOST=<Postgres host>
POSTGRES_USER=<Postgres user>
POSTGRES_PASSWORD=<Postgres password>
POSTGRES_PORT=<Postgres port>
POSTGRES_DATABASE=<Postgres DB to be used>
```

In the `job-o-matic-frontend` project, add a `.env` file with these variables:

```
VITE_JOB_O_MATIC_HOST=<URL of API host>
VITE_JOB_O_MATIC_PORT=<Port of API>
```

### 2. Docker Compose

Make sure you have [Docker Compose](https://docs.docker.com/compose/install/) installed on your machine.

Run `docker compose` in the project root (or do the equivalent steps with Docker Desktop).

### 3. Launch projects

First, install [Bun](https://bun.com/).

Then, in `job-o-matic-frontend` and `job-o-matic-backend`, lauch `bun run dev`

## Roadmap

- Create SQL generation script
- Design mockups
- Create all appropriate React components
- Add Docker images for frontend and backend (only the Postgres image is created)
- User CRUD
- Deploy to VPS 