import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

// TODO: REPLACE HERO OFC
function App() {
  return (
    <div className="min-h-screen bg-gray-800">
      <div className='flex justify-center items-center flex-col'>
          <h1>Track your applications without Excel!</h1>
          <h2>Job O'Matic allows you to track all of your job applications</h2>
      </div>
    </div>
  )
}
