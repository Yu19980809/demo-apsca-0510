import { useNavigate } from 'react-router-dom'

import logo from '@/assets/react.svg'

const Logo = () => {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate('/')}
      className="flex items-center md:gap-x-4 gap-x-2 cursor-pointer"
    >
      <img
        src={logo}
        alt="Logo"
        width={40}
        height={40}
        className="rounded-full"
      />

      <span className="font-semibold text-xl hover:text-muted-foreground">APCSA</span>
    </div>
  )
}

export default Logo
