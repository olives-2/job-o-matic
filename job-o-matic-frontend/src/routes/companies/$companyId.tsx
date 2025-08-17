import { createFileRoute } from '@tanstack/react-router'
import companyClient from '@/client/companyClient'
import { useQuery } from '@tanstack/react-query';
import { type ICompany } from '@/types';

export const Route = createFileRoute('/companies/$companyId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { companyId } = Route.useParams();

  const query = useQuery<ICompany>({
    queryKey: ['todos'], queryFn: async () => {
      return await companyClient.getOneById(Number(companyId));
    }
  })

  console.log(query.data)
  return (
    <div className='p-2 m-2'>
      <h1 className='text-2xl font-black'>
        {query.data?.name}
      </h1>
    </div>
  )
}
