import { Button, Input } from 'components'
import { useUser } from 'hooks/useUser'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { api, notyf } from 'services'
import { Container, Title } from './styles'

type FormValues = {
    email: string
    password: string
}

export const LoginPage = () => {
    const { register, handleSubmit } = useForm<FormValues>()
    const [isLoading, setIsLoading] = useState(false)
    const { login } = useUser()
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        setIsLoading(true)
        api.post('/auth/login', data)
            .then((response) => {
                login(response.data)
                navigate('/')
            })
            .catch((error) => {
                console.error(error)
                notyf.error(
                    error.response?.data?.message.join?.('. ') ||
                        error.response?.data?.message ||
                        error.message
                )
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return (
        <Container>
            <Title>Sign In</Title>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label='Email'
                    register={register}
                    required
                    name='email'
                    placeholder=''
                    />
                <Input
                    label='Password'
                    register={register}
                    required
                    type='password'
                    name='password'
                    placeholder=''
                    minLength={8}
                    />
                <Button value='Sign In' isLoading={isLoading} />
            </form>
        </Container>
    )
}
