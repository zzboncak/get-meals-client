import React from 'react'

const GetMealsContext = React.createContext({
    locations: [],
    latlonArray: [40.7127753, -74.0059728],
    locationFetch: () => {},
    formatQueryParams: () => {},
    getLatlng: () => {},
    getGooglePlaceID: () => {},
    handleSubmitAddPlace: () => {}
})

export default GetMealsContext