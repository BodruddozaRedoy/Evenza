import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export default function useAllEvents() {
  const {data:events} = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
        const res = await axios.get("events.json")
        // console.log(res)
        return res.data
    }
  })

  return {events}
}
