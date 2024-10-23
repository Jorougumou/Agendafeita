interface props {
    col:string
    row:string
}

export default function Dia(props:any) {
    return (
        <div className={`border border-black col-start-${props.col} row-start-${props.row}`}>
            <p>dia</p>
        </div>
    );
}