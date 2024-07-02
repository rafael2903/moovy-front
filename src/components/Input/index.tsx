import { UseFormRegister } from 'react-hook-form'
import { Container } from './styles'

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
    label?: string
    register?: UseFormRegister<any>
    required?: boolean
    name: string
}

export const Input = ({
    label,
    register,
    required,
    name,
    ...rest
}: InputProps) => {
    return (
        <Container>
            {label?.length && <label>{label}</label>}
            <input
                {...(register && register(name , { required }))}
                {...rest}
            />
        </Container>
    )
}
