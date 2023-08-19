import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'
import { getGuestList } from '../../src/sheetdb-client'

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  if (!event.body) {
    return {
      statusCode: 400,
    }
  }

  const { email } = JSON.parse(event.body)
  const guestList = await getGuestList()

  if (guestList.find((guest) => guest.email === email)) {
    return {
      statusCode: 200,
      // body: JSON.stringify({ family:  }),
    }
  } else {
    return {
      statusCode: 401,
    }
  }
}

export { handler }
