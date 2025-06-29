import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { axiosPublic } from '../utils/axiosPublic'

export default function useAllEvents() {
  const {data:events} = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
        const res = await axiosPublic.get("/event")
        // console.log(res)
        return res.data.data
    }
  })

  return {events}
}
