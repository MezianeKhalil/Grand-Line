import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { FaRegMoon } from "react-icons/fa"
import { MdOutlineWbSunny } from "react-icons/md"

export default function ThemeToggle () {
    const { toggleColorMode } = useColorMode()
    return (
        <IconButton
            alignSelf={"center"}
            size={"md"}
            backgroundColor={useColorModeValue("white", "gray.700")}
            variant={"ghost"}
            aria-label={"toggle Color Mode"}
            onClick={toggleColorMode}
            icon={useColorModeValue(<FaRegMoon />, <MdOutlineWbSunny />)}
        />
    )
}