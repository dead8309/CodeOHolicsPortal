'use client'
import React, { useState } from 'react'
import { Button } from '../../../components/ui/button'
import { useSession } from 'next-auth/react'
import { getApiUrl } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'

type EventLeaveButtonProps = {
    eventId: string
}

const EventLeaveButton = ({eventId}: EventLeaveButtonProps) => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const session = useSession()
    const handleClick = async () => {
        setLoading(true)
        const res = await fetch(`${getApiUrl()}/api/events/delete`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: session.data?.user.id,
                eventId: eventId
            })
        })
        setLoading(false)
        const data = await res.json()
        console.log(data)
        router.refresh()
    }

  return (
    <Button onClick={handleClick} variant='outline' className="w-full hover:bg-secondary">
        Leave
        {loading && <Loader2 className="ml-2 h-4 w-4 animate-spin" /> }    
    </Button>
  )
}

export default EventLeaveButton