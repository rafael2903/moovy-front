import { StyledButton } from './styles'

export interface ButtonProps extends React.ComponentPropsWithoutRef<'input'> {
    value: string
    isLoading?: boolean
    destructive?: boolean
}

export const Button = ({ value, isLoading, ...rest }: ButtonProps) => {
    return (
        <StyledButton
            {...rest}
            value={isLoading ? 'Loading...' : value}
        ></StyledButton>
    )
}
