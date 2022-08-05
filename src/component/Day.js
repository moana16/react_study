import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import Word from "./Word";
export default function Day() {
    
    const day=useParams().day; //주소창에있는 문자열을 받아옴
    const words = useFetch(`http://localhost:3001/words?day=${day}`)

    return <>
        <h2>Day {day}</h2>
        <table>
            <tbody>
                {words.map(word => (
                    <Word word={word} key={word.id}/>
                ))}
            </tbody>
        </table>
    </>
}