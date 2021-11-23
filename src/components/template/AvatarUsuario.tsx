import Image from 'next/image'
import Link from 'next/link'
import useAuth from '../../data/hook/useAuth'

interface AvatarUsuarioProps {
    className?: string
}

export default function AvatarUsuario(props: AvatarUsuarioProps) {
    const { usuario } = useAuth()

    return (
        <Link href='/perfil' passHref>
            <Image
                src={usuario?.imagemUrl ?? '/images/avatar.png'}
                alt="Avatar do Usuário"
                className={`
                    h-10 w-10 rounded-full cursor-pointer
                    ${props.className}
                `}
            />
        </Link>
    )
}