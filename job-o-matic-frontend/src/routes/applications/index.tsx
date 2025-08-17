import Application from '@/components/Application'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/applications/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <ul>
      <Application></Application>
    </ul>
  )
}
