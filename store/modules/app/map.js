import * as types from '@/store/mutationTypes'

function matchUserLocationWithFilmLocation (userCurrentLocation, availableCities) {
  let currentLocation = null
  const userLocation = userCurrentLocation.toLowerCase()

  availableCities.forEach(location => {
    if (userLocation.includes(location.name)) {
      currentLocation = location
    }
  })

  return currentLocation
}

const state = () => ({
  location: null,
  cinemas: null,
  style: {
    disableDefaultUI: true,
    scaleControl: true,
    zoomControl: true,
    zoom: 12,
    // config styles
    styles: [
      {
        featureType: 'all',
        elementType: 'labels.text.fill',
        stylers: [
          {
            saturation: 36
          },
          {
            color: '#000000'
          },
          {
            lightness: 40
          }
        ]
      },
      {
        featureType: 'all',
        elementType: 'labels.text.stroke',
        stylers: [
          {
            visibility: 'on'
          },
          {
            color: '#000000'
          },
          {
            lightness: 16
          }
        ]
      },
      {
        featureType: 'all',
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'administrative',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#000000'
          },
          {
            lightness: 20
          }
        ]
      },
      {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#000000'
          },
          {
            lightness: 17
          },
          {
            weight: 1.2
          }
        ]
      },
      {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [
          {
            color: '#000000'
          },
          {
            lightness: 20
          }
        ]
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [
          {
            color: '#000000'
          },
          {
            lightness: 21
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#000000'
          },
          {
            lightness: 17
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#000000'
          },
          {
            lightness: 29
          },
          {
            weight: 0.2
          }
        ]
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [
          {
            color: '#000000'
          },
          {
            lightness: 18
          }
        ]
      },
      {
        featureType: 'road.local',
        elementType: 'geometry',
        stylers: [
          {
            color: '#000000'
          },
          {
            lightness: 16
          }
        ]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [
          {
            color: '#000000'
          },
          {
            lightness: 19
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          {
            color: '#000000'
          },
          {
            lightness: 17
          }
        ]
      }
    ]
  }
})

const getters = {}

const mutations = {
  [types.SELECT_LOCATION] (state, location) {
    state.location = location
  }
}

const actions = {
  selectLocation ({ commit, dispatch }, location) {
    commit(types.SELECT_LOCATION, location)
    dispatch('filmShowings/saveShowingsForLocation', location.name, { root: true })
    localStorage.setItem('location', JSON.stringify(location))
  },

  async getGeolocation ({ commit, rootState, dispatch }, filmLocations) {
    try {
      this.$axios.setHeader('Authorization', null)

      let userLocation
      const locationFromLocalStorage = process.browser ? localStorage.getItem('location') : null

      if (locationFromLocalStorage) {
        userLocation = matchUserLocationWithFilmLocation(JSON.parse(locationFromLocalStorage).name, filmLocations)
      } else {
        const geoLocation = await this.$axios.$get('https://geoip-db.com/json/')

        userLocation = geoLocation ? matchUserLocationWithFilmLocation(geoLocation.city, filmLocations) : null
      }

      if (userLocation) {
        commit(types.SELECT_LOCATION, userLocation)
        dispatch('filmShowings/saveShowingsForLocation', userLocation.name, { root: true })
      }

      dispatch('ui/hideLoader', {}, { root: true })
    } catch (error) {
      console.log(error, error)
      dispatch('ui/hideLoader', {}, { root: true })
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
