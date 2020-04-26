import { parseISO, format } from 'date-fns'

export default function Date({
  dateString,
  format: fmt = 'd LLLL yyyy'
}: {
  dateString: string
  format?: string
}) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, fmt)}</time>
}
