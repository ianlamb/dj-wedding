import { RSVP } from './types'

const BASE_URL = 'https://sheetdb.io/api/v1/o0ue8edtnpfi2'

type RSVPResponse = { created: number }
type GuestListResponse = [
  {
    name: string;
    email: string;
  }
]

export function getGuestList(): Promise<GuestListResponse> {
  const sheetName = 'Guest List'
  return fetch(`${BASE_URL}?sheet=${sheetName}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      return data as GuestListResponse
    })
}

export function rsvp(data: RSVP): Promise<RSVPResponse> {
  const sheetName = 'RSVPs'
  return fetch(`${BASE_URL}?sheet=${sheetName}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: [
        {
          ...data,
          isAttending: data.isAttending ? 'Yes' : 'No',
          respondedAt: 'DATETIME',
        },
      ],
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      return data as RSVPResponse
    })
}
