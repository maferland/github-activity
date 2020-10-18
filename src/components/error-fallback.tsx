import React from 'react'

interface ErrorFallbackProps {
  message?: string
}

const ErrorFallback = ({
  message = 'Something went wrong'
}: ErrorFallbackProps) => <div>{message}</div>

export { ErrorFallback, ErrorFallbackProps }
