import { Button } from "@mui/base";

const Btn = (props) => {
 return <Button className={props.className}>{props.children}</Button>
}

export default Btn;