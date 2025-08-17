import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/applications/$applicationId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/applications/$applicationId"!</div>
}
