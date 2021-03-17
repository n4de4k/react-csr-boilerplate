import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Box from 'components/basic/Box'
import { useFetch } from '../../hooks/useFetch'
import { addNumber, substractNumber } from '../../store/actions'

const HomePage = () => {
  const { data, loading } = useFetch('/todos/1')
  const dispatch = useDispatch()
  const { value } = useSelector((state) => state.test)

  const onAdd = useCallback(() => {
    dispatch(addNumber(2))
  }, [dispatch])

  const onSub = useCallback(() => {
    dispatch(substractNumber(3))
  }, [dispatch])

  return (
    <>
      <h1>Home Page</h1>

      <h5>Example calling custom component:</h5>
      <Box color="secondary" bg="primary" p={12}>
        Hello, World!
      </Box>

      <h5>Example using fetch hook</h5>
      {loading ? (
        'Loading API...'
      ) : (
        <>Fetch API Result: {JSON.stringify(data)}</>
      )}

      <h5>Example using store (using redux)</h5>
      <span>Current Number: {value}</span>
      <br />
      <button onClick={onAdd}>Add</button>
      <button onClick={onSub}>Substract</button>
    </>
  )
}

export default HomePage
