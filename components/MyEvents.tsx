import { options } from '@/app/api/auth/[...nextauth]/options';
import React from 'react'
import { getServerSession } from 'next-auth'
import UserEventCards from '@/components/UserEventsCard';
import { getApiUrl } from '@/lib/utils';

const MyEvents = async () => {
    const session = await getServerSession(options);
    if (!session) {
        return (<div>Not logged in</div>)
    }
    try {
    let events = await fetch(`${getApiUrl()}/api/events/${session.user.id}`)
    let data = await events.json()
    if (!data) {
      return(<div>You have not joined any events</div>)
    }
    console.log(data);

    return (
        <div>
            <UserEventCards events={data} />
        </div>
    )
  } catch (error) {
    return(<div>An Error Occurred</div>)
  }
}

export default MyEvents