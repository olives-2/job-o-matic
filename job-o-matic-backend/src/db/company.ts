import sql from './config.js'

export async function getAll() {
  const companies = await sql`
    select *
    from company
  `
  console.log(companies)
  return companies[0]
}

export async function getOneById(id: number) {
  const company = await sql`
    select *
    from company
    where id = ${id}
  `
  return company[0]
}
