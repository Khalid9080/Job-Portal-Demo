import { useContext } from "react";
import AuthContext from "../Auth/Context/AuthContext";

const CustomHook = () => {
    const context = useContext(AuthContext);
    return context;
}
export default CustomHook;