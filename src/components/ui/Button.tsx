interface ButtonProps {
    label: String
    onClick?: () => void
    icon?: React.ReactNode
    
}

export const Button:React.FC<ButtonProps> = ({label, onClick}) => {
    return (
        <button className="w-full flex items-center justify-center px-4 py-2 h-9 leading-none text-white text-sm font-semibold rounded-md bg-gray-900 hover:bg-gray-800 hover:shadow-md dark:bg-white dark:text-gray-900 dark:hover:bg-white/90 text-nowrap cursor-pointer"
        onClick={onClick}>
        {label}
        </button>
    )
}

