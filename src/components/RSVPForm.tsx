import React from 'react'
import { rsvp } from '../sheetdb-client'
import { RSVP } from '../types'

const fieldRowClasses = 'mb-4'
const labelClasses =
  'block mb-2 text-sm font-medium text-gray-900'
const checkboxLabelClasses =
  'ml-2 text-sm font-medium text-gray-900'
const textInputClasses =
  'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
const checkboxClasses =
  'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2'
const checkboxContainerClasses = 'flex items-center'
const primaryBtnClasses =
  'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none'

export const RSVPForm = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [hasResponded, setHasResponded] = React.useState(false)
  const [responseError, setResponseError] = React.useState<string>()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    console.log(formData.get('isAttending'))
    const data: RSVP = {
      name: formData.get('name') as RSVP['name'],
      email: formData.get('email') as RSVP['email'],
      isAttending: formData.get('isAttending') === 'isAttending',
      dietaryRestrictions: formData.get(
        'dietaryRestrictions'
      ) as RSVP['dietaryRestrictions'],
    }
    console.log(data)

    setIsSubmitting(true)
    const res = await rsvp(data)
    if (res.created >= 1) {
      setHasResponded(true)
    } else {
      setResponseError('Sorry, something went wrong -- please try again or contact us')
    }
    setIsSubmitting(false)
  }

  if (hasResponded) {
    return <h3 className="text-green-500">Thank you, your response has been recorded!</h3>
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={fieldRowClasses}>
        <div>
          <label htmlFor="email-field" className={labelClasses}>
            Email
          </label>
          <input type="text" name="email" className={textInputClasses} />
        </div>
      </div>
      <div className={fieldRowClasses}>
        <div>
          <label htmlFor="name-field" className={labelClasses}>
            Name
          </label>
          <input
            type="text"
            id="name-field"
            name="name"
            className={textInputClasses}
          />
        </div>
      </div>
      <div className={fieldRowClasses}>
        <div className={checkboxContainerClasses}>
          <input
            type="checkbox"
            id="isAttending-field"
            name="isAttending"
            value="isAttending"
            className={checkboxClasses}
          />
          <label htmlFor="isAttending-field" className={checkboxLabelClasses}>
            Will you be attending the wedding?
          </label>
        </div>
      </div>
      <div className={fieldRowClasses}>
        <div>
          <label htmlFor="dietaryRestrictions-field" className={labelClasses}>
            Dietary restrictions?
          </label>
          <input
            type="text"
            id="dietaryRestrictions-field"
            name="dietaryRestrictions"
            className={textInputClasses}
          />
        </div>
      </div>
      <div className={fieldRowClasses}>
        <button type="submit" className={primaryBtnClasses} disabled={isSubmitting}>
          Submit
        </button>
      </div>
      {responseError && <div className="text-red-500">{responseError}</div>}
    </form>
  )
}
