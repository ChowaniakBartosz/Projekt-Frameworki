import { FC } from 'react'
import { Link } from 'react-router-dom'

// Components
import Image from 'components/common/Image/Image'

// Assets
import logo from 'assets/logo.png';

const Logo: FC = () => {
    return (
        <Link to="/">
            <Image src={logo}  alt="Company's logo" title="MyCompanyName" height={36} />
        </Link>
    )
}

export default Logo