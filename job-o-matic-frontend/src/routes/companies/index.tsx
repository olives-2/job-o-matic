import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router'
import companyClient from '@/client/companyClient';

export const Route = createFileRoute('/companies/')({
  component: RouteComponent,
})

function RouteComponent() {

  const query = useQuery({
    queryKey: ['todos'], queryFn: companyClient.getAll
  })

  const companies = query.data;
  console.log(companies)

  return (
    <ul>
      {}
    </ul>
  )
}
