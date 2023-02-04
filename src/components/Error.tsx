interface ErrorMessageProps {
    error: string
}

export function Error({ error }: ErrorMessageProps) {
    return(
        <p className='text-center'>{ error }</p>
    )
}