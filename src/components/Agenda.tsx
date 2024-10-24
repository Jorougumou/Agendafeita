import { getMonth,getDaysInMonth,format } from "date-fns";
import { useEffect, useState } from "react";

export default function Agenda() {
    const [mesfoco,setMesfoco] = useState<number>()
    const [mesnome,setMesnome] = useState<string>()
    const listameses = [
        'Erro',
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
        ]    
        
    useEffect(() => {
        datehoje()
    })

    useEffect(() => {
        try {
            let indexmes:any = mesfoco
            setMesnome(listameses[indexmes])
        } catch (error) {
            
        }
    },[mesfoco])



    function datehoje() {
        let dataatual = new Date
        let dataformatada = format(dataatual,'dd/MM/yyyy') // retorna a data atual
        let mesatual = getMonth(dataatual) 
        setMesfoco(mesatual)
    }

    return (
        <div className="bg-orange-200 w-4/5 h-[600px] mt-8 mx-auto"> {/* Agenda */} 
            <div className="w-full flex justify-around items-center bg-blue-200 h-11"> 
              <button className="    h-full w-20 bg-slate-500">{'<'}</button>
              <h2 className=" w-20 mx-80  h-full bg-purple-400">{mesfoco}</h2>
              <button className=" h-full w-20 bg-slate-500">{'>'}</button>
            </div> 
            <div className="grid grid-rows-5 grid-cols-7">
            {/* <Dia/> */}
            <button onClick={datehoje} className="bg-yellow-300 w-20 h-20 hover:bg-yellow-400">testes</button>
            </div>

        </div>
    );
}