'use client'
import React from 'react'
import { Button } from '../../../components/ui/button'
import { useSession } from 'next-auth/react'
import { getApiUrl } from '@/lib/utils'

type EventLeaveButtonProps = {
    eventId: string
}

const EventJoinButton = ({eventId}: EventLeaveButtonProps) => {
  return (
    <Button variant='outline' className="w-full hover:bg-secondary">Join Now</Button>
  )
}

export default EventJoinButton