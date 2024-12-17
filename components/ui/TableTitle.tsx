interface TableTitleProps{
    text: string;
}

export default function TableTitle({text}:TableTitleProps){
    return(
        <td className="uppercase text-gray2">{text}</td>
    )
}