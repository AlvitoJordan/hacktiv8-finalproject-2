import { Button } from "../atoms";

const ListLink = () => {
    return(
        <ul className="flex items-center">
            <Button type="btn-link" name="mx-10 font-semibold text-darkgray" route="/" content="Home" />
            <Button type="btn-link" name="mx-10 font-semibold text-darkgray" route="/cart" content="Cart" />
            <Button type="btn-link" name="ml-5 bg-primary hover:bg-secondary text-vanilla font-semibold py-2 px-8 border-2 border-transparent rounded-md shadow" route="/login" content="Login" />
        </ul>
    )
}

export default ListLink;