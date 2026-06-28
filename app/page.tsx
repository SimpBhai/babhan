import { redirect } from 'next/navigation'

export default function Page() {
  // Redirect to first chapter
  redirect('/chapter/1')
}
