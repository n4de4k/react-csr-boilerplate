import { useCallback, useMemo, useState } from 'react'

import queryString from 'query-string'

import { API_BASE_URL, METHOD_GET } from 'constant/api'
import { METHOD_POST } from '../constant/api'

const useFetch = (endpoint, options = {}) => {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

  const doFetch = useCallback(() => {
    setLoading(true)

    const fetchOptions = {
      method: options.method || 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }

    let url = `${API_BASE_URL}${endpoint}`
    if (options.data) {
      if (fetchOptions.method === METHOD_GET) {
        url += `?${queryString(options.data)}`
      } else if (fetchOptions.method === METHOD_POST) {
        fetchOptions.body = JSON.stringify(options.data)
      }
    }

    return new Promise((resolve, reject) => {
      fetch(url, fetchOptions)
        .then((rawResponse) => rawResponse.json())
        .then((res) => {
          setData(res)
          resolve(res)
        })
        .catch((err) => {
          setError(err)
          reject(err)
        })
        .finally(() => {
          setLoading(false)
        })
    })
  }, [endpoint, options.data, options.method])

  useMemo(() => {
    if (!options.preventAutoFetch) {
      doFetch()
    }
  }, [options.preventAutoFetch, doFetch])

  return {
    data,
    error,
    loading,
    doFetch,
  }
}

export { useFetch }
